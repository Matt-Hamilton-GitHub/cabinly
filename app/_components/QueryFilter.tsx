'use client'
import DatesInput from "./DatesInput"
import LocationInput from "./LocationInput"
import Button from "./Button"
import { useEffect, useState } from "react"
import { usePathname} from "next/navigation";
import { useRouter } from "next/navigation";

type LocationInputType = {
  address: string | undefined,
  coordinates: {
    lat: string | undefined,
    lng: string | undefined
  }

} | undefined

const QueryFilter = () => {

  const [datesRange, setDatesRange] = useState<{ from: Date, to: Date } | undefined>(undefined)
  const [capacity, setCapacity] = useState('1')
  const [location, setLocation] = useState<LocationInputType>(undefined)

  const router = useRouter();
  const pathname = usePathname();


  const handleRouting = () => {

    const params = new URLSearchParams()

    if (capacity) params.set('capacity', capacity)
    if (datesRange?.from) params.set('start', datesRange.from.toString())
    if (datesRange?.to) params.set('end', datesRange.to.toString())
    if (location?.address) params.set('address', location.address)
    if (location?.coordinates.lat && location?.coordinates.lng) {
      params.set('lat', location.coordinates.lat)
      params.set('lng', location.coordinates.lng)
    }

    
    const queryString = params.toString()
    // setLocation(undefined)
    router.push(`${pathname}?${queryString}`)
    
  }
  
  const handleShowAll = () => {

    setDatesRange(undefined);
    setCapacity('1');
    setLocation(undefined);

    router.push('/cabins')

  }

  useEffect(() => {
    console.log(datesRange, capacity, location)
  }, [datesRange, capacity, location])

  return (<div className="w-full pb-5 flex relative top-0  items-center justify-center group flex-col gap-5  transition-all duration-500">
    <form action="" onSubmit={(e) => e.preventDefault()} className="relative flex z-10 justify-center items-center flex-col gap-1 sm:flex-row sm:gap-4">
      <LocationInput location={location} setLocation={setLocation} />
      <DatesInput datesRange={datesRange} setDatesRange={setDatesRange} />
      <div className="relative flex flex-col items-center ">
        <label
          htmlFor='capacity-input' className=' bg-black w-20 text-center text-white block text-sm font-medium rounded-t-2xl'
        >Guests</label>
        <input id='capacity-input' value={capacity} onChange={(e) => setCapacity(e.target.value)} type='number' placeholder="Capacity" min="1" className="p-1 w-20 text-center border-2 border-black px-2 h-12 shadow-inner shadow-[#686868] bg-white rounded-b-3xl  hover:placeholder-[black]" />
      </div>
    </form>
    <Button isDisabled={false} action='Search' onClick={handleRouting} color='black' />
    <div className="flex flex-row justify-center text-sm text-white font-bold   ">
      <button onClick={handleShowAll}> <span className='relative bg-black px-1 border-2 text-white hover:cursor-pointer hover:text-[black] hover:bg-white hover:border-black 
         transition-all duration-500'>Show All</span></button>
    </div>
  </div>
  )
}

export default QueryFilter