import { submitReservation } from "@/app/lib/handlers/handleReservation";

export async function POST(req: Request){
    return submitReservation(req)
}