'use client'

import { Mountain, Clock, Users, Check, Backpack, Compass } from 'lucide-react'
import { ActivityType } from '@/app/lib/types'

interface ActivitySignupProps {
  activities: ActivityType[]
  signedIds: string[]
  onToggle: (id: string) => void
}

const DifficultyBadge = ({
  difficulty,
}: {
  difficulty: ActivityType['difficulty']
}) => {
  const colors: Record<string, string> = {
    'All levels':   'bg-[#e1f5ee] text-[#085041] border-[#085041]/10',
    'Beginner':     'bg-[#e1f5ee] text-[#085041] border-[#085041]/10',
    'Intermediate': 'bg-[#faeeda] text-[#633806] border-[#c9a96e]/40',
    'Advanced':     'bg-red-50 text-red-700 border-red-100',
  }
  return (
    <span className={`text-[10px] font-medium tracking-[0.15em] uppercase px-3
      py-1 rounded-full border ${colors[difficulty as string] ?? 'bg-[#0f3d3e]/5 text-[#0f3d3e] border-[#0f3d3e]/10'}`}>
      {difficulty}
    </span>
  )
}

const ActivityCard = ({
  activity,
  signed,
  onToggle,
}: {
  activity: ActivityType
  signed: boolean
  onToggle: () => void
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onToggle}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onToggle()
      }
    }}
    className={`group relative flex items-center gap-5 rounded-3xl p-5 sm:p-6
      cursor-pointer border-2 transition-all duration-300 outline-none
      focus-visible:ring-4 focus-visible:ring-[#c9a96e]/30 ${
        signed
          ? 'border-[#c9a96e] bg-gradient-to-r from-[#faf6ec] to-white shadow-[0_20px_40px_-24px_rgba(201,169,110,0.9)]'
          : 'border-[#0f3d3e]/[0.08] bg-white hover:border-[#c9a96e]/60 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-28px_rgba(15,61,62,0.5)]'
      }`}
  >
    {/* Icon */}
    <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center
      justify-center border transition-all duration-300 ${
        signed
          ? 'bg-[#0f3d3e] border-[#c9a96e] text-[#c9a96e]'
          : 'bg-gradient-to-br from-[#e1f5ee] to-[#f4efe2] border-[#c9a96e]/30 text-[#0f3d3e] group-hover:border-[#c9a96e]'
      }`}>
      <Mountain size={22} />
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <p className="font-serif text-xl text-[#0f3d3e] leading-tight truncate">
        {activity.name}
      </p>
      <p className="text-xs text-[#0f3d3e]/50 mt-2 flex items-center gap-x-4
        gap-y-1 flex-wrap">
        <span className="flex items-center gap-1.5">
          <Clock size={12} className="text-[#b8975a]" />
          {activity.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Users size={12} className="text-[#b8975a]" />
          Max {activity.maxPeople}
        </span>
        {activity.gearIncluded && (
          <span className="flex items-center gap-1.5">
            <Backpack size={12} className="text-[#b8975a]" />
            Gear included
          </span>
        )}
      </p>
      <div className="mt-3 flex items-center gap-3 flex-wrap">
        <DifficultyBadge difficulty={activity.difficulty} />
        {activity.spotsLeft <= 3 && (
          <span className="text-[11px] text-[#8a6d35] font-medium">
            Only {activity.spotsLeft} left
          </span>
        )}
      </div>
    </div>

    {/* Right */}
    <div className="text-right flex-shrink-0 flex flex-col items-end">
      <p className="font-serif text-3xl text-[#0f3d3e] leading-none">
        ${activity.price}
      </p>
      <p className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40 mt-1.5">
        per person
      </p>
      <p className="text-[11px] text-[#0f3d3e]/40 mt-1">
        {activity.spotsLeft} spots left
      </p>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle() }}
        className={`mt-3 flex items-center gap-1.5 text-xs font-medium
          tracking-wide px-5 py-2 rounded-full border transition-all duration-300 ${
            signed
              ? 'bg-[#0f3d3e] text-[#f4efe2] border-[#c9a96e] shadow-[0_10px_20px_-8px_rgba(15,61,62,0.8)]'
              : 'bg-white text-[#0f3d3e] border-[#0f3d3e]/30 hover:border-[#c9a96e] hover:bg-[#c9a96e]/10'
          }`}
      >
        {signed && <Check size={13} className="text-[#c9a96e]" strokeWidth={3} />}
        {signed ? 'Signed up' : 'Sign up'}
      </button>
    </div>
  </div>
)

const ActivitySignup = ({ activities, signedIds, onToggle }: ActivitySignupProps) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2
      flex items-center gap-3 text-[#b8975a]">
      <span className="h-px w-8 bg-[#c9a96e]/60" />
      Things to do
    </p>
    <h2 className="font-serif text-3xl sm:text-4xl text-[#0f3d3e] mb-8 tracking-tight">
      Sign up for activities
    </h2>
    {activities && activities.length > 0 ? (
      <div className="flex flex-col gap-4">
        {activities.map((activity) => (
          <ActivityCard
            key={activity._id}
            activity={activity}
            signed={signedIds.includes(activity._id)}
            onToggle={() => onToggle(activity._id)}
          />
        ))}
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center text-center
        py-14 rounded-3xl border border-dashed border-[#0f3d3e]/15
        bg-[#fbfaf6]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4efe2]
          to-[#e1f5ee] flex items-center justify-center mb-5 border
          border-[#c9a96e]/30">
          <Compass size={24} className="text-[#0f3d3e]/45" />
        </div>
        <p className="font-serif text-xl text-[#0f3d3e] mb-1">
          No activities yet
        </p>
        <p className="text-sm text-[#0f3d3e]/45 font-light">
          No activities are available for this trip. Check back later.
        </p>
      </div>
    )}
  </section>
)

export default ActivitySignup