import { ReviewType } from '@/app/places/page'

const ReviewCard = ({ review }: { review: ReviewType }) => (
  <div className="border-b border-[#0f3d3e]/06 pb-4 last:border-none
    last:pb-0">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-full bg-[#e8f0ed] flex items-center
        justify-center text-xs font-medium text-[#0f3d3e] flex-shrink-0">
        {review.authorInitials}
      </div>
      <div>
        <p className="text-sm font-medium text-[#0f3d3e]">
          {review.authorName}
        </p>
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <span key={s} className={`text-xs ${
              s <= review.rating ? 'text-[#a8d5d0]' : 'text-gray-200'
            }`}>★</span>
          ))}
        </div>
      </div>
      <span className="ml-auto text-xs text-gray-300">{review.date}</span>
    </div>
    <p className="text-xs text-gray-500 leading-relaxed">{review.body}</p>
  </div>
)

interface ReviewListProps {
  reviews: ReviewType[]
}

const ReviewList = ({ reviews }: ReviewListProps) => (
  <section>
    <p className="text-[10px] font-medium tracking-[0.2em] uppercase
      text-[#a8d5d0] mb-1">
      What travellers say
    </p>
    <h2 className="text-xl font-medium text-[#0f3d3e] mb-4">
      Reviews
    </h2>
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  </section>
)

export default ReviewList