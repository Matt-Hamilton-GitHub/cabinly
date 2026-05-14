import React from 'react'

function PlaceAbout({place}) {
    const {description, title, cabins} = place
  return (
    <section className='m-10 flex flex-col'>
        <span className='text-gray-600 font-bold text-3xl py-5 '>Why visit the {title} ?</span>
        <h1 className='text-black ' >{description}</h1>

         <div className="highlights">
          <div className="hl">
            <div className="hl-icon"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0f3d3e" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg></div>
            <div><div className="hl-title">3 cabins</div><div className="hl-sub">From cosy to luxury</div></div>
          </div>
          <div className="hl">
            <div className="hl-icon"><svg width="40" height="40"  viewBox="0 0 24 24" fill="none" stroke="#0f3d3e" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg></div>
            <div><div className="hl-title">Best Nov–Mar</div><div className="hl-sub">For skiing season</div></div>
          </div>
          <div className="hl">
            <div className="hl-icon"><svg width="40" height="40"  viewBox="0 0 24 24" fill="none" stroke="#0f3d3e" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
            <div><div className="hl-title">12 local guides</div><div className="hl-sub">Certified experts</div></div>
          </div>
          <div className="hl">
            <div className="hl-icon"><svg width="40" height="40"  viewBox="0 0 24 24" fill="none" stroke="#0f3d3e" strokeWidth="2"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg></div>
            <div><div className="hl-title">4.9 / 5 rating</div><div className="hl-sub">2,400+ reviews</div></div>
          </div>
        </div>
        </section>
  )
}

export default PlaceAbout