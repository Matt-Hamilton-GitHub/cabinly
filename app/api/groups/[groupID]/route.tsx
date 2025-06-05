import Group from "@/app/lib/mdb-models/Group";
import { connectMDB } from "@/app/lib/mongodb"
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params : {groupID : string}}){
const {groupID} = await params

if(!groupID) return NextResponse.json(null, {status: 404})

try {
    await connectMDB();

    const group = await Group.findById(groupID)

    return NextResponse.json(group, {status: 200})

}catch(err){
    return NextResponse.json(null ,{status:500})
}
}