// app/api/account/[userID]/route.ts
import { connectMDB } from '@/app/lib/mongodb'
import User from '@/app/lib/mdb-models/User'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import Booking from '@/app/lib/mdb-models/Booking'
import Cabin from '@/app/lib/mdb-models/Cabin'
import Activity from '@/app/lib/mdb-models/Activity'
import Place from '@/app/lib/mdb-models/Place'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params
  console.log('back: ', userId)

  // verify JWT — only the owner can fetch their profile
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { userId: string }

    // make sure the token owner matches the requested profile
    console.log(decoded.userId, userId)
    if (decoded.userId !== userId) {
      return NextResponse.json({ message: 'Forbidden' }, { status: 403 })
    }

    await connectMDB()

    const user = await User.findById(userId)
      .select('-hash -__v')   
    //   .populate({
    //     path:'bookings', 
    //     model:Booking, 
    //     populate: [
    //   { path: 'cabinRef',    model: Cabin    },
    //   { path: 'placeRef',    model: Place    },
    //   { path: 'activities',  model: Activity },
    // ]
    //   })
      

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    return NextResponse.json({ user }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    )
  }
}