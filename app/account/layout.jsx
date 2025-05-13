'use client'

import { ReservationProvider } from "../contexts/ReservationContext"


export default function AccountLayout({ children }) {
    return (
        <ReservationProvider>
            <div className="h-lvh">
                <div className="flex h-full py-1">{children}</div>
            </div>
        </ReservationProvider>)
}