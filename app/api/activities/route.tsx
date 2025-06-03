import { connectMDB } from "@/app/lib/mongodb";

import Activity from '../../lib/mdb-models/Activity'
import { NextResponse } from "next/server";

export async function GET(req){
    try{

        await connectMDB()
        const allActivities = await Activity.find({})
        
        return NextResponse.json({data: allActivities} , {status: 200})
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
    console.log('activities POST')
    try{
        if(!body || !body.title){
             return NextResponse.json({ error: 'not able to add an activity' }, { status: 500 });
        }

            await connectMDB()
            const newActivity = new Activity(body)
            await newActivity.save()
            return NextResponse.json({data: newActivity} , {status: 201})
        
    }catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }
  }
}