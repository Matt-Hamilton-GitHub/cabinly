import { getCabinById } from "@/app/lib/handlers/cabinHandlers"

// Handle GET requests for a single cabin by its ID
export async function GET(_req: Request, { params} : {params : {cabinId: string}}) {

    const param = await params
    return getCabinById(param.cabinId)
}
