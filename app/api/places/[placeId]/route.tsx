
import Place from "@/app/lib/mdb-models/Place";

import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(_req: Request,  context : { params: Promise<{ placeID: string }> }) {
  const {placeID} = await context.params
  
  if (!placeID || placeID == "undefined") {
    return NextResponse.json({ message: "Invalid placeID" }, { status: 400 });
  }

  try {
    await connectMDB();

    const place = await Place.findById(placeID)

      // .populate({
      //   path: "cabinsRef",
      //   model: Cabin
      // })
      // .populate({
      //   path: "seasons.activitiesRef",
      //   model: Activity,
      //   populate: {
      //     path: "groups",
      //     model: Group
      //   }
      // })

    if (!place) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }

    return NextResponse.json({ place }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
