"use client";

import { useEffect, useState } from "react";
import LoadingComponent from "../_components/LoadingComponent";
import SpinnerBoxJump from "../_components/SpinnerBoxJump";
// import PlaceCard from "../_components/PlaceCard";
import { CabinsType } from "../cabins/page";
import Image from "next/image";
import PlaceCard from "../_components/PlaceCard";

export type SeasonsType = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All year'

export type PlaceTagType =
  | 'Mountain'
  | 'Coastal'
  | 'Forest'
  | 'Desert'
  | 'Arctic'
  | 'Tropical'

export type ActivityType = {
  _id: string
  name: string
  description: string
  price: number
  duration: string
  difficulty: 'All levels' | 'Beginner' | 'Intermediate' | 'Advanced'
  maxPeople: number
  spotsLeft: number
  gearIncluded: boolean
}

export type GuideType = {
  _id: string
  name: string
  initials: string
  role: string
  bio: string
  yrsExp: number
  rating: number
  reviewCount: number
  tags: string[]
  imgUrl: string
}

export type ReviewType = {
  _id: string
  authorName: string
  authorInitials: string
  rating: number
  date: string
  body: string
}

export type AvailableDateType = {
  label: string
  from: string
  to: string
}

export type CabinType = {
  _id: string
  name: string
  description: string
  coordinates: number[]
  discount: number
  rating: number
  pricePerNight: number
  maxGuests: number
  amenities: string[]
  spotsLeft: number
  imageUrl: string
  tags: string[]
}

export type TPlace = {
  _id: string
  slug: string
  title: string
  type: string
  region: string
  country: string
  continent: string
  flag: string
  description: string
  images_url: string
  tags: PlaceTagType[]
  seasons: SeasonsType[]
  badge?: 'Popular' | 'New' | 'Trending'
  rating: number
  price: number
  reviewCount: number
  travellers: number
  cabinsRef: CabinType[]
  activities: ActivityType[]
  guides: GuideType[]
  reviews: ReviewType[]
  availableDates: AvailableDateType[]
  coordinates: {
    lat: number
    lng: number
  }
}


const FILTER_OPTIONS = {
  countries: [
    "All",
    "Switzerland",
    "Norway",
    "Argentina",
    "Indonesia",
    "Morocco",
    "Scotland",
  ],
  types: [
    "All",
    "Mountain",
    "Coastal",
    "Forest",
    "Desert",
    "Arctic",
    "Tropical",
  ],
  seasons: ["All year", "Spring", "Summer", "Autumn", "Winter"],
  activities: [
    "All",
    "Hiking",
    "Skiing",
    "Kayaking",
    "Cycling",
    "Wildlife",
    "Cultural",
    "Climbing",
  ],
};

const FilterRow = ({ label, options, active, onChange }: {
  label: string
  options: string[]
  active: string
  onChange: (v: string) => void
}) => (
  <div className="flex items-center gap-3 flex-wrap">
    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#a8d5d0] shrink-0">
      {label}
    </span>
    <div className="flex gap-1.5 flex-wrap">
      {options.map(o => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`text-xs px-3 py-1 rounded-full border transition-all ${
            active === o
              ? "bg-[#0f3d3e] text-[#e8f0ed] border-[#0f3d3e]"
              : "bg-white text-[#0f3d3e] border-[#0f3d3e]/15 hover:border-[#a8d5d0]"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  </div>
)

const PlacesPage = () => {
  const [places, setPlaces] = useState<TPlace[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    country: "All",
    type: "All",
    season: "All year",
    activity: "All",
  });

  const setFilter = (key: string) => (val: string) =>
    setFilters((f) => ({ ...f, [key]: val }));

    const filtered = places.filter(p => {
    if (filters.country !== "All" && p.country !== filters.country) return false
    if (filters.type !== "All" && p.type !== filters.type) return false
    if (filters.season !== "All year" && !p.seasons.includes(filters.season)) return false
    if (filters.activity !== "All" && !p.activities.includes(filters.activity)) return false
    return true
  }
)

  const fetchAndSetPlaces = async () => {
    setIsLoading(true);
    const res = await fetch("/api/places/all-places");
    const data = await res.json();
    setPlaces(data.places);
    console.log(data.places);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAndSetPlaces();
  }, []);

  if (isLoading)
    return (
      <div className="flex flex-col h-screen text-center justify-start items-center ">
        <SpinnerBoxJump />
      </div>
    );
  if (!places)
    return (
      <div className="flex h-screen text-center justify-start items-center flex-col">
        Empty
      </div>
    );
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-8">
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#a8d5d0] mb-2">
          Explore the world
        </p>
        <h1 className="font-serif text-4xl text-[#0f3d3e]">
          All Places <span className="text-lg text-gray-400 font-sans font-normal ml-2">
            {filtered.length} destinations
          </span>
        </h1>
      </div>

      {/* Filters */}
      <div className="bg-[#f8faf9] border border-[#0f3d3e]/10 rounded-2xl p-5 mb-8 space-y-4">
        <FilterRow label="Country" options={FILTER_OPTIONS.countries}
          active={filters.country} onChange={setFilter("country")} />
        <FilterRow label="Type" options={FILTER_OPTIONS.types}
          active={filters.type} onChange={setFilter("type")} />
        <FilterRow label="Season" options={FILTER_OPTIONS.seasons}
          active={filters.season} onChange={setFilter("season")} />
        <FilterRow label="Activities" options={FILTER_OPTIONS.activities}
          active={filters.activity} onChange={setFilter("activity")} />
      </div>

      {/* Sort bar */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-400">
          <strong className="text-[#0f3d3e] font-medium">{filtered.length}</strong> places found
        </p>
        <select className="text-xs px-3 py-1.5 border border-[#0f3d3e]/15
          rounded-lg text-[#0f3d3e] bg-white">
          <option>Sort: Most popular</option>
          <option>Sort: Price low–high</option>
          <option>Sort: Price high–low</option>
          <option>Sort: Most activities</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length > 0 ?
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p, idx) => <PlaceCard key={idx} place={p} />)}
      </div> : <div className="flex w-full  text-gray-600 justify-center items-center h-110"><h1>Empty</h1></div>
      }
    </main>
 
  );
};

export default PlacesPage;
