import { Home, Clock, Users, Star } from "lucide-react";
import { PlaceType } from "@/app/places/page";

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  sub: string;
}

const Highlight = ({ icon, title, sub }: HighlightItem) => (
  <div className="flex items-start gap-3 bg-[#f8faf9] rounded-xl p-3">
    <div
      className="w-8 h-8 rounded-lg bg-[#e1f5ee] flex items-center
      justify-center flex-shrink-0 text-[#0f3d3e]"
    >
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-[#0f3d3e]">{title}</p>
      <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
    </div>
  </div>
);

const PlaceAbout = ({ place }: { place: PlaceType }) => {
  const highlights: HighlightItem[] = [
    {
      icon: <Home size={16} />,
      title: `0 cabins`, // cabins → cabinsRef
      sub: "From cosy to luxury",
    },
    {
      icon: <Clock size={16} />,
      title: place.seasons.join(" · "), // ['Winter', 'Summer'] → 'Winter · Summer'
      sub: "Best seasons",
    },
    {
      icon: <Users size={16} />,
      title: `0 local guides`,
      sub: "Certified experts",
    },
    {
      icon: <Star size={16} />,
      title: `${place.rating} / 5 rating`,
      sub: ` 167 reviews`,
    },
  ];

  return (
    <section>
      <p
        className="text-[10px] font-medium tracking-[0.2em] uppercase
        text-[#a8d5d0] mb-1"
      >
        About
      </p>
      <h2 className="text-xl font-medium text-[#0f3d3e] mb-4">
        Why visit {place.title}
      </h2>
      <p className="text-sm text-gray-500 leading-relaxed">
        {place.description}
      </p>
      <div className="grid grid-cols-2 gap-3 mt-4">
        {highlights.map((h) => (
          <Highlight key={h.title} {...h} />
        ))}
      </div>
    </section>
  );
};

export default PlaceAbout;
