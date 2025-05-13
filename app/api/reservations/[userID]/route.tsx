import { getUserReservations } from "@/app/lib/handlers/handleReservation";

export async function GET(_req: Request, { params }: 
    { params: { userID: string } }){
        const {userID} = await params
    return getUserReservations(userID)
}