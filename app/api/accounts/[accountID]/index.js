import { connectMDB } from "../../../lib/mongodb";
import User from "../../../lib/mdb-models/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';



// Handle GET requests for a single cabin by its ID
export async function GET(req, { params }) {
   try {

       const {uEmail, uHash} = req.body
       await connectMDB();

       const user = await User.findOne({ email: uEmail })

       if (!user){
        return NextResponse.json({ status: 404})
       }
   
       if (user && await bcrypt.compare(uHash, user.hash)) {
         const { _id, name, email } = user;
         const userData = {
           userId: _id,
           name: name,
           email: email,
         }
         
         return NextResponse.json({ userData, status: 200 })
       } else {
         return NextResponse.json({ status: 401 })
       }
     } catch (err) {
       return NextResponse.json({ status: 500 })
     }
}
