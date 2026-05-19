import Image from "next/image";
import Link from "next/link";
import { PlaceType } from "../places/page";

const SeasonBadge = ({ seasons }: { seasons: string[] }) => (
  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#faeeda] text-[#633806]">
    {seasons.join(" · ")}
  </span>
);

const PlaceCard = ({ place }: { place: PlaceType }) => {
    const placeID = place._id
    console.log(placeID)
    
    return (
  <div
    className="bg-white border border-[#0f3d3e]/10 rounded-2xl overflow-hidden
    transition-transform hover:-translate-y-1 hover:border-[#a8d5d0]/50 duration-200"
  >
    {/* Image */}
    <div
      className={`h-40 relative bg-gradient-to-br 
      flex  items-center justify-center from-[#0f3d3e] to-[#1a5c5e]`}
    >
      <Image
        fill
        src={place.images_url[0]}
        alt={place.title}
        className="object-cover"
      />

      {place.badge && (
        <span
          className="absolute top-2.5 right-2.5 text-[10px] font-medium
          px-2.5 py-1 rounded-full bg-[#a8d5d0] text-[#0f3d3e]"
        >
          {place.badge}
        </span>
      )}
      <span
        className="absolute bottom-2.5 left-2.5 w-7 h-5 rounded
        bg-white/15 border border-white/30 flex items-center justify-center text-sm"
      >
        {place.flag}
      </span>
    </div>

    {/* Body */}
    <div className="px-4 pt-3.5 pb-2">
      <h3 className="text-[15px] font-medium text-[#0f3d3e] mb-1">
        {place?.title}
      </h3>
      <p className="text-xs text-gray-400 leading-relaxed mb-3">
        {place?.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#e1f5ee] text-[#085041]">
          {place?.type}
        </span>
        {place?.activities.map((a) => (
          <span
            key={a._id}
            className="text-[10px] px-2 py-0.5 rounded-full bg-[#e1f5ee] text-[#085041]"
          >
            {a.name}
          </span>
        ))}
        <SeasonBadge seasons={place.seasons} />
      </div>

      <div className="grid grid-cols-3 gap-2 border-t border-[#0f3d3e]/[0.08] pt-3">
        {[
          { val: place?.travellers, key: "Travellers" },
          { val: place?.activities.length ? place?.activities.length : 0, key: "Activities" },
          { val: place?.cabinsRef.length ?  place?.cabinsRef.length : 0, key: "Cabins" },
        ].map((s) => (
          <div key={s.key} className="text-center">
            <span className="block text-sm font-medium text-[#0f3d3e]">
              {s?.val}
            </span>
            <span className="block text-[10px] text-gray-400 mt-0.5">
              {s?.key}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div className="px-4 pb-3.5 pt-2 flex items-center justify-between">
      <span className="text-[13px] font-medium text-[#0f3d3e]">
        From ${place.price}{" "}
        <span className="text-[11px] text-gray-400 font-normal">/ person</span>
      </span>
      <button
        className="text-[11px] px-3.5 py-1.5 rounded-full bg-[#0f3d3e]
        text-[#e8f0ed] font-medium hover:bg-[#1a5c5e] transition-colors"
      >
        
        {placeID &&<Link
          href={`/places/${placeID}`}
          className=" "
        >
          View place
        </Link>}
      </button>
    </div>
  </div>
)};

export default PlaceCard;
