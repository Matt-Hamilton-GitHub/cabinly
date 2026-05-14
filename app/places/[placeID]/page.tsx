"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { TPlace } from "@/app/places/page";
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump";
import { useParams } from "next/navigation";
import PlaceHero from "@/app/_components/place-components/PlaceHero";
import PlaceAbout from "@/app/_components/place-components/PlaceAbout";


const PlacePage = () => {
  const  params = useParams<{placeID: string}>()
  
  const {placeID} = params

  const [placeDetails, setPlaceDetails] = useState<TPlace>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchAndSetPlace = async (id: string) => {
    setIsLoading(true);
    const res = await fetch(`/api/places/${id}`);
    const data = await res.json();
    setPlaceDetails(data.place);
    console.log(placeDetails)
    setIsLoading(false);
  };

  useEffect(() => {

    console.log(placeID)
    // if(!params.placeID) return ;
    fetchAndSetPlace(placeID);
  }, [placeID]);

  console.log(placeDetails)

  if (isLoading) {
    return (
      <div className="flex flex-col h-screen justify-start items-center">
        <SpinnerBoxJump />
      </div>
    );
  }

  if (!placeDetails) {
    return (
      <div className="flex h-screen justify-start items-center flex-col text-black">
        Empty
      </div>
    );
  }

  return (
    <>
    <PlaceHero place={placeDetails} />
    <PlaceAbout place={placeDetails} />
    </>
  );
};

export default PlacePage;