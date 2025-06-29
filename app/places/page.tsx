
'use client'

import { useEffect, useState } from "react"
import LoadingComponent from "../_components/LoadingComponent"
import SpinnerBoxJump from "../_components/SpinnerBoxJump"
import PlaceCard from "../_components/PlaceCard"

const  PlacesPage = () => {
    const [places, setPlaces] = useState<[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchAndSetPlaces = async() => {
        setIsLoading(true);
        const res = await fetch('/api/places/all-places');
        const data = await res.json();
        setPlaces(data.data)
        console.log(data)
        setIsLoading(false)
    }

    useEffect(()=> {
        fetchAndSetPlaces()
    }, [])

    if (isLoading) return (<div className="flex flex-col h-screen text-center justify-start items-center "><SpinnerBoxJump /></div>);
    if (!places) return (<div className="flex h-screen text-center justify-start items-center flex-col">Empty</div>);
    return <div className="w-full flex-col py-5 px-[20vw] gap-20 flex  justify-center items-center self-center">
            <div ><h1 className="font-bold text-3xl">All Places</h1></div>
            <div className=" flex flex-row gap-3 border-y-2 p-5 justify-center items-start border-gray-200 flex-wrap">
                {places?.map((place, idx) => {
                    return <PlaceCard key={idx} place={place}/>
                })}
            </div>
        </div>
}

export default PlacesPage