import { useReservation } from "../contexts/ReservationContext";
import ReservationCard from "../_components/ReservationCard";
import Link from "next/link";



export const UserReservations = () => {

  const { reservations } = useReservation()
  return (
    <div className="p-10 
                     flex w-full flex-col justify-center items-center gap-5 " >
      <span className=" px-2 rounded-2xl font-bold">Your Reservations: </span>
      <div className="flex flex-row flex-wrap justify-start items-center gap-6">
        {reservations?.map((reservation) => {
          return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
        })}
        {reservations.length === 0 && <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <span className="text-[gray]" >No Reservations at this time</span>
            <Link className="border-2 rounded-3xl px-3 " href='/cabins'>Browse Cabins</Link>
          </div></div>}

      </div>
    </div>
  )
}
