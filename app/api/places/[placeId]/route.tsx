import Place from "@/app/lib/mdb-models/Place";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";


export async function GET(_req: Request, { params }: 
    { params: { placeID: string } }){

        const {placeID} = await params

        try{
                await connectMDB();
                const place = new Place({_id: placeID});
                return NextResponse.json({data: place, status: 200})
            }catch(err){
                console.error(err)
                return NextResponse.json({message: err}, {status: 500})
            }
    
}