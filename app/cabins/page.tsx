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
import { queryFiltering } from '../_utils/utils'
import { TentTree } from 'lucide-react';
import { PiMountainsBold } from "react-icons/pi";

import filter_bg_img from '../_assets/title-1.jpg'
import SpinnerBoxJump from "../_components/SpinnerBoxJump";

export type CabinsType = {
    _id: string,
    name: string,
    cabinID: string,
    price: number,
    rating: number,
    location: string,
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


    const handleRouting = (k: string, v: string) => {
        const filterParams = new URLSearchParams(searchParam.toString())

        filterParams.set(k, v)
        const newPath = `${pathname}?${filterParams.toString()}`
        console.log(newPath)
        router.push(newPath)
    }

    useEffect(() => {


        setIsLoading(true);
        fetch('/api/cabins')
            .then((res) => res.json())
            .then((fetchedData) => {
                setCabins(() => queryFiltering(fetchedData, params));
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

    `s/Los-Angeles/one_week&
    monthly_start_date=2025-06-01&
    monthly_length=3&monthly_end_date=2025-09-01&
    price_filter_input_type=2&channel=EXPLORE&
    refinement_paths%5B%5D=%2Fhomes&
    place_id=ChIJE9on3F3HwoAR9AhGJW_fL-I&date_picker_type=calendar&checkin=2025-06-17&
    checkout=2025-06-25&children=1&adults=2&source=structured_search_input_header&search_type=AUTOSUGGEST`



    return (<div className="relative flex flex-col justify-start items-center gap-15 transition-all">
        <div className="h-50 flex items-center  justify-center flex-col w-[100vw] border-y-4 bg-cover bg-center bg-no-repeat bg-[url('../../public/_assets/mountain.jpg')]"></div>
        <div className="flex items-center justify-center flex-col w-[100vw]">
            <div className="w-100 my-5 flex justify-between items-center gap-10 cursor-pointer shadow-[gray] shadow-lg  p-1 px-3 rounded-3xl border-[white] ">
                <div className="m-1" onClick={() => handleRouting('area', 'beach')}> <TbBeach color={'black'} size={60} className={`${params?.area === 'beach' ? 'border-gray-400 text-cyan-700 bg-[white] p-1 rounded-2xl  shadow-md border-2 ' : "text-[black]"}`} /></div>
                <div onClick={() => handleRouting('area', 'woods')}> <TentTree color={'black'} size={60} className={`${params?.area === 'woods' ? 'border-gray-400 text-cyan-700 bg-[white] p-1 rounded-2xl  shadow-md border-2 ' : "text-[black]"}`} /></div>
                <div onClick={() => handleRouting('area', 'urban')}> <FaTreeCity color={'black'} size={60} className={`${params?.area === 'urban' ? 'border-gray-400 text-cyan-700 bg-[white] p-1 rounded-2xl  shadow-md border-2 ' : "text-[black]"}`} /></div>
                <div onClick={() => handleRouting('area', 'mountain')}> <PiMountainsBold color={'black'} size={60} className={`${params?.area === 'mountain' ? 'border-gray-400 text-cyan-700 bg-[white] p-1 rounded-2xl  shadow-md border-2 ' : "text-[black]"}`} /></div>
            </div>
            <div className="flex flex-row justify-between">
                <div onClick={() => handleRouting('capacity', 'small')}> <span className={`p-1.5 ${params?.capacity === 'small' ? 'bg-sky-600 text-white rounded-xl' : "text-[#143D60]"}`}>2 - 3 guests</span></div>
                <div onClick={() => handleRouting('capacity', 'mid')}><span className={`p-1.5 ${params?.capacity === 'mid' ? 'bg-sky-600 text-white rounded-xl' : "text-[#143D60]"}`}>4 - 6 guests</span></div>
                <div onClick={() => handleRouting('capacity', 'large')}><span className={`p-1 ${params?.capacity === 'large' ? 'bg-sky-600 text-white rounded-xl' : "text-[#143D60]"}`}> 7 - 12 guests</span></div>
            </div>
            <div className="flex flex-row justify-center m-2.5 text-xl text-amber-900">
                <Link href='/cabins'> <span className='text-amber-900 hover:cursor-pointer'>Show All</span></Link>
            </div>
        </div>

        <div className="relative">
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