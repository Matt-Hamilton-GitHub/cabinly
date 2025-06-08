import Activity from "@/app/lib/mdb-models/Activity";
import Cabin from "@/app/lib/mdb-models/Cabin";
import { connectMDB } from "@/app/lib/mongodb"
import { NextResponse } from "next/server";
import Group from "@/app/lib/mdb-models/Group";

export async function GET(req: Request, {params} : {params : {cabinID: string}}){

    
    const {cabinID} = await params;

    if(!cabinID) return NextResponse.json({data: []},{status: 404})

    try{
        await connectMDB();

        const cabinActivities = await Activity.findById(cabinID)
            .select('linkedActivities')
            .populate({
                path:'linkedActivities',
                populate :{
                    path: 'groups',
                    model: Group
                }
            })
            .lean();

            console.log(cabinActivities)
            return NextResponse.json({data: cabinActivities}, {status: 200})

    }catch(err){
        console.log(err)
        return NextResponse.json({data: []}, {status: 500})
    }
}