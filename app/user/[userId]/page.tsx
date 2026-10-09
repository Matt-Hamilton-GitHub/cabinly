'use client'

import { useState } from 'react'
import { useUserProfile } from '../../_hooks/useUserProfile'
import { useUserBookings } from '@/app/_hooks/useUserBookings'
import {
  User, Settings, Trophy, Gift, MapPin,
  Lock, Info, Zap, ArrowRight, Calendar, Home,
  CheckCircle2, Clock, Crown, Sparkles, Compass,
  Mountain, ShieldCheck, Star, Gem,
} from 'lucide-react'
import Link from 'next/link'

import { ALL_MEDALS } from '../../lib/medals'
import { BookingType } from '@/app/lib/types'
import { formatDate } from '@/app/_utils/utils'

// ─── Types ───────────────────────────────────────────────────────

type TabType = 'overview' | 'trips' | 'medals' | 'rewards' | 'settings'
type TierName = 'Explorer' | 'Adventurer' | 'Pioneer' | 'Summit'

// ─── Constants ───────────────────────────────────────────────────

const GOLD = '#c9a96e'
const GOLD_LIGHT = '#ecdcb0'

const TIERS: TierName[] = ['Explorer', 'Adventurer', 'Pioneer', 'Summit']

const TIER_COLORS = {
  Explorer:   { bg: 'bg-[#e1f5ee]', text: 'text-[#085041]', bar: 'bg-[#085041]' },
  Adventurer: { bg: 'bg-[#faeeda]', text: 'text-[#633806]', bar: 'bg-[#633806]' },
  Pioneer:    { bg: 'bg-[#e8e1fa]', text: 'text-[#3d0663]', bar: 'bg-[#3d0663]' },
  Summit:     { bg: 'bg-[#a8d5d0]', text: 'text-[#0f3d3e]', bar: 'bg-[#0f3d3e]' },
}

const TIER_THRESHOLDS = {
  Explorer:   { min: 0,     max: 1000  },
  Adventurer: { min: 1000,  max: 5000  },
  Pioneer:    { min: 5000,  max: 10000 },
  Summit:     { min: 10000, max: 10000 },
}

const NEXT_TIER = {
  Explorer:   'Adventurer',
  Adventurer: 'Pioneer',
  Pioneer:    'Summit',
  Summit:     null,
}

const TIER_PERKS: Record<TierName, string[]> = {
  Explorer:   ['Earn Summit Points on every booking', 'Access to the medal collection', 'Member-only trip updates'],
  Adventurer: ['Priority support from our team', 'Early access to new destinations', 'Partner shop discounts'],
  Pioneer:    ['Complimentary cabin upgrades', 'Exclusive guided experiences', 'Flexible cancellation windows'],
  Summit:     ['Dedicated concierge', 'VIP experiences and private events', 'Highest points multiplier'],
}

const POINTS_INFO = [
  { action: 'Complete a booking',        pts: 100, icon: <CheckCircle2 size={16} /> },
  { action: 'Reserve a cabin per night', pts: 50,  icon: <Home size={16} /> },
  { action: 'Sign up for an activity',   pts: 75,  icon: <Compass size={16} /> },
  { action: 'Complete an activity',      pts: 150, icon: <Mountain size={16} /> },
  { action: 'Leave a review',            pts: 50,  icon: <Star size={16} /> },
  { action: 'Refer a friend',            pts: 300, icon: <Gift size={16} /> },
]

const GLOBAL_CSS = `
@keyframes acctFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes acctShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes acctFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}
.acct-fade { animation: acctFadeUp .6s cubic-bezier(.2,.7,.2,1) both; }
.acct-shimmer-text {
  background: linear-gradient(90deg, ${GOLD} 0%, #fff4d6 50%, ${GOLD} 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: acctShimmer 6s linear infinite;
}
.acct-float { animation: acctFloat 6s ease-in-out infinite; }
`

// ─── Small shared pieces ─────────────────────────────────────────

const TabButton = ({
  active, icon, label, onClick,
}: {
  active: boolean; icon: React.ReactNode; label: string; onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-5 py-3 rounded-full text-sm
      font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
        active
          ? 'bg-[#0f3d3e] text-[#f4efe2] shadow-[0_8px_24px_-8px_rgba(15,61,62,0.6)]'
          : 'text-[#0f3d3e]/50 hover:text-[#0f3d3e] hover:bg-[#0f3d3e]/[0.04]'
      }`}
  >
    <span className={active ? 'text-[#c9a96e]' : ''}>{icon}</span>
    {label}
  </button>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2 flex
    items-center gap-3 text-[#b8975a]">
    <span className="h-px w-8 bg-[#c9a96e]/60" />
    {children}
  </p>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl text-[#0f3d3e] mb-8 tracking-tight">
    {children}
  </h2>
)

const Card = ({
  children, className = '',
}: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-3xl border border-[#0f3d3e]/[0.07]
    shadow-[0_1px_2px_rgba(15,61,62,0.04),0_20px_50px_-24px_rgba(15,61,62,0.18)]
    ${className}`}>
    {children}
  </div>
)

const CardHeading = ({
  children, action,
}: { children: React.ReactNode; action?: React.ReactNode }) => (
  <div className="flex items-center justify-between mb-6">
    <p className="font-serif text-lg text-[#0f3d3e]">{children}</p>
    {action}
  </div>
)

// ─── Overview Tab ────────────────────────────────────────────────

const OverviewTab = ({
  user, bookings, onNavigate,
}: {
  user: any; bookings: BookingType[]; onNavigate: (t: TabType) => void
}) => {
  const tier       = (user.tier ?? 'Explorer') as TierName
  const points     = user.points ?? 0
  const tierColors = TIER_COLORS[tier]
  const thresholds = TIER_THRESHOLDS[tier]
  const nextTier   = NEXT_TIER[tier]
  const progress   = tier === 'Summit'
    ? 100
    : Math.min(100, Math.max(0, Math.round(
        ((points - thresholds.min) / (thresholds.max - thresholds.min)) * 100
      )))
  const ptsToNext  = Math.max(0, thresholds.max - points)

  const earnedMedals: string[] = (user.medals ?? []).filter((m: any) => m)
  const allBookings: any[] = (bookings as any[]) ?? user.bookings ?? []
  const nextTrip = allBookings.find((b: any) => b.status === 'upcoming')

  const quickStats = [
    { icon: <MapPin size={18} />,       label: 'Trips',      val: user.completedTrips?.length ?? 0 },
    { icon: <Compass size={18} />,      label: 'Activities', val: user.completedActivities?.length ?? 0 },
    { icon: <Trophy size={18} />,       label: 'Medals',     val: earnedMedals.length },
    { icon: <Home size={18} />,         label: 'Cabin stays', val: allBookings.length },
  ]

  return (
    <div className="space-y-8 acct-fade">

      {/* Membership card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br
        from-[#0a2c2d] via-[#0f3d3e] to-[#17575a] p-10 sm:p-12
        shadow-[0_30px_80px_-30px_rgba(15,61,62,0.7)]">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full
          bg-[#c9a96e]/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full
          bg-[#a8d5d0]/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
          from-transparent via-[#c9a96e]/70 to-transparent" />

        <div className="relative">
          <div className="flex items-start justify-between gap-6 flex-wrap mb-10">
            <div>
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase
                text-[#c9a96e] mb-3">
                Membership
              </p>
              <div className="flex items-center gap-3">
                <Crown size={22} className="text-[#c9a96e]" />
                <span className="font-serif text-4xl text-[#f4efe2]">{tier}</span>
              </div>
              <span className={`inline-block text-[10px] font-medium px-3 py-1
                rounded-full mt-4 tracking-widest uppercase ${tierColors.bg}
                ${tierColors.text}`}>
                Active member
              </span>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-medium tracking-[0.3em] uppercase
                text-[#a8d5d0]">
                Summit Points
              </p>
              <p className="font-serif text-6xl mt-2 acct-shimmer-text">
                {points.toLocaleString()}
              </p>
            </div>
          </div>

          {nextTier ? (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-[#f4efe2]/60 tracking-wide">{tier}</span>
                <span className="text-xs text-[#c9a96e] tracking-wide">{nextTier}</span>
              </div>
              <div className="h-2 bg-[#f4efe2]/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700
                    bg-gradient-to-r from-[#a8d5d0] via-[#ecdcb0] to-[#c9a96e]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-[#f4efe2]/50 font-light">
                  {ptsToNext.toLocaleString()} points until {nextTier}
                </p>
                <p className="text-xs text-[#f4efe2]/50 font-light">{progress}%</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-[#c9a96e] font-light flex items-center gap-2">
              <Sparkles size={16} /> You have reached our highest tier. Welcome to the summit.
            </p>
          )}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {quickStats.map((s) => (
          <Card key={s.label}
            className="p-7 text-center hover:-translate-y-1 transition-transform
              duration-300">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br
              from-[#e1f5ee] to-[#f4efe2] flex items-center justify-center
              text-[#0f3d3e] mx-auto mb-4 border border-[#c9a96e]/30">
              {s.icon}
            </div>
            <p className="font-serif text-4xl text-[#0f3d3e]">{s.val}</p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#0f3d3e]/40
              mt-2">
              {s.label}
            </p>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left column */}
        <div className="lg:col-span-3 space-y-8">

          {/* Next trip */}
          <Card className="p-8">
            <CardHeading
              action={
                <button onClick={() => onNavigate('trips')}
                  className="text-xs text-[#b8975a] hover:text-[#0f3d3e]
                    transition-colors flex items-center gap-1">
                  All trips <ArrowRight size={12} />
                </button>
              }>
              Your next journey
            </CardHeading>
            {nextTrip ? (
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br
                  from-[#0f3d3e] to-[#1a5c5e] flex items-center justify-center
                  flex-shrink-0 shadow-lg">
                  <Mountain size={28} className="text-[#c9a96e]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-serif text-2xl text-[#0f3d3e] truncate">
                    {nextTrip.placeRef?.title ?? 'Upcoming trip'}
                  </p>
                  <p className="text-sm text-[#0f3d3e]/50 mt-1.5 flex items-center gap-2">
                    <Calendar size={14} />
                    {formatDate(nextTrip.from)} – {formatDate(nextTrip.to)}
                  </p>
                  {nextTrip.cabinRef?.name && (
                    <p className="text-sm text-[#0f3d3e]/50 mt-1 flex items-center gap-2">
                      <Home size={14} /> {nextTrip.cabinRef.name}
                    </p>
                  )}
                </div>
                <span className="text-[10px] tracking-widest uppercase px-3 py-1.5
                  rounded-full bg-[#e1f5ee] text-[#085041] font-medium">
                  Upcoming
                </span>
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="text-sm text-[#0f3d3e]/50 font-light mb-5">
                  Nothing on the horizon yet. Your next adventure is waiting.
                </p>
                <Link href="/places"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                    bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium
                    hover:bg-[#1a5c5e] transition-colors">
                  Plan a trip <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </Card>

          {/* Recent medals */}
          <Card className="p-8">
            <CardHeading
              action={
                <button onClick={() => onNavigate('medals')}
                  className="text-xs text-[#b8975a] hover:text-[#0f3d3e]
                    transition-colors flex items-center gap-1">
                  View all <ArrowRight size={12} />
                </button>
              }>
              Recent medals
            </CardHeading>
            {earnedMedals.length > 0 ? (
              <div className="flex gap-4 flex-wrap">
                {earnedMedals.slice(0, 6).map((medalId) => {
                  const medal = ALL_MEDALS.find((m) => m.id === medalId)
                  return (
                    <div key={medalId} className="flex flex-col items-center gap-2 w-20">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br
                        from-[#e1f5ee] to-[#f4efe2] border-2 border-[#c9a96e]/60
                        flex items-center justify-center text-3xl
                        shadow-[0_8px_20px_-8px_rgba(201,169,110,0.6)]">
                        {medal?.emoji}
                      </div>
                      <p className="text-[10px] text-center text-[#0f3d3e]/60
                        leading-tight">
                        {medal?.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            ) : (
              <p className="text-sm text-[#0f3d3e]/40 font-light">
                Complete activities and explore to earn your first medal.
              </p>
            )}
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2 space-y-8">

          {/* Tier ladder */}
          <Card className="p-8">
            <CardHeading>Tier journey</CardHeading>
            <ol className="space-y-5">
              {TIERS.map((t, i) => {
                const currentIdx = TIERS.indexOf(tier)
                const reached = i <= currentIdx
                return (
                  <li key={t} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center
                        justify-center border-2 transition-colors ${
                          reached
                            ? 'bg-[#0f3d3e] border-[#c9a96e] text-[#c9a96e]'
                            : 'bg-white border-[#0f3d3e]/15 text-[#0f3d3e]/25'
                        }`}>
                        {reached ? <CheckCircle2 size={14} /> : <Lock size={12} />}
                      </div>
                      {i < TIERS.length - 1 && (
                        <div className={`w-px h-6 mt-1 ${
                          i < currentIdx ? 'bg-[#c9a96e]' : 'bg-[#0f3d3e]/10'}`} />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <p className={`text-sm font-medium ${
                        reached ? 'text-[#0f3d3e]' : 'text-[#0f3d3e]/35'}`}>
                        {t}
                        {t === tier && (
                          <span className="ml-2 text-[9px] tracking-widest uppercase
                            text-[#b8975a]">
                            Current
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-[#0f3d3e]/40 font-light mt-0.5">
                        {TIER_THRESHOLDS[t].min.toLocaleString()}+ points
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </Card>

          {/* Your perks */}
          <Card className="p-8 bg-gradient-to-br from-[#faf6ec] to-white">
            <CardHeading>Your {tier} perks</CardHeading>
            <ul className="space-y-3">
              {TIER_PERKS[tier].map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-sm
                  text-[#0f3d3e]/70 font-light leading-relaxed">
                  <Gem size={14} className="text-[#c9a96e] mt-1 flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}

// ─── Trips Tab ───────────────────────────────────────────────────

const BookingCard = ({ booking }: { booking: any }) => {
  const statusStyle =
    booking.status === 'upcoming'
      ? 'bg-[#e1f5ee] text-[#085041]'
      : booking.status === 'completed'
      ? 'bg-[#c9a96e]/15 text-[#8a6d35]'
      : 'bg-red-50 text-red-500'

  return (
    <Card className="p-7 hover:-translate-y-0.5 hover:border-[#c9a96e]/40
      transition-all duration-300 relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b
        from-[#c9a96e] to-[#c9a96e]/0" />
      <div className="flex items-start gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f3d3e]
          to-[#1a5c5e] flex items-center justify-center flex-shrink-0 shadow-md">
          <MapPin size={22} className="text-[#c9a96e]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <p className="font-serif text-xl text-[#0f3d3e] truncate">
              {booking.placeRef?.title ?? 'Trip'}
            </p>
            <span className={`text-[10px] font-medium px-3 py-1.5 rounded-full
              tracking-widest uppercase flex-shrink-0 ${statusStyle}`}>
              {booking.status}
            </span>
          </div>
          <div className="flex items-center gap-5 mt-3 flex-wrap">
            <span className="flex items-center gap-2 text-sm text-[#0f3d3e]/50">
              <Calendar size={14} />
              {formatDate(booking.from)} – {formatDate(booking.to)}
            </span>
            <span className="flex items-center gap-2 text-sm text-[#0f3d3e]/50">
              <Home size={14} />
              {booking.cabinRef?.name ?? 'Cabin'}
            </span>
            {booking.nights && (
              <span className="flex items-center gap-2 text-sm text-[#0f3d3e]/50">
                <Clock size={14} />
                {booking.nights} nights
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-5 pt-5
            border-t border-[#0f3d3e]/[0.06]">
            <span className="text-xs text-[#b8975a] font-medium flex items-center gap-1.5">
              <Zap size={12} />
              +{booking.pointsEarned ?? 0} pts earned
            </span>
            {booking.totalPaid && (
              <span className="font-serif text-lg text-[#0f3d3e]">
                ${booking.totalPaid.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

const TripsTab = ({ bookings }: { bookings: BookingType[] }) => {
  const upcoming  = bookings.filter((b: any) => b.status === 'upcoming')
  const past      = bookings.filter((b: any) => b.status === 'completed')
  const cancelled = bookings.filter((b: any) => b.status === 'cancelled')

  if (bookings.length === 0) {
    return (
      <Card className="text-center py-24 px-6 acct-fade">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f4efe2]
          to-[#e1f5ee] flex items-center justify-center mx-auto mb-8 border
          border-[#c9a96e]/30 acct-float">
          <Mountain size={34} className="text-[#0f3d3e]/50" />
        </div>
        <p className="font-serif text-3xl text-[#0f3d3e] mb-3">No trips yet</p>
        <p className="text-sm text-[#0f3d3e]/45 font-light mb-10 max-w-sm mx-auto
          leading-relaxed">
          Your bookings will appear here once you book your first adventure.
        </p>
        <Link href="/places"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
            bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium tracking-wide
            hover:bg-[#1a5c5e] transition-colors shadow-lg">
          Browse destinations
          <ArrowRight size={14} />
        </Link>
      </Card>
    )
  }

  const Group = ({
    label, title, list,
  }: { label: string; title: string; list: any[] }) =>
    list.length > 0 ? (
      <div>
        <SectionLabel>{label}</SectionLabel>
        <SectionTitle>{title}</SectionTitle>
        <div className="space-y-5">
          {list.map((b: any) => <BookingCard key={b._id} booking={b} />)}
        </div>
      </div>
    ) : null

  return (
    <div className="space-y-14 acct-fade">
      <Group label="Coming up" title="Upcoming trips"     list={upcoming} />
      <Group label="History"   title="Past adventures"    list={past} />
      <Group label="Cancelled" title="Cancelled bookings" list={cancelled} />
    </div>
  )
}

// ─── Medals Tab ──────────────────────────────────────────────────

const MedalsTab = ({ user }: { user: any }) => {
  const [hoveredInfo, setHoveredInfo] = useState(false)
  const earnedIds: string[] = user.medals ?? []
  const pct = ALL_MEDALS.length
    ? Math.round((earnedIds.length / ALL_MEDALS.length) * 100)
    : 0

  return (
    <div className="acct-fade">
      <div className="flex items-start justify-between mb-2">
        <div>
          <SectionLabel>Achievements</SectionLabel>
          <SectionTitle>Medal shelf</SectionTitle>
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => setHoveredInfo(true)}
            onMouseLeave={() => setHoveredInfo(false)}
            className="w-10 h-10 rounded-full border border-[#0f3d3e]/15
              flex items-center justify-center text-[#0f3d3e]/40
              hover:text-[#0f3d3e] hover:border-[#c9a96e] transition-colors"
          >
            <Info size={16} />
          </button>
          {hoveredInfo && (
            <div className="absolute right-0 top-12 w-72 bg-white border
              border-[#0f3d3e]/10 rounded-2xl p-5 shadow-2xl z-20">
              <p className="font-serif text-base text-[#0f3d3e] mb-2">
                What are medals?
              </p>
              <p className="text-xs text-[#0f3d3e]/55 leading-relaxed font-light">
                Medals are earned by completing activities, reaching milestones,
                and exploring the world. Each medal is a permanent badge on your
                profile. Locked medals show you what adventures still await.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Collection progress */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r
        from-[#0f3d3e] to-[#17575a] px-8 py-7 mb-10 flex items-center
        justify-between gap-8 flex-wrap">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
          from-transparent via-[#c9a96e]/70 to-transparent" />
        <div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-2">
            Collection
          </p>
          <p className="text-[#f4efe2]/70 font-light">
            <span className="font-serif text-4xl text-[#f4efe2] mr-2">
              {earnedIds.length}
            </span>
            of {ALL_MEDALS.length} medals earned
          </p>
        </div>
        <div className="flex items-center gap-4 flex-1 min-w-[200px] max-w-sm">
          <div className="h-2 flex-1 bg-[#f4efe2]/10 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#a8d5d0]
                to-[#c9a96e] transition-all duration-700"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-sm text-[#c9a96e] font-medium w-10 text-right">
            {pct}%
          </span>
        </div>
      </div>

      {/* Medal grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        gap-x-6 gap-y-10">
        {ALL_MEDALS.map((medal) => {
          const earned = earnedIds.includes(medal.id)
          return (
            <div key={medal.id}
              className="group relative flex flex-col items-center gap-3">
              <div className={`w-24 h-24 rounded-full flex items-center
                justify-center relative transition-all duration-300
                group-hover:-translate-y-1 ${
                  earned
                    ? 'bg-gradient-to-br from-[#e1f5ee] to-[#f4efe2] border-2 border-[#c9a96e] shadow-[0_14px_30px_-10px_rgba(201,169,110,0.7)]'
                    : 'bg-white border-2 border-dashed border-[#0f3d3e]/15 shadow-inner'
                }`}>
                {earned ? (
                  <span className="text-4xl">{medal.emoji}</span>
                ) : (
                  <>
                    <span className="text-4xl opacity-10 grayscale">
                      {medal.emoji}
                    </span>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7
                      rounded-full bg-white border border-[#0f3d3e]/10
                      flex items-center justify-center shadow-sm">
                      <Lock size={12} className="text-[#0f3d3e]/40" />
                    </div>
                  </>
                )}
              </div>

              <p className={`text-xs text-center leading-tight font-medium ${
                earned ? 'text-[#0f3d3e]' : 'text-[#0f3d3e]/30'}`}>
                {medal.name}
              </p>

              {/* Tooltip */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2
                bg-[#0f3d3e] text-[#f4efe2] text-[11px] px-4 py-2.5 rounded-xl
                opacity-0 group-hover:opacity-100 transition-opacity
                pointer-events-none z-10 shadow-xl w-44 text-center
                leading-relaxed">
                {earned ? 'Unlocked' : medal.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2
                  border-4 border-transparent border-t-[#0f3d3e]" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Rewards Tab ─────────────────────────────────────────────────

const RewardsTab = ({ user }: { user: any }) => {
  const pts = user.points ?? 0
  return (
    <div className="space-y-10 acct-fade">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br
        from-[#0a2c2d] to-[#17575a] p-12 text-center">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96
          rounded-full bg-[#c9a96e]/10 blur-3xl" />
        <div className="relative">
          <div className="w-20 h-20 rounded-full border border-[#c9a96e]/50
            flex items-center justify-center mx-auto mb-6 bg-[#c9a96e]/10
            acct-float">
            <Gift size={30} className="text-[#c9a96e]" />
          </div>
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#c9a96e] mb-3">
            Available to spend
          </p>
          <p className="font-serif text-6xl acct-shimmer-text mb-4">
            {pts.toLocaleString()}
          </p>
          <p className="text-sm text-[#f4efe2]/60 font-light max-w-md mx-auto
            leading-relaxed">
            Rewards can be spent at local shops. Use your Summit Points on gear
            discounts, exclusive activities, and VIP experiences.
          </p>
        </div>
      </div>

      <div>
        <SectionLabel>Earn more</SectionLabel>
        <SectionTitle>Ways to earn Summit Points</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS_INFO.map((p) => (
            <Card key={p.action} className="p-6 flex items-center gap-4
              hover:border-[#c9a96e]/40 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br
                from-[#e1f5ee] to-[#f4efe2] flex items-center justify-center
                text-[#0f3d3e] flex-shrink-0 border border-[#c9a96e]/30">
                {p.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#0f3d3e] leading-snug">{p.action}</p>
              </div>
              <span className="font-serif text-xl text-[#b8975a]">+{p.pts}</span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Settings Tab ────────────────────────────────────────────────

const inputClass = `w-full px-5 py-3.5 rounded-2xl border border-[#0f3d3e]/15
  bg-white text-sm text-[#0f3d3e] outline-none focus:border-[#c9a96e]
  focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)] transition-all`

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="block text-[11px] font-medium tracking-[0.15em] uppercase
    text-[#0f3d3e]/60 mb-2">
    {children}
  </label>
)

const SettingsTab = ({ user }: { user: any }) => {
  const [name, setName]   = useState(user.name ?? '')
  const [email, setEmail] = useState(user.email ?? '')
  const [saved, setSaved] = useState(false)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    // PATCH /api/account/:id — UI only for now
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="max-w-2xl space-y-10 acct-fade">

      <div>
        <SectionLabel>Account</SectionLabel>
        <SectionTitle>Profile settings</SectionTitle>
        <Card className="p-8">
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <FieldLabel>Full name</FieldLabel>
              <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} className={inputClass} />
            </div>
            <div>
              <FieldLabel>Email address</FieldLabel>
              <input type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>
            <button type="submit"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full
                bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium tracking-wide
                hover:bg-[#1a5c5e] transition-colors">
              {saved ? (
                <>
                  <CheckCircle2 size={14} className="text-[#c9a96e]" />
                  Saved
                </>
              ) : 'Save changes'}
            </button>
          </form>
        </Card>
      </div>

      <div>
        <SectionLabel>Security</SectionLabel>
        <SectionTitle>Change password</SectionTitle>
        <Card className="p-8">
          <div className="space-y-6">
            {['Current password', 'New password', 'Confirm new password'].map(
              (label) => (
                <div key={label}>
                  <FieldLabel>{label}</FieldLabel>
                  <input type="password" className={inputClass} />
                </div>
              )
            )}
            <button className="flex items-center gap-2 px-7 py-3.5 rounded-full
              border border-[#0f3d3e] text-[#0f3d3e] text-sm font-medium
              tracking-wide hover:bg-[#0f3d3e] hover:text-[#f4efe2]
              transition-colors">
              <ShieldCheck size={15} />
              Update password
            </button>
          </div>
        </Card>
      </div>

      <div>
        <Card className="p-8 border-red-100">
          <p className="font-serif text-lg text-red-500 mb-2">Danger zone</p>
          <p className="text-sm text-[#0f3d3e]/45 font-light mb-6 leading-relaxed">
            Deleting your account is permanent and cannot be undone. All your
            trips, medals, and points will be lost.
          </p>
          <button className="px-6 py-3 rounded-full border border-red-200
            text-red-400 text-sm hover:bg-red-50 transition-colors">
            Delete account
          </button>
        </Card>
      </div>
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────

export default function AccountPage() {
  const { data: user, isLoading } = useUserProfile()
  const { data: bookings } = useUserBookings()
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fbfaf6]">
        <div className="w-10 h-10 rounded-full border-2 border-[#c9a96e]/30
          border-t-[#c9a96e] animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center
        gap-4 bg-[#fbfaf6]">
        <h1 className="text-lg text-gray-400">
          <Link href="/log-in" className="text-black font-bold">Log In</Link>{' '}
          to view your account
        </h1>
      </div>
    )
  }

  const tier       = (user.tier ?? 'Explorer') as TierName
  const tierColors = TIER_COLORS[tier]
  const initials   = user.name
    ? user.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
    : ''
  const joinedYear = user.joinedAt
    ? new Date(user.joinedAt).getFullYear()
    : new Date().getFullYear()
  const medalCount = (user.medals ?? []).length

  const TABS = [
    { tab: 'overview' as TabType, icon: <User size={15} />,     label: 'Overview' },
    { tab: 'trips'    as TabType, icon: <MapPin size={15} />,   label: 'Trips'    },
    { tab: 'medals'   as TabType, icon: <Trophy size={15} />,   label: 'Medals'   },
    { tab: 'rewards'  as TabType, icon: <Gift size={15} />,     label: 'Rewards'  },
    { tab: 'settings' as TabType, icon: <Settings size={15} />, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-[#fbfaf6]">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* ── Profile header ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#071f20]
        via-[#0a2c2d] to-[#0f3d3e] px-6 pt-20 pb-44">
        {/* Glows */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full
          bg-[#c9a96e]/10 blur-3xl -translate-y-1/2 translate-x-1/4
          pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[32rem] h-[32rem] rounded-full
          bg-[#a8d5d0]/10 blur-3xl translate-y-1/2 -translate-x-1/4
          pointer-events-none" />

        {/* Layered mountains */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 220" preserveAspectRatio="none"
            className="w-full h-48">
            <path d="M0 220 L0 150 L180 70 L330 140 L520 40 L720 150 L900 80 L1100 160 L1280 60 L1440 130 L1440 220 Z"
              fill="#e8f0ed" opacity="0.05" />
            <path d="M0 220 L0 180 L220 110 L400 170 L600 90 L820 180 L1020 110 L1240 175 L1440 120 L1440 220 Z"
              fill="#e8f0ed" opacity="0.07" />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r
          from-transparent via-[#c9a96e]/50 to-transparent" />

        <div className="max-w-6xl mx-auto relative">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-10">
            Member lounge
          </p>
          <div className="flex items-center gap-8 flex-wrap">

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-1.5 rounded-[1.75rem] bg-gradient-to-br
                from-[#ecdcb0] via-[#c9a96e] to-[#8a6d35] opacity-90" />
              <div className="relative w-28 h-28 rounded-3xl bg-[#0a2c2d] flex
                items-center justify-center">
                <span className="font-serif text-4xl text-[#ecdcb0]">
                  {initials}
                </span>
              </div>
              <div className="absolute -bottom-3 -right-3 w-9 h-9 rounded-full
                bg-[#0f3d3e] border-2 border-[#c9a96e] flex items-center
                justify-center">
                <Crown size={15} className="text-[#c9a96e]" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-[240px]">
              <div className="flex items-center gap-4 flex-wrap mb-2">
                <h1 className="font-serif text-4xl sm:text-5xl text-[#f4efe2]
                  tracking-tight">
                  {user.name}
                </h1>
                <span className={`text-[10px] font-medium px-3 py-1.5
                  rounded-full tracking-widest uppercase ${tierColors.bg}
                  ${tierColors.text}`}>
                  {tier}
                </span>
              </div>
              <p className="text-sm text-[#f4efe2]/50 font-light mb-6">
                {user.email}
              </p>
              <div className="flex items-center gap-7 flex-wrap">
                <span className="flex items-center gap-2 text-sm text-[#f4efe2]/55
                  font-light">
                  <Calendar size={14} className="text-[#c9a96e]" />
                  Member since {joinedYear}
                </span>
                <span className="flex items-center gap-2 text-sm text-[#f4efe2]/55
                  font-light">
                  <MapPin size={14} className="text-[#c9a96e]" />
                  {user.completedTrips?.length ?? 0} trips completed
                </span>
                <span className="flex items-center gap-2 text-sm text-[#f4efe2]/55
                  font-light">
                  <Trophy size={14} className="text-[#c9a96e]" />
                  {medalCount} medals
                </span>
              </div>
            </div>

            {/* Points pill */}
            <div className="bg-[#f4efe2]/[0.06] backdrop-blur border
              border-[#c9a96e]/30 rounded-3xl px-9 py-7 text-center flex-shrink-0
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]">
              <Zap size={22} className="text-[#c9a96e] mx-auto mb-2" />
              <p className="font-serif text-4xl acct-shimmer-text">
                {(user.points ?? 0).toLocaleString()}
              </p>
              <p className="text-[10px] tracking-[0.25em] uppercase
                text-[#f4efe2]/45 mt-2">
                Summit Points
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Summit Points banner ── */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 mb-14 relative z-10">
        <Card className="p-8 sm:p-10">
          <div className="flex items-center justify-between flex-wrap gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br
                from-[#0f3d3e] to-[#1a5c5e] flex items-center justify-center
                flex-shrink-0 shadow-lg">
                <Zap size={26} className="text-[#c9a96e]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-serif text-xl text-[#0f3d3e]">
                    Summit Points
                  </p>
                  <div className="relative group">
                    <button className="w-5 h-5 rounded-full border
                      border-[#0f3d3e]/20 flex items-center justify-center
                      text-[#0f3d3e]/40 hover:text-[#0f3d3e] transition-colors">
                      <Info size={11} />
                    </button>
                    <div className="absolute left-7 -top-2 w-64 bg-[#0f3d3e]
                      text-[#f4efe2] text-[11px] px-4 py-3 rounded-2xl
                      opacity-0 group-hover:opacity-100 transition-opacity
                      pointer-events-none z-20 shadow-xl leading-relaxed">
                      Earn points by booking cabins, completing activities,
                      writing reviews, and referring friends. Spend them in
                      the rewards store on gear, upgrades, and exclusive events.
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#0f3d3e]/45 font-light">
                  Earn on every adventure. Spend on exclusive rewards.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8 flex-wrap">
              {POINTS_INFO.slice(0, 3).map((p) => (
                <div key={p.action} className="text-center">
                  <p className="font-serif text-2xl text-[#b8975a]">+{p.pts}</p>
                  <p className="text-[11px] text-[#0f3d3e]/45 font-light
                    max-w-[110px] leading-tight mt-1">
                    {p.action}
                  </p>
                </div>
              ))}
              <Link href="/rewards"
                className="flex items-center gap-2 text-xs text-[#0f3d3e]
                  font-medium tracking-wide px-5 py-3 rounded-full border
                  border-[#c9a96e]/60 hover:bg-[#c9a96e]/10 transition-colors">
                All ways to earn
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Card>
      </div>

      {/* ── Tabs ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-flex items-center gap-1 mb-12 p-1.5 bg-white
          rounded-full border border-[#0f3d3e]/[0.07] overflow-x-auto max-w-full
          shadow-[0_10px_30px_-15px_rgba(15,61,62,0.25)]">
          {TABS.map(({ tab, icon, label }) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              icon={icon}
              label={label}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        <div className="pb-28" key={activeTab}>
          {activeTab === 'overview' && (
            <OverviewTab user={user} bookings={bookings ?? []} onNavigate={setActiveTab} />
          )}
          {activeTab === 'trips'    && <TripsTab    bookings={bookings ?? []} />}
          {activeTab === 'medals'   && <MedalsTab   user={user} />}
          {activeTab === 'rewards'  && <RewardsTab  user={user} />}
          {activeTab === 'settings' && <SettingsTab user={user} />}
        </div>
      </div>
    </div>
  )
}