import { useReservation } from "../contexts/ReservationContext";
import ReservationCard from "../_components/ReservationCard";
import Link from "next/link";
import { Spinner } from "./Spinner";
import SpinnerBoxJump from "./SpinnerBoxJump";



export const UserReservations = () => {

  const {reservations, isLoadingRes, resError} = useReservation()

  if (isLoadingRes) return <div className="pt-50
                     flex w-full flex-col justify-center items-center gap-5 "><SpinnerBoxJump /></div>

  return (
    <div className="p-5
                     flex w-full flex-col justify-center items-center gap-5 " >
      <span className=" px-2 rounded-2xl font-bold">Your Reservations: </span>
      <div className="flex w-full flex-row flex-wrap justify-start items-center gap-6">
        {reservations?.map((reservation) => {
          return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
        })}
        {reservations.length === 0 && !isLoadingRes && <div className="flex w-full flex-col justify-center items-center">
          <div className="flex w-full flex-col justify-center items-center gap-4">
            <span className="text-[gray]" >You have no reservations</span>
            <Link className=" bg-[black]  text-[white] rounded-3xl px-3 " href='/cabins'>Browse Cabins</Link>
          </div></div>}

      </div>
    </div>
  )
}
