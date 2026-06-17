// app/api/activities/all/route.ts
import { NextResponse } from 'next/server'
import { connectMDB } from '@/app/lib/mongodb'
import Activity from '@/app/lib/mdb-models/Activity'
import Place from '@/app/lib/mdb-models/Place'

export async function GET(_req: Request) {
  try {
    await connectMDB()

    const activities = await Activity.find({})
      .populate({
        path: 'placeRef',
        model: Place,
        select: '_id title country flag images_url type',  // only what the card needs
      })

    return NextResponse.json({ data: activities }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { message: err instanceof Error ? err.message : 'Unknown error occurred' },
      { status: 500 }
    )
  }
}