'use client'

import { use } from 'react';
import { useState, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import DataSelector from '@/app/_components/DataSelector';
import { CabinsType } from "../page";
import { Spinner } from '@/app/_components/Spinner';

export default function CabinDetails({ params }: { params: Promise<{ cabinId: string }> }) {
    const { cabinId } = use(params); 

    const [cabin, setCabin] = useState<CabinsType | undefined>(undefined);

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

    const { name, occupancy, description, price, discount, imageUrl } = cabin;

    return (
        <section className="h-lvh w-9/12 ms-2 mt-5 flex flex-col gap-4">
            <h1 className="text-amber-800 text-4xl text-start font-bold">{name}</h1>
            <div className="flex flex-row justify-start items-center gap-1.5">
                <FaPeopleGroup size={20} />
                <h2 className="text-xl">
                    Fit for up to <strong>{occupancy}</strong> guests
                </h2>
            </div>
            <div className="relative w-full obj h-5/12">
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
            <DataSelector cabin={cabin} />
        </section>
    );
}
