import { NextResponse } from 'next/server'
import { connectMDB } from '@/app/lib/mongodb'
import Booking from '@/app/lib/mdb-models/Booking'
import User from '@/app/lib/mdb-models/User'
import Place from '@/app/lib/mdb-models/Place'
import Cabin from '@/app/lib/mdb-models/Cabin'
import Activity from '@/app/lib/mdb-models/Activity'
import { getTier } from '@/app/lib/points'

// ─── GET all bookings for a user ─────────────────────────────────
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userID = searchParams.get('userID')

  if (!userID) {
    return NextResponse.json(
      { error: 'Missing required query param: userID' },
      { status: 400 }
    )
  }

  try {
    await connectMDB()

    const bookings = await Booking.find({ userRef: userID })
      .populate({ path: 'placeRef',    model: Place })
      .populate({ path: 'cabinRef',    model: Cabin })
      .populate({ path: 'activities',  model: Activity })
      .sort({ createdAt: -1 })

    return NextResponse.json({ data: bookings }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}

// ─── POST create a new booking ────────────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { userRef, placeRef, cabinRef, activities, from, to,
            nights, guests, totalPaid } = body

    // validate required fields
    if (!userRef || !placeRef || !cabinRef || !from || !to ||
        !nights || !guests || !totalPaid) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    await connectMDB()

    // calculate points earned
    const cabinPoints  = nights * 50               // 50 pts per night
    const activityPoints = (activities?.length ?? 0) * 75  // 75 pts per activity
    const bookingPoints  = 100                      // 100 pts per booking
    const bonusPoints    = (activities?.length ?? 0) >= 3 ? 250 : 0 // 3+ activities bonus
    const pointsEarned   = cabinPoints + activityPoints + bookingPoints + bonusPoints

    // create booking
    const newBooking = await Booking.create({
      userRef,
      placeRef,
      cabinRef,
      activities: activities ?? [],
      from,
      to,
      nights,
      guests,
      totalPaid,
      pointsEarned,
      status: 'upcoming',
    })

    // update user points
    await User.findByIdAndUpdate(userRef, {
      $inc: { points: pointsEarned },
    })

    // update tier based on new points total
    const updatedUser = await User.findById(userRef)
    if (updatedUser) {
      const newTier = getTier(updatedUser.points)
      if (newTier !== updatedUser.tier) {
        await User.findByIdAndUpdate(userRef, { tier: newTier })
      }
    }

    return NextResponse.json(
      { data: newBooking, pointsEarned },
      { status: 201 }
    )

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}