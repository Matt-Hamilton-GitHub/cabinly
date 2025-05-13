

import { useRouter } from "next/navigation"

function ReservationCard({reservation}) {

    const router = useRouter()

    const handleCabinSelect = () => {
        router.push(`/cabins/${reservation.cabinID}`)
    }
    
  return (<div>
    <div 
        className='flex items-center justify-start p-2 rounded-xl w-200 bg-amber-600 hover:cursor-pointer'
        onClick={handleCabinSelect}>
            {reservation.name}
    </div>
  </div>
  )
}

export default ReservationCard

