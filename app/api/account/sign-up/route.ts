import { userSignUp } from "@/app/lib/handlers/userAuth";

export async function POST(req: Request){
   return await userSignUp(req)
}

