'use client'

import { ActivityType } from '@/app/places/page'

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
  const colors: Record<ActivityType['difficulty'], string> = {
    'All levels': 'bg-[#e1f5ee] text-[#085041]',
    'Beginner':   'bg-[#e1f5ee] text-[#085041]',
    'Intermediate': 'bg-[#faeeda] text-[#633806]',
    'Advanced':   'bg-red-50 text-red-700',
  }
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full ${colors[difficulty]}`}>
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
    onClick={onToggle}
    className={`flex items-center gap-3 border rounded-xl p-4
      cursor-pointer transition-all duration-150 ${
        signed
          ? 'border-[#0f3d3e] bg-[#f8faf9]'
          : 'border-[#0f3d3e]/10 hover:border-[#a8d5d0]'
      }`}
  >
    {/* Icon */}
    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center
      justify-center bg-[#e1f5ee]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="#0f3d3e" strokeWidth="2">
        <path d="M3 17l4-8 4 4 4-6 4 10" />
      </svg>
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-[#0f3d3e]">{activity.name}</p>  
      <p className="text-xs text-gray-400 mt-0.5 truncate">
        {activity.duration} · Max {activity.maxPeople} people
        {activity.gearIncluded && ' · Gear included'}
      </p>
      <div className="mt-1.5 flex items-center gap-2">
        <DifficultyBadge difficulty={activity.difficulty} />
        {activity.spotsLeft <= 3 && (
          <span className="text-[10px] text-[#633806]">
            Only {activity.spotsLeft} left!
          </span>
        )}
      </div>
    </div>

    {/* Right */}
    <div className="text-right flex-shrink-0">
      <p className="text-sm font-medium text-[#0f3d3e]">
        ${activity.price}
        <span className="text-xs text-gray-400 font-normal">/person</span>
      </p>
      <p className="text-xs text-gray-400 mt-0.5">
        {activity.spotsLeft} spots left
      </p>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle() }}
        className={`mt-1.5 text-[11px] px-3 py-1 rounded-full border
          transition-colors ${
            signed
              ? 'bg-[#0f3d3e] text-[#e8f0ed] border-[#0f3d3e]'
              : 'bg-white text-[#0f3d3e] border-[#0f3d3e]'
          }`}
      >
        {signed ? 'Signed up' : 'Sign up'}
      </button>
    </div>
  </div>
)

const ActivitySignup = ({ activities, signedIds, onToggle }: ActivitySignupProps) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.2em] uppercase
      text-[#a8d5d0] mb-1">
      Things to do
    </p>
    <h2 className="text-xl font-medium text-[#0f3d3e] mb-4">
      Sign up for activities
    </h2>
    {activities.length > 0 ? 
    <div className="flex flex-col gap-3">
      {activities.map((activity) => (
        <ActivityCard
          key={activity._id}
          activity={activity}
          signed={signedIds.includes(activity._id)}
          onToggle={() => onToggle(activity._id)}
        />
      )) }
    </div>: <div className='h-full flex  align-center text-center text-gray-400'>No available activitites for this trip. Check in later</div>}
  </section>
)

export default ActivitySignup