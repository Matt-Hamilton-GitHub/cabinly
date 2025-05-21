'use client'
import Image from "next/image"
import { useState } from "react"
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';

import * as motion from "motion/react-client"
import Link from "next/link";

const DiscoverPlaceCard = ({place}) => {

    const [showGuides, setShowGuides] = useState(false)
  return (
    <motion.div
     initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{  duration: 0.09, delay: 0.2 }}
    viewport={{ once: true, amount:0.5 }}

     className="z-0 transition-all duration-150 ease-in-out ">
     <div className="flex items-center justify-start ">
        <span className="text-[green] font-bold bg-[black] cursor-pointer 
        rounded-t-md px-2">{place.country}</span>
        <h2
        className="text-[white] font-bold bg-[black] cursor-pointer 
        rounded-t-md px-2">{place.name}</h2>
    </div>

          <div className="relative w-[500px]  border-4  
          flex justify-start items-start flex-row bg-[black]">
            <Image 
            width={200}
            height={50}
            src={place.img_url}
            alt={`${place.name}`}
            className="saturate-70 relative bottom-[2px] right-[2px] 
            object-cover object-center 
            rounded-br-[400px] border-2 border-[black]
            hover:saturate-150" />
            <div className="flex justify-center items-centertext-[black] flex-col  text-[white] bg-[black] p-2">
                <h2>{place.place_description}</h2>
                <div className="flex justify-start text-[black] flex-col w-[100%] my-4 -mx-7 ">
                    <span className="font-bold text-[white] rounded-md px-1 w-[100%]">Seasons:</span>
                    <div className="flex justify-start flex-row basis-full gap-2 flex-wrap">
                        {place?.seasons.map((item) => {
                            return <span className="bg-[green] px-2 hover:cursor-pointer" key={crypto.randomUUID()}>{item.season}</span>
                        })}
                    </div>
                </div>
                    <div className="absolute w-15 border-r-2 border-b-2 p-3  bottom-[-3px] right-[-3px] rounded-tl-3xl shadow-inner shadow-[gray] bg-[white] text-[black] 
                    hover:shadow-[black] hover:cursor-pointer ">
                        <Link href={`/trips/${place.id}`}>
                            Learn More
                        </Link>
                    </div>
            </div>

            <div className="absolute top-[-25px] right-[-3.5px] flex justify-center items-end flex-col basis-[140px]">
                    <div className="flex w-[140px]  justify-center items-center font-bold mb-1 bg-[black]  text-[white] rounded-t-md px-2">
                        <h3>Guides </h3><span className="hover:cursor-pointer" onClick={()=> setShowGuides(!showGuides)}>{showGuides ?  <ChevronUp /> : <ChevronDown /> }
                        </span>
                        </div>
                    
                    <div className={` ${showGuides ? '' : 'hidden'}
                    absolute w-[140px] top-[25px] z-100
                    flex flex-col p-2 justify-center items-center border-r-4 bg-[white] gap-1`}>{place.guides.map((guide: string) => {
                        return <motion.span 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        
                        className="border-2 bg-amber-300 w-[130px] rounded-2xl text-center font-bold" key={crypto.randomUUID()}>{guide}</motion.span>
                    })}</div>
            </div>
          </div>
    </motion.div>
  )
}

export default DiscoverPlaceCard