import { Users, Zap, Home, Compass, Star } from 'lucide-react'

interface PlaceStatsProps {
  place: {
    travellers: number
    activityCount: number
    cabinCount: number
    guideCount: number
    rating: number
  }
}

interface StatItemProps {
  icon: React.ReactNode
  value: string | number
  label: string
  highlight?: boolean
}

const StatItem = ({ icon, value, label, highlight }: StatItemProps) => (
  <div className="flex flex-col items-center justify-center gap-1 py-5 px-4
    flex-1 border-r border-[#0f3d3e]/08 last:border-r-0
    group transition-colors hover:bg-[#f8faf9]">
    <div className={`mb-1 transition-colors ${
      highlight ? 'text-[#a8d5d0]' : 'text-[#0f3d3e]/30 group-hover:text-[#a8d5d0]'
    }`}>
      {icon}
    </div>
    <span className="text-xl font-medium text-[#0f3d3e] leading-none">
      {value}
    </span>
    <span className="text-[11px] text-gray-400 font-light">
      {label}
    </span>
  </div>
)

const formatNumber = (n: number): string => {
  if (n >= 1000) return `${(n / 1000)}k`
  return n.toString()
}

const PlaceStats = ({ place }: PlaceStatsProps) => {
  const stats = [
    {
      icon: <Users size={18} />,
      value: formatNumber(place.travellers),
      label: 'Travellers',
    },
    {
      icon: <Zap size={18} />,
      value: place.activityCount,
      label: 'Activities',
    },
    {
      icon: <Home size={18} />,
      value: place.cabinCount,
      label: 'Cabins',
    },
    {
      icon: <Compass size={18} />,
      value: place.guideCount,
      label: 'Local guides',
    },
    {
      icon: <Star size={18} />,
      value: place.rating,
      label: 'Avg rating',
      highlight: true,
    },
  ]

  return (
    <div className="border-b border-[#0f3d3e]/08 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex divide-x divide-[#0f3d3e]/08">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PlaceStats