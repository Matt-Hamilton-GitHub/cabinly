'use client'

import { useReservation } from "@/app/contexts/ReservationContext"
import Image from "next/image"
import { use } from "react"
import { formatDate } from "@/app/_utils/utils"
import { MapPinHouse } from 'lucide-react';
import Button from "@/app/_components/Button"

const SingleReservationPage =  (
    {params} :{params: Promise<{reservationId: string}>}) =>{
        const {reservationId} = use(params)

    const handleDeleteReservation = (id) => {
        console.log('DELETE')
    }
    const handleUpdateReservationDates = (id) => {
        console.log('Update Dates')
    }
    const {getReservationDetails} = useReservation()
        
    const reservationDetails = getReservationDetails(reservationId)
    if (!reservationDetails) return <div>Coundn't find your reservation details </div>
    const {name} = reservationDetails

  return (
    <div className="w-screen flex justify-center items-center pt-5 flex-col gap-5">
        <span className="font-bold text-2xl">Reservation for: <span className="text-cyan-900">{name}</span></span>
        <span className="border-3 px-2">{`${formatDate(reservationDetails.range.from)} - ${formatDate(reservationDetails.range.to)}`}</span>
        <span className="text-[black] flex  flex-row gap-4 font-bold"><span><MapPinHouse /></span>{reservationDetails.location}</span>
        <div className="relative w-full h-60 border-y-10">
            <Image 
            fill
            src={reservationDetails.imageUrl}
            alt={reservationDetails.name}
            className="object-cover object-center"
            />
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
            <h2 className="border-b-2">Actions</h2>
            <div className="flex gap-5 flex-wrap">
                 <Button action={'Delete'} color={'red'} onClick={ () => handleDeleteReservation(reservationDetails._id)} />
                 <Button action={'Update Dates'} color='orange' onClick={ () => handleUpdateReservationDates(reservationDetails._id)} />
            </div>
        </div>
    </div>
  )
}

export default SingleReservationPage