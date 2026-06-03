import Activity from "@/app/lib/mdb-models/Activity";
import Cabin from "@/app/lib/mdb-models/Cabin";
import Guide from "@/app/lib/mdb-models/Guide";
import Place from "@/app/lib/mdb-models/Place";
import Review from "@/app/lib/mdb-models/Review";

import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  context: { params: Promise<{ placeID: string }> },
) {
  const { placeID } = await context.params;

  if (!placeID || placeID == "undefined") {
    return NextResponse.json({ message: "Invalid placeID" }, { status: 400 });
  }

  try {
    await connectMDB();

    const place = await Place.findById(placeID)
      .populate({ path: "cabinsRef", model: Cabin })
      .populate({ path: "activities", model: Activity })
      .populate({ path: "guides", model: Guide})
      .populate({ path: "reviews", model: Review});

    // console.log(place)
    
    
    if (!place) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }

    return NextResponse.json({ place }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : String(err) },
      { status: 500 },
    );
  }
}
