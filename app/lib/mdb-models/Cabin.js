import mongoose from 'mongoose'
import { truncate } from 'node:fs/promises'

const CabinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: {type: String, required: truncate},
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number], 
      required: true
    }
  },
  rating: { type: Number, default: 5.0 },
  pricePerNight: { type: Number, required: true },
  discount: { type: Number, default: 0.0 },
  maxGuests: { type: Number, required: true },
  description: { type: String, required: true },
  amenities: [{type: String}],
  spotsLeft: [{type: Number, required: true}],
  imageUrl: { type: String, required: true },
  tags: [{ type: String }]
}, { timestamps: true })

CabinSchema.index({ coordinates: '2dsphere' })

export default mongoose.models.Cabin || mongoose.model('Cabin', CabinSchema, 'Cabins')
