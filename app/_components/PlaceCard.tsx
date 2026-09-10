import Image from "next/image";
import Link from "next/link";
import { TPlace } from "../lib/types";

const SeasonBadge = ({ seasons }: { seasons: string[] }) => (
  <span className="text-[13px] px-2 py-0.5 bg-[#faeeda] text-[#633806]">
    {seasons.join(" · ")}
  </span>
);

const PlaceCard = ({ place }: { place: TPlace }) => {
  const placeID = place._id;
  console.log(placeID);

  return (
    <div className="max-w-100 h-210 div-border bg-white overflow-hidden min-w-90">
      {/* Image */}
      <div
        className={`h-70 relative bg-gradient-to-br 
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
            className="absolute top-2.5 right-2.5 text-[15px] font-medium border-1 border-[#000000bb]
          px-2.5 py-1 rounded-full bg-[#a8d5d0] text-[#0f3d3e] shadow-inner shadow-[#8f8f8f]"
          >
            {place.badge}
          </span>
        )}
        <span
          className="absolute bottom-2.5 left-2.5 w-7 h-5 rounded
        bg-black/80 border border-white/30 flex items-center justify-center text-sm"
        >
          {place.flag}
        </span>
      </div>

      {/* Body */}
      <div className="h-140 px-4 pt-3.5 pb-2 flex flex-col justify-between bg-[#d9e1e025]">
        <h3 className="text-[15px] font-medium text-[#0f3d3e] mb-1">
          {place?.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed mb-3">
          {place?.description.slice(0, 400)} ...
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-[13px] px-2 py-0.5 border-1 border-[#f6f6f627] bg-[#000000] text-[#f4f4f4]">
            {place?.type}
          </span>
          <SeasonBadge seasons={place.seasons} />
          {place?.activities.map((a) => (
            <span
              key={a.name}
              className="text-[13px] px-2 py-0.5 border-1 border-[#00000027] bg-[#0f3d3e] text-[#f6f6f6] "
            >
              {a.name}
            </span>
          ))}
        </div>

        <div className="flex justify-center  flex-col  ">
          <div className="flex justify-between items- gap-2 border-t border-[#0f3d3e]/[0.08] pt-3">
            {[
              { val: place?.travellers, key: "Travellers" },
              {
                val: place?.activities.length ? place?.activities.length : 0,
                key: "Activities",
              },
              {
                val: place?.cabinsRef.length ? place?.cabinsRef.length : 0,
                key: "Cabins",
              },
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

          <div className="py-5 flex items-center justify-between">
            <span className="text-[13px] font-medium text-[#0f3d3e]">
              From ${place.price}{" "}
              <span className="text-[11px] text-gray-400 font-normal">
                / person
              </span>
            </span>
            <Link href={`/places/${placeID}`} className=" ">
              <button
                className="text-[15px] px-5.5 py-2.5 rounded bg-[#0f3d3e]
            text-[#e8f0ed] font-medium hover:bg-[#1a5c5e] hover:cursor-pointer transition-colors hover:shadow-inner shadow-[#2e2d2d]"
              >
                {placeID && <p>View place</p>}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
