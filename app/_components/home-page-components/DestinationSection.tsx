const DestinationSection = () => {
  return (
    <section id="destinations" className="py-24 bg-gradient-to-b from-black to-neutral-950">
    <div className="max-w-7xl mx-auto px-6">
     <div className="text-center mb-16 "><span className="text-orange-500 text-sm tracking-widest uppercase">Explore</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">Breathtaking Destinations</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">From snow-capped peaks to serene valleys, choose your perfect escape</p>
     </div>
     <div className="grid md:grid-cols-3 gap-8">
        {/* <!-- Destination 1 --> */}
      <div className="card-hover rounded-2xl overflow-hidden bg-neutral-900 " data-delay="100">
       <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-blue-800 flex items-center justify-center">
         <svg className="w-32 h-32 text-white/20" viewBox="0 0 100 100"><path d="M50 10 L20 90 L80 90 Z" fill="currentColor" /> <path d="M50 30 L30 90 L70 90 Z" fill="currentColor" opacity="0.5" /> <circle cx="75" cy="25" r="8" fill="currentColor" opacity="0.3" />
         </svg>
        </div>
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
         Popular
        </div>
       </div>
       <div className="p-6">
        <h3 className="font-display text-2xl font-semibold mb-2">Swiss Alps</h3>
        <p className="text-gray-400 mb-4">Majestic peaks, pristine snow, and legendary skiing trails</p>
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-2 text-orange-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg><span>4.9 (2.4k reviews)</span>
         </div><span className="text-white font-semibold">From $299</span>
        </div>
       </div>
      </div>
      {/* <!-- Destination 2 --> */}
      <div className="card-hover rounded-2xl overflow-hidden bg-neutral-900 " data-delay="200">
       <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-800 flex items-center justify-center">
         <svg className="w-32 h-32 text-white/20" viewBox="0 0 100 100"><ellipse cx="50" cy="70" rx="40" ry="15" fill="currentColor" /> <path d="M30 70 Q50 20 70 70" fill="none" stroke="currentColor" strokeWidth="3" /> <circle cx="50" cy="45" r="15" fill="currentColor" opacity="0.5" />
         </svg>
        </div>
       </div>
       <div className="p-6">
        <h3 className="font-display text-2xl font-semibold mb-2">Norwegian Fjords</h3>
        <p className="text-gray-400 mb-4">Dramatic cliffs, crystal waters, and northern lights</p>
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-2 text-cyan-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg><span>4.8 (1.8k reviews)</span>
         </div><span className="text-white font-semibold">From $349</span>
        </div>
       </div>
      </div>
      {/* <!-- Destination 3 --> */}
      <div className="card-hover rounded-2xl overflow-hidden bg-neutral-900 " data-delay="300">
       <div className="h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 to-teal-800 flex items-center justify-center">
         <svg className="w-32 h-32 text-white/20" viewBox="0 0 100 100"><path d="M20 80 Q30 50 50 60 Q70 70 80 40" fill="none" stroke="currentColor" strokeWidth="4" /> <circle cx="30" cy="30" r="12" fill="currentColor" opacity="0.4" /> <path d="M60 80 L65 50 L70 80 Z" fill="currentColor" /> <path d="M70 80 L78 40 L86 80 Z" fill="currentColor" opacity="0.6" />
         </svg>
        </div>
        <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
         New
        </div>
       </div>
       <div className="p-6">
        <h3 className="font-display text-2xl font-semibold mb-2">Patagonia</h3>
        <p className="text-gray-400 mb-4">Untamed wilderness, glaciers, and endless hiking trails</p>
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-2 text-orange-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg><span>4.9 (956 reviews)</span>
         </div><span className="text-white font-semibold">From $399</span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
  );
};

export default DestinationSection;
