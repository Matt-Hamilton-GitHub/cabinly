/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectMDB } from "../mongodb";
import Cabin from "../mdb-models/Cabin";
import { NextResponse } from "next/server";
import Reservation from "../mdb-models/Reservation";
import { Types } from "mongoose";


// Get all cabins
export async function getAllCabins(req: Request) {


  try {
    await connectMDB();

    const { searchParams } = new URL(req.url)
    const capacityParam = searchParams.get('capacity')
    const addressParam = searchParams.get('address')
    const startDate = searchParams.get('start')
    const endDate = searchParams.get('end')
    const latParam = searchParams.get('lat')
    const lngParam = searchParams.get('lng')

    const query: Record<string, any> = {}

    //start and end dates
    let start = startDate ? new Date(startDate) : null;
    let end = endDate ? new Date(endDate) : null;




    if (capacityParam) {
      const occupancy = parseInt(capacityParam, 10);
      if (!isNaN(occupancy)) {
        query.occupancy = { $gte: occupancy }
      }
    }

    // if (addressParam){
    //   query.address = addressParam
    // }


    if (lngParam && latParam) {
      const lat = parseFloat(latParam);
      const lng = parseFloat(lngParam);
      const radiusInMeters = 20000;

      if (!isNaN(lat) && !isNaN(lng)) {
        query.coordinates = {
            $geoWithin: {
              $centerSphere: [[lng, lat], radiusInMeters / 6378137]
          }
        }
      }
    }

    //get conflicting reservations
    let unavailableCabinIDs:  Types.ObjectId[] = []

    if (start && end) {
      const reservations = await  Reservation.find(
          {
          "range.from": {$lte: end},
          "range.to": {$gte: start},
          
          confirmed: true,
          }
      )
      unavailableCabinIDs = reservations.map((r) => r.cabinID)
      console.log(unavailableCabinIDs)
    }


    console.dir(query, { depth: null })

    if (unavailableCabinIDs.length > 0) query._id = {$nin: unavailableCabinIDs}


    const cabins = await Cabin.find(query);

    return NextResponse.json(cabins, { status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }
  }
}

// Get a single cabin by ID
export async function getCabinById(cabinID: string) {
  console.log('fetching cabins')
  try {
    const cabin = await Cabin.findById(cabinID);

    if (!cabin) {
      return NextResponse.json({ error: "Cabin not found" }, { status: 404 });
    }

    return NextResponse.json({ data: cabin }, { status: 200 });

  } catch (error: unknown) {
    console.error("Error fetching cabin:", error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: "Unknown error occurred" }, { status: 500 });
  }
}

// Create a new cabi
export async function createCabin(req: any) {
  try {
    await connectMDB();
    const body = await req.json();
    const newCabin = new Cabin(body);
    await newCabin.save();
    return NextResponse.json({ success: true, data: newCabin }, { status: 201 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }

  }
}


export async function getUser(userEmail: string, userPassword: string) {


}
