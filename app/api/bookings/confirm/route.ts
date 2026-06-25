import Booking from "@/app/lib/mdb-models/Booking"
import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';

// app/api/bookings/confirm/route.ts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect('/booking/expired')
  }

  try {
    const { bookingId } = jwt.verify(token, process.env.JWT_SECRET!) as { bookingId: string }

    const booking = await Booking.findById(bookingId)

    if (!booking || booking.status !== 'pending') {
      return NextResponse.redirect('/booking/expired')
    }

    await Booking.findByIdAndUpdate(bookingId, {
      status: 'upcoming',
      expiresAt: null,  // clear the expiry
    })

    return NextResponse.redirect(`/account?booking=${bookingId}&confirmed=true`)

  } catch {
    return NextResponse.redirect('/booking/expired')
  }
}