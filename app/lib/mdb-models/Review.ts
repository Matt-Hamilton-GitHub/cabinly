
import mongoose from "mongoose";

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  authorName:     { type: String, required: true },
  authorInitials: { type: String, required: true },
  rating:         { type: Number, required: true, min: 1, max: 5 },
  date:           { type: String, required: true },
  body:           { type: String, required: true },
}, {
  timestamps: true,
})

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema, 'Reviews')