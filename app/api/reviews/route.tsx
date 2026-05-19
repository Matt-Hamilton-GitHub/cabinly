// app/api/guides/route.ts
import { connectMDB } from "@/app/lib/mongodb"
import Review from "@/app/lib/mdb-models/Review"
import { NextResponse } from "next/server"

export async function GET(_req: Request) {
  try {
    await connectMDB()
    const reviews = await Review.find({})
    return NextResponse.json({ data: reviews }, { status: 200 })
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

    if (!body?.authorName) {
      return NextResponse.json(
        { error: "Missing required field: authorName" },
        { status: 400 }
      )
    }

    await connectMDB()
    const newReview = new Review(body)
    await newReview.save()

    return NextResponse.json({ data: newReview }, { status: 201 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 }
    )
  }
}