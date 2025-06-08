import Group from "@/app/lib/mdb-models/Group";
import { connectMDB } from "@/app/lib/mongodb";
import { NextResponse } from "next/server";


 export async function POST(req: Request){

    try{
        await connectMDB()
        const body = await req.json()
        const {groupID, userID} = body;

        if (!groupID || !userID){
                return NextResponse.json({message: 'Missing GroupID or UserID'}, {status: 400})
        }
        const updateGroup = await Group.findByIdAndUpdate(groupID,
            {
            $addToSet: {usersSignedUpRef: userID},
            $inc: {reserved: 1},
            },
            {new: true}
        )

        if ( !updateGroup) { 
            return NextResponse.json({message: 'Group Not Found'}, {status: 404})
        }

        return NextResponse.json({data: updateGroup}, {status: 200})
    
    }catch(err){
        console.error('join group error: ', err)
        return NextResponse.json({status: 500})
    }
}