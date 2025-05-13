import { connectMDB } from "../mongodb";
import Reservation from '../mdb-models/Reservation'
import { NextResponse } from "next/server";


export async function submitReservation(req: Request){
    try {
        await connectMDB();
        const body = await req.json();
        const newReservation = new Reservation(body);
        await newReservation.save();
        return NextResponse.json({ success: true, data: newReservation }, { status: 201 });
      } catch (error: unknown) {
        if (error instanceof Error) {
          return NextResponse.json({ error: error.message }, { status: 400 });
        } else {
          return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
        }
    
      }
}


export async function getUserReservations(userId: string){
      try {
        await connectMDB();
        const userReservations= await Reservation.find({userID: userId});
        if (!userReservations) {
          return null;
        }
        return userReservations
      } catch (error) {
        console.error(error);
        return null;
      }

}