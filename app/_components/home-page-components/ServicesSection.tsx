import { Mountain, Home, Zap, ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    icon: <Mountain size={22} />,
    step: '01',
    title: 'Pick your destination',
    desc: 'Browse 120+ handpicked places across 6 continents — filtered by season, type, country, and activity. Every destination is curated, not algorithmically generated.',
    detail: 'Swiss Alps, Norwegian Fjords, Patagonia and more',
    color: 'bg-[#e1f5ee] text-[#085041]',
  },
  {
    icon: <Home size={22} />,
    step: '02',
    title: 'Choose your cabin',
    desc: 'Select from cosy mountain retreats to luxury villas — each personally inspected. You choose the size, the view, the amenities, and the price point that works for you.',
    detail: 'From $99 to $490 per night',
    color: 'bg-[#faeeda] text-[#633806]',
  },
  {
    icon: <Zap size={22} />,
    step: '03',
    title: 'Add activities + earn points',
    desc: 'Sign up for guided hikes, ski days, photography walks, and local experiences. Every booking earns Summit Points — the more you explore, the more you unlock.',
    detail: '+75 pts per activity signed up',
    color: 'bg-[#e8e1fa] text-[#3d0663]',
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
    <section id="build" className="py-24 bg-white relative overflow-hidden">

      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none
        opacity-[0.03]">
        <svg viewBox="0 0 100 100">
          <path d="M50 5 L10 90 L90 90 Z" fill="#0f3d3e" />
          <path d="M50 25 L25 90 L75 90 Z" fill="#0f3d3e" opacity=".4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase
              text-[#a8d5d0] mb-3">
              Your adventure, your way
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f3d3e]
              leading-[1.1] mb-5">
              Build your own perfect trip
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-8">
              Forget rigid packages designed for the average traveller.
              Cabinly lets you choose your destination, your cabin, and your
              activities independently — so the price and the experience are
              exactly right for you, not someone else.
            </p>
            <Link
              href="/places"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full
                bg-[#0f3d3e] text-[#e8f0ed] text-sm font-medium
                hover:bg-[#1a5c5e] transition-colors group"
            >
              Start exploring
              <ArrowRight size={14} className="group-hover:translate-x-0.5
                transition-transform" />
            </Link>
          </div>

          {/* Perks list */}
          <div className="bg-[#f8faf9] border border-[#0f3d3e]/08 rounded-2xl
            p-7">
            <p className="text-xs font-medium tracking-[0.2em] uppercase
              text-[#a8d5d0] mb-5">
              What makes it different
            </p>
            <div className="space-y-3.5">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#e1f5ee] flex
                    items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[#085041]" />
                  </div>
                  <span className="text-sm text-gray-600 font-light
                    leading-snug">
                    {perk}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="relative">

          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+16px)]
            right-[calc(16.66%+16px)] h-px bg-gradient-to-r
            from-[#0f3d3e]/10 via-[#a8d5d0]/40 to-[#0f3d3e]/10" />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.step} className="relative flex flex-col">

                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center
                    justify-center flex-shrink-0 ${step.color}
                    relative z-10`}>
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-medium text-[#0f3d3e]/20
                    tracking-widest">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-medium text-[#0f3d3e] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-400 font-light leading-relaxed
                  mb-4 flex-1">
                  {step.desc}
                </p>

                {/* Detail pill */}
                <div className="inline-flex items-center gap-1.5 w-fit">
                  <div className="w-1 h-1 rounded-full bg-[#a8d5d0]" />
                  <span className="text-[11px] text-[#0f3d3e]/50 font-light">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-[#0f3d3e] rounded-2xl p-8 flex items-center
          justify-between flex-wrap gap-6 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
            <svg viewBox="0 0 100 100" className="w-full h-full"
              preserveAspectRatio="none">
              <path d="M0 100 L50 50 L100 100 Z" fill="#e8f0ed" />
            </svg>
          </div>
          <div className="relative">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-1">
              Ready to build yours?
            </p>
            <p className="font-serif text-2xl text-[#e8f0ed]">
              Your perfect trip is 3 steps away
            </p>
          </div>
          <div className="relative flex items-center gap-3 flex-wrap">
            <Link
              href="/sign-up"
              className="px-5 py-2.5 rounded-full bg-[#a8d5d0] text-[#0f3d3e]
                text-sm font-medium hover:bg-[#bce0db] transition-colors"
            >
              Create free account
            </Link>
            <Link
              href="/places"
              className="px-5 py-2.5 rounded-full border border-[#e8f0ed]/15
                text-[#e8f0ed]/70 text-sm hover:border-[#e8f0ed]/30
                hover:text-[#e8f0ed] transition-colors"
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