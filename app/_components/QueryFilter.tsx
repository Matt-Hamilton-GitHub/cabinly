import Link from "next/link"
import DatesInput from "./DatesInput"
import LocationInput from "./LocationInput"


const QueryFilter = () => {
    
  return (
    <div className="title-tag top-0 h-15 items-end justify-end group rounded flex-col hidden sm:flex hover:h-[70px] transition-all duration-500">
        <form action="" className="flex justify-end items-end flex-col gap-1 sm:flex-row sm:gap-4">
        <LocationInput />
        <DatesInput />
        <input type='number' placeholder="Capacity" min="1" className="p-1 text-[black] text-center border-white shadow-inner shadow-[#686868] bg-white rounded-3xl  w-[100px] hover:placeholder-[black]" />
        </form>
        
    </div>
  )
}

export default QueryFilter