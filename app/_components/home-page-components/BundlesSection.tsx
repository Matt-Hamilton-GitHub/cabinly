

const BundlesSection = () => {
  return (
     <section id="bundles" className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
     <div className="text-center mb-16 "><span className="text-cyan-400 text-sm tracking-widest uppercase">Save More</span>
      <h2 id="bundle-title" className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">Adventure Bundles</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Combine destination, cabin, and activities for the best value and a seamless adventure</p>
     </div>
     <div className="grid md:grid-cols-3 gap-8">
        {/* <!-- Bundle 1 --> */}
      <div className="rounded-2xl border border-neutral-800 overflow-hidden card-hover " data-delay="100">
       <div className="p-8">
        <div className="text-cyan-400 text-sm font-semibold mb-2">
         EXPLORER
        </div>
        <div className="flex items-baseline gap-2 mb-6"><span className="text-4xl font-bold">$599</span> <span className="text-gray-500 line-through">$799</span> <span className="text-cyan-400 text-sm">Save 25%</span>
        </div>
        <ul className="space-y-4 mb-8">
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>3 nights cabin stay</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>1 guided activity</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>Local breakfast included</span></li>
         <li className="flex items-center gap-3 text-gray-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg><span>Airport transfer</span></li>
        </ul><button className="w-full py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all font-semibold"> Choose Explorer </button>
       </div>
      </div>
      {/* <!-- Bundle 2 - Featured --> */}
      <div className="rounded-2xl bg-gradient-to-b from-purple-900/30 to-neutral-900 border-2 border-purple-500 overflow-hidden card-hover transform scale-105 " data-delay="200">
       <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black text-center py-2 text-sm font-semibold">
        MOST POPULAR
       </div>
       <div className="p-8">
        <div className="text-cyan-400 text-sm font-semibold mb-2">
         ADVENTURER
        </div>
        <div className="flex items-baseline gap-2 mb-6"><span className="text-4xl font-bold">$999</span> <span className="text-gray-500 line-through">$1,399</span> <span className="text-purple-400 text-sm">Save 30%</span>
        </div>
        <ul className="space-y-4 mb-8">
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>5 nights premium cabin</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>3 guided activities</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>All meals included</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>Meet local families</span></li>
        </ul><button className="w-full py-3 rounded-full btn-primary text-black font-semibold"> Choose Adventurer </button>
       </div>
      </div>
      {/* <!-- Bundle 3 --> */}
      <div className="rounded-2xl border border-neutral-800 overflow-hidden card-hover " data-delay="300">
       <div className="p-8">
        <div className="text-cyan-400 text-sm font-semibold mb-2">
         PIONEER
        </div>
        <div className="flex items-baseline gap-2 mb-6"><span className="text-4xl font-bold">$1,799</span> <span className="text-gray-500 line-through">$2,499</span> <span className="text-cyan-400 text-sm">Save 28%</span>
        </div>
        <ul className="space-y-4 mb-8">
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>7 nights luxury cabin</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>Unlimited activities</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>Private chef experience</span></li>
         <li className="flex items-center gap-3">
          <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg><span>Airport VIP transfer</span></li>
        </ul><button className="w-full py-3 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all font-semibold"> Choose Pioneer </button>
       </div>
      </div>
     </div>
    </div>
   </section>
  )
}

export default BundlesSection