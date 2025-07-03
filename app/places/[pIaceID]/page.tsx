'use client'

import { use, useEffect, useState } from "react"
import { getTripDetailsById } from "@/app/lib/handlers/tripsHandler"
import Image from "next/image"
// import { Plus } from 'lucide-react';
// import { Minus } from 'lucide-react';
import { DiamondPlus } from 'lucide-react';
import { DiamondMinus } from 'lucide-react';
import { SquareUser } from 'lucide-react';

import places from "@/public/_assets/places-info/places";
import Button from "@/app/_components/Button";

import { handleGroupSignUp } from "@/app/_utils/utils";
import DisplaySeasonalActivitites from "@/app/_components/DisplaySeasonalActivitites";
import { PlaceType } from "../page";
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump";
import { useParams } from "next/navigation";


const TripPage = (
    { params }: { params: Promise<{ placeID: string }> }
) => {

    const { placeID } = use(params)
    console.log(placeID)
    const [placeDetails, setPlaceDetails] = useState<PlaceType[]>([]);
    const [isLoading, setIsLoading] = useState(false)

    const fetchAndSetPlace = async (id: string) =>{
        setIsLoading(true)
        const res = await fetch(`/api/places/${id}`)
        const data = await res.json()
        console.log(data)
        setPlaceDetails(data)
        setIsLoading(false)


    }

    useEffect(() => {
        fetchAndSetPlace(placeID);
    },[placeID])


     if (isLoading) return (<div className="flex flex-col h-screen text-center justify-start items-center "><SpinnerBoxJump /></div>);
    if (!placeDetails) return (<div className="flex h-screen text-center justify-start items-center flex-col">Empty</div>);



    const {images_url, name} = placeDetails;
   
    return (
        <div className="w-full flex flex-col ">
            <h1 className="font-bold text-center shadow-inner shadow-[black]  bg-amber-500 p-5 text-4xl">{`Trip to ${name}`}</h1>
            {images_url && <div className="relative h-50 border-y-7">

                <Image
                    fill
                    src={images_url[0]}
                    alt={name}
                    className="object-cover object-center grayscale-100 hover:grayscale-0" />
            </div>}
            <div className="flex flex-col gap-10">
                <div className="flex justify-center items-center "><h1 className="p-3 font-bold rounded-b-2xl text-2xl bg-[black] text-[white] shadow-md shadow-[gray]">Available Seasons:</h1> </div>
                {/* <DisplaySeasonalActivitites tripDetails={tripDetails}/> */}
                
            </div>

        </div>
    )
}

export default TripPage