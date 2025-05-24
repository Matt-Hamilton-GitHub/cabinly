/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectMDB } from "../mongodb";
import Cabin from "../mdb-models/Cabin";
import { NextResponse } from "next/server";


// Get all cabins
export async function getAllCabins(req: Request) {
  const {searchParams} = new URL(req.url)
  console.log(searchParams.get('area'))
  const area = searchParams.get('area')
  // const capacity = parseInt(searchParams.get('capacity'))

  try {
    await connectMDB();
    const cabins = await Cabin.find({});
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
