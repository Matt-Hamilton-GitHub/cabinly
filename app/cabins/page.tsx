"use client";
import { use, useEffect, useState } from "react";
import CabinCard from "../_components/CabinCard";
import { MdForest } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";
import { Spinner } from "../_components/Spinner";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { TentTree } from "lucide-react";
import { PiMountainsBold } from "react-icons/pi";

import SpinnerBoxJump from "../_components/SpinnerBoxJump";
import QueryFilter from "../_components/QueryFilter";

export type CabinsType = {
  _id: string;
  title: string;
  price: number;
  rating: number;
  location: string;
  coordinates: { lat: number; lng: number };
  address: { city: string; state: string; zip_code: string; country: string };
  description: string;
  discount: number;
  capacity: number;
  beds: number;
  baths: number;
  reviews: number;
  amenities: string[];
  imageUrl: string;
  occupancy: number;
  tags: string[];
};

const Cabins = ({
  searchParams,
}: {
  searchParams: Promise<{
    capacity?: string;
    area?: string;
  }>;
}) => {
  const params = use(searchParams);
  const [cabins, setCabins] = useState<CabinsType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParam = useSearchParams();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParam.toString());
    setIsLoading(true);
    console.log(queryParams);
    fetch(`/api/cabins?${queryParams}`)
      .then((res) => res.json())
      .then((fetchedData) => {
        setCabins(fetchedData);
        console.log(fetchedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cabins:", error);
        setIsLoading(false);
      });
  }, [params]);

  console.log(cabins);

  return (
    <>
      <section className=" hero-gradient relative z-[300] transition-all  py-16 border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            id="page-title"
            className="font-display text-4xl md:text-5xl font-bold mb-3 animate-fadeInUp"
          >
            Find Your Perfect Cabin
          </h1>
          <p
            id="page-subtitle"
            className="text-lg text-gray-300 animate-fadeInUp delay-100"
          >
            Handpicked mountain retreats for your escape
          </p>
        </div>
      </section>

      <section className="py-8 bg-gradient-to-b from-neutral-950 to-black border-b border-orange-500/10">
        <QueryFilter />
      </section>

      <div className="relative mt-10 w-full ">
        {isLoading ? (
          <div className="flex w-full">
            <SpinnerBoxJump />
          </div>
        ) : cabins.length === 0 ? (
          <div className="absolute flex items-center justify-center text-black  w-full h-40">
            No cabins found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8gap-15 gap-10 p-10 px-[10%]">
            {cabins.map((cabin: CabinsType) => (
              <CabinCard cabin={cabin} key={cabin._id || crypto.randomUUID()} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cabins;
