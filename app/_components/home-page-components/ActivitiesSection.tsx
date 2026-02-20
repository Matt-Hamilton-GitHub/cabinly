

const ActivitiesSection = () => {
  return (
   <section id="activities" className="py-24 bg-gradient-to-b from-neutral-950 to-black">
    <div className="max-w-7xl mx-auto px-6">
     <div className="text-center mb-16 "><span className="text-orange-500 text-sm tracking-widest uppercase">Experience</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">Guided Adventures</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Every activity is led by certified local professionals who share their passion and expertise</p>
     </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* <!-- Activity 1 --> */}
      <div className="glass-card rounded-2xl p-6 card-hover " data-delay="100">
       <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L8 8H4L8 14L4 22H12L16 14L20 22H20L16 8H20L12 2Z" />
        </svg>
       </div>
       <h3 className="text-xl font-semibold mb-2">Skiing</h3>
       <p className="text-gray-400 text-sm mb-4">From beginner slopes to expert backcountry runs</p>
       <div className="flex items-center justify-between text-sm"><span className="text-cyan-400">All levels</span> <span className="text-gray-500">2-6 hours</span>
       </div>
      </div>
      {/* <!-- Activity 2 --> */}
      <div className="glass-card rounded-2xl p-6 card-hover " data-delay="200">
       <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
       </div>
       <h3 className="text-xl font-semibold mb-2">Hiking</h3>
       <p className="text-gray-400 text-sm mb-4">Discover hidden trails and panoramic viewpoints</p>
       <div className="flex items-center justify-between text-sm"><span className="text-cyan-400">Easy to Hard</span> <span className="text-gray-500">3-8 hours</span>
       </div>
      </div>
      {/* <!-- Activity 3 --> */}
      <div className="glass-card rounded-2xl p-6 card-hover " data-delay="300">
       <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /> <path d="M12 6v6l4 2" />
        </svg>
       </div>
       <h3 className="text-xl font-semibold mb-2">Northern Lights</h3>
       <p className="text-gray-400 text-sm mb-4">Chase the aurora with expert photographers</p>
       <div className="flex items-center justify-between text-sm"><span className="text-purple-400">Seasonal</span> <span className="text-gray-500">4-6 hours</span>
       </div>
      </div>
      {/* <!-- Activity 4 --> */}
      <div className="glass-card rounded-2xl p-6 card-hover " data-delay="400">
       <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /> <circle cx="9" cy="7" r="4" /> <path d="M23 21v-2a4 4 0 0 0-3-3.87" /> <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
       </div>
       <h3 className="text-xl font-semibold mb-2">Meet Locals</h3>
       <p className="text-gray-400 text-sm mb-4">Cultural experiences and authentic connections</p>
       <div className="flex items-center justify-between text-sm"><span className="text-cyan-400">Unique</span> <span className="text-gray-500">2-4 hours</span>
       </div>
      </div>
     </div>
    </div>
   </section>
  )
}

export default ActivitiesSection