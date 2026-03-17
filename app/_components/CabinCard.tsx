'use client'
import Image from "next/image"
import { CabinsType } from "../cabins/page"
import { FaPeopleGroup } from "react-icons/fa6";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import Link from "next/link";

import Rating from '@mui/material/Rating';


export type CabinCardProps = {
    cabin: CabinsType
}

export const metadata = {
    title: 'Cabin'
}

export default function CabinCard({ cabin }: CabinCardProps) {

    const cabinId = cabin._id;
    return (

        <div key={cabinId} className="cabin-card rounded-2xl overflow-hidden glass-card hover:border-orange-400/50 border border-orange-500/10 cursor-pointer group animate-fadeInUp">
          <div className="h-48 cabin-image relative overflow-hidden bg-cover bg-center" style={{backgroundImage: `url(${cabin.imageUrl})`}}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute top-3 right-3 price-badge px-3 py-1 rounded-lg">
              <span className="text-orange-300 font-semibold">${cabin.price}</span>/night
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-lg">{cabin.title}</h3>
                <p className="text-sm text-gray-400">{cabin.location.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">{cabin.description}</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {/* Array(5).fill(0).map((_, i) => `
                    <svg className="w-4 h-4 ${i < Math.floor(cabin.rating) ? 'text-orange-400' : 'text-gray-600'}" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  `).join('') */}
                </div>
                <span className="text-sm text-gray-400">{cabin.rating} ({cabin?.reviews})</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <span>🛏️</span>
                <span>{cabin?.beds} beds</span>
              </div>
              <div className="flex items-center gap-1">
                <span>🚿</span>
                <span>{cabin?.baths} baths</span>
              </div>
              <div className="flex items-center gap-1">
                <span>👥</span>
                <span>Up to {cabin?.occupancy}</span>
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-1">
              ${cabin?.amenities?.slice(0, 3).map(a => {
                const emojiMap = { wifi: '📡', fireplace: '🔥', 'hot-tub': '🛁', kitchen: '🍳', washer: '🧺', parking: '🅿️' };
                return `<span className="text-xs bg-orange-500/10 text-orange-300 px-2 py-1 rounded">${emojiMap[a]}</span>`;
              }).join('')}
              ${cabin?.amenities.length > 3 ? `<span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">+${cabin?.amenities.length - 3}</span>` : ''}
            </div> */}
          </div>
        </div>)
}


