'use client'

import { useReservation } from "@/app/contexts/ReservationContext"
import Image from "next/image"
import { use } from "react"
import { formatDate } from "@/app/_utils/utils"
import { ArrowBigLeft, MapPinHouse } from 'lucide-react';
import Button from "@/app/_components/Button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUserContext } from "@/app/contexts/UserContext"
import { Spinner } from "@/app/_components/Spinner"
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump"


const SingleReservationPage =  (
    {params} :{params: Promise<{reservationId: string}>}) =>{
        const {reservationId} = use(params)
        const router = useRouter()
        const {user} = useUserContext()
        const userId = user?.userId
        const {fetchReservations, isLoadingRes, resError} = useReservation()

    const handleDeleteReservation = async(id: string) => {
       const res = await fetch('/api/reservations/delete', {
        method: 'DELETE',
        body : JSON.stringify({reservationId})
       })
       if(res.ok){
           console.log(reservationId, id)
           if (userId) fetchReservations(userId)
           router.push('/account')
       }
    }

    const handleUpdateReservationDates = (id) => {
        console.log('Update Dates')
    }
    const {getReservationDetails} = useReservation()
        
    const reservationDetails = getReservationDetails(reservationId)
    if (resError.isError) return <div>Coundn't find your reservation details </div>
    if (isLoadingRes || !reservationDetails) return <SpinnerBoxJump />
    const {name} = reservationDetails

  return (
    <div className="relative w-screen flex justify-center items-center  flex-col gap-5">
        <div className="relative w-full h-60 border-y-10">
            <Image 
            fill
            src={reservationDetails.imageUrl}
            alt={reservationDetails.name}
            className="object-cover object-center"
            />
        </div>

        <span className='absolute top-[10px] left-0 rounded-br-3xl bg-[black] p-2 shadow-inner border-r-2 border-b-2 shadow-[black] transition-all duration-500'>
        <Link href='/account'>
          <ArrowBigLeft className='stroke-white fill-[white] hover:scale-110 hover:cursor-pointer' size={40} />
        </Link>
      </span>

        <span className="font-bold text-2xl"><span className="text-cyan-900">{name}</span></span>
        <span className="text-[black] flex  flex-row gap-4 font-bold"><span><MapPinHouse /></span>{reservationDetails.location}</span>
        <span className="border-3 px-2">{`${formatDate(reservationDetails.range.from)} - ${formatDate(reservationDetails.range.to)}`}</span>
        <div className="flex flex-col items-center justify-center gap-10 ">
            {/* <h2 className="border-b-2">Actions</h2> */}
            <div className="flex gap-5 flex-wrap">
                 <Button isDisabled={false} action={'Cancel'} color={'red'} onClick={ () => handleDeleteReservation(reservationDetails._id)} />
                 <Button isDisabled={false} action={'Update Dates'} color='orange' onClick={ () => handleUpdateReservationDates(reservationDetails._id)} />
            </div>
        </div>
    </div>
  )
}

export default SingleReservationPage