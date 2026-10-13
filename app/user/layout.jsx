'use client'


import { useUserContext } from "../contexts/UserContext"
import { useEffect } from "react"


export default function AccountLayout({ children }) {
    const { user } = useUserContext()

   
    useEffect(()=>{
        
    }, [user])
    

    return (
       
            <div className="h-screen">
               {children}
            </div>
       )
}