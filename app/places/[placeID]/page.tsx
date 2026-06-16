"use client";

import { use,useEffect, useState } from "react";
import Image from "next/image";

import { PlaceType } from "../page";
import SpinnerBoxJump from "@/app/_components/SpinnerBoxJump";
import { useParams } from "next/navigation";


import PlaceHero from '@/app/_components/place.components/PlaceHero'
import PlaceStats from '@/app/_components/place.components/PlaceStats'
import PlaceAbout from '@/app/_components/place.components/PlaceAbout'
import CabinSelector from '@/app/_components/place.components/CabinSelector'
import ActivitySignup from '@/app/_components/place.components/ActivitySignup'
import GuideList from '@/app/_components/place.components/GuideCard'
import ReviewList from '@/app/_components/place.components/ReviewList'
import BookingSidebar from '@/app/_components/place.components/BookingSidebar'


const TripPage = ({ params }: { params: Promise<{ placeID: string }> }) => {
  const { placeID } = use(params)

  const [place, setPlace] = useState<PlaceType | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedCabinId, setSelectedCabinId] = useState('')
  const [signedActivityIds, setSignedActivityIds] = useState<string[]>([])

  useEffect(() => {
    if (!placeID) return
    const fetch_ = async () => {
      setIsLoading(true)
      const res = await fetch(`/api/places/${placeID}`)
      const data = await res.json()
      setPlace(data.place)
      console.log(data.place)
      setSelectedCabinId(data.place?.cabinsRef?.[0]?._id ?? '')
      setIsLoading(false)
    }
    fetch_()
  }, [placeID])

  if (isLoading) return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-[#0f3d3e]/40 text-sm">Loading...</p>
    </div>
  )

  if (!place) return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-[#0f3d3e]/40 text-sm">Place not found.</p>
    </div>
  )

  return (
    <main className="bg-white min-h-screen">
      <PlaceHero place={place} />
      <PlaceStats place={place} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px]
        divide-x divide-[#0f3d3e]/08">

        {/* Main content */}
        <div className="px-8 py-10 space-y-14">
          <PlaceAbout place={place} />
          <CabinSelector
            cabins={place.cabinsRef}
            selectedCabinId={selectedCabinId}
            onSelect={setSelectedCabinId}
          />
          <ActivitySignup
            activities={place.activities}
            signedIds={signedActivityIds}
            onToggle={(id) =>
              setSignedActivityIds((prev) =>
                prev.includes(id)
                  ? prev.filter((a) => a !== id)
                  : [...prev, id]
              )
            }
          />
          <GuideList guides={place.guides} />
          <ReviewList reviews={place.reviews} />
        </div>

        {/* Sidebar */}
        <div className="lg:block hidden">
          <BookingSidebar
            place={place}
            selectedCabinId={selectedCabinId}
            signedActivityIds={signedActivityIds}
            onCabinChange={setSelectedCabinId}
            onActivityChange={setSignedActivityIds}
          />
        </div>

      </div>
    </main>
  )
}

export default TripPage