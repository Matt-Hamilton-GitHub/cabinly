// app/lib/bookingChangeStream.ts
import Booking from './mdb-models/Booking'
import Cabin from './mdb-models/Cabin'
import Activity from './mdb-models/Activity'
import User from './mdb-models/User'
import { connectMDB } from './mongodb'

console.log('booking watcher activated')
let isWatching = false

export const watchExpiredBookings = async () => {
  if (isWatching) return   // prevent duplicate watchers in dev hot reload
  isWatching = true

  await connectMDB()

  // need fullDocumentBeforeChange to know what was deleted
  const changeStream = Booking.watch(
    [{ $match: { operationType: 'delete' } }],
    { fullDocumentBeforeChange: 'whenAvailable' }
  )

  changeStream.on('change', async (change) => {
    const booking = change.fullDocumentBeforeChange

    // only restore if it was a pending booking (TTL expiry)
    // confirmed bookings (upcoming/completed) have expiresAt: null
    // so they won't be deleted by TTL and this won't fire for them
    if (!booking || booking.status !== 'pending') return

    console.log(`Booking ${booking._id} expired — restoring availability`)

    try {
      // restore cabin spot
      await Cabin.findByIdAndUpdate(
        booking.cabinRef,
        { $inc: { spotsLeft: 1 } }
      )

      // restore activity spots
      if (booking.activities?.length > 0) {
        await Activity.updateMany(
          { _id: { $in: booking.activities } },
          { $inc: { spotsLeft: 1 } }
        )
      }


      console.log(`✅ Availability restored for booking ${booking._id}`)
    } catch (err) {
      console.error('Failed to restore availability:', err)
    }
  })

  changeStream.on('error', (err) => {
    console.error('Change stream error:', err)
    isWatching = false  // allow restart on next request
  })
}