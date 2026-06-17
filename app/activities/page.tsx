'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useActivities } from '../_hooks/useActivities'
import SpinnerBoxJump from '../_components/SpinnerBoxJump'
import {
  Mountain, Waves, Trees, Bike, Fish,
  Building, Camera, Zap, ArrowRight, Users, Clock
} from 'lucide-react'

const LABEL_ICONS: Record<string, React.ReactNode> = {
  Hiking:      <Mountain size={16} />,
  Skiing:      <Mountain size={16} />,
  Kayaking:    <Waves size={16} />,
  Cycling:     <Bike size={16} />,
  Wildlife:    <Fish size={16} />,
  Cultural:    <Building size={16} />,
  Climbing:    <Mountain size={16} />,
  Photography: <Camera size={16} />,
}

const DIFFICULTY_COLORS: Record<string, string> = {
  'All levels':   'bg-[#e1f5ee] text-[#085041]',
  'Beginner':     'bg-[#e1f5ee] text-[#085041]',
  'Intermediate': 'bg-[#faeeda] text-[#633806]',
  'Advanced':     'bg-red-50 text-red-600',
}

const PlaceChip = ({
  place,
  onClick,
}: {
  place: { _id: string; title: string; country: string; flag: string; images_url: string[] }
  onClick: () => void
}) => (

  <button
    onClick={onClick}
    className="flex items-center gap-2.5 pl-1.5 pr-3 py-1.5 rounded-full
      border border-[#0f3d3e]/10 hover:border-[#a8d5d0] hover:bg-[#f8faf9]
      transition-all group"
  >
    <div className="w-7 h-7 rounded-full overflow-hidden relative flex-shrink-0
      bg-gradient-to-br from-[#0f3d3e] to-[#1a5c5e]">
      {place?.images_url?.[0] && (
        <Image
          src={place?.images_url[0]}
          alt={place?.title}
          fill
          className="object-cover"
        />
      )}
    </div>
    <span className="text-xs font-medium text-[#0f3d3e]">{place?.title}</span>
    <span className="text-sm">
      {place?.flag && (
        <Image
          src={`https://flagcdn.com/w20/${place.flag.toLowerCase()}.png`}
          alt={place?.country}
          width={14}
          height={10}
          className="rounded-sm"
        />
      )}
    </span>
    <ArrowRight size={12} className="text-[#0f3d3e]/30
      group-hover:text-[#a8d5d0] group-hover:translate-x-0.5 transition-all" />
  </button>
)

const ActivityCard = ({ activity }: { activity: any }) => {
  const router = useRouter()

  return (
    <div className="border border-[#0f3d3e]/08 rounded-2xl p-5
      hover:border-[#a8d5d0]/50 transition-colors">

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[#e1f5ee] flex items-center
          justify-center text-[#0f3d3e] flex-shrink-0">
          {LABEL_ICONS[activity.label] ?? <Zap size={16} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-[#0f3d3e]">{activity.name}</p>
          <p className="text-xs text-gray-400 mt-0.5 line-clamp-2 font-light">
            {activity.description}
          </p>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className={`text-[10px] px-2 py-0.5 rounded-full
          ${DIFFICULTY_COLORS[activity.difficulty]}`}>
          {activity.difficulty}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <Clock size={11} />{activity.duration}
        </span>
        <span className="flex items-center gap-1 text-[10px] text-gray-400">
          <Users size={11} />Max {activity.maxPeople}
        </span>
        <span className="text-[10px] font-medium text-[#0f3d3e] ml-auto">
          ${activity.price}/person
        </span>
      </div>

      {/* Places offering this activity */}
      <div className="border-t border-[#0f3d3e]/06 pt-3">
        <p className="text-[10px] text-gray-400 mb-2 font-light">
          Available at {activity.placeRef?.length } destination
        </p>
        <div className="flex flex-wrap gap-2">
            <PlaceChip
              key={activity.placeRef}
              place={activity.placeRef}
              onClick={() => router.push(`/places/${activity.placeRef._id}`)}
            />
         
        </div>
      </div>
    </div>
  )
}

const ActivitiesPage = () => {
  const { data: activities, isLoading } = useActivities()
  const [activeLabel, setActiveLabel] = useState('All')

  const labels = ['All', ...new Set((activities ?? []).map((a) => a.label))]

  const filtered = (activities ?? []).filter(
    (a) => activeLabel === 'All' || a.label === activeLabel
  )

  if (isLoading) return (
    <div className="flex h-screen items-center justify-center">
      <SpinnerBoxJump />
    </div>
  )

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 min-h-screen">

      {/* Header */}
      <div className="mb-8">
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase
          text-[#a8d5d0] mb-2">
          Things to do
        </p>
        <h1 className="font-serif text-4xl text-[#0f3d3e]">
          All Activities
          <span className="text-lg text-gray-400 font-sans font-normal ml-3">
            {filtered.length} available
          </span>
        </h1>
      </div>

      {/* Label filter */}
      <div className="flex gap-2 flex-wrap mb-8">
        {labels.map((label) => (
          <button
            key={label}
            onClick={() => setActiveLabel(label)}
            className={`text-xs px-3.5 py-1.5 rounded-full border
              transition-all ${
                activeLabel === label
                  ? 'bg-[#0f3d3e] text-[#e8f0ed] border-[#0f3d3e]'
                  : 'bg-white text-[#0f3d3e] border-[#0f3d3e]/15 hover:border-[#a8d5d0]'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-5">
          {filtered.map((activity) => (
            <ActivityCard key={activity._id} activity={activity} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-60 text-center">
          <p className="text-sm text-gray-400">No activities found</p>
        </div>
      )}
    </main>
  )
}

export default ActivitiesPage