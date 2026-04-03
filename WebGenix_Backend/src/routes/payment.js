// routes/payment.js
import express from "express";
import Razorpay from "razorpay";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/create-order", verifyToken, async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const { amount, serviceId, planId } = req.body;
    const userId = req.user.sub; // Keycloak unique ID

    const order = await razorpay.orders.create({
      amount: amount, // already in paise from frontend
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: {
        serviceId: serviceId || "unknown",
        planId: planId || "unknown",
        userId: userId,
      },
    });

    res.json(order);
  } catch (err) {
    console.error("Order Error:", err);
    res.status(500).send("Error creating order");
  }
});

export default router;