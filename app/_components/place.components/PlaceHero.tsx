"use client";

import { useRouter } from "next/navigation";
import { MapPin, Star, ArrowLeft } from "lucide-react";
import Image from "next/image";
import TPlace from '@/app/places/page'




const PlaceHero = ({ place }) => {
  const router = useRouter();

  return (
    <section
      className="relative h-[60vh]
      flex flex-col justify-between px-8 py-6 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center  pointer-events-none ">
        <Image
          fill
          src={place.images_url[0]}
          alt={place.title}
          className="object-cover"
        />
      </div>

      {/* Top row — back button + badges */}
      <div className="relative flex items-center justify-between">
        <button
          onClick={() => router.push("/places")}
          className="flex items-center gap-2 text-[#e8f0ed]/80 text-xs font-medium
            px-4 py-2 rounded-full border border-[#e8f0ed]/20
            bg-[#e8f0ed]/10 hover:bg-[#e8f0ed]/15 transition-colors"
        >
          <ArrowLeft size={14} />
          All places
        </button>

        <div className="flex items-center gap-2">
          {place.badge && (
            <span
              className="text-[10px] font-semibold px-3 py-1.5 rounded-full
              bg-[#a8d5d0] text-[#0f3d3e]"
            >
              {place.badge}
            </span>
          )}
          <span
            className="flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5
            rounded-full bg-[#e8f0ed]/15 border border-[#e8f0ed]/20 text-[#e8f0ed]"
          >
            <Star size={11} className="fill-[#a8d5d0] text-[#a8d5d0]" />
            {place.rating}
            <span className="text-[#e8f0ed]/50">({place.reviewCount})</span>
          </span>
        </div>
      </div>

      {/* Bottom content — flag, title, location, tags */}
      <div className="relative flex flex-col flex-wrap">
        <span className="w-fit rounded-2xl text-3xl mb-3 p-2 bg-[#0000007a] border-[#0f3d3e] border-2">
          <Image
            src={`https://flagcdn.com/w40/${place.flag.toLowerCase()}.png`}
            alt={place.country}
            width={40}
            height={30}
            className="rounded-xl "
          />
        </span>

        <h1
          className=" w-fit font-serif text-[clamp(2rem,5vw,3.2rem)] leading-[1.1]
          text-[#fcfcfc] mb-3 bg-[#0f3d3e] p-2 rounded-md"
        >
          {place.title}
        </h1>

        <div
          className="flex items-center gap-1.5 text-[#e8f0ed]/60 text-sm
          font-light mb-4 bg-[#0000006a] p-2"
        >
          <MapPin size={13} className="text-[#ffffff]" />
          <span className="bg-white text-green-950 px-[5px] ">
            {place.region}
          </span>
          <span className="text-[#e8f0ed]">·</span>
          <span className="bg-white text-green-950 px-[5px] ">
            {place.country}
          </span>
          <span className="text-[#e8f0ed]">·</span>
          <span className="bg-white text-green-950 px-[5px] r">
            {place.continent}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full
                bg-[#e8f0ed]/10 border border-[#e8f0ed]/15 text-[#e8f0ed]
                font-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-10 block"
        >
          <path
            d="M0,60 L0,40 Q360,10 720,30 Q1080,50 1440,20 L1440,60 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default PlaceHero;
