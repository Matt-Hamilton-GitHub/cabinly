// app/lib/mdb-models/Review.ts
import { Schema, model, models, Types } from "mongoose"

const ReviewSchema = new Schema({
  authorName:     { type: String, required: true },
  authorInitials: { type: String, required: true },
  rating:         { type: Number, required: true, min: 1, max: 5 },
  date:           { type: String, required: true },
  body:           { type: String, required: true },
  placeRef:       { type: Types.ObjectId, ref: "Place", required: true },
}, {
  timestamps: true,
})

const Review = models.Review || model("Review", ReviewSchema)

export default Review
