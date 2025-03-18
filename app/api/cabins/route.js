import { connectMDB } from "../../lib/mongodb";
import Cabin from "../../lib/mdb-models/Cabin";
import { NextResponse } from "next/server";

import { initSocketServer } from '../../lib/socket-server'

let io;


// Handle GET requests
export async function GET() {
    try {
        await connectMDB();
        const cabins = await Cabin.find({});
        
        return NextResponse.json(cabins, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Handle POST requests
export async function POST(req) {  
    try {
        await connectMDB();
        const body = await req.json();
        const newCabin = new Cabin(body);
        await newCabin.save();

        //Initialize the WebSocket server and emit the event
        // if (!io) {
        //     io = initSocketServer(req.socket.server);
        // }

        // io.emit("newCabin", newCabin);
        
        
        return NextResponse.json({ success: true, data: newCabin }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
