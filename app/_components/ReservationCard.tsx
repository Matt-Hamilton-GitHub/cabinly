
import { BookmarkCheck } from 'lucide-react';
import { useRouter } from "next/navigation"


function ReservationCard({reservation}) {

    const router = useRouter()

    const handleCabinSelect = () => {
        router.push(`/cabins/${reservation.cabinID}`)
    }
    
  return (
    <div   className='flex w-50 items-center justify-start p-2 gap-2.5 rounded-xl bg-zinc-300 hover:cursor-pointer'>
      <BookmarkCheck color={'green'}/>
    <div 
        className='flex '
        onClick={handleCabinSelect}>
            {reservation.name}
    </div>
          </div>
  
  )
}

export default ReservationCard

