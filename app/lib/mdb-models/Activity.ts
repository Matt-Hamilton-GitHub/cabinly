import mongoose, { Schema } from 'mongoose'
import { ACTIVITY_VARIATIONS } from '../types';

const ActivitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  label:{type: String, enum: ACTIVITY_VARIATIONS, required:true},
  description: { type: String, required: true },
  price: {type: String, required: true},
  duration: {type: String, required: true},
  difficulty: {type: String, required: true},
  maxPeople: {type: Number, required: true},
  spotsLeft: {type: Number, required: true},
  gearIncluded: {type: Boolean, required: true},
  placeRef:{type: Schema.Types.ObjectId, ref: 'Place'}
}, { timestamps: true });

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema, 'Activities');
