import mongoose from 'mongoose';
const transactionSchema = new mongoose.Schema({
  gatewayTransactionId: { type: String, required: true, unique: true },
  gatewayOrderId: { type: String, required: true },
  purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase' },
  userId: { type: String, required: true, index: true },
  amountPaise: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  status: { type: String, enum: ['pending', 'success', 'failed', 'refunded'], default: 'pending' },
  paymentMethod: String,
  metadata: mongoose.Schema.Types.Mixed
}, { timestamps: true });
export default mongoose.model('Transaction', transactionSchema);