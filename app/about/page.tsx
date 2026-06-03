import Link from 'next/link'
import { Mountain, MapPin, Users, Star, ArrowRight, Heart, Shield, Compass } from 'lucide-react'

export default function About() {

  const stats = [
    { val: '120+', label: 'Destinations' },
    { val: '237',  label: 'Handpicked cabins' },
    { val: '2.4k', label: 'Travellers' },
    { val: '85',   label: 'Local guides' },
  ]

  const steps = [
    {
      icon: <MapPin size={20} />,
      step: '01',
      title: 'Find your place',
      desc: 'Browse 120+ destinations filtered by country, season, type, and activity. Every place is handpicked.',
    },
    {
      icon: <Mountain size={20} />,
      step: '02',
      title: 'Choose your cabin',
      desc: 'Select from cosy retreats to luxury villas. Each cabin is personally inspected by our team.',
    },
    {
      icon: <Compass size={20} />,
      step: '03',
      title: 'Book activities',
      desc: 'Sign up for guided hikes, ski days, photography walks, and local experiences led by verified guides.',
    },
    {
      icon: <Star size={20} />,
      step: '04',
      title: 'Earn & explore more',
      desc: 'Every booking earns Summit Points. Collect medals, unlock tiers, and access exclusive experiences.',
    },
  ]

  const values = [
    {
      icon: <Heart size={18} />,
      title: 'Authenticity first',
      desc: 'We work exclusively with local guides and independently owned properties. No corporate chains, no generic packages.',
    },
    {
      icon: <Shield size={18} />,
      title: 'Verified and trusted',
      desc: 'Every cabin, guide, and activity on Cabinly is personally vetted by our team before going live.',
    },
    {
      icon: <Users size={18} />,
      title: 'Community driven',
      desc: 'Our traveller community shapes what we offer. Reviews, medals, and points keep the experience honest and rewarding.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-[#0f3d3e] px-6 pt-24 pb-32 relative overflow-hidden">

        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px]
            opacity-[0.05]">
            <svg viewBox="0 0 100 100">
              <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
              <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-20 w-64 h-64 opacity-[0.04]">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#e8f0ed"
                strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="#e8f0ed"
                strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative text-center">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-4">
            Our story
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4rem)]
            text-[#e8f0ed] leading-[1.1] mb-6">
            Travel the way it was meant to be
          </h1>
          <p className="text-[#e8f0ed]/60 font-light text-lg leading-relaxed
            max-w-xl mx-auto">
            Cabinly was built for travellers who are done with generic hotel
            rooms and tourist traps — people who want to wake up to a glacier
            view, hike with someone who grew up on that mountain, and come home
            changed.
          </p>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label}
              className="bg-white border border-[#0f3d3e]/08 rounded-2xl
              p-6 text-center shadow-sm">
              <p className="text-2xl font-medium text-[#0f3d3e] mb-1">
                {s.val}
              </p>
              <p className="text-xs text-gray-400 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Our story ── */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-3">
              How it started
            </p>
            <h2 className="font-serif text-3xl text-[#0f3d3e] mb-5">
              Born from a bad trip
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              In 2022, our founder spent two weeks in the Swiss Alps staying in
              an overpriced chain hotel, taking bus tours with 50 strangers, and
              eating at restaurants recommended by an algorithm. Beautiful
              landscape. Forgettable experience.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Cabinly was the answer to that trip. A platform where every cabin
              is chosen by a human, every guide is a local, and every experience
              is designed to make you feel like you actually went somewhere —
              not just passed through it.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0f3d3e] to-[#1a5c5e]
              rounded-2xl h-64 flex items-center justify-center overflow-hidden
              relative">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
                  <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed"
                    opacity=".4" />
                  <circle cx="75" cy="22" r="8" fill="#e8f0ed" opacity=".3" />
                </svg>
              </div>
              <div className="relative text-center">
                <Mountain size={48} className="text-[#a8d5d0] mx-auto mb-3
                  opacity-60" />
                <p className="text-[#e8f0ed]/60 text-xs font-light">
                  Swiss Alps, 2022
                </p>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 bg-white border
              border-[#0f3d3e]/08 rounded-xl px-4 py-3 shadow-sm">
              <p className="text-xs font-medium text-[#0f3d3e]">
                Founded 2022
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">
                Zurich, Switzerland
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── How it works ── */}
      <div className="bg-[#f8faf9] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-3">
              The process
            </p>
            <h2 className="font-serif text-3xl text-[#0f3d3e]">
              How Cabinly works
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.step}
                className="bg-white border border-[#0f3d3e]/08 rounded-2xl
                p-6 relative">
                <span className="absolute top-4 right-4 text-[11px]
                  font-medium text-[#0f3d3e]/20">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#e1f5ee] flex
                  items-center justify-center text-[#0f3d3e] mb-4">
                  {step.icon}
                </div>
                <p className="text-sm font-medium text-[#0f3d3e] mb-2">
                  {step.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3">
            What we believe
          </p>
          <h2 className="font-serif text-3xl text-[#0f3d3e]">
            Our values
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title}
              className="border border-[#0f3d3e]/08 rounded-2xl p-6
              hover:border-[#a8d5d0]/50 transition-colors duration-200">
              <div className="w-9 h-9 rounded-xl bg-[#e1f5ee] flex items-center
                justify-center text-[#0f3d3e] mb-4">
                {v.icon}
              </div>
              <p className="text-sm font-medium text-[#0f3d3e] mb-2">
                {v.title}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed font-light">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-[#0f3d3e] px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full"
            preserveAspectRatio="none">
            <path d="M0 100 L50 30 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-xl mx-auto text-center relative">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-4">
            Ready?
          </p>
          <h2 className="font-serif text-3xl text-[#e8f0ed] mb-4">
            Your next adventure is waiting
          </h2>
          <p className="text-[#e8f0ed]/50 font-light text-sm mb-8
            leading-relaxed">
            Join 2,400+ travellers who have already discovered a better way
            to explore the world.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/places"
              className="flex items-center gap-2 px-6 py-3 rounded-full
                bg-[#a8d5d0] text-[#0f3d3e] text-sm font-medium
                hover:bg-[#bce0db] transition-colors group"
            >
              Browse destinations
              <ArrowRight size={15} className="group-hover:translate-x-0.5
                transition-transform" />
            </Link>
            <Link
              href="/sign-up"
              className="px-6 py-3 rounded-full border border-[#e8f0ed]/20
                text-[#e8f0ed]/70 text-sm hover:border-[#e8f0ed]/40
                hover:text-[#e8f0ed] transition-colors"
            >
              Create free account
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}