import { connectMDB } from "@/app/lib/mongodb";

import Group from '../../lib/mdb-models/Group'
import { NextResponse } from "next/server";


export async function GET(req: Request){
    try{

        await connectMDB()
        const groups = await Group.find({})
        
        return NextResponse.json({groups} , {status: 200})
    }catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: "Unknown error occured" }, { status: 500 });
    }
  }
}


export async function POST(req: Request){

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

export async function PUT(req: Request) {

  try{
    await connectMDB();
    const url = new URL(req.url);
    const userId = url.searchParams.get('userID');
    const groupId = url.searchParams.get('groupID');
    if (!userId || !groupId) return NextResponse.json({message: 'group ID or user ID is missing'}, {status: 400})

    const updatedGroupRef = await Group.findByIdAndUpdate(
      groupId,
      {
      $pull: {usersSignedUpRef: userId},
      $inc: {reserved: -1}
      },
      {new: true}
    )

    if (!updatedGroupRef) return NextResponse.json({ message: 'Group not found' }, { status: 404 });
    
  
    return NextResponse.json(
      { message: 'Successfully updated', data: updatedGroupRef },
      { status: 200 }
    );
  }catch(err){
    console.error('Error removing user from group:', err);
    return NextResponse.json({message: 'Something went wrong'}, {status: 500})
  }

}
