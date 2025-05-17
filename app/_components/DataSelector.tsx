"use client";

import { useEffect, useState } from "react";
import { DayPicker, DateRange ,getDefaultClassNames} from "react-day-picker";
import "react-day-picker/dist/style.css";

import { CabinsType } from "../cabins/page";

type Props = {cabin : CabinsType, onReserve: (selectedRange: DateRange) => void | Promise<void>}


function DateSelector({cabin, onReserve} : Props) {

  const defaultClassNames = getDefaultClassNames();
  const {_id } = cabin


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
         selected: `bg-amber-500 border-2 border-black rounded-xl text-amber-700 fill-[red]`,
         disabled :'text-gray-400',
         root: `${defaultClassNames.root} shadow-sm p-5 bg-gray-200 rounded-xl max-w-100 lg:max-w-180 border-2`,
         chevron: `${defaultClassNames.chevron} fill-[amber]`
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
