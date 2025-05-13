'use client'

import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { useUserContext } from "./UserContext";

type ReservationType = {
    cabinID: string,
    name: string,
    userID: string,
    range: {
        from: { type: Date },
        to: { type: Date },
    },
    expires: {
        type: Date,
    },
    confirmed: boolean,
}

type ReservationContextProps = {
    reservations: ReservationType[],

}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
    const [reservations, setReservations] = useState<ReservationType[]>([])

    const { user } = useUserContext()

    const addReservation = (reservation: ReservationType) => {
        setReservations((prev) => [...prev, reservation])
    }

    const removeReservation = (cabinID: string) => {
        setReservations((prev) => prev.filter((r) => r.cabinID !== cabinID))
    }


    const fetchReservations = async (userID: string) => {
        try {
            const res = await fetch(`/api/reservations/${userID}`);

            const data = await res.json()
            console.log(data)
            setReservations(data.userReservations || [])
        } catch (err) {
            return err
        }
    }

    useEffect(() => {
        if (user) {
            fetchReservations(user.userId);
        }

    }, [user])


    return <ReservationContext.Provider value={{ reservations }}>
        {children}
    </ReservationContext.Provider>
}

export const useReservation = () => {

    const context = useContext(ReservationContext)
    if (context === undefined) {
        throw new Error('Reservation error @ useReservation')
    }

    return context;
}
