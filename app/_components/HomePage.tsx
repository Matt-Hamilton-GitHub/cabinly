'use client'

import Link from "next/link"
import * as motion from "motion/react-client"
import DiscoverPlaceCard from "./DiscoverPlaceCard"
import places from '../../public/_assets/places-info/places'
import { useState } from "react"

const HomePage = () => {
  const [showMore, setShowMore] = useState(false)
  
  return (
    <>

      <div className="mb-50 relative flex z-10 flex-col justify-start items-center shadow-xs shadow-[black]">
        <div className="w-full relative p-10 text-center text-[white] flex flex-col justify-start items-center bg-[black] h-150 gap-10">
          <h1 className="text-5xl space-grotesk font-bold text-outline-shadow ">
            Wake Up Where the World Feels Wide Open.
          </h1>
          <div className="w-full flex h-[500px] relative bg-cover bg-center bg-no-repeat bg-[url('../../public/_assets/title-2-cut.jpg')]"></div>
        </div>

        <div className="w-full flex flex-col">
        <div className="absolute flex -z-4 top-144 left-[320px] justify-center items-center w-[100px] h-[120px] rounded-[300px] text-[white] bg-[black] rounded-t-2xl  hover:h-[160px] hover:text-[black] transition-all duration-450 ease-in flex-col shadow-lg shadow-[gray]">
          <button className="relative font-[500]  text-[white] p-3 rounded-[300px] rounded-t-2xl hover:cursor-pointer text-wrap"><Link href='/cabins'>Find a Cabin</Link></button>
        </div>
        <div className="absolute left-[250px] flex -z-10 top-144 justify-center items-center w-[80px] h-[120px] rounded-[300px] text-[white] bg-[green] rounded-t-2xl  hover:h-[160px] hover:-z-3 hover:text-[black] transition-all duration-450 ease-in flex-col shadow-lg shadow-[gray]">
          <button className="relative  font-[500]  text-[white] p-3 rounded-[300px] rounded-t-2xl hover:cursor-pointer text-wrap"><Link href='/groups'>Join a Group</Link></button>
        </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col pb-300 ">
        <div className="my-20 flex justify-center items-center w-[100%]">
          <h1 className="font-bold text-2xl border-3 px-10 rounded-xl hover:text-[white] hover:bg-[black]">Top Places to Explore This Year</h1>
        </div>

        <div className="
                        flex justify-center items-center flex-wrap flex-col">
                          <div className="flex flex-row justify-evenly items-start flex-wrap gap-20">

                          {places.slice(0,3).map((place) =>{
                            return <DiscoverPlaceCard place={place} key={crypto.randomUUID()} />
                          })}
                          </div>
              {/* <div onClick={()=> setShowMore(!showMore)}>

              {!showMore ? <span className="text-[black] text-[100px]">...</span> : <span className="text-[black] text-[100px]">less</span>}
              </div> */}
        </div>
      </div>


    </>
  )
}

export default HomePage