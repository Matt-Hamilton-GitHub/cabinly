import mongoose from 'mongoose'

const CabinSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  address: {
    city: { type: String, required: true },
    state: { type: String },
    zip_code: { type: String },
    country: { type: String, required: true }
  },
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
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  occupancy: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: { type: Array }
}, { timestamps: true });


CabinSchema.index({ coordinates: '2dsphere' });

export default mongoose.models.Cabin || mongoose.model('Cabin', CabinSchema, 'Cabins');
