// routes/webhook.js
import express from 'express';
import crypto from 'crypto';
import Razorpay from 'razorpay';
import Purchase from '../models/purchases.js';
import Transaction from '../models/transactions.js';
import ServicePlan from '../models/serviceplans.js';

const router = express.Router();

router.post('/razorpay', express.raw({ type: 'application/json' }), async (req, res) => {
  console.log('🔔 Webhook hit!');
  console.log('Headers:', req.headers['x-razorpay-signature']);
  console.log('Body type:', typeof req.body, Buffer.isBuffer(req.body));
  console.log('Body length:', req.body?.length);

  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const signature = req.headers['x-razorpay-signature'];
    const expected = crypto.createHmac('sha256', secret).update(req.body).digest('hex');
    if (signature !== expected) {
      return res.status(400).send('Invalid signature');
    }

    const event = JSON.parse(req.body);
    if (event.event !== 'payment.captured') {
      return res.json({ status: 'ignored' });
    }

    const payment = event.payload.payment.entity;
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET
    });
    const order = await razorpay.orders.fetch(payment.order_id);
    const notes = order.notes; // { userId, serviceId, planId }
    console.log('📦 Webhook notes:', notes); // ADD THIS
    console.log('🔍 Looking for purchases with userId:', notes.userId);


    if (!notes.userId || !notes.serviceId || !notes.planId) {
      console.error('Missing notes', notes);
      return res.status(400).send('Missing user/service/plan');
    }

    // 1. Idempotent transaction (upsert)
    const transaction = await Transaction.findOneAndUpdate(
      { gatewayTransactionId: payment.id },
      {
        $setOnInsert: {
          gatewayOrderId: payment.order_id,
          userId: notes.userId,
          amountPaise: payment.amount,
          currency: payment.currency,
          status: 'success',
          paymentMethod: payment.method,
          metadata: payment,
          createdAt: new Date()
        }
      },
      { upsert: true, new: true }
    );

    // If already processed, skip purchase creation
    if (transaction.purchaseId) {
      return res.json({ status: 'already processed' });
    }

    // 2. Find or create ServicePlan
    let servicePlan = await ServicePlan.findOne({
  serviceId: notes.serviceId,
  planId: notes.planId
});
if (!servicePlan) {
  return res.status(400).send('Plan not found in database'); // 🔴 STOPS HERE
}


    // 3. Create or update Purchase
    let purchase = await Purchase.findOne({
      userId: notes.userId,
      servicePlanId: servicePlan._id,
      status: 'active'
    });

    if (!purchase) {
      purchase = new Purchase({
        userId: notes.userId,
        servicePlanId: servicePlan._id,
        status: 'active',
        startDate: new Date(),
        nextDueDate: calculateNextDueDate(new Date(), servicePlan.period)
      });
      await purchase.save();
    } else {
      // Extend subscription
      purchase.nextDueDate = calculateNextDueDate(purchase.nextDueDate, servicePlan.period);
      await purchase.save();
    }

    // 4. Link transaction to purchase
    transaction.purchaseId = purchase._id;
    await transaction.save();

    console.log(`Purchase created for user ${notes.userId}, plan ${notes.planId}`);
    res.json({ status: 'success' });
  } catch (err) {
    console.error('Webhook error:', err);
    res.status(500).send('Webhook failed');
  }
});

function calculateNextDueDate(fromDate, period) {
  const date = new Date(fromDate);
  if (period === 'month') date.setMonth(date.getMonth() + 1);
  else if (period === 'year') date.setFullYear(date.getFullYear() + 1);
  else if (period === '2 years') date.setFullYear(date.getFullYear() + 2);
  else date.setMonth(date.getMonth() + 1); // default month
  return date;
}

export default router;