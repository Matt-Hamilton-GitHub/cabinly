
import mongoose from 'mongoose'

const ReservationSheme = new mongoose.Schema({
    cabinID: {type: String, required: true},
    userID: {type: String, required: true},
    range: {
        from: {type: String, default: null},
        to: {type: String, default: null}
    },
    expires: {type: Date, default: () => new Date().now() + 3 * 60 * 60 * 1000 },
    confirmed: {type: Boolean, default: false},
    paid: {type: Boolean, default: false},
}, {timestamps: true})

export default  mongoose.models.Reservation || mongoose.model('Reservation', ReservationSheme, 'Reservations')