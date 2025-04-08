import { useContext, createContext, useState, ReactNode } from "react";

import { getUserReservations } from "../lib/handlers/cabinHandlers";

type ReservationType = {

    title: string,
    cabinID: string,
    range: {
        from: string,
        to: string
    },

}

type ReservationContextProps = {
    reservations: ReservationType[],
    setReservations: (reservation: ReservationType[]) => void;
    addReservation: (reservation: ReservationType) => void;
    removeReservation: (cabinID: string) => void;
}

const ReservationContext = createContext<ReservationContextProps | undefined>(undefined);


export const ReservationProvider = ({ children }: { children: ReactNode }) => {
    const [reservations, setReservations] = useState<ReservationType[]>([]
    )

    const addReservation = (reservation: ReservationType) => {
        setReservations((prev) => [...prev, reservation])
    }

    const removeReservation = (cabinID: string) => {
        setReservations((prev) => prev.filter((r) => r.cabinID !== cabinID))
    }

    const fetchReservations = async (userID: string) => {
        try {
            const data = await getUserReservations(userID);
            setReservations(data.reservations)
        } catch (err) {
            return err
        }
    }


    return <ReservationContext.Provider value={{ reservations, setReservations, addReservation, removeReservation }}>
        {children}
    </ReservationContext.Provider>
}

// custom hook
export const useReservation = () => {

    const context = useContext(ReservationContext)
    if (context === undefined) {
        throw new Error('Reservation error @ useReservation')
    }

    return context;
}
