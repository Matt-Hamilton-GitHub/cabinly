'use client'

import { use } from 'react';
import { useState, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import DateSelector from '@/app/_components/DataSelector';
import { CabinsType } from "../page";
import { Spinner } from '@/app/_components/Spinner';

import { useUserContext } from "@/app/contexts/UserContext";
import { DateRange } from 'react-day-picker';



export default function CabinDetails({ params }: { params: Promise<{ cabinId: string }> }) {
    const { cabinId } = use(params); 
    const [cabin, setCabin] = useState<CabinsType | undefined>(undefined);
    const {user} = useUserContext()

    useEffect(() => {
        const fetchCabin = async () => {
            const res = await fetch(`/api/cabins/${cabinId}`);
            const json = await res.json();
            setCabin(json.data);
        };
        fetchCabin();
    }, [cabinId]);

    if (!cabin) {
        return (
            <div className="h-screen w-lvw flex justify-center items-center">
                <Spinner/>
            </div>
        );
    }

    const handleReservation = async (selectedRange: DateRange) => {
        if (!user || !selectedRange) {
          console.warn("Missing user or date range");
          return;
        }
    
        const newReservation = {
          cabinID: cabin._id,
          name: cabin.name,
          userID: user.userId,
          range: selectedRange,
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

    const { name, occupancy, description, price, discount, imageUrl, rating } = cabin;

    return (
        <section className=" w-9/12 ms-2 mt-5 flex flex-col gap-4">
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
            <h5>{description}</h5>
            <span className="w-full flex flex-row justify-end pt-3.5 gap-1">
                {discount !== 0 && (
                    <span>
                        <h1 className="text-1xl line-through">${price}</h1>
                    </span>
                )}
                <h1 className="text-2xl">${price - discount} /night</h1>
            </span>
            <DateSelector cabin={cabin} onReserve={handleReservation}/>
        </section>
    );
}
