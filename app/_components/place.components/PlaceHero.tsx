"use client";

import { useRouter } from "next/navigation";
import { MapPin, Star, ArrowLeft, Sparkles } from "lucide-react";
import Image from "next/image";
import { TPlace } from "@/app/lib/types";

const PlaceHero = ({ place }: { place: TPlace }) => {
  const router = useRouter();
  const image = place.images_url?.[0];
  const tags: string[] = (place as any).tags ?? [];
  const location = [place.region, place.country, (place as any).continent].filter(
    Boolean,
  ) as string[];

  return (
    <section
      className="relative h-[72vh] min-h-[540px] flex flex-col justify-between
        px-6 sm:px-10 pt-8 pb-24 overflow-hidden bg-[#071f20]"
    >
      {/* Background image with slow zoom */}
      {image && (
        <Image
          fill
          priority
          src={image}
          alt={place.title}
          sizes="100vw"
          className="object-cover scale-105"
        />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071f20]
        via-[#071f20]/45 to-[#071f20]/30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f20]/70
        via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full
        bg-[#c9a96e]/15 blur-3xl pointer-events-none" />

      {/* Top row */}
      <div className="relative max-w-[84rem] w-full mx-auto flex items-center
        justify-between gap-4 flex-wrap">
        <button
          onClick={() => router.push("/places")}
          className="group flex items-center gap-2 text-[#f4efe2] text-xs
            font-medium tracking-[0.15em] uppercase px-5 py-2.5 rounded-full
            border border-[#f4efe2]/25 bg-[#071f20]/40 backdrop-blur-md
            hover:border-[#c9a96e] hover:bg-[#071f20]/60 transition-all"
        >
          <ArrowLeft
            size={14}
            className="text-[#c9a96e] transition-transform group-hover:-translate-x-1"
          />
          All places
        </button>

        <div className="flex items-center gap-3">
          {place.badge && (
            <span
              className="flex items-center gap-1.5 text-[11px] font-semibold
                tracking-wide px-4 py-2 rounded-full bg-gradient-to-r
                from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]
                shadow-[0_10px_24px_-8px_rgba(201,169,110,0.8)]"
            >
              <Sparkles size={12} />
              {place.badge}
            </span>
          )}
          <span
            className="flex items-center gap-2 text-xs font-medium px-4 py-2
              rounded-full bg-[#071f20]/40 backdrop-blur-md border
              border-[#f4efe2]/25 text-[#f4efe2]"
          >
            <Star size={13} className="fill-[#c9a96e] text-[#c9a96e]" />
            {(place as any).rating}
            <span className="text-[#f4efe2]/50 font-light">
              ({(place as any).reviewCount})
            </span>
          </span>
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative max-w-[84rem] w-full mx-auto">
        <div className="flex items-center gap-4 mb-6">
          {place.flag && (
            <span className="p-1 rounded-md bg-gradient-to-br from-[#ecdcb0]
              to-[#c9a96e] shadow-lg">
              <Image
                src={`https://flagcdn.com/w40/${String(place.flag).toLowerCase()}.png`}
                alt={place.country ?? "Flag"}
                width={40}
                height={30}
                className="rounded-[3px] block"
              />
            </span>
          )}
          <span className="h-px w-16 bg-gradient-to-r from-[#c9a96e] to-transparent" />
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e]">
            Featured destination
          </p>
        </div>

        <h1
          className="font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.02]
            tracking-tight text-[#f4efe2] mb-6 max-w-4xl
            drop-shadow-[0_6px_30px_rgba(0,0,0,0.5)]"
        >
          {place.title}
        </h1>

        {/* Location */}
        <div className="flex items-center gap-3 flex-wrap mb-7 text-[#f4efe2]/80">
          <MapPin size={16} className="text-[#c9a96e]" />
          {location.map((l, i) => (
            <span key={l} className="flex items-center gap-3 text-sm tracking-wide">
              {l}
              {i < location.length - 1 && (
                <span className="text-[#c9a96e]">·</span>
              )}
            </span>
          ))}
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-4 py-1.5 rounded-full bg-[#f4efe2]/10
                  backdrop-blur-md border border-[#c9a96e]/40 text-[#f4efe2]
                  font-light tracking-wide hover:bg-[#c9a96e]/20
                  transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Gold hairline above wave */}
      <div className="absolute bottom-10 inset-x-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/50 to-transparent pointer-events-none" />

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