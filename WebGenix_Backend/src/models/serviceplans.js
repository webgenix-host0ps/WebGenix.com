// models/ServicePlan.js
import mongoose from 'mongoose';

const servicePlanSchema = new mongoose.Schema({
  serviceId: { type: String, required: true },   // e.g. "business-email"
  planId: { type: String, required: true },      // e.g. "email-starter"
  name: { type: String, required: true },
  pricePaise: { type: Number, required: true },  // 29900
  period: { type: String, enum: ['month', 'year', '2 years'], required: true },
  features: [String],
  category: String,
  isActive: { type: Boolean, default: true }
});

servicePlanSchema.index({ serviceId: 1, planId: 1 }, { unique: true });
export default mongoose.model('ServicePlan', servicePlanSchema);