import { NextResponse } from 'next/server'
import { connectMDB } from '@/app/lib/mongodb'
import Booking from '@/app/lib/mdb-models/Booking'
import User from '@/app/lib/mdb-models/User'
import Place from '@/app/lib/mdb-models/Place'
import Cabin from '@/app/lib/mdb-models/Cabin'
import Activity from '@/app/lib/mdb-models/Activity'
import { getTier } from '@/app/lib/points'

// ─── GET single booking ───────────────────────────────────────────
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ bookingID: string }> }
) {
  const { bookingID } = await params

  try {
    await connectMDB()

    const booking = await Booking.findById(bookingID)
      .populate({ path: 'placeRef',   model: Place })
      .populate({ path: 'cabinRef',   model: Cabin })
      .populate({ path: 'activities', model: Activity })

    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data: booking }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}

// ─── PATCH update booking status ──────────────────────────────────
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ bookingID: string }> }
) {
  const { bookingID } = await params

  try {
    const body = await req.json()
    const { status } = body

    if (!status || !['upcoming', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json(
        { error: 'Invalid status value' },
        { status: 400 }
      )
    }

    await connectMDB()

    const booking = await Booking.findById(bookingID)
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // if cancelling — deduct points that were earned
    if (status === 'cancelled' && booking.status === 'upcoming') {
      await User.findByIdAndUpdate(booking.userRef, {
        $inc: { points: -booking.pointsEarned },
      })

      // recalculate tier
      const updatedUser = await User.findById(booking.userRef)
      if (updatedUser) {
        const newTier = getTier(updatedUser.points)
        if (newTier !== updatedUser.tier) {
          await User.findByIdAndUpdate(booking.userRef, { tier: newTier })
        }
      }
    }

    // if completing — award completion bonus points
    if (status === 'completed' && booking.status === 'upcoming') {
      const completionBonus = booking.activities.length * 150  // 150 pts per completed activity
      await User.findByIdAndUpdate(booking.userRef, {
        $inc: { points: completionBonus },
      })
    }

    const updated = await Booking.findByIdAndUpdate(
      bookingID,
      { status },
      { new: true }
    )
    

    return NextResponse.json({ data: updated }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}

// ─── DELETE cancel and remove booking ────────────────────────────
export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ bookingID: string }> }
) {
  const { bookingID } = await params

  try {
    await connectMDB()

    const booking = await Booking.findById(bookingID)
    if (!booking) {
      return NextResponse.json(
        { error: 'Booking not found' },
        { status: 404 }
      )
    }

    // deduct points if booking was upcoming
    if (booking.status === 'upcoming') {
      await User.findByIdAndUpdate(booking.userRef, {
        $inc: { points: -booking.pointsEarned },
      })
    }

    await Booking.findByIdAndDelete(bookingID)

    return NextResponse.json(
      { message: 'Booking deleted successfully' },
      { status: 200 }
    )

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}