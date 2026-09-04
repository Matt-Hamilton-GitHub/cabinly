'use client'

import { useEffect, useState } from 'react'
import SpinnerBoxJump from '../_components/SpinnerBoxJump'
import PlaceCard from '../_components/PlaceCard'
import { TPlace } from '../lib/types'
import {
  Mountain, Waves, Trees, Sun, Snowflake,
  Leaf, Globe, Footprints, Bike, Fish, Building,
  Camera, Zap, SlidersHorizontal, X
} from 'lucide-react'

// ─── Filter config ────────────────────────────────────────────────

const TYPES = [
  { label: 'All',      icon: <Globe size={15} /> },
  { label: 'Mountain', icon: <Mountain size={15} /> },
  { label: 'Coastal',  icon: <Waves size={15} /> },
  { label: 'Forest',   icon: <Trees size={15} /> },
  { label: 'Desert',   icon: <Sun size={15} /> },
  { label: 'Arctic',   icon: <Snowflake size={15} /> },
  { label: 'Tropical', icon: <Leaf size={15} /> },
]

const SEASONS = [
  { label: 'All year', emoji: '🗓️' },
  { label: 'Spring',   emoji: '🌸' },
  { label: 'Summer',   emoji: '☀️' },
  { label: 'Autumn',   emoji: '🍂' },
  { label: 'Winter',   emoji: '❄️' },
]

const ACTIVITIES = [
  { label: 'All',      icon: <Zap size={13} /> },
  { label: 'Hiking',   icon: <Footprints size={13} /> },
  { label: 'Skiing',   icon: <Mountain size={13} /> },
  { label: 'Kayaking', icon: <Waves size={13} /> },
  { label: 'Cycling',  icon: <Bike size={13} /> },
  { label: 'Wildlife', icon: <Fish size={13} /> },
  { label: 'Cultural', icon: <Building size={13} /> },
  { label: 'Climbing', icon: <Mountain size={13} /> },
  { label: 'Photography', icon: <Camera size={13} /> },
]



const MIN_PRICE = 0
const MAX_PRICE = 1000

// ─── Sub-components ───────────────────────────────────────────────

const SidebarSection = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => (
  <div className="mb-6">
    <p className="text-[10px] font-medium tracking-[0.18em] uppercase
      text-[#a8d5d0] mb-3">
      {label}
    </p>
    {children}
  </div>
)

const SidebarPill = ({
  icon,
  label,
  count,
  active,
  onClick,
}: {
  icon?: React.ReactNode
  label: string
  count?: number
  active: boolean
  onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl
      text-sm transition-all text-left ${
        active
          ? 'bg-[#0f3d3e] text-[#e8f0ed]'
          : 'text-gray-600 hover:bg-[#f8faf9] hover:text-[#0f3d3e]'
      }`}
  >
    {icon && (
      <span className={active ? 'text-[#a8d5d0]' : 'text-[#0f3d3e]/40'}>
        {icon}
      </span>
    )}
    <span className="flex-1 font-light">{label}</span>
    {count !== undefined && (
      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
        active
          ? 'bg-[#e8f0ed]/15 text-[#e8f0ed]/60'
          : 'bg-[#f8faf9] text-gray-400'
      }`}>
        {count}
      </span>
    )}
  </button>
)

const ActiveFilterBadge = ({
  label,
  onRemove,
}: {
  label: string
  onRemove: () => void
}) => (
  <span className="flex items-center gap-1 text-xs px-2.5 py-1
    bg-[#0f3d3e] text-[#e8f0ed] rounded-full">
    {label}
    <button onClick={onRemove} className="hover:text-[#a8d5d0] transition-colors">
      <X size={11} />
    </button>
  </span>
)

// ─── Main Page ────────────────────────────────────────────────────

const PlacesPage = () => {
  const [places, setPlaces]     = useState<TPlace[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const [filters, setFilters] = useState({
    type:     'All',
    season:   'All year',
    activity: 'All',
    country:  'All',
    maxPrice: MAX_PRICE,
  })
  
  let COUNTRIES = places.map(p => p.country )
  COUNTRIES.splice(0,0,'All')

  const setFilter = (key: keyof typeof filters) => (val: string | number) =>
    setFilters((f) => ({ ...f, [key]: val }))

  const resetFilters = () => setFilters({
    type: 'All', season: 'All year',
    activity: 'All', country: 'All', maxPrice: MAX_PRICE,
  })

  const activeFilterCount = [
    filters.type     !== 'All',
    filters.season   !== 'All year',
    filters.activity !== 'All',
    filters.country  !== 'All',
    filters.maxPrice !== MAX_PRICE,
  ].filter(Boolean).length

  const filtered = places.filter((p) => {
    if (filters.type     !== 'All'     && p.type    !== filters.type)    return false
    if (filters.country  !== 'All'     && p.country !== filters.country) return false
    if (filters.season   !== 'All year' && !p.seasons?.includes(filters.season as any)) return false
    if (filters.activity !== 'All'     && !p.activities?.some((a: any) => a.label === filters.activity)) return false
    if (p.price > filters.maxPrice) return false
    return true
  })

  // count helpers
  const countFor = (key: keyof TPlace, val: string) =>
    val === 'All' || val === 'All year'
      ? places.length
      : places.filter((p: any) => {
          if (key === 'seasons') return p.seasons?.includes(val)
          if (key === 'activities') return p.activities?.some((a: any) => a.name === val)
          return p[key] === val
        }).length

  const fetchAndSetPlaces = async () => {
    setIsLoading(true)
    try {
      const res  = await fetch('/api/places/all-places')
      const data = await res.json()
      setPlaces(data.places ?? [])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => { fetchAndSetPlaces() }, [])

  if (isLoading) return (
    <div className="flex h-screen items-center justify-center">
      <SpinnerBoxJump />
    </div>
  )

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      {/* ── Page header ── */}
      <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
        <div>
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-2">
            Explore the world
          </p>
          <h1 className="font-serif text-4xl text-[#0f3d3e]">
            All Places
            <span className="text-lg text-gray-400 font-sans font-normal ml-3">
              {filtered.length} destinations
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Active filter badges */}
          <div className="flex items-center gap-2 flex-wrap">
            {filters.type     !== 'All'     && <ActiveFilterBadge label={filters.type}     onRemove={() => setFilter('type')('All')} />}
            {filters.country  !== 'All'     && <ActiveFilterBadge label={filters.country}  onRemove={() => setFilter('country')('All')} />}
            {filters.season   !== 'All year' && <ActiveFilterBadge label={filters.season}   onRemove={() => setFilter('season')('All year')} />}
            {filters.activity !== 'All'     && <ActiveFilterBadge label={filters.activity} onRemove={() => setFilter('activity')('All')} />}
            {filters.maxPrice !== MAX_PRICE  && <ActiveFilterBadge label={`Under $${filters.maxPrice}`} onRemove={() => setFilter('maxPrice')(MAX_PRICE)} />}
            {activeFilterCount > 0 && (
              <button onClick={resetFilters}
                className="text-xs text-gray-400 hover:text-[#0f3d3e] transition-colors">
                Clear all
              </button>
            )}
          </div>

          {/* Sort */}
          <select className="text-xs px-3 py-2 border border-[#0f3d3e]/15
            rounded-xl text-[#0f3d3e] bg-white outline-none
            hover:border-[#a8d5d0] transition-colors">
            <option>Most popular</option>
            <option>Price: low–high</option>
            <option>Price: high–low</option>
            <option>Most activities</option>
          </select>

          {/* Sidebar toggle */}
          <button
            onClick={() => setSidebarOpen((o) => !o)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border
              text-xs font-medium transition-all ${
                sidebarOpen
                  ? 'bg-[#0f3d3e] text-[#e8f0ed] border-[#0f3d3e]'
                  : 'border-[#0f3d3e]/15 text-[#0f3d3e] hover:border-[#a8d5d0]'
              }`}
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className={`text-[10px] w-4 h-4 rounded-full flex items-center
                justify-center font-medium ${
                  sidebarOpen ? 'bg-[#a8d5d0] text-[#0f3d3e]' : 'bg-[#0f3d3e] text-[#e8f0ed]'
                }`}>
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ── Body — sidebar + grid ── */}
      <div className={`flex gap-8 items-start ${sidebarOpen ? '' : ''}`}>

        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-52 flex-shrink-0 sticky top-24">
            <div className="bg-white border border-[#0f3d3e]/08 rounded-2xl
              p-4 space-y-1">

              {/* Type */}
              <SidebarSection label="Type">
                {TYPES.map(({ label, icon }) => (
                  <SidebarPill
                    key={label}
                    icon={icon}
                    label={label}
                    count={countFor('type', label)}
                    active={filters.type === label}
                    onClick={() => setFilter('type')(label)}
                  />
                ))}
              </SidebarSection>

              {/* Country */}
              <SidebarSection label="Country">
                {COUNTRIES.map((c) => (
                  <SidebarPill
                    key={c}
                    label={c}
                    count={countFor('country', c)}
                    active={filters.country === c}
                    onClick={() => setFilter('country')(c)}
                  />
                ))}
              </SidebarSection>

              {/* Season */}
              <SidebarSection label="Season">
                {SEASONS.map(({ label, emoji }) => (
                  <SidebarPill
                    key={label}
                    icon={<span className="text-base">{emoji}</span>}
                    label={label}
                    count={countFor('seasons', label)}
                    active={filters.season === label}
                    onClick={() => setFilter('season')(label)}
                  />
                ))}
              </SidebarSection>

              {/* Activities */}
              <SidebarSection label="Activities">
                {ACTIVITIES.map(({ label, icon }) => (
                  <SidebarPill
                    key={label}
                    icon={icon}
                    label={label}
                    active={filters.activity === label}
                    onClick={() => setFilter('activity')(label)}
                  />
                ))}
              </SidebarSection>

              {/* Price range */}
              <SidebarSection label="Max price / person">
                <div className="px-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400">${MIN_PRICE}</span>
                    <span className="text-sm font-medium text-[#0f3d3e]">
                      ${filters.maxPrice === MAX_PRICE ? 'Any' : filters.maxPrice}
                    </span>
                    <span className="text-xs text-gray-400">${MAX_PRICE}+</span>
                  </div>
                  <input
                    type="range"
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={50}
                    value={filters.maxPrice}
                    onChange={(e) => setFilter('maxPrice')(Number(e.target.value))}
                    className="w-full accent-[#0f3d3e]"
                  />
                  <div className="flex justify-between mt-2">
                    {[200, 400, 600, 800].map((v) => (
                      <button
                        key={v}
                        onClick={() => setFilter('maxPrice')(v)}
                        className={`text-[10px] transition-colors ${
                          filters.maxPrice === v
                            ? 'text-[#0f3d3e] font-medium'
                            : 'text-gray-300 hover:text-gray-500'
                        }`}
                      >
                        ${v}
                      </button>
                    ))}
                  </div>
                </div>
              </SidebarSection>

              {/* Reset */}
              {activeFilterCount > 0 && (
                <button
                  onClick={resetFilters}
                  className="w-full py-2 text-xs text-gray-400
                    hover:text-[#0f3d3e] transition-colors border-t
                    border-[#0f3d3e]/06 mt-2 pt-4"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </aside>
        )}

        {/* Results grid */}
        <div className="flex-1 min-w-0">
          {filtered.length > 0 ? (
            <div className={`grid gap-5 ${
              sidebarOpen
                ? 'sm:grid-cols-2 xl:grid-cols-3'
                : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            }`}>
              {filtered.map((p, idx) => (
                <PlaceCard key={idx} place={p} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center
              h-80 text-center">
              <div className="w-14 h-14 rounded-full bg-[#f8faf9] flex
                items-center justify-center mb-4">
                <Globe size={22} className="text-[#0f3d3e]/30" />
              </div>
              <p className="text-sm font-medium text-[#0f3d3e] mb-1">
                No places found
              </p>
              <p className="text-xs text-gray-400 font-light mb-5">
                Try adjusting your filters
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-full bg-[#0f3d3e] text-[#e8f0ed]
                  text-xs font-medium hover:bg-[#1a5c5e] transition-colors"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default PlacesPage