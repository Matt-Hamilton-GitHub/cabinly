
'use client'


import ReservationCard from "../_components/ReservationCard";
import SideNavigation from "../_components/SideNavigation";
import { useState } from "react";
import Profile from "../_components/Profile";
import { UserReservations } from "../_components/UserReservations";

export default function Account() {

  const [selected, setSelected] = useState('reservations')
  

  return (
  <div className="flex items-start flex-row w-full">
    <SideNavigation onSelect={setSelected} selected={selected} />
    
    <div className="flex w-[200px] basis-[100%] flex-col items-center justify-center" >
      {selected === 'profile' && <Profile />}
      {selected === 'reservations' && <UserReservations  />}
      {selected === 'groups' && <div>No groups added yet</div>}
    </div>
  </div>
  )

}

