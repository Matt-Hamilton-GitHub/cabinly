import { getAllCabins, createCabin } from "../../lib/handlers/cabinHandlers";

// Handle GET and POST requests
export async function GET() {
    return await getAllCabins();
}

export async function POST(req) {
    return await createCabin(req);
}
