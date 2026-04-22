import React from 'react'

const MeetLocalsSection = () => {
  return (
    <section id="locals" className=" relative py-24 ">
    <div className="max-w-7xl mx-auto px-6">
     <div className="text-center mb-16 "><span className="text-cyan-400 text-sm tracking-widest uppercase">Connect</span>
      <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">Meet Your Guides</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Our local experts are passionate adventurers who call these wild places home</p>
     </div>
     <div className="grid md:grid-cols-3 gap-8">
        {/* <!-- Guide 1 --> */}
      <div className="text-center " data-delay="100">
       <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br bg-[#3a8f7a]  p-1 mb-6">
        <div className="w-full h-full rounded-full bg-[#3b3a3a] flex items-center justify-center">
         <svg className="w-16 h-16 text-cyan-400/50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
         </svg>
        </div>
       </div>
       <h3 className="text-xl font-semibold mb-1">Erik Johansson</h3>
       <p className="text-cyan-400 text-sm mb-3">Norwegian Fjords Expert</p>
       <p className="text-gray-400 text-sm">15 years guiding through Norway's most breathtaking landscapes</p>
      </div>
      {/* <!-- Guide 2 --> */}
      <div className="text-center " data-delay="200">
       <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-cyan-600 p-1 mb-6">
        <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
         <svg className="w-16 h-16 text-purple-400/50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
         </svg>
        </div>
       </div>
       <h3 className="text-xl font-semibold mb-1">Maria Schneider</h3>
       <p className="text-purple-400 text-sm mb-3">Swiss Alps Ski Instructor</p>
       <p className="text-gray-400 text-sm">Former Olympic skier sharing her love for alpine adventures</p>
      </div>
      {/* <!-- Guide 3 --> */}
      <div className="text-center " data-delay="300">
       <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 p-1 mb-6">
        <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
         <svg className="w-16 h-16 text-cyan-400/50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
         </svg>
        </div>
       </div>
       <h3 className="text-xl font-semibold mb-1">Lucas Mendez</h3>
       <p className="text-cyan-400 text-sm mb-3">Patagonia Trek Leader</p>
       <p className="text-gray-400 text-sm">Born in the shadow of Torres del Paine, knows every hidden trail</p>
      </div>
     </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 ">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0,120 L0,80 Q180,30 360,65 Q540,100 720,50 Q900,0 1080,40 Q1260,80 1440,55 L1440,120 Z"
            fill="#2d7a6e"
          />
        </svg>
      </div>
    </section>
  )
}

export default MeetLocalsSection