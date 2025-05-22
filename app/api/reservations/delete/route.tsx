import { deleteReservation } from "@/app/lib/handlers/handleReservation"

export async function DELETE(req: Request){
    return deleteReservation(req)
}