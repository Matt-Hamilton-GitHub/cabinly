import { connectMDB } from "@/app/lib/mongodb";

import Group from '../../lib/mdb-models/Group'
import { NextResponse } from "next/server";

export async function GET(req){
    try{

        await connectMDB()
        const allGroups = await Group.find({})
        
        return NextResponse.json({data: allGroups} , {status: 200})
    }catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }
  }
}


export async function POST(req){

    const body = await req.json()
    console.log('groups POST')
    try{
        if(!body || !body.title){
             return NextResponse.json({ error: 'not able to add an group' }, { status: 500 });
        }

            await connectMDB()
            const newGroup = new Group(body)
            await newGroup.save()
            return NextResponse.json({data: newGroup} , {status: 201})
        
    }catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }
  }
}