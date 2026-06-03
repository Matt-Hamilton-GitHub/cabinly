import Image from 'next/image'
import { GuideType } from '@/app/places/page'

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} className={`text-sm ${
        star <= Math.round(rating) ? 'text-[#a8d5d0]' : 'text-gray-200'
      }`}>★</span>
    ))}
  </div>
)

const GuideCard = ({ guide }: { guide: GuideType }) => (
  <div className="flex items-start gap-4 border border-[#0f3d3e]/10
    rounded-2xl p-4">

    {/* Avatar — image or initials fallback */}
    <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden
      bg-[#e1f5ee] flex items-center justify-center">
      {guide.imgUrl ? (
        <Image
          src={guide.imgUrl}
          alt={guide.name}
          width={48}
          height={48}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-sm font-medium text-[#085041]">
          {guide.initials}
        </span>
      )}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-[#0f3d3e]">{guide.name}</p>
      <p className="text-xs text-gray-400 mt-0.5">
        {guide.role} · {guide.yrsExp} years experience  {/* yearsExperience → yrsExp */}
      </p>
      <p className="text-xs text-gray-500 leading-relaxed mt-2">{guide.bio}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {guide.tags && guide.tags.map((tag) => (
          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full
            bg-[#e1f5ee] text-[#085041]">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Rating */}
    <div className="text-right flex-shrink-0">
      <p className="text-sm font-medium text-[#0f3d3e]">
        {guide.rating.toFixed(1)}
      </p>
      <StarRating rating={guide.rating} />
      <p className="text-[10px] text-gray-400 mt-0.5">
        {guide.reviewCount} reviews
      </p>
    </div>
  </div>
)

const GuideList = ({ guides }: { guides: GuideType[] }) => (
  
  <section>
    <p className="text-[10px] font-medium tracking-[0.2em] uppercase
      text-[#a8d5d0] mb-1">
      Your guide
    </p>
    <h2 className="text-xl font-medium text-[#0f3d3e] mb-4">
      Meet the local experts
    </h2>
    <div className="flex flex-col gap-3">
      {guides && guides.map((guide) => (
        <GuideCard key={guide._id} guide={guide} />
      ))}
    </div>
  </section>
)

export default GuideList