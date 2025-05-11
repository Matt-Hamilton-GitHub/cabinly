import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema(
  {
    cabinID: { type: String, required: true },
    userID: { type: String, required: true },
    range: {
      from: { type: Date, required: true },  
      to: { type: Date, required: true },    
    },
    expires: { 
      type: Date, 
      default: () => new Date(Date.now() + 3 * 60 * 60 * 1000), 
    },
    confirmed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Reservation || mongoose.model('Reservation', ReservationSchema, 'Reservations');
