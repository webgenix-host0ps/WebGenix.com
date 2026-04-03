import mongoose from 'mongoose';
const purchaseSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  servicePlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'ServicePlan', required: true },
  status: { type: String, enum: ['active', 'suspended', 'expired', 'cancelled'], default: 'active' },
  startDate: { type: Date, default: Date.now },
  nextDueDate: { type: Date, required: true }
});
export default mongoose.model('Purchase', purchaseSchema);