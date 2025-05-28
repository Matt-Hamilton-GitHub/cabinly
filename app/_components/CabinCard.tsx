'use client'
import Image from "next/image"
import { CabinsType } from "../cabins/page"
import { FaPeopleGroup } from "react-icons/fa6";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";

import Rating from '@mui/material/Rating';
import { Heart } from 'lucide-react';



export type CabinCardProps = {
    cabin: CabinsType
}

export const metadata = {
    title: 'Cabin'
}
export default function CabinCard({ cabin }: CabinCardProps) {
    const cabinId = cabin._id;
    return (<div className="flex flex-row w-110 rounded-sm shadow-[gray] shadow-lg border-2 border-[#e3e3e3eb] 
        hover:scale-110 hover:border-3 hover:cursor-pointer hover:border-[#cad3e4f9] transition-all duration-350">
        <div className=" rounded-s-xl w-40 h-50 relative object-cover rounded-r-[200px] shadow-md shadow-[black]">
            <Image
                fill
                src={cabin.imageUrl}
                alt={`a beatiful cabin`}
                placeholder="empty"
                className="object-cover rounded-l-2sm rounded-r-[200px]"
            />
        </div>

        <div className=" flex flex-col p-2 justify-between  ">
            <div className="flex flex-col">
                <div className="flex felx-row items-center justify-between w-70 p-2">

                <h1 className="
                 text-xl text-[#0e7490] text-start font-bold">{cabin.title}</h1><Heart className="hover:scale-150 -[red] transition-all duration-350 hover:fill-[red]" color={'red'} fill={'white'} />
                 </div>
                 <Rating name="half-rating-read" size='small' defaultValue={cabin.rating } precision={0.5} readOnly />
                <div className="flex flex-row justify-center align-middle items-center gap-1.5">
                    <FaPeopleGroup />
                    <div className="flex  justify-center items-center">
                        <h3>Fit for up to <strong>{cabin.occupancy}</strong> guests</h3>
                    </div>
                </div>
                <span className="w-full flex flex-row justify-end pt-3.5 gap-1">
                    {cabin.discount !== 0 && <span><h1 className="text-1xl line-through">${cabin.price}</h1></span>}
                    <h1 className="text-2xl  ">${cabin.price - cabin.discount} /night</h1>
                </span>
            </div>
            
            <Link href={`/cabins/${cabinId}`} >
                <div className="flex flex-row justify-start items-center gap-1.5"> <BsFillBookmarkPlusFill color={'green'} /> <h4>Details & Reservations </h4></div>
            </Link>
        </div>
    </div>)
}