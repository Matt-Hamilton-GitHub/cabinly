

const Shimmer = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden bg-[#0f3d3e]/06 ${className}`}>
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite]
      bg-gradient-to-r from-transparent via-[#0f3d3e]/04 to-transparent" />
  </div>
)

const PlacePageSkeleton = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero skeleton ── */}
      <div className="relative h-[60vh] bg-gradient-to-br from-[#0f3d3e]/90
        to-[#1a5c5e]/90 flex flex-col justify-between px-8 py-6
        overflow-hidden">

        {/* faint decorative mountain so it still feels like Cabinly */}
        <div className="absolute inset-0 flex items-center justify-center
          opacity-[0.06] pointer-events-none">
          <svg width="420" height="420" viewBox="0 0 100 100">
            <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
            <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
          </svg>
        </div>

        {/* top row */}
        <div className="relative flex items-center justify-between">
          <Shimmer className="w-28 h-8 rounded-full bg-[#e8f0ed]/10" />
          <div className="flex gap-2">
            <Shimmer className="w-16 h-7 rounded-full bg-[#e8f0ed]/10" />
            <Shimmer className="w-14 h-7 rounded-full bg-[#e8f0ed]/10" />
          </div>
        </div>

        {/* bottom content */}
        <div className="relative">
          <Shimmer className="w-10 h-7 rounded mb-3 bg-[#e8f0ed]/10" />
          <Shimmer className="w-72 h-11 rounded-lg mb-3 bg-[#e8f0ed]/12" />
          <Shimmer className="w-56 h-4 rounded mb-4 bg-[#e8f0ed]/08" />
          <div className="flex gap-2">
            <Shimmer className="w-20 h-6 rounded-full bg-[#e8f0ed]/08" />
            <Shimmer className="w-16 h-6 rounded-full bg-[#e8f0ed]/08" />
            <Shimmer className="w-24 h-6 rounded-full bg-[#e8f0ed]/08" />
          </div>
        </div>
      </div>

      {/* ── Stats strip skeleton ── */}
      <div className="border-b border-[#0f3d3e]/08 bg-white">
        <div className="max-w-7xl mx-auto flex divide-x divide-[#0f3d3e]/08">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex-1 py-5 flex flex-col items-center
              gap-2">
              <Shimmer className="w-5 h-5 rounded" />
              <Shimmer className="w-8 h-4 rounded" />
              <Shimmer className="w-14 h-2.5 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_320px]
        divide-x divide-[#0f3d3e]/08">

        {/* ── Main column ── */}
        <div className="px-8 py-10 space-y-14">

          {/* About section skeleton */}
          <div>
            <Shimmer className="w-16 h-2.5 rounded mb-2" />
            <Shimmer className="w-56 h-7 rounded-lg mb-4" />
            <div className="space-y-2 mb-4">
              <Shimmer className="w-full h-3.5 rounded" />
              <Shimmer className="w-full h-3.5 rounded" />
              <Shimmer className="w-3/4 h-3.5 rounded" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-3 bg-[#f8faf9]
                  rounded-xl p-3">
                  <Shimmer className="w-8 h-8 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <Shimmer className="w-3/4 h-3 rounded" />
                    <Shimmer className="w-1/2 h-2.5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cabin selector skeleton */}
          <div>
            <Shimmer className="w-20 h-2.5 rounded mb-2" />
            <Shimmer className="w-40 h-7 rounded-lg mb-4" />
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-[#0f3d3e]/08
                  rounded-2xl overflow-hidden">
                  <Shimmer className="h-28 w-full" />
                  <div className="p-3 space-y-2">
                    <Shimmer className="w-2/3 h-3.5 rounded" />
                    <Shimmer className="w-1/2 h-2.5 rounded" />
                    <div className="flex justify-between pt-1">
                      <Shimmer className="w-14 h-3 rounded" />
                      <Shimmer className="w-10 h-4 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities skeleton */}
          <div>
            <Shimmer className="w-20 h-2.5 rounded mb-2" />
            <Shimmer className="w-48 h-7 rounded-lg mb-4" />
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 border
                  border-[#0f3d3e]/08 rounded-xl p-4">
                  <Shimmer className="w-10 h-10 rounded-xl flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Shimmer className="w-1/3 h-3.5 rounded" />
                    <Shimmer className="w-1/2 h-2.5 rounded" />
                  </div>
                  <Shimmer className="w-16 h-7 rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Guides skeleton */}
          <div>
            <Shimmer className="w-16 h-2.5 rounded mb-2" />
            <Shimmer className="w-44 h-7 rounded-lg mb-4" />
            <div className="space-y-3">
              {[1, 2].map((i) => (
                <div key={i} className="flex items-start gap-4 border
                  border-[#0f3d3e]/08 rounded-2xl p-4">
                  <Shimmer className="w-12 h-12 rounded-full flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Shimmer className="w-1/3 h-3.5 rounded" />
                    <Shimmer className="w-1/2 h-2.5 rounded" />
                    <Shimmer className="w-full h-2.5 rounded" />
                  </div>
                  <Shimmer className="w-10 h-8 rounded flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar skeleton ── */}
        <div className="px-6 py-8 space-y-6">

          {/* price card */}
          <div className="bg-[#0f3d3e] rounded-2xl p-6 space-y-4">
            <Shimmer className="w-16 h-2.5 rounded bg-[#e8f0ed]/10" />
            <Shimmer className="w-24 h-8 rounded-lg bg-[#e8f0ed]/12" />
            <Shimmer className="w-32 h-2.5 rounded bg-[#e8f0ed]/08" />
            <div className="h-px bg-[#e8f0ed]/10 my-2" />
            <Shimmer className="w-full h-3 rounded bg-[#e8f0ed]/08" />
            <div className="h-px bg-[#e8f0ed]/10 my-2" />
            <Shimmer className="w-full h-11 rounded-full bg-[#e8f0ed]/15" />
            <Shimmer className="w-full h-9 rounded-full bg-[#e8f0ed]/06" />
          </div>

          {/* dates */}
          <div>
            <Shimmer className="w-24 h-3 rounded mb-3" />
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Shimmer key={i} className="h-14 rounded-xl" />
              ))}
            </div>
          </div>

          {/* guests */}
          <div>
            <Shimmer className="w-16 h-3 rounded mb-3" />
            <div className="space-y-2">
              <Shimmer className="h-12 rounded-xl" />
              <Shimmer className="h-12 rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlacePageSkeleton