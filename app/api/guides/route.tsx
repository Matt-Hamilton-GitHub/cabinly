// app/api/guides/route.ts
import { connectMDB } from "@/app/lib/mongodb"
import Guide from "@/app/lib/mdb-models/Guide"
import { NextResponse } from "next/server"

export async function GET(_req: Request) {
  try {
    await connectMDB()
    const guides = await Guide.find({})
    return NextResponse.json({ data: guides }, { status: 200 })
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
        { status: 400 }
      )
    }

    await connectMDB()
    const newGuide = new Guide(body)
    await newGuide.save()

    return NextResponse.json({ data: newGuide }, { status: 201 })

  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Unknown error occurred" },
      { status: 500 }
    )
  }
}