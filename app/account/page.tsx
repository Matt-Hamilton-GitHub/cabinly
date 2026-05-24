'use client'

import { useState } from 'react'
import { useUserContext } from '../contexts/UserContext'
import {
  User, Settings, Trophy, Gift, MapPin,
  Lock, Info, Zap, Star, ArrowRight,
  Calendar, Home, CheckCircle2, Clock
} from 'lucide-react'
import Link from 'next/link'

import { ALL_MEDALS } from '../lib/medals'

// ─── Types ───────────────────────────────────────────────────────

type TabType = 'overview' | 'trips' | 'medals' | 'rewards' | 'settings'

// ─── Constants ───────────────────────────────────────────────────

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

const POINTS_INFO = [
  { action: 'Complete a booking',       pts: 100  },
  { action: 'Reserve a cabin per night',pts: 50   },
  { action: 'Sign up for an activity',  pts: 75   },
  { action: 'Complete an activity',     pts: 150  },
  { action: 'Leave a review',           pts: 50   },
  { action: 'Refer a friend',           pts: 300  },
]

// ─── Sub-components ──────────────────────────────────────────────

const TabButton = ({
  tab, active, icon, label, onClick,
}: {
  tab: TabType; active: boolean; icon: React.ReactNode
  label: string; onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm
      font-medium transition-all ${
        active
          ? 'bg-[#0f3d3e] text-[#e8f0ed]'
          : 'text-gray-500 hover:text-[#0f3d3e] hover:bg-[#f8faf9]'
      }`}
  >
    {icon}
    {label}
  </button>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[10px] font-medium tracking-[0.2em] uppercase
    text-[#a8d5d0] mb-1">
    {children}
  </p>
)

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-medium text-[#0f3d3e] mb-6">{children}</h2>
)

// ─── Overview Tab ────────────────────────────────────────────────

const OverviewTab = ({ user }: { user: any }) => {
  const tier        = user.tier ?? 'Explorer'
  const points      = user.points ?? 0
  const tierColors  = TIER_COLORS[tier as keyof typeof TIER_COLORS]
  const thresholds  = TIER_THRESHOLDS[tier as keyof typeof TIER_THRESHOLDS]
  const nextTier    = NEXT_TIER[tier as keyof typeof NEXT_TIER]
  const progress    = tier === 'Summit'
    ? 100
    : Math.round(((points - thresholds.min) / (thresholds.max - thresholds.min)) * 100)

  const earnedMedals = (user.medals ?? []).filter((m: any) => m)

  const quickStats = [
    { icon: <MapPin size={16} />,      label: 'Trips',      val: user.completedTrips?.length ?? 0 },
    { icon: <CheckCircle2 size={16} />, label: 'Activities', val: user.completedActivities?.length ?? 0 },
    { icon: <Trophy size={16} />,      label: 'Medals',     val: earnedMedals.length },
    { icon: <Home size={16} />,        label: 'Cabins',     val: user.bookings?.length ?? 0 },
  ]

  return (
    <div className="space-y-6">

      {/* Points & tier card */}
      <div className="bg-[#0f3d3e] rounded-2xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <SectionLabel>Current tier</SectionLabel>
            <span className={`inline-block text-xs font-medium px-3 py-1
              rounded-full mt-1 ${tierColors.bg} ${tierColors.text}`}>
              {tier}
            </span>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-medium tracking-[0.2em] uppercase
              text-[#a8d5d0]">
              Summit Points
            </p>
            <p className="text-3xl font-medium text-[#e8f0ed] mt-1">
              {points.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        {nextTier && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#e8f0ed]/50 font-light">
                {tier}
              </span>
              <span className="text-xs text-[#e8f0ed]/50 font-light">
                {nextTier}
              </span>
            </div>
            <div className="h-1.5 bg-[#e8f0ed]/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#a8d5d0] rounded-full transition-all
                  duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-[#e8f0ed]/40 font-light mt-2">
              {(thresholds.max - points).toLocaleString()} pts to {nextTier}
            </p>
          </div>
        )}
        {!nextTier && (
          <p className="text-xs text-[#a8d5d0] font-light">
            You have reached the highest tier 🎉
          </p>
        )}
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {quickStats.map((s) => (
          <div key={s.label}
            className="border border-[#0f3d3e]/08 rounded-2xl p-4 text-center">
            <div className="w-8 h-8 rounded-lg bg-[#e1f5ee] flex items-center
              justify-center text-[#0f3d3e] mx-auto mb-2">
              {s.icon}
            </div>
            <p className="text-xl font-medium text-[#0f3d3e]">{s.val}</p>
            <p className="text-xs text-gray-400 mt-0.5 font-light">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Recent medals preview */}
      {earnedMedals.length > 0 && (
        <div className="border border-[#0f3d3e]/08 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium text-[#0f3d3e]">
              Recent medals
            </p>
            <button className="text-xs text-[#a8d5d0] hover:text-[#0f3d3e]
              transition-colors">
              View all →
            </button>
          </div>
          <div className="flex gap-3">
            {earnedMedals.slice(0, 5).map((medal: any) => (
              <div key={medal}
                className="w-12 h-12 rounded-full bg-[#e1f5ee] border
                border-[#0f3d3e]/10 flex items-center justify-center
                text-2xl" title={medal}>
                {ALL_MEDALS.map((m) => m.id == medal && m.emoji)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming trip preview */}
      {(user.bookings ?? []).filter((b: any) => b.status === 'upcoming').length > 0 && (
        <div className="border border-[#0f3d3e]/08 rounded-2xl p-5">
          <p className="text-sm font-medium text-[#0f3d3e] mb-4">
            Next trip
          </p>
          {(() => {
            const next = user.bookings.find((b: any) => b.status === 'upcoming')
            return (
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br
                  from-[#0f3d3e] to-[#1a5c5e] flex items-center justify-center
                  flex-shrink-0">
                  <MapPin size={16} className="text-[#a8d5d0]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#0f3d3e] truncate">
                    {next.placeRef?.title ?? 'Upcoming trip'}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {next.from} → {next.to}
                  </p>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full
                  bg-[#e1f5ee] text-[#085041]">
                  Upcoming
                </span>
              </div>
            )
          })()}
        </div>
      )}
    </div>
  )
}

// ─── Trips Tab ───────────────────────────────────────────────────

const TripsTab = ({ user }: { user: any }) => {
  const bookings    = user.bookings ?? []
  const upcoming    = bookings.filter((b: any) => b.status === 'upcoming')
  const past        = bookings.filter((b: any) => b.status === 'completed')
  const cancelled   = bookings.filter((b: any) => b.status === 'cancelled')
  console.log(user)

  const BookingCard = ({ booking }: { booking: any }) => (
    <div className="border border-[#0f3d3e]/08 rounded-2xl p-5
      hover:border-[#a8d5d0]/50 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br
          from-[#0f3d3e] to-[#1a5c5e] flex items-center justify-center
          flex-shrink-0">
          <MapPin size={18} className="text-[#a8d5d0]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="text-sm font-medium text-[#0f3d3e] truncate">
              {booking.placeRef?.title ?? 'Trip'}
            </p>
            <span className={`text-[10px] font-medium px-2 py-1 rounded-full
              flex-shrink-0 ${
                booking.status === 'upcoming'
                  ? 'bg-[#e1f5ee] text-[#085041]'
                  : booking.status === 'completed'
                  ? 'bg-[#a8d5d0]/20 text-[#0f3d3e]'
                  : 'bg-red-50 text-red-500'
              }`}>
              {booking.status}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1.5 flex-wrap">
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar size={11} />
              {booking.from} – {booking.to}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Home size={11} />
              {booking.cabinRef?.name ?? 'Cabin'}
            </span>
            {booking.nights && (
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={11} />
                {booking.nights} nights
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs text-[#a8d5d0] font-medium">
              +{booking.pointsEarned ?? 0} pts earned
            </span>
            {booking.totalPaid && (
              <span className="text-xs font-medium text-[#0f3d3e]">
                ${booking.totalPaid.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  if (bookings.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-[#f8faf9] flex items-center
          justify-center mx-auto mb-4">
          <MapPin size={24} className="text-[#0f3d3e]/30" />
        </div>
        <p className="text-sm font-medium text-[#0f3d3e] mb-2">
          No trips yet
        </p>
        <p className="text-xs text-gray-400 font-light mb-6">
          Your bookings will appear here once you book your first adventure.
        </p>
        <Link href="/places"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
          bg-[#0f3d3e] text-[#e8f0ed] text-sm font-medium hover:bg-[#1a5c5e]
          transition-colors">
          Browse destinations
          <ArrowRight size={14} />
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {upcoming.length > 0 && (
        <div>
          <SectionLabel>Coming up</SectionLabel>
          <SectionTitle>Upcoming trips</SectionTitle>
          <div className="space-y-3">
            {upcoming.map((b: any) => <BookingCard key={b._id} booking={b} />)}
          </div>
        </div>
      )}
      {past.length > 0 && (
        <div>
          <SectionLabel>History</SectionLabel>
          <SectionTitle>Past adventures</SectionTitle>
          <div className="space-y-3">
            {past.map((b: any) => <BookingCard key={b._id} booking={b} />)}
          </div>
        </div>
      )}
      {cancelled.length > 0 && (
        <div>
          <SectionLabel>Cancelled</SectionLabel>
          <SectionTitle>Cancelled bookings</SectionTitle>
          <div className="space-y-3">
            {cancelled.map((b: any) => <BookingCard key={b._id} booking={b} />)}
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Medals Tab ──────────────────────────────────────────────────

const MedalsTab = ({ user }: { user: any }) => {
  const [hoveredInfo, setHoveredInfo] = useState(false)
  const earnedIds = (user.medals ?? []) 
  console.log(earnedIds)

  return (
    <div>
      {/* Header with info */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <SectionLabel>Achievements</SectionLabel>
          <SectionTitle>Medal shelf</SectionTitle>
        </div>
        <div className="relative">
          <button
            onMouseEnter={() => setHoveredInfo(true)}
            onMouseLeave={() => setHoveredInfo(false)}
            className="w-8 h-8 rounded-full border border-[#0f3d3e]/15
              flex items-center justify-center text-[#0f3d3e]/40
              hover:text-[#0f3d3e] hover:border-[#0f3d3e]/30 transition-colors"
          >
            <Info size={14} />
          </button>
          {hoveredInfo && (
            <div className="absolute right-0 top-10 w-64 bg-white border
              border-[#0f3d3e]/10 rounded-xl p-4 shadow-lg z-10">
              <p className="text-xs font-medium text-[#0f3d3e] mb-2">
                What are medals?
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Medals are earned by completing activities, reaching milestones,
                and exploring the world. Each medal is a permanent badge on your
                profile. Locked medals show you what adventures still await.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Earned count */}
      <div className="bg-[#f8faf9] border border-[#0f3d3e]/08 rounded-2xl
        px-5 py-4 mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500 font-light">
          <span className="font-medium text-[#0f3d3e]">
            {earnedIds.length}
          </span>{' '}
          of {ALL_MEDALS.length} medals earned
        </p>
        <div className="h-1.5 w-32 bg-[#0f3d3e]/08 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#a8d5d0] rounded-full"
            style={{
              width: `${Math.round((earnedIds.length / ALL_MEDALS.length) * 100)}%`
            }}
          />
        </div>
      </div>

      {/* Medal grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {ALL_MEDALS.map((medal) => {
          const earned = earnedIds.includes(medal)
          const earnedData = user.medals?.find((m: any) => m === medal.id)

          return (
            <div key={medal.id} className="group relative flex flex-col
              items-center gap-2">

              {/* Medal circle */}
              <div className={`w-16 h-16 rounded-full flex items-center
                justify-center relative transition-all duration-200 ${
                  earned
                    ? 'bg-[#e1f5ee] border-2 border-[#a8d5d0] shadow-md'
                    : 'bg-white border-2 border-dashed border-[#0f3d3e]/15 shadow-inner'
                }`}>

                {earned ? (
                  <span className="text-2xl">{medal.emoji}</span>
                ) : (
                  <>
                    {/* Ghost medal */}
                    <span className="text-2xl opacity-10 grayscale">
                      {medal.emoji}
                    </span>
                    {/* Lock */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5
                      rounded-full bg-white border border-[#0f3d3e]/10
                      flex items-center justify-center shadow-sm">
                      <Lock size={10} className="text-[#0f3d3e]/40" />
                    </div>
                  </>
                )}
              </div>

              {/* Name */}
              <p className={`text-[10px] text-center leading-tight font-medium
                ${earned ? 'text-[#0f3d3e]' : 'text-gray-300'}`}>
                {medal.name}
              </p>

              {/* Tooltip */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2
                bg-[#0f3d3e] text-[#e8f0ed] text-[10px] px-3 py-2 rounded-lg
                whitespace-nowrap opacity-0 group-hover:opacity-100
                transition-opacity pointer-events-none z-10 shadow-lg
                max-w-[160px] text-center leading-relaxed">
                {earned
                  ? `Earned ${earnedData?.earnedAt ?? ''}`
                  : medal.description
                }
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

const RewardsTab = ({ user }: { user: any }) => (
  <div className="text-center py-16">
    <div className="w-16 h-16 rounded-full bg-[#f8faf9] border-2 border-dashed
      border-[#0f3d3e]/15 flex items-center justify-center mx-auto mb-4">
      <Gift size={24} className="text-[#0f3d3e]/30" />
    </div>
    <p className="text-sm font-medium text-[#0f3d3e] mb-2">
      Rewards store coming soon
    </p>
    <p className="text-xs text-gray-400 font-light max-w-xs mx-auto">
      Spend your Summit Points on gear discounts, exclusive activities,
      and VIP experiences. You currently have{' '}
      <span className="text-[#0f3d3e] font-medium">
        {(user.points ?? 0).toLocaleString()} pts
      </span>{' '}
      ready to spend.
    </p>
  </div>
)

// ─── Settings Tab ────────────────────────────────────────────────

const SettingsTab = ({ user }: { user: any }) => {
  const [name, setName]       = useState(user.name ?? '')
  const [email, setEmail]     = useState(user.email ?? '')
  const [saved, setSaved]     = useState(false)

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    // PATCH /api/account/:id — UI only for now
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="max-w-md space-y-8">

      {/* Profile settings */}
      <div>
        <SectionLabel>Account</SectionLabel>
        <SectionTitle>Profile settings</SectionTitle>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="relative">
            <label className="block text-xs font-medium text-[#0f3d3e] mb-1.5">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#0f3d3e]/15
                text-sm text-[#0f3d3e] outline-none focus:border-[#0f3d3e]
                focus:shadow-[0_0_0_3px_rgba(15,61,62,0.06)] transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#0f3d3e] mb-1.5">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#0f3d3e]/15
                text-sm text-[#0f3d3e] outline-none focus:border-[#0f3d3e]
                focus:shadow-[0_0_0_3px_rgba(15,61,62,0.06)] transition-all"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl
              bg-[#0f3d3e] text-[#e8f0ed] text-sm font-medium
              hover:bg-[#1a5c5e] transition-colors"
          >
            {saved ? (
              <>
                <CheckCircle2 size={14} className="text-[#a8d5d0]" />
                Saved
              </>
            ) : (
              'Save changes'
            )}
          </button>
        </form>
      </div>

      {/* Password */}
      <div className="border-t border-[#0f3d3e]/08 pt-8">
        <p className="text-sm font-medium text-[#0f3d3e] mb-4">
          Change password
        </p>
        <div className="space-y-3">
          {['Current password', 'New password', 'Confirm new password'].map(
            (label) => (
              <div key={label}>
                <label className="block text-xs font-medium text-[#0f3d3e] mb-1.5">
                  {label}
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border
                    border-[#0f3d3e]/15 text-sm text-[#0f3d3e] outline-none
                    focus:border-[#0f3d3e] transition-all"
                />
              </div>
            )
          )}
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl
            border border-[#0f3d3e] text-[#0f3d3e] text-sm font-medium
            hover:bg-[#0f3d3e] hover:text-[#e8f0ed] transition-colors mt-2">
            Update password
          </button>
        </div>
      </div>

      {/* Danger zone */}
      <div className="border-t border-red-100 pt-8">
        <p className="text-sm font-medium text-red-500 mb-2">Danger zone</p>
        <p className="text-xs text-gray-400 font-light mb-4 leading-relaxed">
          Deleting your account is permanent and cannot be undone. All your
          trips, medals, and points will be lost.
        </p>
        <button className="px-5 py-2.5 rounded-xl border border-red-200
          text-red-400 text-sm hover:bg-red-50 transition-colors">
          Delete account
        </button>
      </div>
    </div>
  )
}

// ─── Main Page ───────────────────────────────────────────────────

export default function AccountPage() {
  const { user, isValidating } = useUserContext()
  const [activeTab, setActiveTab] = useState<TabType>('overview')

  if (isValidating) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#0f3d3e]/20
          border-t-[#0f3d3e] animate-spin" />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center
        gap-4">
        <p className="text-sm text-gray-400">
          You need to be signed in to view your account.
        </p>
        <Link href="/log-in"
          className="px-5 py-2.5 rounded-xl bg-[#0f3d3e] text-[#e8f0ed]
          text-sm font-medium hover:bg-[#1a5c5e] transition-colors">
          Sign in
        </Link>
      </div>
    )
  }

  const tier       = user.tier ?? 'Explorer'
  const tierColors = TIER_COLORS[tier as keyof typeof TIER_COLORS]
  const initials   = user.name && user.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
  const joinedYear = user.joinedAt
    ? new Date(user.joinedAt).getFullYear()
    : new Date().getFullYear()

  const TABS = [
    { tab: 'overview' as TabType, icon: <User size={15} />,     label: 'Overview'  },
    { tab: 'trips'    as TabType, icon: <MapPin size={15} />,   label: 'Trips'     },
    { tab: 'medals'   as TabType, icon: <Trophy size={15} />,   label: 'Medals'    },
    { tab: 'rewards'  as TabType, icon: <Gift size={15} />,     label: 'Rewards'   },
    { tab: 'settings' as TabType, icon: <Settings size={15} />, label: 'Settings'  },
  ] as const

  return (
    <div className="min-h-screen bg-white">

      {/* ── Profile header ── */}
      <div className="bg-[#0f3d3e] px-6 pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full"
            preserveAspectRatio="none">
            <path d="M0 100 L50 40 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-start gap-5 flex-wrap">

            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-[#a8d5d0]/20 border-2
              border-[#a8d5d0]/30 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl font-medium text-[#a8d5d0]">
                {initials}
              </span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h1 className="font-serif text-2xl text-[#e8f0ed]">
                  {user.name}
                </h1>
                <span className={`text-[10px] font-medium px-2.5 py-1
                  rounded-full ${tierColors.bg} ${tierColors.text}`}>
                  {tier}
                </span>
              </div>
              <p className="text-sm text-[#e8f0ed]/50 font-light mb-3">
                {user.email}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 text-xs
                  text-[#e8f0ed]/40 font-light">
                  <Calendar size={12} />
                  Member since {joinedYear}
                </span>
                <span className="flex items-center gap-1.5 text-xs
                  text-[#e8f0ed]/40 font-light">
                  <MapPin size={12} />
                  {user.completedTrips?.length ?? 0} trips completed
                </span>
                <span className="flex items-center gap-1.5 text-xs
                  text-[#e8f0ed]/40 font-light">
                  <Trophy size={12} />
                  {(user.medals ?? []).filter((m: any) => m.earnedAt).length} medals
                </span>
              </div>
            </div>

            {/* Points pill */}
            <div className="bg-[#e8f0ed]/08 border border-[#e8f0ed]/10
              rounded-2xl px-5 py-4 text-center flex-shrink-0">
              <Zap size={18} className="text-[#a8d5d0] mx-auto mb-1" />
              <p className="text-2xl font-medium text-[#e8f0ed]">
                {(user.points ?? 0).toLocaleString()}
              </p>
              <p className="text-[10px] text-[#e8f0ed]/40 font-light mt-0.5">
                Summit Points
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Energy Points section ── */}
      <div className="max-w-4xl mx-auto px-6 -mt-8 mb-8 relative z-10">
        <div className="bg-white border border-[#0f3d3e]/08 rounded-2xl p-6
          shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#e1f5ee] flex items-center
                justify-center flex-shrink-0">
                <Zap size={22} className="text-[#0f3d3e]" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="text-sm font-medium text-[#0f3d3e]">
                    Summit Points
                  </p>
                  <div className="relative group">
                    <button className="w-4 h-4 rounded-full border
                      border-[#0f3d3e]/20 flex items-center justify-center
                      text-[#0f3d3e]/40 hover:text-[#0f3d3e] transition-colors">
                      <Info size={10} />
                    </button>
                    <div className="absolute left-6 top-0 w-56 bg-[#0f3d3e]
                      text-[#e8f0ed] text-[10px] px-3 py-2.5 rounded-xl
                      opacity-0 group-hover:opacity-100 transition-opacity
                      pointer-events-none z-10 shadow-lg leading-relaxed">
                      Earn points by booking cabins, completing activities,
                      writing reviews, and referring friends. Spend them in
                      the rewards store on gear, upgrades, and exclusive events.
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-light">
                  Earn on every adventure. Spend on exclusive rewards.
                </p>
              </div>
            </div>

            {/* Points breakdown */}
            <div className="flex items-center gap-6 flex-wrap">
              {POINTS_INFO.slice(0, 3).map((p) => (
                <div key={p.action} className="text-center">
                  <p className="text-sm font-medium text-[#0f3d3e]">
                    +{p.pts}
                  </p>
                  <p className="text-[10px] text-gray-400 font-light
                    max-w-[80px] leading-tight mt-0.5">
                    {p.action}
                  </p>
                </div>
              ))}
              <Link href="/rewards"
                className="flex items-center gap-1.5 text-xs text-[#a8d5d0]
                font-medium hover:text-[#0f3d3e] transition-colors">
                View all ways to earn
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="max-w-4xl mx-auto px-6">

        {/* Tab bar */}
        <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-1">
          {TABS.map(({ tab, icon, label }) => (
            <TabButton
              key={tab}
              tab={tab}
              active={activeTab === tab}
              icon={icon}
              label={label}
              onClick={() => setActiveTab(tab as TabType)}
            />
          ))}
        </div>

        {/* Tab content */}
        <div className="pb-16">
          {activeTab === 'overview'  && <OverviewTab  user={user} />}
          {activeTab === 'trips'     && <TripsTab     user={user} />}
          {activeTab === 'medals'    && <MedalsTab    user={user} />}
          {activeTab === 'rewards'   && <RewardsTab   user={user} />}
          {activeTab === 'settings'  && <SettingsTab  user={user} />}
        </div>
      </div>
    </div>
  )
}