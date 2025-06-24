import Cabin from "@/app/lib/mdb-models/Cabin";
import Place from "@/app/lib/mdb-models/Place";
import Activity from "@/app/lib/mdb-models/Activity";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: { params: { placeId: string } }) {
  const { placeId } = await params;

  if (!placeId) {
    return NextResponse.json({ message: "Invalid placeID" }, { status: 400 });
  }

  try {
    await connectMDB();

    const place = await Place.findById(placeId)
      .populate({
        path: "cabinsRef",
         model: Cabin})
      .populate({
        path: "activitiesRef",
        model: Activity}
    );

    if (!place) {
      return NextResponse.json({ message: "Place not found" }, { status: 404 });
    }

    return NextResponse.json({ data: place }, { status: 200 });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
