
'use client'


import ReservationCard from "../_components/ReservationCard";
import SideNavigation from "../_components/SideNavigation";
import { useState } from "react";
import Profile from "../_components/Profile";
import { UserReservations } from "../_components/UserReservations";

export default function Account() {

  const [selected, setSelected] = useState('reservations')
  

  return (<div className="flex items-start gap-5 flex-row w-dvw ">
    <SideNavigation onSelect={setSelected} selected={selected} />
    <div className="flex flex-col gap-2 items-start justify-center basis-[70%]" >
      {selected === 'profile' && <Profile />}
      {selected === 'reservations' && <UserReservations  />}
    </div>
  </div>
  )

}

