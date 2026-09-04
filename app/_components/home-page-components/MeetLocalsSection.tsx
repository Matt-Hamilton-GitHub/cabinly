import React from 'react'
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react'
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
    accent: 'from-[#0f3d3e] to-[#1a5c5e]',
    ring: 'ring-[#a8d5d0]/40',
    tag: 'bg-[#e1f5ee] text-[#085041]',
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
    accent: 'from-[#0c3540] to-[#0f4a5e]',
    ring: 'ring-[#a8d5d0]/40',
    tag: 'bg-[#e1f5ee] text-[#085041]',
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
    accent: 'from-[#0f3d3e] to-[#143d30]',
    ring: 'ring-[#a8d5d0]/40',
    tag: 'bg-[#e1f5ee] text-[#085041]',
  },
]

const GuideCard = ({ guide, index }: { guide: typeof guides[0]; index: number }) => (
  <div
    className="group relative bg-white border border-[#0f3d3e]/08 rounded-2xl
      p-6 hover:border-[#a8d5d0]/60 hover:-translate-y-1
      transition-all duration-300 flex flex-col"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Top row — avatar + meta */}
    <div className="flex items-start gap-4 mb-4">

      {/* Avatar with ping */}
      <div className="relative flex-shrink-0">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${guide.accent}
          flex items-center justify-center ring-2 ${guide.ring}
          group-hover:ring-4 transition-all duration-300`}>
          <span className="text-lg font-medium text-[#e8f0ed]">
            {guide.initials}
          </span>
        </div>
        {/* online dot */}
        <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5
          rounded-full bg-white flex items-center justify-center">
          <div className="relative w-2.5 h-2.5">
            <div className="absolute inset-0 rounded-full bg-[#a8d5d0]
              animate-ping [animation-duration:2s]" />
            <div className="relative w-full h-full rounded-full bg-[#0f3d3e]" />
          </div>
        </div>
      </div>

      {/* Name + role */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[#0f3d3e]">{guide.name}</p>
        <p className="text-xs text-[#a8d5d0] font-light mt-0.5">{guide.role}</p>
        <div className="flex items-center gap-1 mt-1.5">
          <MapPin size={11} className="text-gray-300" />
          <span className="text-[10px] text-gray-400 font-light">
            {guide.location}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="text-right flex-shrink-0">
        <div className="flex items-center gap-1 justify-end">
          <Star size={11} className="fill-[#a8d5d0] text-[#a8d5d0]" />
          <span className="text-xs font-medium text-[#0f3d3e]">
            {guide.rating}
          </span>
        </div>
        <p className="text-[10px] text-gray-400 mt-0.5">
          {guide.reviews} reviews
        </p>
      </div>
    </div>

    {/* Bio */}
    <p className="text-xs text-gray-500 leading-relaxed font-light mb-4 flex-1">
      {guide.bio}
    </p>

    {/* Stats row */}
    <div className="flex items-center gap-3 mb-4 border-t border-b
      border-[#0f3d3e]/06 py-3">
      <div className="flex items-center gap-1.5">
        <Clock size={12} className="text-[#a8d5d0]" />
        <span className="text-xs text-gray-500 font-light">
          {guide.yrs} yrs exp
        </span>
      </div>
      <div className="w-px h-3 bg-[#0f3d3e]/08" />
      <div className="flex items-center gap-1.5">
        <MapPin size={12} className="text-[#a8d5d0]" />
        <span className="text-xs text-gray-500 font-light">
          Local guide
        </span>
      </div>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5">
      {guide.tags.map((tag) => (
        <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full
          ${guide.tag} font-light`}>
          {tag}
        </span>
      ))}
    </div>
  </div>
)

const MeetLocalsSection = () => {
  return (
    <section id="locals" className="py-24 bg-white relative overflow-hidden">

      {/* Subtle bg texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
        <svg viewBox="0 0 100 100" className="w-full h-full"
          preserveAspectRatio="none">
          <path d="M0 100 L50 40 L100 100 Z" fill="#0f3d3e" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-3">
            Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0f3d3e]
            leading-[1.1] mb-4">
            Meet your local guides
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light leading-relaxed">
            Every guide on Cabinly is born where they work. They don't read
            from a script — they grew up on these mountains, fjords, and
            plains and want to show you what the guidebooks miss.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {guides.map((guide, i) => (
            <GuideCard key={guide.name} guide={guide} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
              border border-[#0f3d3e]/15 text-[#0f3d3e] text-sm font-medium
              hover:bg-[#0f3d3e] hover:text-[#e8f0ed] hover:border-[#0f3d3e]
              transition-all duration-200 group"
          >
            Meet all {guides.length}+ guides
            <ArrowRight size={14} className="group-hover:translate-x-0.5
              transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MeetLocalsSection