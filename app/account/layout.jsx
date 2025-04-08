'use client'

import { UserProvider } from "../contexts/UserContext";


export default function AccountLayout({ children }) {
    return (
        <UserProvider>
            <div className="h-lvh">
                <div className="flex h-full py-1">{children}</div>
            </div>
        </UserProvider>)
}