import { getUserReservations } from "@/app/lib/handlers/cabinHandlers";

export async function GET(userId: string){
    return getUserReservations(userId)
}