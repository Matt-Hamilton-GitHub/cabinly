import { connectMDB } from "../../../lib/mongodb";
import Cabin from "../../../lib/mdb-models/Cabin";
import { NextResponse } from "next/server";

// Handle GET requests for a single cabin by its ID
export async function GET(req, { params }) {
    try {
        const { cabinID } = params;  // Extract cabinID from URL
        await connectMDB();

        // Fetch cabin by its ID
        const cabin = await Cabin.findById(cabinID);
        if (!cabin) {
            return NextResponse.json({ error: "Cabin not found" }, { status: 404 });
        }

        return NextResponse.json(cabin, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
