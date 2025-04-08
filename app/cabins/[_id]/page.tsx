/* eslint-disable @typescript-eslint/no-explicit-any */
import {getCabinById } from "@/app/lib/handlers/cabinHandlers"
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";
import { CabinsType } from "../page";
import DataSelector from '@/app/_components/DataSelector'


export type CabinDetailsProps = {
    params: {
        _id: string;
    }
}
export async function generateMetadata({ params }: any) {
    const getParams = await params
    const cabin = await getCabinById(getParams._id)
    return {
        title: `Cabinly/${cabin ? cabin.name : 'unknown'}`
    }
}

const CabinDetails = async ({ params }: any) => {
    try {
        const { _id } = await params;
        const cabin: CabinsType | null = await getCabinById(_id); 
        if (!cabin) {
            return (<div className="h-screen w-lvw flex justify-center items-center">
                <h1 className="text-3xl">
                    Cabin not found
                </h1 >
            </div >)
        }
        const { name, occupancy, description, price, discount, imageUrl } = cabin;

        return (
            <section className=" h-lvh w-9/12 ms-2 mt-5 flex flex-col gap-4">
                <h1 className="text-amber-800 text-4xl text-start font-bold ">{name}</h1>
                <div className="flex flex-row justify-start items-center gap-1.5">
                    <FaPeopleGroup size={20} />
                    <h2 className="text-xl">Fit for up to <strong>{occupancy}</strong> guests</h2>
                </div>
                <div className=" relative w-full obj h-5/12">
                    <Image
                        src={imageUrl}
                        alt='beatiful cabin'
                        fill
                        className="object-cover rounded-sm"
                    />
                </div>
                <h5>{description}</h5>
                <span className="w-full flex flex-row justify-end pt-3.5 gap-1">
                    {discount !== 0 && <span><h1 className="text-1xl line-through">${price}</h1></span>}
                    <h1 className="text-2xl ">${price - discount} /night</h1>
                </span>
                <DataSelector />
            </section>
        );
    } catch (error) {
        console.error("Error fetching cabin:", error);
        return <div className="h-lvh w-lvw">Cabin not found...</div>;
    }
}
export default CabinDetails;
