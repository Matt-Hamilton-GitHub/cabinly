import { Mountain, Footprints, Sparkles, Users, ArrowUpRight, Clock } from "lucide-react";

const ACTIVITIES = [
  {
    name: "Skiing",
    description: "From beginner slopes to expert backcountry runs",
    level: "All levels",
    duration: "2–6 hours",
    icon: <Mountain size={26} />,
  },
  {
    name: "Hiking",
    description: "Discover hidden trails and panoramic viewpoints",
    level: "Easy to hard",
    duration: "3–8 hours",
    icon: <Footprints size={26} />,
  },
  {
    name: "Northern Lights",
    description: "Chase the aurora with expert photographers",
    level: "Seasonal",
    duration: "4–6 hours",
    icon: <Sparkles size={26} />,
  },
  {
    name: "Meet Locals",
    description: "Cultural experiences and authentic connections",
    level: "Unique",
    duration: "2–4 hours",
    icon: <Users size={26} />,
  },
];

const ActivitiesSection = () => {
  return (
    <section
      id="activities"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#071f20]
        via-[#0a2c2d] to-[#0f3d3e]"
    >
      {/* Ambient glows */}
      <div className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full
        bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[34rem] h-[34rem] rounded-full
        bg-[#a8d5d0]/10 blur-3xl pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/60 to-transparent" />

      {/* Mountain silhouette */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-40">
          <path
            d="M0 200 L0 150 L180 70 L330 140 L520 40 L720 150 L900 80 L1100 160 L1280 60 L1440 130 L1440 200 Z"
            fill="#e8f0ed"
            opacity="0.04"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-[11px] font-medium
            tracking-[0.4em] uppercase text-[#c9a96e]">
            <span className="h-px w-10 bg-[#c9a96e]/60" />
            Experience
            <span className="h-px w-10 bg-[#c9a96e]/60" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#f4efe2] mt-5 mb-6
            tracking-tight">
            Guided Adventures
          </h2>
          <p className="text-[#f4efe2]/55 font-light max-w-2xl mx-auto leading-relaxed">
            Every activity is led by certified local professionals who share
            their passion and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACTIVITIES.map((a) => (
            <div
              key={a.name}
              className="group relative rounded-[1.75rem] p-8 overflow-hidden
                bg-[#f4efe2]/[0.04] backdrop-blur-sm border border-[#f4efe2]/10
                transition-all duration-500 hover:-translate-y-2
                hover:border-[#c9a96e]/60 hover:bg-[#f4efe2]/[0.07]
                hover:shadow-[0_30px_60px_-30px_rgba(201,169,110,0.5)]"
            >
              {/* Top gold hairline */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
                from-transparent via-[#c9a96e] to-transparent opacity-0
                group-hover:opacity-100 transition-opacity duration-500" />
              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full
                bg-[#c9a96e]/0 group-hover:bg-[#c9a96e]/15 blur-2xl
                transition-colors duration-700 pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl flex items-center
                    justify-center border border-[#c9a96e]/40
                    bg-gradient-to-br from-[#c9a96e]/20 to-[#c9a96e]/5
                    text-[#ecdcb0] transition-all duration-500
                    group-hover:from-[#ecdcb0] group-hover:to-[#c9a96e]
                    group-hover:text-[#0a2c2d]
                    group-hover:shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]">
                    {a.icon}
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-[#f4efe2]/20 transition-all duration-500
                      group-hover:text-[#c9a96e] group-hover:translate-x-1
                      group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="font-serif text-2xl text-[#f4efe2] mb-3">
                  {a.name}
                </h3>
                <p className="text-sm text-[#f4efe2]/50 font-light leading-relaxed mb-8">
                  {a.description}
                </p>

                <div className="flex items-center justify-between pt-5 border-t
                  border-[#f4efe2]/10">
                  <span className="text-[10px] font-medium tracking-[0.2em]
                    uppercase text-[#c9a96e]">
                    {a.level}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs
                    text-[#f4efe2]/40">
                    <Clock size={12} />
                    {a.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;