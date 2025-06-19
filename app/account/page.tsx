
'use client'


import ReservationCard from "../_components/ReservationCard";
import SideNavigation from "../_components/SideNavigation";
import { useState } from "react";
import Profile from "../_components/Profile";
import { UserReservations } from "../_components/UserReservations";
import DisplayUserGroups from "../_components/DisplayUserGroups";

export default function Account() {

  const [selected, setSelected] = useState('reservations')
  

  return (
  <div className="flex items-start flex-row w-full h-screen">
    <SideNavigation onSelect={setSelected} selected={selected} />
    <div className="flex w-[200px] h-full basis-[100%] flex-col " >
      {selected === 'profile' && <Profile />}
      {selected === 'reservations' && <UserReservations  />}
      {selected === 'groups' && <DisplayUserGroups />}
    </div>
  </div>
  )

}

