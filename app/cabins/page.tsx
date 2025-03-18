"use client"
import { useEffect, useState } from "react"
import CabinCard from "../_components/CabinCard"
import { MdForest } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";
import { Spinner } from "../_components/Spinner";

export type CabinsType = {
    name: string,
    price: number,
    description: string,
    discount: number,
    imageUrl: string,
    occupancy: number,
    tags: string[]
}


const Cabins = () => {

    const [cabins, setCabins] = useState<CabinsType[]>([])
    const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            setIsLoading(true)
        fetch('/api/cabins')
            .then((res) => res.json())
            .then((data) => setCabins(data))

            setIsLoading(false)
    }, [])

    return (<div className="relative flex flex-col pt-10 justify-start items-center h-screen gap-15 ">
        <div className="m-3 flex justify-between items-center gap-20 cursor-pointer border-2 p-2.5 border-blue-100 rounded-xl">
            <TbBeach size={50} color={'#143D60'} />
            <MdForest size={50} color={'#143D60'} />
            <FaTreeCity size={50} color={'#143D60'} />
        </div>

        <div className="flex flex-row justify-center items-center flex-wrap gap-15 w-full ">
        {isLoading ? <Spinner /> :<>
            {cabins.map((cabin: CabinsType, idx: number) => {
                return (
                    <div key={idx} className="">
                        <CabinCard cabin={cabin} />

                    </div>
                )
            }
            )}</>}
        </div>
    </div>)
}


export default Cabins