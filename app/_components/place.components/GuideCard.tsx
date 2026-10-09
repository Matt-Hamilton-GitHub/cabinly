import Image from 'next/image'
import { Star, Award, Users } from 'lucide-react'
import { GuideType } from '@/app/lib/types'

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5 justify-end">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={13}
        className={
          star <= Math.round(rating)
            ? 'fill-[#c9a96e] text-[#c9a96e]'
            : 'fill-[#0f3d3e]/10 text-[#0f3d3e]/10'
        }
      />
    ))}
  </div>
)

const getInitials = (name: string = '') =>
  name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const GuideCard = ({ guide }: { guide: GuideType }) => {
  const rating = guide.rating ?? 0
  const tags = guide.tags ?? []

  return (
    <div
      className="group relative flex items-start gap-6 rounded-3xl p-6 sm:p-7
        bg-gradient-to-br from-white to-[#fbfaf6] border border-[#0f3d3e]/[0.08]
        transition-all duration-300 hover:-translate-y-0.5
        hover:border-[#c9a96e]/50
        hover:shadow-[0_24px_48px_-28px_rgba(15,61,62,0.45)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Avatar — image or initials fallback */}
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-br
          from-[#ecdcb0] via-[#c9a96e] to-[#8a6d35]" />
        <div className="relative w-20 h-20 rounded-full overflow-hidden
          bg-[#0a2c2d] flex items-center justify-center border-2 border-white">
          {guide.imgUrl ? (
            <Image
              src={guide.imgUrl}
              alt={guide.name}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="font-serif text-2xl text-[#ecdcb0]">
              {guide.initials ?? getInitials(guide.name)}
            </span>
          )}
        </div>
        <span className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full
          bg-[#0f3d3e] border-2 border-[#c9a96e] flex items-center justify-center">
          <Award size={13} className="text-[#c9a96e]" />
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-serif text-2xl text-[#0f3d3e] leading-tight">
          {guide.name}
        </p>
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#b8975a] mt-1.5">
          {guide.role}
          <span className="text-[#0f3d3e]/30 mx-2">·</span>
          <span className="text-[#0f3d3e]/50">{guide.yrsExp} yrs experience</span>
        </p>
        <p className="text-sm text-[#0f3d3e]/55 font-light leading-relaxed mt-4">
          {guide.bio}
        </p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full bg-[#0f3d3e]/[0.05]
                  text-[#0f3d3e]/70 border border-[#0f3d3e]/[0.08]
                  group-hover:border-[#c9a96e]/40 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="text-right flex-shrink-0 pl-2">
        <p className="font-serif text-4xl text-[#0f3d3e] leading-none">
          {rating.toFixed(1)}
        </p>
        <div className="mt-2">
          <StarRating rating={rating} />
        </div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/40
          mt-2 flex items-center gap-1.5 justify-end">
          <Users size={11} />
          {guide.reviewCount ?? 0} reviews
        </p>
      </div>
    </div>
  )
}

const GuideList = ({ guides }: { guides: GuideType[] }) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2
      flex items-center gap-3 text-[#b8975a]">
      <span className="h-px w-8 bg-[#c9a96e]/60" />
      Your guide
    </p>
    <h2 className="font-serif text-3xl sm:text-4xl text-[#0f3d3e] mb-8 tracking-tight">
      Meet the local experts
    </h2>
    {guides && guides.length > 0 ? (
      <div className="flex flex-col gap-5">
        {guides.map((guide) => (
          <GuideCard key={guide._id} guide={guide} />
        ))}
      </div>
    ) : (
      <p className="text-sm text-[#0f3d3e]/45 font-light py-8 text-center
        rounded-3xl border border-dashed border-[#0f3d3e]/15 bg-[#fbfaf6]">
        Local guides for this destination will be announced soon.
      </p>
    )}
  </section>
)

export default GuideList