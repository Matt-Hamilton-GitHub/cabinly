import { getAllCabins, createCabin } from "../../lib/handlers/cabinHandlers";

// Handle GET and POST requests
export async function GET(req) {
    return await getAllCabins(req);
}

export async function POST(req) {
    return await createCabin(req);
}
