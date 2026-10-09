import Image from "next/image";
import Link from "next/link";
import { Home, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import img1 from "@/public/_assets/bali-002.jpg";
import img2 from "@/public/_assets/cabin-004.jpg";
import img3 from "@/public/_assets/surfing-001.jpg";
import img4 from "@/public/_assets/cabin-interior.jpg";

const FEATURES = [
  {
    icon: <Home size={22} />,
    title: "Authentic Local Stays",
    text: "Each cabin reflects the local culture and architecture",
  },
  {
    icon: <Sparkles size={22} />,
    title: "Stunning Views Guaranteed",
    text: "Wake up to mountain peaks, fjords, or forest panoramas",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Verified & Trusted",
    text: "All properties are personally inspected by our team",
  },
];

const GalleryImage = ({
  src,
  alt,
  height,
}: {
  src: typeof img1;
  alt: string;
  height: string;
}) => (
  <div
    className="group relative rounded-[1.75rem] p-1.5 bg-gradient-to-br
      from-[#ecdcb0]/60 via-[#c9a96e]/30 to-[#8a6d35]/40
      transition-all duration-500 hover:-translate-y-1.5
      hover:from-[#ecdcb0] hover:via-[#c9a96e] hover:to-[#8a6d35]
      hover:shadow-[0_30px_60px_-24px_rgba(201,169,110,0.6)]"
  >
    <div className={`relative ${height} rounded-[1.4rem] overflow-hidden bg-[#0a2c2d]`}>
      <Image
        src={src}
        fill
        alt={alt}
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover object-center transition-transform
          duration-[1200ms] ease-out group-hover:scale-110"
        quality={60}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071f20]/50
        via-transparent to-transparent" />
      <span className="pointer-events-none absolute top-0 bottom-0 left-0 w-1/3
        -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent
        via-white/25 to-transparent transition-transform duration-[1100ms]
        ease-out group-hover:translate-x-[320%]" />
    </div>
  </div>
);

const CabinsSection = () => {
  return (
    <section
      id="cabins"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#0f3d3e]
        via-[#0a2c2d] to-[#071f20]"
    >
      <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full
        bg-[#a8d5d0]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[40rem] h-[40rem] rounded-full
        bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-4 text-[11px] font-medium
              tracking-[0.4em] uppercase text-[#c9a96e]">
              <span className="h-px w-10 bg-[#c9a96e]/60" />
              Stay
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#f4efe2] mt-5 mb-6
              tracking-tight">
              Handpicked Cabins
            </h2>
            <p className="text-[#f4efe2]/55 text-lg font-light leading-relaxed mb-12 max-w-xl">
              From rustic mountain retreats to modern eco-lodges, every cabin is
              personally selected for its stunning views and authentic
              character.
            </p>

            <div className="space-y-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="group flex items-start gap-5">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <div className="absolute inset-0 rounded-2xl bg-[#c9a96e]/25
                      animate-ping [animation-duration:3s]" />
                    <div className="relative w-14 h-14 rounded-2xl flex items-center
                      justify-center border border-[#c9a96e]/40
                      bg-gradient-to-br from-[#c9a96e]/20 to-[#c9a96e]/5
                      text-[#ecdcb0] transition-all duration-500
                      group-hover:from-[#ecdcb0] group-hover:to-[#c9a96e]
                      group-hover:text-[#0a2c2d]
                      group-hover:shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]">
                      {f.icon}
                    </div>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-[#f4efe2] mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-[#f4efe2]/50 font-light leading-relaxed">
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/places"
              className="group/cta inline-flex items-center gap-2 mt-12 px-8 py-4
                rounded-full text-sm font-semibold tracking-[0.1em] uppercase
                bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0]
                text-[#0a2c2d]
                shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]
                hover:shadow-[0_18px_36px_-10px_rgba(201,169,110,1)]
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore cabins
              <ArrowRight
                size={15}
                className="transition-transform group-hover/cta:translate-x-1"
              />
            </Link>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <GalleryImage src={img1} alt="Tropical cabin surrounded by woods" height="h-48 sm:h-56" />
              <GalleryImage src={img3} alt="Coastal cabin near the surf" height="h-64 sm:h-80" />
            </div>
            <div className="space-y-5 pt-12">
              <GalleryImage src={img4} alt="Warm cabin interior" height="h-64 sm:h-80" />
              <GalleryImage src={img2} alt="Handpicked cabin exterior" height="h-48 sm:h-56" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CabinsSection;