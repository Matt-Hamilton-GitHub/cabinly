import { connectMDB } from "@/app/lib/mongodb"
import Activity from '@/app/lib/mdb-models/Activity'
import { NextResponse } from "next/server"

export async function GET(_req: Request) {
  try {
    await connectMDB()
    const activities = await Activity.find({})
    return NextResponse.json({ data: activities }, { status: 200 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (!body?.name) {
      return NextResponse.json(
        { error: "Missing required field: name" },
        { status: 400 }   // ← 400 not 500, it's a client error
      )
    }

    await connectMDB()
    const newActivity = new Activity(body)
    await newActivity.save()

    return NextResponse.json({ data: newActivity }, { status: 201 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 }
    )
  }
}