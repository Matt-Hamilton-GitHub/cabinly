
import mongoose from "mongoose";

const { Schema } = mongoose;


const GuideSchema = new Schema({
  name:        { type: String, required: true },
  initials:    { type: String, required: true },
  role:        { type: String, required: true },
  bio:         { type: String, required: true },
  yrsExp:      { type: Number, required: true },
  rating:      { type: Number, default: 5.0 },
  reviewCount: { type: Number, default: 0 },
  tags:        [{ type: String }],
  imgUrl:      { type: String, default: "" },
})

export default mongoose.models.Guide || mongoose.model('Guide', GuideSchema, 'Guides')
