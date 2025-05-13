"use client";

import { useState } from "react";
import { addDays } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useUserContext } from "@/app/contexts/UserContext";
import { usePathname } from "next/navigation";
import { CabinsType } from "../cabins/page";

type Props = {
  cabinId: string
}


function DateSelector({cabinId} : Props) {

const today = new Date();
  const tomorrow = addDays(today, 1);

  const {user} = useUserContext()
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: today,
    to: tomorrow,
  });

  const handleSelect = (newSelected: DateRange | undefined) => {
    setSelected(newSelected);
    console.log(newSelected, user, cabinId)
  };

  const onReserve = async () => {

    
    const newReservation = {
      cabinID: cabinId,
      userID: user?.userId,
      range: selected,
      confirmed: true,
    }


    const res = await fetch('/api/reservations/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation)
      })
      const data = await res.json()
      console.log(data)
  }

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
      animate
      mode="range"
      
      selected={selected}
      onSelect={handleSelect}
      
    />
    <button onClick={onReserve}>Reserve</button>
    </div>

  );
}

export default DateSelector;
