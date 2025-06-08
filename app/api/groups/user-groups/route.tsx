import Group from "@/app/lib/mdb-models/Group";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request){

    try{
        await connectMDB()
        const url = new URL(req.url)
        const userID = url.searchParams.get('userID')

        if(!userID){
            return NextResponse.json({message: 'Missing UserID'}, {status: 400})
        }

        const userGroups = await Group.find({usersSignedUpRef: userID})

        return NextResponse.json({userGroups}, {status: 200})

    }catch(err){

    }
}