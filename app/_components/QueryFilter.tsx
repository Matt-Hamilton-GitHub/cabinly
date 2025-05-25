'use client'
import DatesInput from "./DatesInput"
import LocationInput from "./LocationInput"
import Button from "./Button"
import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type LocationInputType = {
  address: string | undefined,
  coordinates: {
  lat: string | undefined,
  lng: string | undefined} 
  
} | undefined



const QueryFilter = ({onRouting}) => {

  const [datesRange, setDatesRange] = useState<{from: Date, to: Date } | undefined>(undefined)
  const [capacity, setCapacity] = useState('1')
  const [location, setLocation] = useState<LocationInputType>(undefined)

  const router = useRouter();
  const pathname = usePathname();


const handleRouting = () => {

    const params = new URLSearchParams()

    if(capacity) params.set('capacity', capacity)
    if(datesRange?.from) params.set('from', datesRange.from.toString())
    if(datesRange?.to) params.set('to', datesRange.to.toString())
    if(location?.address) params.set('address',location.address)
    if(location?.coordinates.lat && location?.coordinates.lng){
      params.set('lat', location.coordinates.lat)
      params.set('lng', location.coordinates.lng)
    }

    const queryString = params.toString()
    router.push(`${pathname}?${queryString}`)
  
  }

useEffect(()=> {
  console.log(datesRange, capacity, location)
}, [datesRange, capacity, location])

  return (
    <div className="title-tag top-0 h-30 items-center justify-center group rounded flex-col gap-5 hidden sm:flex hover:h-35 transition-all duration-500">
        <form action="" onSubmit={(e) => e.preventDefault()} className="flex justify-end items-end flex-col gap-1 sm:flex-row sm:gap-4">
        <LocationInput location={location} setLocation={setLocation} />
        <DatesInput datesRange={datesRange} setDatesRange={setDatesRange}  />
        <input value={capacity} onChange={(e) => setCapacity(e.target.value)} type='number' placeholder="Capacity" min="1" className="p-1 text-[black] text-center border-white shadow-inner shadow-[#686868] bg-white rounded-3xl  w-[100px] hover:placeholder-[black]" />
        </form>
        <Button action='Search' onClick={handleRouting} color='orange' />
    </div>
  )
}

export default QueryFilter