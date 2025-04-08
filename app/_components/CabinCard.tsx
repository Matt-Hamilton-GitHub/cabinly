'use client'
import Image from "next/image"
import { CabinsType } from "../cabins/page"
import { FaPeopleGroup } from "react-icons/fa6";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";

export type CabinCardProps = {
    cabin: CabinsType
}

export const metadata = {
    title: 'Cabin'
}
export default function CabinCard({ cabin }: CabinCardProps) {
    return (<div className="flex flex-row ">
        <div className=" rounded-s-xl w-40 h-50 relative object-cover border-black-900 border-1 ">
            <Image
                fill
                src={cabin.imageUrl}
                alt={`a beatiful cabin`}
                placeholder="empty"
                className="object-cover border-black rounded-s-xl "
            />
        </div>

        <div className=" flex flex-col pl-3.5 justify-between rounded-e-xl  ">
            <div className="flex flex-col">
                <h1 className="
                 text-xl text-start font-bold">{cabin.name}</h1>
                <div className="flex flex-row justify-center align-middle items-center gap-1.5">
                    <FaPeopleGroup />
                    <h3>Fit for up to <strong>{cabin.occupancy}</strong> guests</h3>
                </div>
                <span className="w-full flex flex-row justify-end pt-3.5 gap-1">
                    {cabin.discount !== 0 &&  <span><h1 className="text-1xl line-through">${cabin.price}</h1></span>}
                    <h1 className="text-2xl  ">${cabin.price - cabin.discount} /night</h1>
                </span>
            </div>

            <Link href={`/cabins/${cabin._id}`} >
                <div className="flex flex-row justify-start items-center gap-1.5"> <BsFillBookmarkPlusFill /> <h4>Details & Reservetions </h4></div>
            </Link>
        </div>
    </div>)
}