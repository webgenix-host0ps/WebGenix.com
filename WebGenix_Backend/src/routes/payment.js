import express from "express";
import Razorpay from "razorpay";

const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {
    console.log("KEY:", process.env.RAZORPAY_KEY); // debug

    const razorpay = new Razorpay({   // 🔥 moved inside
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const { amount, serviceId, planId } = req.body;

    const order = await razorpay.orders.create({
  amount: amount * 100,
  currency: "INR",
  receipt: "receipt_" + Date.now(),

  notes: {
    serviceId: serviceId || "default-service",
    planId: planId || "default-plan",
    userId: "test-user",
  },
});

    res.json(order);
  } catch (err) {
    console.error("Payment error:", err);
    res.status(500).send("Error creating order");
  }
});

export default router;