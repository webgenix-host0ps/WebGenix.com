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

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.error("Mongo Error ❌", err));


const app = express();

app.use(cors());
// app.use(express.json());
app.use((req, res, next) => {
  if (req.originalUrl === "/api/webhook/razorpay") {
    next(); // skip json parsing
  } else {
    express.json()(req, res, next);
  }
});

app.use("/api/tickets", ticketRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/webhook", webhookRoutes);
app.use("/api/client", clientRoutes);

app.get("/test-zammad", async (req, res) => {
  try {
    const response = await fetch(`${process.env.ZAMMAD_URL}/users`, {
      headers: {
        Authorization: `Token token=${process.env.ZAMMAD_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    res.json({
      success: true,
      message: "Zammad connected",
      data
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});


app.listen(process.env.PORT, () => {
  console.log("ZAMMAD_URL:", process.env.ZAMMAD_URL);
  console.log("Backend running on port " + process.env.PORT);
});
