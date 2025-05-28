"use client"
import { use, useEffect, useState } from "react"
import CabinCard from "../_components/CabinCard"
import { MdForest } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";
import { Spinner } from "../_components/Spinner";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TentTree } from 'lucide-react';
import { PiMountainsBold } from "react-icons/pi";

import SpinnerBoxJump from "../_components/SpinnerBoxJump";
import QueryFilter from "../_components/QueryFilter";

export type CabinsType = {
    _id: string,
    title: string,
    price: number,
    rating: number,
    location: string,
    coordinates: {lon: number, lng: number},
    address: {city: string, state: string, zip_code: string, country: string},
    description: string,
    discount: number,
    imageUrl: string,
    occupancy: number,
    tags: string[]
}



const Cabins = ({ searchParams }: {
    searchParams: Promise<{
        capacity?: string,
        area?: string

    }>

}) => {
    const params = use(searchParams)
    const [cabins, setCabins] = useState<CabinsType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const pathname = usePathname()
    const searchParam = useSearchParams()
    const router = useRouter()



    useEffect(() => {
        const queryParams = new URLSearchParams(searchParam.toString())
        setIsLoading(true);
        fetch(`/api/cabins?${queryParams}`)
            .then((res) => res.json())
            .then((fetchedData) => {
                setCabins(fetchedData)
                console.log(fetchedData)
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching cabins:', error);
                setIsLoading(false);
            });
    }, [params]);

    // potential query filters 

    //from  - to
    // price 
    // type

    



    return (<div className="relative z-300 flex flex-col justify-start items-center transition-all">
        <div className="relative z-300 h-50 flex items-center  justify-center flex-col w-[100vw] border-y-4 bg-cover bg-center bg-no-repeat bg-[url('../../public/_assets/mountain.jpg')]"></div>
        <div className="relative p-10 z-0 flex items-center justify-center flex-col w-full ">         
            <QueryFilter />
        </div>

        <div className="relative mt-30">
            {isLoading ? <div className="flex w-full "><SpinnerBoxJump /></div> : <div className="flex px-[5vw] flex-row justify-center items-center flex-wrap gap-15 ">
                {cabins?.map((cabin: CabinsType) => {
                    return (
                        <CabinCard cabin={cabin} key={crypto.randomUUID()} />
                    )
                }
                )}</div>}
        </div>
    </div>)
}

export default Cabins