import { Home, Clock, Users, Star } from "lucide-react";

import { TPlace } from "@/app/lib/types";

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  sub: string;
  gold?: boolean;
}

const Highlight = ({ icon, title, sub, gold }: HighlightItem) => (
  <div
    className="group flex items-center gap-4 rounded-2xl p-5 border
      border-[#0f3d3e]/[0.07] bg-gradient-to-br from-[#fbfaf6] to-white
      transition-all duration-300 hover:-translate-y-0.5
      hover:border-[#c9a96e]/50
      hover:shadow-[0_16px_32px_-18px_rgba(15,61,62,0.35)]"
  >
    <div
      className={`w-12 h-12 rounded-2xl flex items-center justify-center
        flex-shrink-0 border transition-colors ${
          gold
            ? "bg-gradient-to-br from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d] border-[#c9a96e] shadow-[0_8px_20px_-8px_rgba(201,169,110,0.8)]"
            : "bg-gradient-to-br from-[#e1f5ee] to-[#f4efe2] text-[#0f3d3e] border-[#c9a96e]/30 group-hover:border-[#c9a96e]"
        }`}
    >
      {icon}
    </div>
    <div className="min-w-0">
      <p className="font-serif text-lg text-[#0f3d3e] leading-tight truncate">
        {title}
      </p>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40 mt-1.5">
        {sub}
      </p>
    </div>
  </div>
);

const PlaceAbout = ({ place }: { place: TPlace }) => {
  const reviewTotal =
    (place as any).reviewCount ?? place.reviews?.length ?? 0;

  const highlights: HighlightItem[] = [
    {
      icon: <Home size={20} />,
      title: `${place.cabinsRef?.length ?? 0} cabins`,
      sub: "From cosy to luxury",
    },
    {
      icon: <Clock size={20} />,
      title: place.seasons?.length ? place.seasons.join(" · ") : "All year",
      sub: "Best seasons",
    },
    {
      icon: <Users size={20} />,
      title: `${place.guides?.length ?? 0} local guides`,
      sub: "Certified experts",
    },
    {
      icon: <Star size={20} />,
      title: `${(place as any).rating ?? "–"} / 5 rating`,
      sub: `${reviewTotal} reviews`,
      gold: true,
    },
  ];

  return (
    <section>
      <p
        className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2
          flex items-center gap-3 text-[#b8975a]"
      >
        <span className="h-px w-8 bg-[#c9a96e]/60" />
        About
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl text-[#0f3d3e] mb-6 tracking-tight">
        Why visit {place.title}
      </h2>

      <p
        className="text-base text-[#0f3d3e]/60 font-light leading-[1.9]
          first-letter:font-serif first-letter:text-6xl first-letter:text-[#b8975a]
          first-letter:float-left first-letter:mr-3 first-letter:mt-1
          first-letter:leading-[0.8]"
      >
        {place.description}
      </p>

      <div className="h-px my-8 bg-gradient-to-r from-[#c9a96e]/50 via-[#0f3d3e]/10 to-transparent" />

      <div className="grid sm:grid-cols-2 gap-4">
        {highlights.map((h) => (
          <Highlight key={h.sub} {...h} />
        ))}
      </div>
    </section>
  );
};

export default PlaceAbout;