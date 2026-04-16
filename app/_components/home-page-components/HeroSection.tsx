import React from "react";
import type { FC, ReactNode } from "react";
import { PlayCircle, MapPin, Users, Home } from "lucide-react";

// ─── StatCard subcomponent ───────────────────────────────────────

interface StatCardProps {
  icon: ReactNode;
  count: string;
  label: string;
  sub: string;
}

const StatCard: FC<StatCardProps> = ({ icon, count, label, sub }) => (
  <div
    className="rounded-2xl p-6
    bg-[#e8f0ed18] border border-[#8ba39a5d]"
  >
    <div className="flex items-start justify-between mb-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center
        justify-center bg-[#e8f0ed3e]
        text-[#a8d5d0]"
      >
        {icon}
      </div>
      <span
        className="text-[10px] font-medium px-2 py-1
        rounded-full bg-[#a8d5d04f] text-[#cdd4d3]"
      >
        {count}
      </span>
    </div>

    <p className="font-serif text-2xl mb-1 text-[#e8f0ed]">{label}</p>
    <p className="text-xs font-light text-[#e8f0ed]/50">{sub}</p>
  </div>
);

const HeroSection: FC = () => {
  return (
    <section
      className="hero-gradient relative min-h-screen flex flex-col
      justify-center bg-[#0f3d3e] px-6 py-20"
    >
      <div className="absolute top-20 right-10 opacity-[0.08]"></div>

      <div className="max-w-[90vw]  w-full mx-0 lg:mx-40">
        <div className="max-w-4xl">
          <p
            className="text-xs font-medium tracking-[0.3em]
            uppercase mb-6 text-[#e8f0ed69]"
          >
            Adventure Awaits
          </p>

          <h1
            className="font-serif font-extrabold text-[clamp(2.8rem,6vw,6rem)]
            leading-[1.1] mb-6 text-[#e8f0ed] "
          >
            The world is too beautiful to stay in one place
          </h1>

          <p
            className="font-light leading-relaxed mb-10
            text-[#e8f0eda7] max-w-xl md:text-[20px]"
          >
            Discover hidden gems guided by locals who know every trail, sunset
            spot, and secret worth sharing.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              className="px-10 py-3.5 rounded-full font-medium
              text-lg bg-[#e8f0ed] text-[#0f3d3e]
              transition-transform hover:scale-105 hover:cursor-pointer"
            >
              Start Your Journey
            </button>
            <button
              className="px-10 py-3.5 rounded-full font-medium
              text-lg border border-[#e8f0ed]/30
              text-[#e8f0ed] flex items-center gap-2
              transition-transform hover:scale-105 hover:cursor-pointer"
            >
              <PlayCircle size={18} />
              Watch Story
            </button>
          </div>

          <div className="mt-20 grid sm:grid-cols-3 gap-6 max-w-3xl">
            <StatCard
              icon={<MapPin size={20} />}
              count="120+"
              label="Destinations"
              sub="Across 6 continents"
            />
            <StatCard
              icon={<Users size={20} />}
              count="85"
              label="Local Guides"
              sub="Verified experts"
            />
            <StatCard
              icon={<Home size={20} />}
              count="237"
              label="Cabins"
              sub="Handpicked stays"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,120 L0,80 Q180,30 360,65 Q540,100 720,50 Q900,0 1080,40 Q1260,80 1440,55 L1440,120 Z"
            fill="#ffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
