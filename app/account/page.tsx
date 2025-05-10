
'use client'
import { useUserContext } from "../contexts/UserContext"
import Link from "next/link";

export default function Account(){

    const { user } = useUserContext()
    console.log(user?.name)
  
      if (!user?.name) {
         return  <Link href='/account/log-in'>Log in</Link>
      }
      
    return(<h1>Welcome to Account Page</h1>)

}