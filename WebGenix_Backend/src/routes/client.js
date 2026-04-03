// routes/client.js
import express from 'express';
import Purchase from '../models/purchases.js';
import Transaction from '../models/transactions.js';
import ServicePlan from '../models/serviceplans.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// Get user's active services (purchases)
router.get('/services', verifyToken, async (req, res) => {
  try {
    const userId = req.user.sub;
    const purchases = await Purchase.find({ userId, status: 'active' }).populate('servicePlanId');
    const services = purchases.map(p => ({
      id: p._id,
      serviceName: p.servicePlanId.name,
      planName: p.servicePlanId.name,
      status: p.status,
      startDate: p.startDate,
      nextDueDate: p.nextDueDate,
      price: `₹${(p.servicePlanId.pricePaise / 100).toFixed(0)}`,
      period: p.servicePlanId.period
    }));
    res.json({ services });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Get transaction history
router.get('/transactions', verifyToken, async (req, res) => {
  try {
    const userId = req.user.sub;
    const { limit = 20, offset = 0 } = req.query;
    const transactions = await Transaction.find({ userId, status: 'success' })
      .sort({ createdAt: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit))
      .populate('purchaseId');
    
    const formatted = transactions.map(t => ({
      id: t._id,
      serviceName: t.purchaseId?.servicePlanId?.name || 'Unknown',
      planName: t.purchaseId?.servicePlanId?.name || '',
      amount: `₹${(t.amountPaise / 100).toFixed(0)}`,
      status: t.status,
      date: t.createdAt,
      paymentMethod: t.paymentMethod
    }));
    const total = await Transaction.countDocuments({ userId, status: 'success' });
    res.json({ transactions: formatted, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

// Dashboard stats (overview)
router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    const userId = req.user.sub;
    const services = await Purchase.find({ userId });
    const invoices = await Transaction.find({ userId });
    // tickets can be added later
    res.json({ services, invoices, tickets: [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Dashboard fetch failed' });
  }
});

export default router;