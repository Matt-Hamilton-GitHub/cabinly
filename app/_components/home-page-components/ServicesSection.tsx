import { Mountain, Home, Zap, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: <Mountain size={26} />,
    step: '01',
    title: 'Pick your destination',
    desc: 'Browse 120+ handpicked places across 6 continents — filtered by season, type, country, and activity. Every destination is curated, not algorithmically generated.',
    detail: 'Swiss Alps, Norwegian Fjords, Patagonia and more',
  },
  {
    icon: <Home size={26} />,
    step: '02',
    title: 'Choose your cabin',
    desc: 'Select from cosy mountain retreats to luxury villas — each personally inspected. You choose the size, the view, the amenities, and the price point that works for you.',
    detail: 'From $99 to $490 per night',
  },
  {
    icon: <Zap size={26} />,
    step: '03',
    title: 'Add activities + earn points',
    desc: 'Sign up for guided hikes, ski days, photography walks, and local experiences. Every booking earns Summit Points — the more you explore, the more you unlock.',
    detail: '+75 pts per activity signed up',
  },
]

const perks = [
  'No package lock-in — build exactly what you want',
  'Pay only for what you actually book',
  'Cancel cabins free up to 14 days before arrival',
  'Earn Summit Points on every booking',
  'Activities can be added after booking',
  'Local guides available at every destination',
]

const ServicesSection = () => {
  return (
    <section
      id="build"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-[#fbfaf6]
        to-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/50 to-transparent" />
      <div className="absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full
        bg-[#c9a96e]/[0.08] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-[34rem] h-[34rem] rounded-full
        bg-[#a8d5d0]/10 blur-3xl pointer-events-none" />

      {/* Mountain decoration */}
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] pointer-events-none
        opacity-[0.035]">
        <svg viewBox="0 0 100 100">
          <path d="M50 5 L10 90 L90 90 Z" fill="#0f3d3e" />
          <path d="M50 25 L25 90 L75 90 Z" fill="#0f3d3e" opacity=".4" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <span className="inline-flex items-center gap-4 text-[11px] font-medium
              tracking-[0.4em] uppercase text-[#b8975a]">
              <span className="h-px w-10 bg-[#c9a96e]/60" />
              Your adventure, your way
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-[#0f3d3e]
              leading-[1.05] mt-5 mb-6 tracking-tight">
              Build your own perfect trip
            </h2>
            <p className="text-[#0f3d3e]/55 font-light leading-[1.9] mb-10">
              Forget rigid packages designed for the average traveller.
              Cabinly lets you choose your destination, your cabin, and your
              activities independently — so the price and the experience are
              exactly right for you, not someone else.
            </p>
            <Link
              href="/places"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full
                bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium tracking-wide
                border border-[#c9a96e]/60 hover:bg-[#1a5c5e]
                hover:shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Start exploring
              <ArrowRight
                size={15}
                className="text-[#c9a96e] transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Perks list */}
          <div className="relative rounded-[2rem] p-10 overflow-hidden bg-white
            border border-[#0f3d3e]/[0.07]
            shadow-[0_1px_2px_rgba(15,61,62,0.04),0_30px_60px_-34px_rgba(15,61,62,0.3)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
              from-transparent via-[#c9a96e] to-transparent" />
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase
              text-[#b8975a] mb-7 flex items-center gap-3">
              What makes it different
              <span className="h-px flex-1 bg-gradient-to-r from-[#c9a96e]/40 to-transparent" />
            </p>
            <div className="space-y-4">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br
                    from-[#ecdcb0] to-[#c9a96e] flex items-center justify-center
                    flex-shrink-0 mt-0.5 shadow-[0_6px_14px_-6px_rgba(201,169,110,0.9)]">
                    <Check size={12} strokeWidth={3} className="text-[#0a2c2d]" />
                  </div>
                  <span className="text-sm text-[#0f3d3e]/70 font-light leading-snug">
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+16px)]
            right-[calc(16.66%+16px)] h-px bg-gradient-to-r
            from-transparent via-[#c9a96e]/60 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col rounded-[2rem] p-8 bg-white
                  border border-[#0f3d3e]/[0.07] overflow-hidden
                  shadow-[0_1px_2px_rgba(15,61,62,0.04),0_24px_50px_-30px_rgba(15,61,62,0.3)]
                  transition-all duration-500 hover:-translate-y-2
                  hover:border-[#c9a96e]/60
                  hover:shadow-[0_40px_70px_-34px_rgba(15,61,62,0.45)]"
              >
                {/* Giant step number */}
                <span className="absolute -top-2 right-5 font-serif text-8xl
                  text-[#0f3d3e]/[0.04] group-hover:text-[#c9a96e]/20
                  transition-colors duration-500 select-none">
                  {step.step}
                </span>

                <div className="relative w-16 h-16 rounded-2xl flex items-center
                  justify-center mb-7 border border-[#c9a96e]/40
                  bg-gradient-to-br from-[#e1f5ee] to-[#f4efe2] text-[#0f3d3e]
                  transition-all duration-500
                  group-hover:from-[#0a2c2d] group-hover:to-[#17575a]
                  group-hover:text-[#c9a96e]
                  group-hover:shadow-[0_14px_30px_-10px_rgba(15,61,62,0.7)]">
                  {step.icon}
                </div>

                <p className="text-[10px] tracking-[0.3em] uppercase text-[#b8975a] mb-2">
                  Step {step.step}
                </p>
                <h3 className="font-serif text-2xl text-[#0f3d3e] mb-4 leading-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-[#0f3d3e]/55 font-light leading-[1.85]
                  mb-6 flex-1">
                  {step.desc}
                </p>

                <div className="flex items-center gap-2.5 pt-5 border-t
                  border-[#0f3d3e]/[0.07]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c9a96e]" />
                  <span className="text-xs text-[#0f3d3e]/55">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="relative mt-20 rounded-[2rem] p-10 sm:p-12 overflow-hidden
          flex items-center justify-between flex-wrap gap-8
          bg-gradient-to-br from-[#0a2c2d] via-[#0f3d3e] to-[#17575a]
          shadow-[0_40px_80px_-34px_rgba(15,61,62,0.8)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
            from-transparent via-[#c9a96e]/80 to-transparent" />
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full
            bg-[#c9a96e]/15 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 100 L50 50 L100 100 Z" fill="#e8f0ed" />
            </svg>
          </div>
          <div className="relative">
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase
              text-[#c9a96e] mb-3">
              Ready to build yours?
            </p>
            <p className="font-serif text-3xl md:text-4xl text-[#f4efe2]">
              Your perfect trip is 3 steps away
            </p>
          </div>
          <div className="relative flex items-center gap-3 flex-wrap">
            <Link
              href="/sign-up"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-[0.1em]
                uppercase bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0]
                text-[#0a2c2d]
                shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]
                hover:shadow-[0_18px_36px_-10px_rgba(201,169,110,1)]
                hover:-translate-y-0.5 transition-all duration-300"
            >
              Create free account
            </Link>
            <Link
              href="/places"
              className="px-8 py-4 rounded-full border border-[#f4efe2]/25
                text-[#f4efe2]/80 text-sm tracking-wide hover:border-[#c9a96e]
                hover:text-[#f4efe2] transition-all duration-300"
            >
              Browse destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection