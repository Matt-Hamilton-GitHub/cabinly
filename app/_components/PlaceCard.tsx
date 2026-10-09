import Image from "next/image";
import Link from "next/link";
import { Users, Compass, Home, ArrowRight, Sparkles, Mountain } from "lucide-react";
import { TPlace } from "../lib/types";

const MAX_ACTIVITIES = 3;

const Stat = ({
  icon,
  val,
  label,
}: {
  icon: React.ReactNode;
  val: React.ReactNode;
  label: string;
}) => (
  <div className="flex-1 flex flex-col items-center gap-1">
    <span className="text-[#b8975a]">{icon}</span>
    <span className="font-serif text-xl text-[#0f3d3e] leading-none">{val}</span>
    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40">
      {label}
    </span>
  </div>
);

const PlaceCard = ({ place }: { place: TPlace }) => {
  const placeID = place._id;
  const image = place.images_url?.[0];
  const activities = place.activities ?? [];
  const seasons = place.seasons ?? [];
  const shownActivities = activities.slice(0, MAX_ACTIVITIES);
  const extra = activities.length - shownActivities.length;

  return (
    <article
      className="group relative flex flex-col w-[22rem] max-w-full bg-white
        rounded-[1.75rem] overflow-hidden border border-[#0f3d3e]/[0.07]
        shadow-[0_1px_2px_rgba(15,61,62,0.04),0_24px_50px_-28px_rgba(15,61,62,0.35)]
        transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a96e]/50
        hover:shadow-[0_2px_4px_rgba(15,61,62,0.05),0_40px_70px_-30px_rgba(15,61,62,0.5)]"
    >
      {/* Gold hairline */}
      <div className="absolute inset-x-0 top-0 h-px z-20 bg-gradient-to-r
        from-transparent via-[#c9a96e] to-transparent opacity-0
        group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br
        from-[#0f3d3e] to-[#1a5c5e]">
        {image ? (
          <Image
            fill
            src={image}
            alt={place.title}
            sizes="(max-width: 768px) 100vw, 352px"
            className="object-cover transition-transform duration-[1200ms]
              ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Mountain size={48} className="text-[#c9a96e]/40" />
          </div>
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f20]/80
          via-[#071f20]/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#c9a96e]/0
          to-[#c9a96e]/0 group-hover:from-[#c9a96e]/10 transition-all duration-700" />

        {/* Shine sweep */}
        <span className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/3
          -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent
          via-white/25 to-transparent transition-transform duration-[1100ms]
          ease-out group-hover:translate-x-[320%]" />

        {/* Type chip */}
        {place.type && (
          <span className="absolute top-4 left-4 text-[10px] font-medium
            tracking-[0.2em] uppercase px-3 py-1.5 rounded-full
            bg-[#071f20]/60 backdrop-blur-md text-[#f4efe2] border
            border-[#f4efe2]/20">
            {place.type}
          </span>
        )}

        {/* Badge */}
        {place.badge && (
          <span className="absolute top-4 right-4 flex items-center gap-1.5
            text-[11px] font-medium tracking-wide px-3 py-1.5 rounded-full
            bg-gradient-to-r from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]
            shadow-[0_8px_20px_-6px_rgba(201,169,110,0.8)]">
            <Sparkles size={11} />
            {place.badge}
          </span>
        )}

        {/* Title + country over image */}
        <div className="absolute bottom-0 inset-x-0 p-5 flex items-end
          justify-between gap-3">
          <div className="min-w-0">
            {place.country && (
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-1.5">
                {place.country}
              </p>
            )}
            <h3 className="font-serif text-2xl text-[#f4efe2] leading-tight truncate">
              {place.title}
            </h3>
          </div>
          {place.flag && (
            <span className="flex-shrink-0 w-10 h-8 rounded-lg bg-black/40
              backdrop-blur-md border border-white/25 flex items-center
              justify-center text-lg">
              {place.flag}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 bg-gradient-to-b from-white
        to-[#fbfaf6]">
        <p className="text-sm text-[#0f3d3e]/55 font-light leading-relaxed
          line-clamp-4 mb-5">
          {place.description}
        </p>

        {/* Seasons */}
        {seasons.length > 0 && (
          <p className="text-[11px] tracking-wide text-[#8a6d35] mb-3 flex
            items-center gap-2">
            <span className="h-px w-5 bg-[#c9a96e]/60" />
            {seasons.join(" · ")}
          </p>
        )}

        {/* Activities */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {shownActivities.map((a) => (
            <span
              key={a.name}
              className="text-[11px] px-3 py-1 rounded-full bg-[#0f3d3e]/[0.05]
                text-[#0f3d3e]/70 border border-[#0f3d3e]/[0.08]
                group-hover:border-[#c9a96e]/40 transition-colors"
            >
              {a.name}
            </span>
          ))}
          {extra > 0 && (
            <span className="text-[11px] px-3 py-1 rounded-full bg-[#c9a96e]/15
              text-[#8a6d35] border border-[#c9a96e]/30">
              +{extra} more
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-start py-5 mt-auto border-y
          border-[#0f3d3e]/[0.07]">
          <Stat icon={<Users size={15} />} val={place.travellers ?? 0} label="Travellers" />
          <div className="w-px self-stretch bg-[#0f3d3e]/[0.07]" />
          <Stat icon={<Compass size={15} />} val={activities.length} label="Activities" />
          <div className="w-px self-stretch bg-[#0f3d3e]/[0.07]" />
          <Stat icon={<Home size={15} />} val={place.cabinsRef?.length ?? 0} label="Cabins" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-5">
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#0f3d3e]/40">
              From
            </p>
            <p className="font-serif text-2xl text-[#0f3d3e] leading-tight">
              ${place.price}
              <span className="font-sans text-[11px] text-[#0f3d3e]/40 font-normal ml-1">
                / person
              </span>
            </p>
          </div>

          {placeID && (
            <Link
              href={`/places/${placeID}`}
              className="relative overflow-hidden flex items-center gap-2 px-6
                py-3 rounded-full bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium
                tracking-wide border border-[#c9a96e]/60 transition-all
                duration-300 hover:bg-[#1a5c5e]
                hover:shadow-[0_10px_24px_-8px_rgba(201,169,110,0.8)]"
            >
              View place
              <ArrowRight
                size={14}
                className="text-[#c9a96e] transition-transform duration-300
                  group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default PlaceCard;