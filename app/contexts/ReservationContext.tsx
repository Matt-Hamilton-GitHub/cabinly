'use client'

import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import { useUserContext } from "./UserContext";

type ReservationType = {
    _id: string,
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

type ErrorProp = {
    isError: boolean,
    message: string | unknown,
}

type ReservationContextProps = {
    reservations: ReservationType[],
    getReservationDetails: (id: string) => ReservationType | undefined,
    fetchReservations: (userID: string) => Promise<void>,
    isLoadingRes: boolean,
    resError: ErrorProp,
}




const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {

    const [reservations, setReservations] = useState<ReservationType[]>([])
    const [isLoadingRes, setIsLoadingRes] = useState(false)
    const [resError, setResError] = useState<ErrorProp>({isError: false, message: ""})

    const { user } = useUserContext()

    const getReservationDetails = (id: string) => {
        return reservations.find((r) => r._id.toString() === id)
    }

    const removeReservation = (cabinID: string) => {
        setReservations((prev) => prev.filter((r) => r._id !== cabinID))
    }


    const fetchReservations = async (userID: string): Promise<void> => {
        setIsLoadingRes(true);
        try {
            const res = await fetch(`/api/reservations/${userID}`);
            const data = await res.json()
            
            setReservations(data.userReservations || [])
            
            setIsLoadingRes(false);
            
            setResError({isError: false, message: ""})
        } catch (err) {
            setIsLoadingRes(false);
            setResError({isError: true, message: err})
            console.log(err)
        }
    }
    useEffect(() => {
        if (user) {
            
            fetchReservations(user.userId);
        }

    }, [user])

    return <ReservationContext.Provider value={{ reservations, getReservationDetails, fetchReservations, isLoadingRes, resError }}>
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
