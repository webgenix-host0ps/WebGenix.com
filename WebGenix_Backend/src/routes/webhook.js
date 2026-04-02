import express from "express";
import crypto from "crypto";
import Service from "../models/Service.js";

const router = express.Router();

router.post(
  "/razorpay",
  express.raw({ type: "application/json" }),
  async (req, res) => {   // ✅ make async
    try {
      const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
      const signature = req.headers["x-razorpay-signature"];

      const expectedSignature = crypto
        .createHmac("sha256", secret)
        .update(req.body)
        .digest("hex");

      if (signature !== expectedSignature) {
        console.log("Invalid signature ❌");
        return res.status(400).send("Invalid signature");
      }

      const event = JSON.parse(req.body);

      console.log("Webhook event:", event.event);

      if (event.event === "payment.captured") {
        const payment = event.payload.payment.entity;

        const notes = payment.notes || {};

        const newService = await Service.create({
          userId: notes.userId || "test-user",
          serviceId: notes.serviceId,
          planId: notes.planId,

          paymentId: payment.id,
          orderId: payment.order_id,

          price: payment.amount / 100, // ✅ fix paise → INR

          status: "active",

          nextDueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });

        console.log("Service created:", newService._id);
        console.log("FULL PAYMENT OBJECT:", payment);
      }

      res.json({ status: "ok" });

    } catch (err) {
      console.error("Webhook error:", err);
      res.status(500).send("Webhook failed");
    }
  }
);

export default router;