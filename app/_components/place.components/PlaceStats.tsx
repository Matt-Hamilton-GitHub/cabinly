import { TPlace } from '@/app/lib/types'
import { Users, Zap, Home, Compass, Star } from 'lucide-react'

interface StatItemProps {
  icon: React.ReactNode
  value: string | number
  label: string
  highlight?: boolean
}

const StatItem = ({ icon, value, label, highlight }: StatItemProps) => (
  <div className="group relative flex flex-col items-center justify-center
    gap-2 py-8 px-4 transition-all duration-300 hover:bg-[#c9a96e]/[0.06]">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center
      border transition-all duration-300 group-hover:-translate-y-0.5 ${
        highlight
          ? 'bg-gradient-to-br from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d] border-[#c9a96e] shadow-[0_10px_24px_-8px_rgba(201,169,110,0.8)]'
          : 'bg-gradient-to-br from-[#e1f5ee] to-[#f4efe2] text-[#0f3d3e] border-[#c9a96e]/30 group-hover:border-[#c9a96e]'
      }`}>
      {icon}
    </div>
    <span className="font-serif text-3xl text-[#0f3d3e] leading-none mt-1">
      {value}
    </span>
    <span className="text-[10px] tracking-[0.25em] uppercase text-[#0f3d3e]/40">
      {label}
    </span>
    {/* Gold underline on hover */}
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0
      bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent
      group-hover:w-2/3 transition-all duration-500" />
  </div>
)

const formatNumber = (n: number = 0): string => {
  if (n >= 1000) return `${parseFloat((n / 1000).toFixed(1))}k`
  return n.toString()
}

const PlaceStats = ({ place }: { place: TPlace }) => {
  const stats = [
    {
      icon: <Users size={20} />,
      value: formatNumber(place.travellers),
      label: 'Travellers',
    },
    {
      icon: <Zap size={20} />,
      value: place.activities?.length ?? 0,
      label: 'Activities',
    },
    {
      icon: <Home size={20} />,
      value: place.cabinsRef?.length ?? 0,
      label: 'Cabins',
    },
    {
      icon: <Compass size={20} />,
      value: place.guides?.length ?? 0,
      label: 'Local guides',
    },
    {
      icon: <Star size={20} />,
      value: place.rating ?? '–',
      label: 'Avg rating',
      highlight: true,
    },
  ]

  return (
    <div className="bg-[#fbfaf6] px-6 pb-10 -mt-1">
      <div className="max-w-[84rem] mx-auto -mt-2">
        <div className="relative bg-white rounded-[2rem] border
          border-[#0f3d3e]/[0.07] overflow-hidden
          shadow-[0_1px_2px_rgba(15,61,62,0.04),0_30px_60px_-30px_rgba(15,61,62,0.3)]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
            from-transparent via-[#c9a96e] to-transparent" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5
            divide-x divide-y lg:divide-y-0 divide-[#0f3d3e]/[0.06]">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceStats