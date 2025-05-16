import { useReservation } from "../contexts/ReservationContext";
import ReservationCard from "../_components/ReservationCard";


export const UserReservations = () => {

   const { reservations } = useReservation()
  return (
     <div className="p-10 flex flex-col gap-2 items-start justify-center basis-[70%]" >
          {reservations ?
            reservations?.map((reservation) => {
              return <ReservationCard reservation={reservation} key={crypto.randomUUID()} />
            }) : <h1>No reservations</h1>}
        </div>
  )
}
