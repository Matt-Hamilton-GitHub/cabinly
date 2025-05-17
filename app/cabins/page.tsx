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
import {queryFiltering} from '../_utils/utils'
import { TentTree } from 'lucide-react';
import { PiMountainsBold } from "react-icons/pi";

import filter_bg_img from '../_assets/title-1.jpg'

export type CabinsType = {
    _id: string,
    name: string,
    cabinID: string,
    price: number,
    rating: number,
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



    return (<div className="relative flex flex-col justify-start items-center min-h-[100vh] gap-15 transition-all">
        <div className="h-50 flex items-center  justify-center flex-col w-[100vw] bg-cover bg-no-repeat bg-[url('../../public/_assets/title-2-cut.jpg')]"></div>
        <div className="flex items-center justify-center flex-col w-[100vw]">
            <div className="w-100 my-5 flex justify-between items-center gap-10 cursor-pointer shadow-lg border-2 border-gray-200 p-1 px-3 rounded-3xl  ">
                <div className="m-1" onClick={() => handleRouting('area', 'beach')}> <TbBeach size={60} className={`${params?.area === 'beach' ? ' border-gray-500 text-amber-800 bg-[white] p-1 rounded-2xl  shadow-md border-2 border-b-blue-200 shadow-[grey]' : "text-cyan-700"}`} /></div>
                <div onClick={() => handleRouting('area', 'woods')}> <TentTree size={60} className={`${params?.area === 'woods' ? 'border-gray-500 text-amber-800 bg-[white] p-1 rounded-2xl  shadow-md border-2 border-b-blue-200 shadow-[grey]': "text-cyan-700"}`} /></div>
                <div onClick={() => handleRouting('area', 'urban')}> <FaTreeCity size={60} className={`${params?.area === 'urban' ? 'border-gray-500 text-amber-800 bg-[white] p-1 rounded-2xl  shadow-md border-2 border-b-blue-200 shadow-[grey]' : "text-cyan-700"}`} /></div>
                <div onClick={() => handleRouting('area', 'mountain')}> <PiMountainsBold size={60} className={`${params?.area === 'mountain' ? 'border-gray-500 text-amber-800 bg-[white] p-1 rounded-2xl  shadow-md border-2 border-b-blue-200 shadow-[grey]' : "text-cyan-700"}`} /></div>
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


        <div className="">

                {isLoading ? <Spinner /> : <div className="flex px-[5vw] flex-row justify-center items-center flex-wrap gap-15 ">
                    {cabins?.map((cabin: CabinsType) => {
                        return (
                                <CabinCard cabin={cabin} key={crypto.randomUUID()}/>
                        )
                    }
                    )}</div>}
        </div>
    </div>)
}

export default Cabins