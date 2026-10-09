import { Star, Quote, MessageSquare } from 'lucide-react'
import { ReviewType } from '@/app/lib/types'

const Stars = ({ rating, size = 14 }: { rating: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        size={size}
        className={
          s <= Math.round(rating)
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

const ReviewCard = ({ review }: { review: ReviewType }) => (
  <article
    className="group relative rounded-3xl p-7 bg-gradient-to-br from-white
      to-[#fbfaf6] border border-[#0f3d3e]/[0.08] transition-all duration-300
      hover:border-[#c9a96e]/50 hover:-translate-y-0.5
      hover:shadow-[0_24px_48px_-30px_rgba(15,61,62,0.45)]"
  >
    <Quote
      size={36}
      className="absolute top-6 right-6 text-[#c9a96e]/20 group-hover:text-[#c9a96e]/40 transition-colors"
    />

    <div className="flex items-center gap-4 mb-5">
      <div className="relative flex-shrink-0">
        <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-[#ecdcb0] to-[#c9a96e]" />
        <div className="relative w-12 h-12 rounded-full bg-[#0a2c2d] flex items-center
          justify-center border-2 border-white">
          <span className="font-serif text-base text-[#ecdcb0]">
            {review.authorInitials ?? getInitials(review.authorName)}
          </span>
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-serif text-lg text-[#0f3d3e] leading-tight truncate">
          {review.authorName}
        </p>
        <div className="mt-1.5">
          <Stars rating={review.rating} />
        </div>
      </div>
      <span className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/35 pr-10 hidden sm:block">
        {review.date}
      </span>
    </div>

    <p className="text-sm text-[#0f3d3e]/60 font-light leading-[1.9]">
      {review.body}
    </p>

    <span className="text-[10px] tracking-[0.2em] uppercase text-[#0f3d3e]/35 mt-4 block sm:hidden">
      {review.date}
    </span>
  </article>
)

interface ReviewListProps {
  reviews: ReviewType[]
}

const ReviewList = ({ reviews }: ReviewListProps) => {
  const list = reviews ?? []
  const count = list.length
  const average = count
    ? list.reduce((sum, r) => sum + (r.rating ?? 0), 0) / count
    : 0
  const distribution = [5, 4, 3, 2, 1].map((n) => ({
    n,
    count: list.filter((r) => Math.round(r.rating) === n).length,
  }))

  return (
    <section>
      <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-2
        flex items-center gap-3 text-[#b8975a]">
        <span className="h-px w-8 bg-[#c9a96e]/60" />
        What travellers say
      </p>
      <h2 className="font-serif text-3xl sm:text-4xl text-[#0f3d3e] mb-8 tracking-tight">
        Reviews
      </h2>

      {count > 0 ? (
        <>
          {/* Summary */}
          <div className="relative overflow-hidden rounded-3xl mb-8 p-8
            bg-gradient-to-br from-[#0a2c2d] via-[#0f3d3e] to-[#17575a]
            flex items-center gap-10 flex-wrap">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/70 to-transparent" />
            <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#c9a96e]/15 blur-3xl pointer-events-none" />

            <div className="relative text-center">
              <p className="font-serif text-6xl text-[#ecdcb0] leading-none">
                {average.toFixed(1)}
              </p>
              <div className="mt-3 flex justify-center">
                <Stars rating={average} size={16} />
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#f4efe2]/50 mt-3">
                {count} review{count !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="relative flex-1 min-w-[200px] space-y-2.5">
              {distribution.map(({ n, count: c }) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="text-xs text-[#f4efe2]/60 w-3">{n}</span>
                  <Star size={11} className="fill-[#c9a96e] text-[#c9a96e]" />
                  <div className="flex-1 h-1.5 rounded-full bg-[#f4efe2]/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#a8d5d0] to-[#c9a96e]"
                      style={{ width: `${(c / count) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#f4efe2]/40 w-5 text-right">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {list.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center text-center
          py-14 rounded-3xl border border-dashed border-[#0f3d3e]/15 bg-[#fbfaf6]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f4efe2]
            to-[#e1f5ee] flex items-center justify-center mb-5 border
            border-[#c9a96e]/30">
            <MessageSquare size={24} className="text-[#0f3d3e]/45" />
          </div>
          <p className="font-serif text-xl text-[#0f3d3e] mb-1">No reviews yet</p>
          <p className="text-sm text-[#0f3d3e]/45 font-light">
            Be the first to share your experience here.
          </p>
        </div>
      )}
    </section>
  )
}

export default ReviewList