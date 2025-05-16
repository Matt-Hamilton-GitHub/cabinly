import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema(
  {
    cabinID: { type: String, required: true, index: true }, // Index for fast cabin-based queries
    userID: { type: String, required: true, index: true },  // Index for user-based queries
    name: { type: String, required: true },
    range: {
      from: { type: Date, required: true },
      to: { type: Date, required: true },
    },
    expires: {
      type: Date,
      default: () => new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours from now
    },
    confirmed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Optional compound index for advanced queries
ReservationSchema.index({ cabinID: 1, 'range.from': 1 });

export default mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema, 'Reservations');
