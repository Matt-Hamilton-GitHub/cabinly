
'use client'
import { useUserContext } from "../contexts/UserContext"
import Link from "next/link";
import ReservationCard from "../_components/ReservationCard";
import { useReservation } from "../contexts/ReservationContext";

export default function Account() {

  const { user } = useUserContext()
  const { reservations } = useReservation()
  console.log(reservations)
  if (!user) {
    return <Link href='/account/log-in'>Log in</Link>
  }

  return (<div className="flex flex-col items-center gap-5">
    <h1>Welcome to Account Page</h1>
    {reservations ? 
    reservations?.map((reservation) => {
      return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
    }) : <h1>No reservations</h1>}
  </div>
  )

}

