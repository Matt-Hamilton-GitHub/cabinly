import Place from "@/app/lib/mdb-models/Place";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";


export async function POST(req: Request){

    try{
        await connectMDB();
        const body = await req.json()
        const newPlace = new Place(body);
        console.log(body)
        await newPlace.save()
        return NextResponse.json({message: 'success'}, {status: 200})
    }catch(err){
        console.error(err)
        return NextResponse.json({message: err}, {status: 500})
    }

}