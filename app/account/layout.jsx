'use client'

import { ReservationProvider } from "../contexts/ReservationContext"
import { useUserContext } from "../contexts/UserContext"
import { useEffect } from "react"


export default function AccountLayout({ children }) {
    const { user } = useUserContext()
   
    useEffect(()=>{
    }, [user])
    

    return (
        <ReservationProvider>
            <div className="flex items-start h-full w-full">
               {children}
            </div>
        </ReservationProvider>)
}