// app/lib/mdb-models/Guide.ts
import { Schema, model, models } from "mongoose"

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

const Guide = models.Guide || model("Guide", GuideSchema)

export default Guide