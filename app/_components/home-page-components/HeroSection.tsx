import React from "react";
import type { FC, ReactNode } from "react";
import Link from "next/link";
import {
  PlayCircle, MapPin, Users, Home, ArrowRight, Star, Sparkles,
} from "lucide-react";
import Image from "next/image";

const GLOBAL_CSS = `
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes heroShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes heroFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-8px); }
}
.hero-up { animation: heroFadeUp .9s cubic-bezier(.2,.7,.2,1) both; }
.hero-shimmer {
  background: linear-gradient(90deg, #c9a96e 0%, #fff4d6 50%, #c9a96e 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: heroShimmer 7s linear infinite;
}
.hero-float { animation: heroFloat 6s ease-in-out infinite; }
`;

// ─── StatCard ────────────────────────────────────────────────────

interface StatCardProps {
  icon: ReactNode;
  count: string;
  label: string;
  sub: string;
}

const StatCard: FC<StatCardProps> = ({ icon, count, label, sub }) => (
  <div
    className="group rounded-3xl p-5 bg-[#f4efe2]/[0.06] backdrop-blur-md border
      border-[#f4efe2]/[0.12] transition-all duration-500
      hover:bg-[#f4efe2]/[0.1] hover:border-[#c9a96e]/60 hover:-translate-y-1
      hover:shadow-[0_24px_40px_-24px_rgba(201,169,110,0.5)]"
  >
    <div className="flex items-start justify-between mb-5">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center
        bg-gradient-to-br from-[#c9a96e]/25 to-[#c9a96e]/5 text-[#ecdcb0]
        border border-[#c9a96e]/30">
        {icon}
      </div>
      <span className="text-[10px] font-semibold tracking-wide px-2.5 py-1
        rounded-full bg-gradient-to-r from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]">
        {count}
      </span>
    </div>
    <p className="font-serif text-xl mb-1 text-[#f4efe2]">{label}</p>
    <p className="text-[10px] tracking-[0.2em] uppercase font-light text-[#f4efe2]/40">
      {sub}
    </p>
  </div>
);


// ─── Hero Section ─────────────────────────────────────────────────

const HeroSection: FC = () => {
  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#071f20]
        via-[#0a2c2d] to-[#0f3d3e] overflow-hidden flex flex-col"
    >
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      

      {/* Ambient gold glows */}
      <div className="absolute -top-40 left-1/4 w-[40rem] h-[40rem] rounded-full
        bg-[#c9a96e]/10 blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-0 -left-32 w-[30rem] h-[30rem] rounded-full
        bg-[#a8d5d0]/10 blur-3xl pointer-events-none z-10" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071f20]
        via-[#0a2c2d]/90 to-[#0f3d3e]/30 pointer-events-none z-10" />

      {/* ── Right image panel ── */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="https://res.cloudinary.com/debnvx8ww/image/upload/v1750976602/jacky-huang-6rC8fmNW3pk-unsplash_th1zld.jpg"
            alt="Swiss Alps"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071f20]
            via-[#0a2c2d]/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t
            from-[#071f20] to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent
            via-transparent to-[#071f20]/30" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col justify-center flex-1 px-6
        sm:px-10 lg:px-20 py-28">
        <div className="max-w-xl xl:max-w-2xl">

          {/* Eyebrow */}
          <div className="hero-up flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-[#c9a96e] to-transparent" />
            <p className="text-[11px] font-medium tracking-[0.4em] uppercase
              text-[#c9a96e] flex items-center gap-2">
              <Sparkles size={12} />
              Adventure Awaits
            </p>
          </div>

          {/* Headline */}
          <h1
            className="hero-up font-serif text-[clamp(2.6rem,5.8vw,5.8rem)]
              leading-[1.03] tracking-tight mb-8 text-[#f4efe2] "
            style={{ animationDelay: "120ms" }}
          >
            The world is<br className="hidden sm:block" /> too{" "}
            <span className="pr-5 hero-shimmer italic">beautiful</span>
            <br className="hidden sm:block" /> to stay in one place
          </h1>

          {/* Sub */}
          <p
            className="hero-up font-light leading-[1.8] mb-12 text-[#f4efe2]/60
              text-base sm:text-lg max-w-md"
            style={{ animationDelay: "240ms" }}
          >
            Discover hidden gems guided by locals who know every trail,
            sunset spot, and secret worth sharing.
          </p>

          {/* CTAs */}
          <div
            className="hero-up flex flex-wrap gap-4 mb-16"
            style={{ animationDelay: "360ms" }}
          >
            <Link
              href="/places"
              className="group inline-flex items-center gap-2 px-9 py-4 rounded-full
                text-sm font-semibold tracking-[0.12em] uppercase
                bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0]
                text-[#0a2c2d]
                shadow-[0_16px_36px_-12px_rgba(201,169,110,0.8)]
                hover:shadow-[0_20px_44px_-12px_rgba(201,169,110,1)]
                hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <button
              className="px-9 py-4 rounded-full text-sm font-medium tracking-wide
                border border-[#f4efe2]/25 text-[#f4efe2]/85 flex items-center gap-2.5
                backdrop-blur-md bg-[#f4efe2]/[0.04] hover:border-[#c9a96e]
                hover:text-[#f4efe2] hover:bg-[#c9a96e]/10 hover:-translate-y-0.5
                transition-all duration-300"
            >
              <PlayCircle size={18} className="text-[#c9a96e]" />
              Watch Story
            </button>
          </div>

          {/* Stat cards */}
          <div
            className="hero-up grid grid-cols-3 gap-3 max-w-lg"
            style={{ animationDelay: "480ms" }}
          >
            <StatCard
              icon={<MapPin size={18} />}
              count="120+"
              label="Destinations"
              sub="6 continents"
            />
            <StatCard
              icon={<Users size={18} />}
              count="85"
              label="Guides"
              sub="Verified locals"
            />
            <StatCard
              icon={<Home size={18} />}
              count="237"
              label="Cabins"
              sub="Handpicked"
            />
          </div>

          
        </div>
      </div>

      {/* ── Featured place badge ── */}
      <div className="absolute z-20 bottom-32 right-6 lg:right-14 hidden md:block hero-float">
        <div className="relative bg-[#071f20]/60 backdrop-blur-xl border
          border-[#c9a96e]/40 rounded-3xl px-6 py-5 min-w-[230px]
          shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
            from-transparent via-[#c9a96e] to-transparent" />
          <p className="text-[9px] font-medium tracking-[0.3em] uppercase
            text-[#c9a96e] mb-3 flex items-center gap-2">
            <Star size={10} className="fill-[#c9a96e]" />
            Featured destination
          </p>
          <p className="font-serif text-2xl text-[#f4efe2] mb-1">Swiss Alps</p>
          <p className="text-[11px] text-[#f4efe2]/50 font-light mb-4 flex items-center gap-1.5">
            <MapPin size={11} className="text-[#c9a96e]" />
            Graubünden, Switzerland
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[#f4efe2]/10">
            <span className="font-serif text-lg text-[#ecdcb0]">
              From $299
            </span>
            <span className="text-[10px] px-3 py-1 rounded-full font-semibold
              tracking-wide bg-gradient-to-r from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]">
              Popular
            </span>
          </div>
        </div>
      </div>

      {/* Gold hairline above wave */}
      <div className="absolute bottom-16 sm:bottom-20 inset-x-0 h-px z-20
        bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />

      {/* ── Wave ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 block"
        >
          <path
            d="M0,120 L0,80 Q180,30 360,65 Q540,100 720,50
               Q900,0 1080,40 Q1260,80 1440,55 L1440,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;