'use client'

import { use } from "react"
import { getTripDetailsById } from "@/app/lib/handlers/tripsHandler"
import Image from "next/image"
import { ChevronsDown } from 'lucide-react';
import { ChevronsUp } from 'lucide-react';



const TripPage = (
    { params }: { params: Promise<{ tripID: string }> }
) => {

    const { tripID } = use(params)

    const tripDetails = getTripDetailsById(Number(tripID))

    return (
        <div className="w-full flex flex-col ">
            <h1 className="font-bold text-center  bg-amber-500 p-5 text-4xl">{`Welcome to ${tripDetails?.name}`}</h1>
            {tripDetails?.img_url && <div className="relative h-50 border-y-7">

                <Image
                    fill
                    src={tripDetails?.img_url}
                    alt={tripDetails?.name}
                    className="object-cover object-center grayscale-100 hover:grayscale-0" />
            </div>}
            <div className="">

                {tripDetails?.seasons?.map((trip) => {

                    return <div key={crypto.randomUUID()}>
                        <div className="">
                            <span className="bg-[green]">{trip.season}</span>
                            <div>
                                {trip.activities.map((activity) => {
                                    return <span className="flex flex-row items-center justify-center gap-1 ">
                                            <h4>{activity.type}</h4> <span><ChevronsDown size={15}/></span> 
                                        </span>
                                })}
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TripPage