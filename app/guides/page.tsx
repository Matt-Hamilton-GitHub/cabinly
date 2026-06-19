'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useGuides } from '../_hooks/useQuides'
import SpinnerBoxJump from '../_components/SpinnerBoxJump'
import {
  Star, Trophy, Zap, Clock, ChevronDown,
  ChevronUp, Crown, Medal, Award
} from 'lucide-react'
import { GuideType } from '../lib/types'

// ─── Helpers ─────────────────────────────────────────────────────

const calcScore = (guide: GuideType): number =>
  (guide.xpPoints ?? 0) + (guide.yrsExp ?? 0) + (guide.rating ?? 0) * 100

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={12}
        className={s <= Math.round(rating)
          ? 'fill-[#a8d5d0] text-[#a8d5d0]'
          : 'text-gray-200'
        }
      />
    ))}
    <span className="text-xs text-gray-400 ml-1">{rating.toFixed(1)}</span>
  </div>
)

const Avatar = ({
  guide,
  size = 'md',
}: {
  guide: GuideType
  size?: 'sm' | 'md' | 'lg'
}) => {
  const dims = { sm: 40, md: 56, lg: 80 }[size]
  const textSize = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl' }[size]

  return (
    <div
      style={{ width: dims, height: dims }}
      className="rounded-full overflow-hidden bg-[#e1f5ee] flex items-center
        justify-center flex-shrink-0 border-2 border-[#a8d5d0]/30"
    >
      {guide.imgUrl ? (
        <img
          src={guide.imgUrl}
          alt={guide.name}
          width={dims}
          height={dims}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className={`font-medium text-[#085041] ${textSize}`}>
          {guide.initials}
        </span>
      )}
    </div>
  )
}

// ─── Top 3 Podium ─────────────────────────────────────────────────

const PODIUM_ICONS = [
  { icon: <Crown size={18} />,  color: 'text-yellow-500', bg: 'bg-yellow-50',  border: 'border-yellow-200', label: '1st' },
  { icon: <Medal size={18} />,  color: 'text-gray-400',   bg: 'bg-gray-50',    border: 'border-gray-200',   label: '2nd' },
  { icon: <Award size={18} />,  color: 'text-orange-400', bg: 'bg-orange-50',  border: 'border-orange-200', label: '3rd' },
]

const PodiumCard = ({
  guide,
  rank,
}: {
  guide: GuideType
  rank: number
}) => {
  const p = PODIUM_ICONS[rank]
  const score = calcScore(guide)

  return (
    <div className={`relative border-2 ${p.border} rounded-2xl p-6
      bg-white flex flex-col items-center text-center
      ${rank === 0 ? 'shadow-lg scale-105' : ''}`}>

      {/* Rank badge */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 flex
        items-center gap-1 px-3 py-1 rounded-full border ${p.border}
        ${p.bg} text-xs font-medium ${p.color}`}>
        {p.icon}
        {p.label}
      </div>

      <Avatar guide={guide} size="lg" />

      <p className="text-base font-medium text-[#0f3d3e] mt-4 mb-0.5">
        {guide.name}
      </p>
      <p className="text-xs text-gray-400 font-light mb-3">{guide.role}</p>

      <StarRating rating={guide.rating} />

      <div className="flex items-center gap-1.5 mt-3 bg-[#0f3d3e] rounded-full
        px-3 py-1">
        <Zap size={12} className="text-[#a8d5d0]" />
        <span className="text-xs font-medium text-[#e8f0ed]">
          {score.toLocaleString()} pts
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 w-full">
        <div className="bg-[#f8faf9] rounded-xl p-2.5 text-center">
          <p className="text-sm font-medium text-[#0f3d3e]">{guide.yrsExp}y</p>
          <p className="text-[10px] text-gray-400">Experience</p>
        </div>
        <div className="bg-[#f8faf9] rounded-xl p-2.5 text-center">
          <p className="text-sm font-medium text-[#0f3d3e]">
            {guide.reviewCount}
          </p>
          <p className="text-[10px] text-gray-400">Reviews</p>
        </div>
      </div>
    </div>
  )
}

// ─── Guide Card ───────────────────────────────────────────────────

const GuideCard = ({ guide }: { guide: GuideType }) => {
  const [expanded, setExpanded] = useState(false)
  const score = calcScore(guide)

  return (
    <div className="border border-[#0f3d3e]/08 rounded-2xl p-5
      hover:border-[#a8d5d0]/50 transition-colors">

      {/* Header row */}
      <div className="flex items-start gap-4">
        <Avatar guide={guide} size="md" />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-[#0f3d3e]">
                {guide.name}
              </p>
              <p className="text-xs text-gray-400 font-light mt-0.5">
                {guide.role}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-[#0f3d3e]/05
              border border-[#0f3d3e]/08 rounded-full px-2.5 py-1
              flex-shrink-0">
              <Zap size={11} className="text-[#a8d5d0]" />
              <span className="text-[10px] font-medium text-[#0f3d3e]">
                {score.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2 flex-wrap">
            <StarRating rating={guide.rating} />
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <Clock size={11} />
              {guide.yrsExp} yrs experience
            </span>
            <span className="text-[10px] text-gray-400">
              {guide.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {guide.tags?.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full
            bg-[#e1f5ee] text-[#085041]">
            {tag}
          </span>
        ))}
      </div>

      {/* Bio — expandable */}
      <div className="mt-3">
        <p className={`text-xs text-gray-500 leading-relaxed font-light
          ${!expanded ? 'line-clamp-2' : ''}`}>
          {guide.bio}
        </p>
        {guide.bio?.length > 120 && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="flex items-center gap-1 text-[10px] text-[#a8d5d0]
              mt-1 hover:text-[#0f3d3e] transition-colors"
          >
            {expanded ? (
              <><ChevronUp size={12} />Show less</>
            ) : (
              <><ChevronDown size={12} />Read more</>
            )}
          </button>
        )}
      </div>

      {/* XP bar */}
      {/* <div className="mt-4 pt-3 border-t border-[#0f3d3e]/06">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-gray-400">XP Points</span>
          <span className="text-[10px] font-medium text-[#0f3d3e]">
            {(guide.xpPoints ?? 0).toLocaleString()} xp
          </span>
        </div>
        <div className="h-1.5 bg-[#0f3d3e]/06 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0f3d3e] to-[#a8d5d0]
              rounded-full transition-all"
            style={{
              width: `${Math.min(((guide.xpPoints ?? 0) / 5000) * 100, 100)}%`
            }}
          />
        </div>
      </div> */}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────

export default function GuidesPage() {
  const { data: guides, isLoading } = useGuides()
  const [search, setSearch] = useState('')

  if (isLoading) return (
    <div className="flex h-screen items-center justify-center">
      <SpinnerBoxJump />
    </div>
  )

  const sorted = [...(guides ?? [])].sort((a, b) => calcScore(b) - calcScore(a))
  const top3   = sorted.slice(0, 3)

  const filtered = sorted.filter((g) =>
    search === '' ||
    g.name.toLowerCase().includes(search.toLowerCase()) ||
    g.role.toLowerCase().includes(search.toLowerCase()) ||
    g.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  )

  // reorder podium: 2nd, 1st, 3rd for visual effect
  const podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean)
  const podiumRanks = [1, 0, 2]

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-[#0f3d3e] px-6 pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full"
            preserveAspectRatio="none">
            <path d="M0 100 L50 20 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase
            text-[#a8d5d0] mb-3">
            The people behind the adventures
          </p>
          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)]
            text-[#e8f0ed] leading-[1.1] mb-4">
            Meet our local guides
          </h1>
          <p className="text-[#e8f0ed]/55 font-light text-lg leading-relaxed
            max-w-lg mx-auto">
            Every guide is locally born, expertly trained, and genuinely
            passionate about sharing their corner of the world.
          </p>
        </div>
      </div>

      {/* ── Top 3 Podium ── */}
      {top3.length >= 3 && (
        <div className="max-w-4xl mx-auto px-6 -mt-12 mb-6 relative z-10">
          <div className="text-center mb-15 mt-4 relative top-2">
            <div className="inline-flex items-center gap-2 bg-white border
              border-[#0f3d3e]/08 rounded-full px-4 py-2 shadow-sm">
              <Trophy size={15} className="text-[#a8d5d0]" />
              <span className=" font-medium text-[#0f3d3e]">
                Top guides leaderboard
              </span>
            </div>
          
          </div>

          <div className="grid grid-cols-3 gap-5 items-end">
            {podiumOrder.map((guide, i) => guide && (
              <PodiumCard
                key={guide._id}
                guide={guide}
                rank={podiumRanks[i]}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── All guides ── */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase
              text-[#a8d5d0] mb-1">
              Our team
            </p>
            <h2 className="font-serif text-2xl text-[#0f3d3e]">
              All guides
              <span className="text-base text-gray-400 font-sans
                font-normal ml-2">
                {filtered.length} professionals
              </span>
            </h2>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, role, or skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm pl-4 pr-10 py-2.5 border border-[#0f3d3e]/15
                rounded-xl text-[#0f3d3e] outline-none w-64
                focus:border-[#0f3d3e] transition-colors placeholder:text-gray-300"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2
                  text-gray-300 hover:text-[#0f3d3e] transition-colors
                  text-lg leading-none"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {filtered.map((guide) => (
              <GuideCard key={guide._id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-48">
            <p className="text-sm text-gray-400">
              No guides found for "{search}"
            </p>
            <button
              onClick={() => setSearch('')}
              className="text-xs text-[#a8d5d0] mt-2 hover:text-[#087779]
                transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </main>
  )
}