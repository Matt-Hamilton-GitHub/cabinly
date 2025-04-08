/* eslint-disable @typescript-eslint/no-explicit-any */
import { connectMDB } from "../mongodb";
import Cabin from "../mdb-models/Cabin";
import Reservation from '../mdb-models/Reservation'
import User from '../mdb-models/User'
import { NextResponse } from "next/server";


// Get all cabins
export async function getAllCabins() {
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
  try {
    const cabin = await Cabin.findById(cabinID);
    if (!cabin) {
      return null;
    }
    return cabin;
  } catch (error) {
    console.error(error);
    return null;
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

export async function getUserReservations(userID: string) {
  try {
    await connectMDB();
    const reservations = await Reservation.find({ userID })
    return NextResponse.json({ reservations, status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}

export async function getUser(userEmail: string, userPassword: string) {

   
}
