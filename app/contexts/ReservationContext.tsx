'use client'

import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { useUserContext } from "./UserContext";

type ReservationType = {
    _id: string,
    cabinID: string,
    name: string,
    userID: string,
    price: number,
    imageUrl: string,
    location: string,
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
    getReservationDetails: (id: string) => ReservationType | undefined,
    fetchReservations: (userID: string) => Promise<void>

}



const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {

    const [reservations, setReservations] = useState<ReservationType[]>([])
    const { user } = useUserContext()

    const getReservationDetails = (id: string) => {
        return reservations.find((r) => r._id === id)
    }

    const removeReservation = (cabinID: string) => {
        setReservations((prev) => prev.filter((r) => r.cabinID !== cabinID))
    }


    const fetchReservations = async (userID: string): Promise<void> => {

        try {
            const res = await fetch(`/api/reservations/${userID}`);
            const data = await res.json()
            console.log(data)
            setReservations(data.userReservations || [])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (user) {
            fetchReservations(user.userId);
        }

    }, [user])

    return <ReservationContext.Provider value={{ reservations, getReservationDetails, fetchReservations }}>
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
