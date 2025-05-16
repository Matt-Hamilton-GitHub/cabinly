"use client";

import { useEffect, useState } from "react";
// import { addDays } from "date-fns";
import { DayPicker, DateRange ,getDefaultClassNames} from "react-day-picker";
import "react-day-picker/dist/style.css";

// import { useUserContext } from "@/app/contexts/UserContext";
import { CabinsType } from "../cabins/page";

type Props = {
  cabinId: string,
  name: string
}


function DateSelector({cabin, onReserve} : {cabin : CabinsType, onReserve: (selectedRange: DateRange) => void | Promise<void>}) {

  const defaultClassNames = getDefaultClassNames();
  const {name, _id } = cabin

  // const {user} = useUserContext()
  const [selected, setSelected] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const [cabinAvalability, setCabinAvailability] = useState<DateRange[] | undefined>(undefined)

  const handleSelect = (newSelected: DateRange | undefined) => {
    setSelected(newSelected);

  };


  const fetchCabinAvailability = async (cabinId : string) => {
    const res = await fetch(`/api/reservations/availability?cabinId=${cabinId}`);
    const data = await res.json();

    return data
  }
  
  useEffect(() => {
  const getAvailability = async () => {
    const cabinData = await fetchCabinAvailability(_id);
    setCabinAvailability(cabinData.cabinUnavailable);
  };

  if (_id) getAvailability();
  
}, [_id]);

  console.log(cabinAvalability)

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <DayPicker 
      classNames={{
         today: `text-amber-700 border-amber-500 font-bold`,
         selected: `bg-amber-500 border-amber-500 text-amber-700`,
         disabled :'text-gray-400',
         root: `${defaultClassNames.root} shadow-sm p-5 bg-gray-200 rounded-xl max-w-100 lg:max-w-180 border-2`,
         chevron: `${defaultClassNames.chevron} fill-[red]`
      }}
      animate
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={handleSelect}
      disabled={cabinAvalability}
    />
    <button 
    className="p-3 m-5 rounded-2xl bg-amber-700 hover:cursor-pointer" 
    onClick={() => {selected && onReserve(selected)}}
    disabled={!selected?.from || !selected?.to}>Reserve</button>
    </div>

  );
}

export default DateSelector;
