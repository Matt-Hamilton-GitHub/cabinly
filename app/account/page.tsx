
'use client'

import Link from "next/link";
import ReservationCard from "../_components/ReservationCard";
import { useReservation } from "../contexts/ReservationContext";
import SideNavigation from "../_components/SideNavigation";

export default function Account() {


  const { reservations } = useReservation()
  console.log(reservations)

  return (<div className="flex items-start gap-5 flex-row w-dvw">
    <SideNavigation />
    <div className="p-10 flex flex-col gap-2 items-start justify-center basis-[70%]" >

      {reservations ?
        reservations?.map((reservation) => {
          return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
        }) : <h1>No reservations</h1>}
    </div>
  </div>
  )

}

