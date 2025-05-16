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

    const handleFiltering = (fetchedData) => {
        // CAPACITY filter 
        if (params?.capacity === 'small') {
            // console.log(fetchedData.filter(item => item.occupancy <= 4))
            fetchedData = fetchedData.filter(item => item.occupancy < 4);
        } else if (params?.capacity === 'mid') {
            fetchedData = fetchedData.filter(item => item.occupancy >=4 && item.occupancy <= 6);
        } else if (params?.capacity === 'large') {
            fetchedData = fetchedData.filter(item => item.occupancy > 6);
        }

        // AREA Filter
        if (params?.area === 'woods') {
            fetchedData = fetchedData.filter(item => item.tags.includes('forest'))
        }
        else if (params?.area === 'beach') {
            fetchedData = fetchedData.filter(item => item.tags.includes('beach'))
        }
        else if (params?.area === 'urban') {
            fetchedData = fetchedData.filter(item => item.tags.includes('urban'))
        }

        return fetchedData;
    }
    useEffect(() => {

        setIsLoading(true);
        fetch('/api/cabins')
            .then((res) => res.json())
            .then((fetchedData) => {
                setCabins(() => handleFiltering(fetchedData));
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching cabins:', error);
                setIsLoading(false);
            });
    }, [params]);



    return (<div className="relative flex flex-col pt-10 justify-start items-center h-screen gap-15 ">
        <div>
            <div className="m-3 flex justify-between items-center gap-20 cursor-pointer border-2 p-2.5 border-blue-100 rounded-xl">
                <div onClick={() => handleRouting('area', 'beach')}> <TbBeach size={50} className={`${params?.area === 'beach' ? 'text-amber-800' : "text-gray-500"}`} /></div>
                <div onClick={() => handleRouting('area', 'woods')}> <MdForest size={50} className={`${params?.area === 'woods' ? 'text-amber-800' : "text-gray-500"}`} /></div>
                <div onClick={() => handleRouting('area', 'urban')}> <FaTreeCity size={50} className={`${params?.area === 'urban' ? 'text-amber-800' : "text-gray-500"}`} /></div>
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


        <div className="w-[80vw]">

                {isLoading ? <Spinner /> : <div className="flex flex-row justify-start items-start flex-wrap gap-15 w-full ">
                    {cabins?.map((cabin: CabinsType, idx: number) => {
                        return (
                            <div key={idx} className="m-0 p-0">
                                <CabinCard cabin={cabin} />
                            </div>
                        )
                    }
                    )}</div>}
        </div>
    </div>)
}

export default Cabins