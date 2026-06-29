// app/api/bookings/confirm/route.ts
import Booking from '@/app/lib/mdb-models/Booking'
import { connectMDB } from '@/app/lib/mongodb'
import { NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import User from '@/app/lib/mdb-models/User'
import { getTier } from '@/app/lib/points'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(
      new URL('/booking/confirmed?status=invalid', req.url)
    )
  }

  try {
    const { bookingId } = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { bookingId: string }

    await connectMDB()

    const booking = await Booking.findById(bookingId)

    if (!booking) {
      return NextResponse.redirect(
        new URL('/booking/confirmed?status=notfound', req.url)
      )
    }

    if (booking.status !== 'pending') {
      // already confirmed or cancelled
      return NextResponse.redirect(
        new URL(`/booking/confirmed?status=${booking.status}`, req.url)
      )
    }

    await Booking.findByIdAndUpdate(bookingId, {
      status:    'upcoming',
      expiresAt: null,
    })

    // Award User with Points and New Tier if applicable 

     const updatedUser = await User.findByIdAndUpdate(
      booking.userRef,
      {
        $inc: { points: booking.pointsEarned },
      },
      { new: true },
    );

    if (updatedUser) {
      const newTier = getTier(updatedUser.points);
      if (newTier !== updatedUser.tier) {
        await User.findByIdAndUpdate(booking.userRef, { tier: newTier });
      }
    }

    return NextResponse.redirect(
      new URL(`/booking/confirmed?status=success&bookingId=${bookingId}`, req.url)
    )

  } catch {
    // JWT expired or tampered
    return NextResponse.redirect(
      new URL('/booking/confirmed?status=expired', req.url)
    )
  }
}