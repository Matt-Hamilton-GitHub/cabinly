import { useReservation } from "../contexts/ReservationContext";
import ReservationCard from "../_components/ReservationCard";


export const UserReservations = () => {

   const { reservations } = useReservation()
  return (
     <div className="p-10 
                     flex flex-col justify-center items-center gap-5 w-[100%]" >
            <span className="border-2 px-2 rounded-2xl font-bold">Your Reservations </span>
            <div className="flex flex-row flex-wrap justify-center items-center gap-6">
          {reservations ?
            reservations?.map((reservation) => {
              return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
            }) : <h1>No reservations</h1>}
            </div>
        </div>
  )
}
