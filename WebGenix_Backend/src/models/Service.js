import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Keycloak ID

  serviceId: { type: String, required: true }, // vps, ssl, etc.
  planId: { type: String, required: true },

  status: {
    type: String,
    enum: ["active", "pending", "suspended"],
    default: "active",
  },

  paymentId: String,
  orderId: String,

  price: Number,

  createdAt: {
    type: Date,
    default: Date.now,
  },

  nextDueDate: Date,
});

export default mongoose.model("Service", serviceSchema);