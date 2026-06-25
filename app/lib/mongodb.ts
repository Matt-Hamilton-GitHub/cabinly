import mongoose from 'mongoose'
import { watchExpiredBookings } from './bookingChangeStream'

const MONGO_CABINLY = `mongodb+srv://${process.env.ADMIN_NAME}:${process.env.MATT_PASSWORD}@cabinly-cluster.zwgjf.mongodb.net/?retryWrites=true&w=majority&appName=CABINLY-CLUSTER`

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectMDB = async () => {
  try {
    if (cached.conn) return cached.conn

    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGO_CABINLY)
    }

    cached.conn = await cached.promise
    console.log('MongoDB Connected successfully...')

    // enable pre-images on Bookings collection (run once, safe to call every time)
    try {
      await mongoose.connection.db?.command({
        collMod: 'Bookings',
        changeStreamPreAndPostImages: { enabled: true },
      })
    } catch {
      // already enabled or not supported — safe to ignore
    }

    // start watching for expired bookings
    await watchExpiredBookings()

    return cached.conn

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}