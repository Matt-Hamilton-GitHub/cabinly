import Place from "@/app/lib/mdb-models/Place";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(req: Request){

    try{
        await connectMDB();
        const places= new Place();
        return NextResponse.json({data: places, status: 200})
    }catch(err){
        console.error(err)
        return NextResponse.json({message: err}, {status: 500})
    }

}