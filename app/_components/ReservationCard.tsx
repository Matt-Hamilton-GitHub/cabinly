
import { BookmarkCheck } from 'lucide-react';
import { useRouter } from "next/navigation"
import { BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '../_utils/utils';

function ReservationCard({ reservation }) {

  const router = useRouter()

  const handleCabinSelect = () => {
    router.push(`/cabins/${reservation.cabinID}`)
  }

  const reservationId = reservation._id
  return (
    <div className='relative w-full flex basis-1 flex-row items-center justify-between p-2 gap-2.5 rounded-xl  text-[white] bg-[black]'>
      <div
        className=' flex justify-center items-center flex-row flex-wrap
                    text-bold '
        onClick={handleCabinSelect}>

        <div className='flex flex-row justify-center items-center flex-wrap
                        max-w-150 '>
          <BadgeCheck className={`text-[${reservation &&'orange'}]`}/>
          <h4 className='text-2xl font-bold text-center border-r-2 px-2'>{reservation.name} </h4>
          <span className='px-2'>{`${formatDate(reservation.range.from)} - ${formatDate(reservation.range.to)}`} </span>
        </div>
      </div>
      <Link href={`account/reservations/${reservationId}`} className=' px-2 bg-[black] rounded-2xl font-bold text-white hover:bg-black hover:cursor-pointer' >
        <span className='h-full '>
          Edit
        </span>
      </Link>
    </div>
  )
}

export default ReservationCard

