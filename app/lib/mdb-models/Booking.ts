import mongoose, { Schema } from 'mongoose'

const BookingSchema = new Schema(
  {
    userRef: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    placeRef: {
      type: Schema.Types.ObjectId,
      ref: 'Place',
      required: true,
    },
    cabinRef: {
      type: Schema.Types.ObjectId,
      ref: 'Cabin',
      required: true,
    },
    activities: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Activity',
      },
    ],
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    guests: {
      type: Number,
      required: true,
    },
    totalPaid: {
      type: Number,
      required: true,
    },
    pointsEarned: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ['pending', 'upcoming', 'completed', 'cancelled'],
      default: 'pending',
    },
    expiresAt : {
      type: Date,
      default: () => new Date(Date.now() + 24 * 60 * 60 * 1000)
    },
  },
  {
    timestamps: true,
  }
)

BookingSchema.index({expiresAt: 1},{expireAfterSeconds:0})

export default mongoose.models.Booking ||
  mongoose.model('Booking', BookingSchema, 'Bookings')