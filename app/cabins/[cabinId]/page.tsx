'use client'

import { use } from 'react';
import { useState, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import DateSelector from '@/app/_components/DataSelector';
import { CabinsType } from "../page";
import { Spinner } from '@/app/_components/Spinner';

import { handleReserve } from '@/app/_utils/utils';
import { useUserContext } from "@/app/contexts/UserContext";
import { DateRange } from 'react-day-picker';
import { Star } from 'lucide-react';
import { span } from 'framer-motion/client';

export default function CabinDetails({ params }: { params: Promise<{ cabinId: string }> }) {
  const { cabinId } = use(params);

 
  const [cabin, setCabin] = useState<CabinsType>();
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [unavailableDates, setUnavailableDates] = useState<DateRange[]>([]);
  const { user } = useUserContext();



  useEffect(() => {
    const fetchCabin = async () => {
      const res = await fetch(`/api/cabins/${cabinId}`);
      const json = await res.json();
      setCabin(json.data);
    };
    fetchCabin();
  }, [cabinId]);

  
  useEffect(() => {
    const fetchUnavailable = async () => {
      const res = await fetch(`/api/reservations/availability?cabinId=${cabinId}`);
      const data = await res.json();
      setUnavailableDates(data.cabinUnavailable || []);
    };
    if (cabinId) fetchUnavailable();
  }, [cabinId]);


  const isValidRange = (range: DateRange | undefined): boolean => {
    if (!range?.from || !range?.to) return false;
    if (!unavailableDates) return true

    const userFrom = range.from.getTime();
    const userTo = range.to.getTime();

    return !unavailableDates.some(d => {
      if (!d.from || !d.to) return false;
      const from = new Date(d.from).getTime();
      const to = new Date(d.to).getTime();
      return userFrom <= to && userTo >= from;
    });
  };

 
  if (!cabin) return <Spinner />;

   const { name, occupancy, description, price, discount, imageUrl, rating } = cabin;
  return (
    <section className=" w-full mt-5 flex flex-col justify-center items-center gap-4">
            <h1 className="text-amber-800 text-4xl text-start font-bold">{name}</h1>
            <div className="flex flex-row justify-start items-center gap-1.5">
                <FaPeopleGroup size={20} />
                <h2 className="text-xl">
                    Fit for up to <strong>{occupancy}</strong> guests
                </h2>
            </div>
            <div className="relative w-full h-[500px]">
                <Image
                    src={imageUrl}
                    alt="beautiful cabin"
                    fill
                    className="object-cover rounded-sm"
                />
            </div>
            <h5 className='px-10 text-center'>{description}</h5>
            <span className="absolute top-160 bg-[white] p-2 rounded-3xl shadow-[gray] shadow-md flex flex-row justify-center items-center gap-1 
                           hover:text-[white] hover:bg-[black]">
                            <Star className='text-[orange]'/>
                {discount !== 0 && (
                    <span className=''>
                        <h1 className="text-1xl line-through">${price}</h1>
                    </span>
                )}
                    <h1 className="text-2xl">${price - discount} /night</h1>
            </span>
      <DateSelector
        selected={selectedRange}
        onChange={setSelectedRange}
        disabledRanges={unavailableDates}
      />

        <div className='bg-[black] px-2 rounded-2xl'>
        {!isValidRange(selectedRange) ? <span className='text-[red]'>Invalid Selection</span> : null}
      </div>
      
      <button
        className="p-2 m-5 rounded-2xl bg-[white] text-[black] hover:bg-[black] hover:text-[white] border-3"
        onClick={ () => handleReserve(user, selectedRange,isValidRange, cabin, unavailableDates, setSelectedRange)}
        disabled={!selectedRange?.from || !selectedRange?.to || !isValidRange(selectedRange)}
      >
        Reserve
      </button>
    </section>
  );
}
