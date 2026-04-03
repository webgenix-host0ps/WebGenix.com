// app.js
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import ticketRoutes from "./routes/ticketRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentRoutes from "./routes/payment.js";
import webhookRoutes from "./routes/webhook.js";
import clientRoutes from "./routes/client.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("Mongo Error ❌", err));

const app = express();

// ─── CORS ────────────────────────────────────────────────────────────────────
app.use(cors());

// ─── STEP 1: Webhook FIRST — needs raw Buffer body for HMAC signature check ──
// Must come before express.json() — once json() runs it consumes the body
// and Buffer.isBuffer(req.body) becomes false, breaking the signature verify.
app.use("/api/webhook", webhookRoutes);

// ─── STEP 2: JSON body parser for everything else ────────────────────────────
app.use(express.json());

// ─── STEP 3: All other routes (body is now parsed JSON) ──────────────────────
app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/client", clientRoutes);

// ─── Debug / health routes ───────────────────────────────────────────────────
app.get("/test-zammad", async (req, res) => {
  try {
    const response = await fetch(`${process.env.ZAMMAD_URL}/users`, {
      headers: {
        Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    res.json({ success: true, message: "Zammad connected", data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Backend running on port " + process.env.PORT);
});