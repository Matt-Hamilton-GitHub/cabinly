const BundlesSection = () => {
  return (
    <section id="bundles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#a8d5d0] text-xs font-medium tracking-[0.3em] uppercase">
            Save More
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#0f3d3e]">
            Adventure Bundles
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light">
            Combine destination, cabin, and activities for the best value and a seamless adventure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* Bundle 1 — Explorer */}
          <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300">
            <div className="p-8">
              <div className="text-[#a8d5d0] text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Explorer
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#0f3d3e]">$599</span>
                <span className="text-gray-300 line-through text-sm">$799</span>
                <span className="text-[#a8d5d0] text-xs font-medium px-2 py-0.5 rounded-full bg-[#a8d5d0]/10">
                  Save 25%
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-[#0f3d3e]">
                  <svg className="w-4 h-4 text-[#a8d5d0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  3 nights cabin stay
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0f3d3e]">
                  <svg className="w-4 h-4 text-[#a8d5d0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  1 guided activity
                </li>
                <li className="flex items-center gap-3 text-sm text-[#0f3d3e]">
                  <svg className="w-4 h-4 text-[#a8d5d0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Local breakfast included
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-300">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Airport transfer
                </li>
              </ul>
              <button className="w-full py-3 rounded-full border border-[#0f3d3e] text-[#0f3d3e] text-sm font-medium hover:bg-[#0f3d3e] hover:text-[#e8f0ed] transition-all duration-200">
                Choose Explorer
              </button>
            </div>
          </div>

          {/* Bundle 2 — Adventurer (featured) */}
          <div className="rounded-2xl bg-[#0f3d3e] overflow-hidden shadow-xl transition-transform hover:-translate-y-1 duration-300 scale-105">
            <div className="bg-[#a8d5d0] text-[#0f3d3e] text-center py-2 text-xs font-semibold tracking-[0.2em] uppercase">
              Most Popular
            </div>
            <div className="p-8">
              <div className="text-[#a8d5d0] text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Adventurer
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#e8f0ed]">$999</span>
                <span className="text-[#e8f0ed]/30 line-through text-sm">$1,399</span>
                <span className="text-[#a8d5d0] text-xs font-medium px-2 py-0.5 rounded-full bg-[#a8d5d0]/10">
                  Save 30%
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "5 nights premium cabin",
                  "3 guided activities",
                  "All meals included",
                  "Meet local families",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#e8f0ed]">
                    <svg className="w-4 h-4 text-[#a8d5d0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full bg-[#e8f0ed] text-[#0f3d3e] text-sm font-medium hover:bg-white transition-all duration-200">
                Choose Adventurer
              </button>
            </div>
          </div>

          {/* Bundle 3 — Pioneer */}
          <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300">
            <div className="p-8">
              <div className="text-[#a8d5d0] text-xs font-medium tracking-[0.2em] uppercase mb-2">
                Pioneer
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-bold text-[#0f3d3e]">$1,799</span>
                <span className="text-gray-300 line-through text-sm">$2,499</span>
                <span className="text-[#a8d5d0] text-xs font-medium px-2 py-0.5 rounded-full bg-[#a8d5d0]/10">
                  Save 28%
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "7 nights luxury cabin",
                  "Unlimited activities",
                  "Private chef experience",
                  "Airport VIP transfer",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#0f3d3e]">
                    <svg className="w-4 h-4 text-[#a8d5d0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-full border border-[#0f3d3e] text-[#0f3d3e] text-sm font-medium hover:bg-[#0f3d3e] hover:text-[#e8f0ed] transition-all duration-200">
                Choose Pioneer
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BundlesSection