'use client'

import { ReservationProvider } from "../contexts/ReservationContext"
import { useUserContext } from "../contexts/UserContext"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AccountLayout({ children }) {
    const { user } = useUserContext()
    const router = useRouter()

    useEffect(()=>{
        if (!user) {
        router.push('/account/log-in')
    }
    }, [user])
    

    return (
        <ReservationProvider>
            <div className="flex items-start h-full w-full">
                <div className="flex">{children}</div>
            </div>
        </ReservationProvider>)
}