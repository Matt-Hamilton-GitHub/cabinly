import React from 'react'
import { Star, MapPin, Clock, ArrowRight, Award } from 'lucide-react'
import Link from 'next/link'

const guides = [
  {
    name: 'Erik Johansson',
    role: 'Norwegian Fjords Expert',
    location: 'Bergen, Norway',
    yrs: 15,
    rating: 4.9,
    reviews: 312,
    tags: ['Kayaking', 'Northern lights', 'Glacier trekking'],
    bio: 'Born on the edge of the Hardangerfjord, Erik has spent fifteen winters navigating Norway\'s most remote waterways. He knows where the northern lights are brightest and which trails the maps don\'t show.',
    initials: 'EJ',
  },
  {
    name: 'Maria Schneider',
    role: 'Swiss Alps Ski Instructor',
    location: 'Graubünden, Switzerland',
    yrs: 12,
    rating: 4.8,
    reviews: 241,
    tags: ['Skiing', 'Summit hiking', 'Avalanche safety'],
    bio: 'A former Swiss national ski team member who traded podiums for something better — watching first-timers find their legs on powder snow. Maria runs both beginner sessions and expert off-piste days.',
    initials: 'MS',
  },
  {
    name: 'Lucas Mendez',
    role: 'Patagonia Trek Leader',
    location: 'Puerto Natales, Chile',
    yrs: 10,
    rating: 4.9,
    reviews: 187,
    tags: ['Trekking', 'Wildlife', 'Climbing'],
    bio: 'Lucas grew up in the shadow of Torres del Paine and has been leading expeditions through the Patagonian steppe since he was nineteen. He speaks the landscape like a first language.',
    initials: 'LM',
  },
]

const GuideCard = ({ guide, index }: { guide: typeof guides[0]; index: number }) => (
  <article
    className="group relative flex flex-col rounded-[2rem] p-8 overflow-hidden
      bg-gradient-to-br from-white to-[#fbfaf6] border border-[#0f3d3e]/[0.07]
      shadow-[0_1px_2px_rgba(15,61,62,0.04),0_24px_50px_-30px_rgba(15,61,62,0.3)]
      transition-all duration-500 hover:-translate-y-2 hover:border-[#c9a96e]/60
      hover:shadow-[0_40px_70px_-34px_rgba(15,61,62,0.45)]"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent
      via-[#c9a96e] to-transparent opacity-0 group-hover:opacity-100
      transition-opacity duration-500" />
    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-[#c9a96e]/0
      group-hover:bg-[#c9a96e]/15 blur-3xl transition-colors duration-700
      pointer-events-none" />

    {/* Avatar */}
    <div className="relative flex items-start justify-between mb-6">
      <div className="relative">
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br
          from-[#ecdcb0] via-[#c9a96e] to-[#8a6d35]" />
        <div className="relative w-20 h-20 rounded-full bg-[#0a2c2d] flex items-center
          justify-center border-2 border-white">
          <span className="font-serif text-2xl text-[#ecdcb0]">
            {guide.initials}
          </span>
        </div>
        {/* Live dot */}
        <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-white
          flex items-center justify-center">
          <div className="relative w-3 h-3">
            <div className="absolute inset-0 rounded-full bg-[#c9a96e]
              animate-ping [animation-duration:2s]" />
            <div className="relative w-full h-full rounded-full bg-[#0f3d3e]" />
          </div>
        </div>
      </div>

      <div className="text-right">
        <div className="flex items-center gap-1.5 justify-end">
          <Star size={15} className="fill-[#c9a96e] text-[#c9a96e]" />
          <span className="font-serif text-2xl text-[#0f3d3e] leading-none">
            {guide.rating}
          </span>
        </div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40 mt-1.5">
          {guide.reviews} reviews
        </p>
      </div>
    </div>

    {/* Name */}
    <div className="mb-5">
      <h3 className="font-serif text-2xl text-[#0f3d3e] leading-tight">
        {guide.name}
      </h3>
      <p className="text-[11px] tracking-[0.2em] uppercase text-[#b8975a] mt-2">
        {guide.role}
      </p>
      <div className="flex items-center gap-1.5 mt-2.5">
        <MapPin size={12} className="text-[#0f3d3e]/30" />
        <span className="text-xs text-[#0f3d3e]/45 font-light">
          {guide.location}
        </span>
      </div>
    </div>

    {/* Bio */}
    <p className="text-sm text-[#0f3d3e]/55 leading-[1.85] font-light mb-6 flex-1">
      {guide.bio}
    </p>

    {/* Stats row */}
    <div className="flex items-center gap-4 py-4 mb-5 border-y border-[#0f3d3e]/[0.07]">
      <div className="flex items-center gap-2">
        <Clock size={14} className="text-[#b8975a]" />
        <span className="text-xs text-[#0f3d3e]/60">{guide.yrs} yrs experience</span>
      </div>
      <div className="w-px h-4 bg-[#0f3d3e]/10" />
      <div className="flex items-center gap-2">
        <Award size={14} className="text-[#b8975a]" />
        <span className="text-xs text-[#0f3d3e]/60">Local guide</span>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {guide.tags.map((tag) => (
        <span
          key={tag}
          className="text-[11px] px-3 py-1 rounded-full bg-[#0f3d3e]/[0.05]
            text-[#0f3d3e]/70 border border-[#0f3d3e]/[0.08]
            group-hover:border-[#c9a96e]/40 transition-colors"
        >
          {tag}
        </span>
      ))}
    </div>
  </article>
)

const MeetLocalsSection = () => {
  return (
    <section id="locals" className="relative overflow-hidden py-28 bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
        from-transparent via-[#c9a96e]/50 to-transparent" />
      <div className="absolute top-1/3 -left-40 w-[34rem] h-[34rem] rounded-full
        bg-[#c9a96e]/[0.07] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[34rem] h-[34rem] rounded-full
        bg-[#a8d5d0]/10 blur-3xl pointer-events-none" />

      {/* Mountain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          <path d="M0 100 L50 40 L100 100 Z" fill="#0f3d3e" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-4 text-[11px] font-medium
            tracking-[0.4em] uppercase text-[#b8975a]">
            <span className="h-px w-10 bg-[#c9a96e]/60" />
            Connect
            <span className="h-px w-10 bg-[#c9a96e]/60" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#0f3d3e] leading-[1.1]
            mt-5 mb-6 tracking-tight">
            Meet your local guides
          </h2>
          <p className="text-[#0f3d3e]/55 max-w-xl mx-auto font-light leading-relaxed">
            Every guide on Cabinly is born where they work. They don&apos;t read
            from a script — they grew up on these mountains, fjords, and
            plains and want to show you what the guidebooks miss.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, i) => (
            <GuideCard key={guide.name} guide={guide} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/guides"
            className="group inline-flex items-center gap-2 px-9 py-4 rounded-full
              text-sm font-medium tracking-wide border border-[#0f3d3e]
              text-[#0f3d3e] hover:bg-[#0f3d3e] hover:text-[#f4efe2]
              hover:border-[#c9a96e] transition-all duration-300"
          >
            Meet all guides
            <ArrowRight
              size={15}
              className="text-[#b8975a] transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MeetLocalsSection