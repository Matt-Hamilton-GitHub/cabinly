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

export async function getCabinAvailability(cabinId : string){

 try {
   if (!cabinId){
     console.log('cabinId is missing', cabinId)
     throw new Error('cabinId is missing')
    }

  await connectMDB();
  const cabinData = await Reservation.find({cabinID: cabinId})

  const cabinUnavailable = cabinData.map((range) => ({
    from: range.from,
    to: range.to
  }))

  return cabinUnavailable

 }catch (error: unknown) {
   console.log('ERROR @ CA')
 }

}

export async function getUserReservations(userId: string){
    console.log(`fetching reservations for: ${userId}`)
      try {
        await connectMDB();
        console.log(userId)
        const userReservations= await Reservation.find({userID: userId});
        
        return NextResponse.json({userReservations}, {status: 200});
      } catch (error: unknown) {
        if (error instanceof Error){
          return NextResponse.json({error: error.message}, {status: 500})
        }else {
          return NextResponse.json({error: 'Unknown error occured'}, {status: 500})
        }
      }

}

export async function deleteReservation(req: Request){
  console.log('delete res invoked')
  try {
     const body = await req.json();
     const {reservationId} = body
    const deleted = await Reservation.deleteOne({_id: reservationId})
    return NextResponse.json({deleted}, {status: 200})

  }catch(error) {
    return NextResponse.json({error}, {status: 400})
  }
}
