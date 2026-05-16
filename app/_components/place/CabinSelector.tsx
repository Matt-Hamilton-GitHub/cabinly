'use client'

import Image from 'next/image'
import { CabinType } from '@/app/places/page'

interface CabinSelectorProps {
  cabins: CabinType[]           // was cabins, now fed from cabinsRef
  selectedCabinId: string
  onSelect: (id: string) => void
}

const AvailabilityBadge = ({ spotsLeft }: { spotsLeft: number }) => (
  <span className={`text-[10px] px-2 py-1 rounded-full ${
    spotsLeft <= 2
      ? 'bg-[#faeeda] text-[#633806]'
      : 'bg-[#e1f5ee] text-[#085041]'
  }`}>
    {spotsLeft} left
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
}) => (
  <div
    onClick={onSelect}
    className={`border rounded-2xl overflow-hidden cursor-pointer
      transition-all duration-150 ${
        selected
          ? 'border-[#0f3d3e] border-[1.5px]'
          : 'border-[#0f3d3e]/10 hover:border-[#a8d5d0]'
      }`}
  >
    <div className="h-28 relative bg-gradient-to-br from-[#0f3d3e] to-[#1a5c5e]">
      {cabin.imageUrl && (
        <Image
          fill
          src={cabin.imageUrl}
          alt={cabin.name}
          className="object-cover"
        />
      )}
      {cabin.discount > 0 && (
        <span className="absolute top-2 left-2 text-[10px] font-medium
          px-2 py-0.5 rounded-full bg-[#a8d5d0] text-[#0f3d3e]">
          {cabin.discount}% off
        </span>
      )}
    </div>

    <div className="p-3">
      <p className="text-sm font-medium text-[#0f3d3e] mb-1">{cabin.name}</p>
      <p className="text-xs text-gray-400 mb-1">
        {cabin.maxGuests} guests · {cabin.amenities.slice(0, 2).join(' · ')}
      </p>

      {/* Tags */}
      {cabin.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {cabin.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded-full
              bg-[#f8faf9] text-[#0f3d3e] border border-[#0f3d3e]/08">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div>
          {cabin.discount > 0 ? (
            <div className="flex items-baseline gap-1.5">
              <span className="text-sm font-medium text-[#0f3d3e]">
                ${Math.round(cabin.pricePerNight * (1 - cabin.discount / 100))}
                <span className="text-xs text-gray-400 font-normal">/night</span>
              </span>
              <span className="text-xs text-gray-300 line-through">
                ${cabin.pricePerNight}
              </span>
            </div>
          ) : (
            <span className="text-sm font-medium text-[#0f3d3e]">
              ${cabin.pricePerNight}
              <span className="text-xs text-gray-400 font-normal">/night</span>
            </span>
          )}
        </div>
        <AvailabilityBadge spotsLeft={cabin.spotsLeft} />
      </div>
    </div>
  </div>
)

const CabinSelector = ({
  cabins,
  selectedCabinId,
  onSelect,
}: CabinSelectorProps) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.2em] uppercase
      text-[#a8d5d0] mb-1">
      Where to stay
    </p>
    <h2 className="text-xl font-medium text-[#0f3d3e] mb-4">
      Select a cabin
    </h2>
    <div className="grid grid-cols-2 gap-3">
      {cabins.map((cabin) => (
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