'use client'

import { use } from 'react';
import { useState, useEffect } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import Image from "next/image";
import DateSelector from '@/app/_components/DataSelector';
import { CabinsType } from "../page";

import { handleReserve } from '@/app/_utils/utils';
import { useUserContext } from "@/app/contexts/UserContext";
import { DateRange } from 'react-day-picker';
import { Mountain, Star } from 'lucide-react';
import { ArrowBigLeft } from 'lucide-react';

import { Wifi } from 'lucide-react';
import { Bike } from 'lucide-react';
import { Church } from 'lucide-react';
import { Coffee } from 'lucide-react';
import { Feather } from 'lucide-react';
import { Flower2 } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { MountainSnow } from 'lucide-react';
import { ShowerHead } from 'lucide-react';
import { Bath } from 'lucide-react';
import { Thermometer } from 'lucide-react';
import { Wine } from 'lucide-react';
import { Soup } from 'lucide-react';

import Link from 'next/link';
import SpinnerBoxJump from '@/app/_components/SpinnerBoxJump';
import DisplayTotal from '@/app/_components/DisplayTotal';

import places from '../../../public/_assets/places-info/places'
import DisplaySeasonalActivitites from '@/app/_components/DisplaySeasonalActivitites';
import DisplayActivities from '@/app/_components/DisplayActivities';
import LoadingComponent from '@/app/_components/LoadingComponent';
import CabinMap from '@/app/_components/GoogleMaps';



export default function CabinDetails({ params }: { params: Promise<{ cabinId: string }> }) {
  const { cabinId } = use(params);


  const [cabin, setCabin] = useState<CabinsType>();
  const [selectedRange, setSelectedRange] = useState<DateRange | undefined>();
  const [unavailableDates, setUnavailableDates] = useState<DateRange[]>([]);
  const { user } = useUserContext();



  useEffect(() => {
    const fetchCabin = async () => {
      const res = await fetch(`/api/cabins/${cabinId}`);
      const json = await res.json();
      setCabin(json.data);
    };
    fetchCabin();
  }, [cabinId]);


  useEffect(() => {
    const fetchUnavailable = async () => {
      const res = await fetch(`/api/reservations/availability?cabinId=${cabinId}`);
      const data = await res.json();
      setUnavailableDates(data.cabinUnavailable || []);
    };
    if (cabinId) fetchUnavailable();
  }, [cabinId]);


  const isValidRange = (range: DateRange | undefined): boolean => {
    if (!range?.from || !range?.to) return false;
    if (!unavailableDates) return true

    const userFrom = range.from.getTime();
    const userTo = range.to.getTime();

    return !unavailableDates.some(d => {
      if (!d.from || !d.to) return false;
      const from = new Date(d.from).getTime();
      const to = new Date(d.to).getTime();
      return userFrom <= to && userTo >= from;
    });
  };

  const getActivitiesBySeason = (placeId: number) => {
    const seasonalActivities = places[placeId].seasons

    console.log(seasonalActivities)
    return seasonalActivities
  }

  if (!cabin) return (<div className="flex text-center justify-start items-center flex-col"><LoadingComponent /></div>);

  console.log(cabin)
  const { title, occupancy, description, price, discount, imageUrl, rating, location, coordinates } = cabin;
  return (
    <section className=" relative w-full
    flex flex-col justify-center items-center ">
      <div className="relative w-full h-[500px] border-y-10">
        <Image
          src={imageUrl}
          alt="beautiful cabin"
          fill
          className="object-cover rounded-sm"
          placeholder="blur"
          quality={50}
          blurDataURL='../../public/_assets/icon.png'
        />
      </div>
      <span className="absolute top-100 bg-[white] p-2 rounded-3xl shadow-[gray] shadow-md flex flex-row justify-center items-center gap-1 
                           hover:text-[white] hover:bg-[black]">
        <Star className='text-[orange]' />
        {discount !== 0 && (
          <span className=''>
            <h1 className="text-1xl line-through">${price}</h1>
          </span>
        )}
        <h1 className="text-2xl">${price - discount} /night</h1>
      </span>

      <span className='absolute top-[10px] left-0 rounded-br-3xl bg-[black] p-2 shadow-inner border-r-2 border-b-2 shadow-[black] transition-all duration-500'>
        <Link href='/cabins'>
          <ArrowBigLeft className='stroke-white fill-[white] hover:scale-110 hover:cursor-pointer' size={40} />
        </Link>
      </span>

      <section className='flex justify-start items-center flex-col w-full gap-5 '>

        <div className='mb-6 flex w-full justify-center flex-row items-center '>
          <h1 className="p-2 rounded-b-2xl text-center text-[orange] text-4xl font-bold bg-[black] shadow-md shadow-[gray] hover:bg-[orange] hover:text-[black] transition-all duration-500">
            {title}</h1>
        </div>

        <div className='flex justify-start items-start flex-col w-full p-5 gap-2 border-b-1 border-[#e1e0e0] '>
          <h4 className='font-bold  text-2xl'> <span></span>Entire guest suite in {location}</h4>
          <p className='bg-black text-white p-1  rounded-sm text-center'><span className='font-bold pr-4'>4 guests : </span> 1 bedroom - 2 beds - 1 bath</p>
        </div>


        <div className='flex justify-start items-start flex-col w-full p-2'>
          <p className='px-5 text-left'>{description}</p>
        </div>
        
        <>
          <h1 className=' mb-5 text-2xl font-[700]'>What's Included: </h1>
          <div className='flex  flex-row w-full mx-6 border-b-1 border-[#e1e0e0] gap-3 '>
            <div className='flex p-3 gap-3 items-center justify-center flex-col flex-wrap basis-1/4 font-bold'>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Wifi /></span><h3>The Internet Access</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Bike /></span><h3>Bike Routes</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Coffee /></span><h3>Coffee Machine</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><MountainSnow /></span><h3>Magnificent Mountain View</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Bath /></span><h3>Big Bathtub</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Soup /></span><h3>Oragnic Delicious Meals</h3></div>
              <div className='flex w-full flex-row gap-5 hover:text-[orange]'><span><Flower2 /></span><h3>Garden Access</h3></div>
            </div>
            {cabin.coordinates ?
              <div className='w-full flex  '><CabinMap locationProp={coordinates} /></div> : null
            }
          </div>
        </>
        <div className='flex justify-start items-start flex-col w-full p-6 border-b-1 border-[#e1e0e0] gap-5'>
          <h1 className='mb-5 text-2xl font-[700]'>Activities & Groups :</h1>
          <DisplayActivities cabinID={cabinId} />

        </div>
      </section>


      <div className='my-20'>

        <DateSelector
          selected={selectedRange}
          onChange={setSelectedRange}
          disabledRanges={unavailableDates}
        />
      </div>
      <div className='w-full flex justify-center items-center flex-col gap-x-5'>
        <div className='bg-[black] px-2 rounded-2xl'>
          {!isValidRange(selectedRange) && selectedRange ? <span className='text-[red]'>Invalid Selection</span> : null}
        </div>
      </div>
      <div className='fixed  bottom-0 z-3000 rounded-2xl w-full shadow-md shadow-[black] bg-white flex justify-center items-center '>

        <button
          className={` ${isValidRange(selectedRange) ? "hover:cursor-pointer" : "hover:cursor-not-allowed"} p-2 m-5 rounded-2xl bg-[white] text-[black] hover:bg-[black] hover:text-[white] border-3`}
          onClick={() => handleReserve(user, selectedRange, isValidRange, cabin, unavailableDates, setSelectedRange)}
          disabled={!selectedRange?.from || !selectedRange?.to || !isValidRange(selectedRange)}>Reserve</button>
        <DisplayTotal discount={discount} price={price} duration={selectedRange} />
      </div>


    </section>
  );
}
