"use client";

import { useState } from "react";
import { addDays } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { useUserContext } from "@/app/contexts/UserContext";
import { CabinsType } from "../cabins/page";

type Props = {
  cabinId: string,
  name: string
}


function DateSelector({cabin} : {cabin : CabinsType}) {

  const {cabinID, name } = cabin

const today = new Date();
  const tomorrow = addDays(today, 1);

  const {user} = useUserContext()
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: today,
    to: tomorrow,
  });

  const handleSelect = (newSelected: DateRange | undefined) => {
    setSelected(newSelected);

  };

  const onReserve = async () => {
    if (!user || !selected) {
      console.warn("Missing user or date range");
      return;
    }

    const newReservation = {
      cabinID: cabin,
      name: name,
      userID: user.userId,
      range: selected,
      confirmed: true,
    }

    try {

      const res = await fetch('/api/reservations/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReservation)
      })
      const data = await res.json()
      console.log("Reservation response:", data);
    }catch (err) {
      console.error("Reservation error:", err);
    }
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
