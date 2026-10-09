'use client'

import Image from 'next/image'
import { Check, Users, Home } from 'lucide-react'
import { CabinType } from '@/app/lib/types'

interface CabinSelectorProps {
  cabins: CabinType[]           // fed from cabinsRef
  selectedCabinId: string
  onSelect: (id: string) => void
}

const AvailabilityBadge = ({ spotsLeft }: { spotsLeft: number }) => (
  <span className={`text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5
    rounded-full border ${
      spotsLeft <= 2
        ? 'bg-[#faeeda] text-[#633806] border-[#c9a96e]/40'
        : 'bg-[#e1f5ee] text-[#085041] border-[#085041]/10'
    }`}>
    {spotsLeft <= 2 ? `Only ${spotsLeft} left` : `${spotsLeft} left`}
  </span>
)

const CabinCard = ({
  cabin,
  selected,
  onSelect,
}: {
  cabin: CabinType
  selected: boolean
  onSelect: () => void
}) => {
  const amenities = cabin.amenities ?? []
  const tags = cabin.tags ?? []
  const discount = cabin.discount ?? 0

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group relative text-left rounded-[1.75rem] overflow-hidden
        bg-white border-2 transition-all duration-500 ${
          selected
            ? 'border-[#c9a96e] shadow-[0_24px_50px_-24px_rgba(201,169,110,0.9)] -translate-y-1'
            : 'border-[#0f3d3e]/[0.08] hover:border-[#c9a96e]/60 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(15,61,62,0.5)]'
        }`}
    >
      {/* Image */}
      <div className="h-56 relative overflow-hidden bg-gradient-to-br from-[#0f3d3e] to-[#1a5c5e]">
        {cabin.imageUrl ? (
          <Image
            fill
            src={cabin.imageUrl}
            alt={cabin.name}
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-[1200ms]
              ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Home size={40} className="text-[#c9a96e]/40" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071f20]/70
          via-transparent to-transparent" />

        {discount > 0 && (
          <span className="absolute top-4 left-4 text-[11px] font-semibold
            tracking-wide px-3.5 py-1.5 rounded-full bg-gradient-to-r
            from-[#ecdcb0] to-[#c9a96e] text-[#0a2c2d]
            shadow-[0_8px_20px_-6px_rgba(201,169,110,0.8)]">
            {discount}% off
          </span>
        )}

        {/* Selected check */}
        <span className={`absolute top-4 right-4 w-8 h-8 rounded-full flex
          items-center justify-center transition-all duration-300 ${
            selected
              ? 'bg-[#c9a96e] text-[#0a2c2d] scale-100 shadow-lg'
              : 'bg-[#071f20]/40 backdrop-blur-md border border-[#f4efe2]/30 text-transparent scale-90 group-hover:scale-100'
          }`}>
          <Check size={15} strokeWidth={3} />
        </span>

        <p className="absolute bottom-4 left-5 right-5 font-serif text-2xl
          text-[#f4efe2] leading-tight drop-shadow-lg truncate">
          {cabin.name}
        </p>
      </div>

      {/* Details */}
      <div className="p-6">
        <p className="text-xs text-[#0f3d3e]/50 mb-3 flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-[#b8975a]" />
            {cabin.maxGuests} guests
          </span>
          {amenities.length > 0 && (
            <>
              <span className="text-[#c9a96e]">·</span>
              {amenities.slice(0, 2).join(' · ')}
            </>
          )}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[11px] px-3 py-1 rounded-full
                bg-[#0f3d3e]/[0.05] text-[#0f3d3e]/70 border border-[#0f3d3e]/[0.08]
                group-hover:border-[#c9a96e]/40 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between pt-5 border-t border-[#0f3d3e]/[0.07]">
          <div>
            {discount > 0 ? (
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl text-[#0f3d3e]">
                  ${Math.round(cabin.pricePerNight * (1 - discount / 100))}
                </span>
                <span className="text-sm text-[#0f3d3e]/30 line-through">
                  ${cabin.pricePerNight}
                </span>
              </div>
            ) : (
              <span className="font-serif text-3xl text-[#0f3d3e]">
                ${cabin.pricePerNight}
              </span>
            )}
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#0f3d3e]/40 mt-1">
              per night
            </span>
          </div>
          <AvailabilityBadge spotsLeft={cabin.spotsLeft} />
        </div>
      </div>
    </button>
  )
}

const CabinSelector = ({
  cabins,
  selectedCabinId,
  onSelect,
}: CabinSelectorProps) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2
      flex items-center gap-3 text-[#b8975a]">
      <span className="h-px w-8 bg-[#c9a96e]/60" />
      Where to stay
    </p>
    <h2 className="font-serif text-3xl sm:text-4xl text-[#0f3d3e] mb-8 tracking-tight">
      Select a cabin
    </h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {(cabins ?? []).map((cabin) => (
        <CabinCard
          key={cabin._id}
          cabin={cabin}
          selected={selectedCabinId === cabin._id}
          onSelect={() => onSelect(cabin._id)}
        />
      ))}
    </div>
  </section>
)

export default CabinSelector