import { NextResponse } from 'next/server'
import { connectMDB } from '@/app/lib/mongodb'
import Booking  from '@/app/lib/mdb-models/Booking'
import Cabin    from '@/app/lib/mdb-models/Cabin'
import Place    from '@/app/lib/mdb-models/Place'
import Activity from '@/app/lib/mdb-models/Activity'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function GET(
    _req: Request,
    {params} : {params: Promise<{userID: string}>}
){
    const {userID} = await params

    // auth check - only the owner can fetch their bookings.
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    if (!token){
        return NextResponse.json({message: "Unauthorize"}, {status: 401})
    }

    try{
        const decoded = jwt.verify(
            token, process.env.JWT_SECRET!
        ) as { userId: string}

        if (decoded.userId != userID){
            return NextResponse.json({message:'Forbidden'}, {status: 403})
        }

        await connectMDB()
        console.log('fetching bookings', userID)

        const bookings = await Booking.find({userRef: userID})
        .populate({path: 'placeRef', model: Place})
        .populate({path: 'cabinRef', model: Cabin})
        .populate({path: 'activities', model: Activity})
        .sort({createdAt: -1}) // newest first

        return NextResponse.json({data: bookings}, {status: 200})


    }catch(err){
        console.log(err)
        return NextResponse.json(
            {message: err instanceof Error ? err.message : 'Unknown Error'},
            {status : 500}
        )
    }
}