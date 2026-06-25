// app/api/activities/add/route.ts
import { NextResponse } from 'next/server'
import { connectMDB } from '@/app/lib/mongodb'
import Activity from '@/app/lib/mdb-models/Activity'
import Place from '@/app/lib/mdb-models/Place'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { placeId, ...activityData } = body

    if (!placeId) {
      return NextResponse.json(
        { message: 'Missing required field: placeId' },
        { status: 400 }
      )
    }

    if (!activityData?.name) {
      return NextResponse.json(
        { message: 'Missing required field: name' },
        { status: 400 }
      )
    }

    await connectMDB()

    // confirm the place actually exists before attaching anything
    const place = await Place.findById(placeId)
    if (!place) {
      return NextResponse.json(
        { message: 'Place not found' },
        { status: 404 }
      )
    }

    // create the activity with the back-reference already set
    const newActivity = await Activity.create({
      ...activityData,
      placesRef: [placeId],
    })

    // attach the activity to the place
    await Place.findByIdAndUpdate(placeId, {
      $addToSet: { activities: newActivity._id },
    })

    return NextResponse.json(
      { data: newActivity, message: 'Activity created and linked to place' },
      { status: 201 }
    )

  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}