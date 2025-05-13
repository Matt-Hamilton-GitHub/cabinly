'use client'

import SideNavigation from "../_components/SideNavigation"
import { ReservationProvider } from "../contexts/ReservationContext"
import { redirect } from "next/navigation"
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
            <div className="flex items-start h-[85vh] w-screen">
                <div className="flex h-full py-1">{children}</div>
            </div>
        </ReservationProvider>)
}