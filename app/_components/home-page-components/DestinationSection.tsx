import { TOP3 } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const FALLBACK_DESCRIPTION =
  "Majestic peaks, pristine snow, and legendary skiing trails";

const DestinationSection = () => {
  return (
    <section
      id="destinations"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-white
        to-[#fbfaf6]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[22rem]
        rounded-full bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-[11px] font-medium
            tracking-[0.4em] uppercase text-[#b8975a]">
            <span className="h-px w-10 bg-[#c9a96e]/60" />
            Explore
            <span className="h-px w-10 bg-[#c9a96e]/60" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl mt-5 mb-6 text-[#0f3d3e]
            tracking-tight">
            Breathtaking Destinations
          </h2>
          <p className="text-[#0f3d3e]/55 max-w-2xl mx-auto font-light leading-relaxed">
            From snow-capped peaks to serene valleys, choose your perfect escape.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TOP3.map((place: any) => (
            <article
              key={place.id}
              className="group relative rounded-[2rem] overflow-hidden bg-white
                border border-[#0f3d3e]/[0.07]
                shadow-[0_1px_2px_rgba(15,61,62,0.04),0_24px_50px_-28px_rgba(15,61,62,0.35)]
                transition-all duration-500 hover:-translate-y-2
                hover:border-[#c9a96e]/50
                hover:shadow-[0_40px_70px_-30px_rgba(15,61,62,0.5)]"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden bg-gradient-to-br
                from-[#0f3d3e] to-[#1a5c5e]">
                <Image
                  src={place.stat_img}
                  alt={place.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform
                    duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f20]/80
                  via-[#071f20]/10 to-transparent" />
                <span className="pointer-events-none absolute top-0 bottom-0 left-0
                  w-1/3 -translate-x-full skew-x-[-20deg] bg-gradient-to-r
                  from-transparent via-white/25 to-transparent transition-transform
                  duration-[1100ms] ease-out group-hover:translate-x-[320%]" />

                {place.tag && (
                  <span className="absolute top-5 right-5 flex items-center gap-1.5
                    text-[11px] font-semibold tracking-wide px-4 py-2 rounded-full
                    bg-gradient-to-r from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]
                    shadow-[0_10px_24px_-8px_rgba(201,169,110,0.8)]">
                    <Sparkles size={12} />
                    {place.tag}
                  </span>
                )}

                <span className="absolute top-5 left-5 w-10 h-10 rounded-full
                  bg-[#071f20]/40 backdrop-blur-md border border-[#f4efe2]/25
                  flex items-center justify-center text-[#f4efe2] opacity-0
                  -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-500">
                  <ArrowUpRight size={16} className="text-[#c9a96e]" />
                </span>

                <h3 className="absolute bottom-6 left-7 right-7 font-serif text-3xl
                  text-[#f4efe2] leading-tight drop-shadow-lg">
                  {place.title}
                </h3>
              </div>

              {/* Body */}
              <div className="p-7 bg-gradient-to-b from-white to-[#fbfaf6]">
                <p className="text-[#0f3d3e]/55 mb-6 font-light text-sm leading-relaxed">
                  {place.description ?? FALLBACK_DESCRIPTION}
                </p>

                <div className="flex items-center justify-between pt-5 border-t
                  border-[#0f3d3e]/[0.07]">
                  <div className="flex items-center gap-2">
                    <Star size={16} className="fill-[#c9a96e] text-[#c9a96e]" />
                    <span className="font-serif text-xl text-[#0f3d3e]">
                      {place.rating}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/35">
                      rating
                    </span>
                  </div>
                  {place.srtPrice && (
                    <span className="text-right">
                      <span className="block text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40">
                        From
                      </span>
                      <span className="font-serif text-xl text-[#0f3d3e]">
                        ${place.srtPrice}
                      </span>
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/places"
            className="group/cta inline-flex items-center gap-2 px-9 py-4 rounded-full
              text-sm font-medium tracking-wide border border-[#0f3d3e]
              text-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-[#f4efe2]
              hover:border-[#c9a96e] transition-all duration-300"
          >
            View all destinations
            <ArrowRight
              size={15}
              className="text-[#b8975a] transition-transform group-hover/cta:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;