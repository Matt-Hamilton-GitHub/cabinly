import Activity from "@/app/lib/mdb-models/Activity";
import Cabin from "@/app/lib/mdb-models/Cabin";
import Guide from "@/app/lib/mdb-models/Guide";
import Place from "@/app/lib/mdb-models/Place";
import Review from "@/app/lib/mdb-models/Review";

import { connectMDB } from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    await connectMDB()

    const places = await Place.find({})
      .populate({ path: "cabinsRef",  model: Cabin })
      .populate({ path: "activities", model: Activity })
      .populate({ path: "guides",     model: Guide })
      .populate({ path: "reviews",    model: Review })

    // console.log(places)
    return NextResponse.json({ places }, { status: 200 })

  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    )
  }
}