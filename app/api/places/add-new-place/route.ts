import Place from "@/app/lib/mdb-models/Place";
import { connectMDB } from "@/app/lib/mongodb";
import { TPlace } from "@/app/lib/types";
import { NextResponse } from "next/server";


export async function POST (req: Request){
try{

    await connectMDB()
    const body = await req.json();
    
    // validation
    if (!body?.title || !body?.country || !body?.description || !body?.price || !body?.type) {
      return NextResponse.json(
        { error: 'Missing required fields: title, country, description, price, type' },
        { status: 400 }
      )
    }

    const newPlace = new Place(body)
    await newPlace.save()
    return NextResponse.json({success: true, data: newPlace}, {status:201})
}catch(err){
    if (err instanceof Error ){
        return NextResponse.json({error: err.message}, {status: 400})
    } else {
        return NextResponse.json({error: "Unknown Error Occured"}, {status: 500})
    }
}
}