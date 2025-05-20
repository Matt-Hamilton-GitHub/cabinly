
'use client'


import ReservationCard from "../_components/ReservationCard";
import SideNavigation from "../_components/SideNavigation";
import { useState } from "react";
import Profile from "../_components/Profile";
import { UserReservations } from "../_components/UserReservations";

export default function Account() {

  const [selected, setSelected] = useState('reservations')
  

  return (<div className="flex items-start flex-row overflow-hiffen">
    <SideNavigation onSelect={setSelected} selected={selected} />
    
    <div className="flex flex-col items-start justify-center" >
      {selected === 'profile' && <Profile />}
      {selected === 'reservations' && <UserReservations  />}
    </div>
  </div>
  )

}

