import { userLogIn } from "@/app/lib/handlers/userAuth";

export async function POST(req: Request){
    return await userLogIn(req)
}