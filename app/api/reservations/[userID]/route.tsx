import { getUserReservations } from "@/app/lib/handlers/handleReservation";
import Reservation from "@/app/lib/mdb-models/Reservation";
import { NextResponse } from "next/server";

export async function GET(_req: Request, { params }: 
    { params: { userID: string } }){
        const {userID} = await params
    return getUserReservations(userID)
}

export async function DELETE(_req: Request, {params} : {params : {reservationId: string}}){
    const {reservationId} = await params
    const success = await Reservation.deleteOne({_id: reservationId})
    
    if (success) return NextResponse.json({status: 200})
    else return NextResponse.json({status: 400})

}