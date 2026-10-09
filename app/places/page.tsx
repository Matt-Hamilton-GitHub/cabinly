'use client'

import { useEffect, useMemo, useState } from 'react'
import SpinnerBoxJump from '../_components/SpinnerBoxJump'
import PlaceCard from '../_components/PlaceCard'
import { TPlace } from '../lib/types'
import {
  Mountain, Waves, Trees, Sun, Snowflake,
  Leaf, Globe, Footprints, Bike, Fish, Building,
  Camera, Zap, SlidersHorizontal, X, Sparkles, RotateCcw, MapPin,
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
  { label: 'All',         icon: <Zap size={13} /> },
  { label: 'Hiking',      icon: <Footprints size={13} /> },
  { label: 'Skiing',      icon: <Mountain size={13} /> },
  { label: 'Kayaking',    icon: <Waves size={13} /> },
  { label: 'Cycling',     icon: <Bike size={13} /> },
  { label: 'Wildlife',    icon: <Fish size={13} /> },
  { label: 'Cultural',    icon: <Building size={13} /> },
  { label: 'Climbing',    icon: <Mountain size={13} /> },
  { label: 'Photography', icon: <Camera size={13} /> },
]

const SORTS = [
  'Most popular',
  'Price: low–high',
  'Price: high–low',
  'Most activities',
] as const

const MIN_PRICE = 0
const MAX_PRICE = 1000

const GLOBAL_CSS = `
@keyframes plFadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes plShimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
@keyframes plTwinkle {
  0%, 100% { opacity: .25; transform: scale(.7) rotate(0deg); }
  50%      { opacity: 1;   transform: scale(1.1) rotate(25deg); }
}
@keyframes plSweep {
  0%   { transform: translateX(-120%) skewX(-20deg); }
  100% { transform: translateX(260%)  skewX(-20deg); }
}
.pl-fade { animation: plFadeUp .55s cubic-bezier(.2,.7,.2,1) both; }
.pl-shimmer-text {
  background: linear-gradient(90deg, #b8975a 0%, #fff4d6 50%, #b8975a 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text; background-clip: text;
  color: transparent;
  animation: plShimmer 6s linear infinite;
}
.pl-twinkle { animation: plTwinkle 2.8s ease-in-out infinite; }
.pl-pill-active { position: relative; overflow: hidden; }
.pl-pill-active::after {
  content: '';
  position: absolute; top: 0; bottom: 0; left: 0; width: 40%;
  background: linear-gradient(90deg, transparent, rgba(236,220,176,.28), transparent);
  animation: plSweep 3.2s ease-in-out infinite;
  pointer-events: none;
}
.pl-range { -webkit-appearance: none; appearance: none; height: 6px;
  border-radius: 999px; outline: none; cursor: pointer; }
.pl-range::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none;
  width: 22px; height: 22px; border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff4d6, #c9a96e 70%);
  border: 2px solid #0f3d3e;
  box-shadow: 0 0 0 4px rgba(201,169,110,.25), 0 6px 14px -4px rgba(15,61,62,.5);
  transition: box-shadow .2s;
}
.pl-range::-webkit-slider-thumb:hover { box-shadow: 0 0 0 7px rgba(201,169,110,.3), 0 6px 14px -4px rgba(15,61,62,.5); }
.pl-range::-moz-range-thumb {
  width: 20px; height: 20px; border-radius: 999px;
  background: radial-gradient(circle at 35% 30%, #fff4d6, #c9a96e 70%);
  border: 2px solid #0f3d3e;
  box-shadow: 0 0 0 4px rgba(201,169,110,.25);
}
`

// ─── Sub-components ───────────────────────────────────────────────

const SidebarSection = ({
  label, children,
}: { label: string; children: React.ReactNode }) => (
  <div className="py-6 first:pt-0 border-b border-[#0f3d3e]/[0.06] last:border-0">
    <p className="text-[10px] font-medium tracking-[0.3em] uppercase mb-4
      flex items-center gap-3 text-[#b8975a]">
      <Sparkles size={10} className="pl-twinkle" />
      {label}
      <span className="h-px flex-1 bg-gradient-to-r from-[#c9a96e]/40 to-transparent" />
    </p>
    {children}
  </div>
)

const SidebarPill = ({
  icon, label, count, active, onClick,
}: {
  icon?: React.ReactNode; label: string; count?: number
  active: boolean; onClick: () => void
}) => (
  <button
    onClick={onClick}
    className={`group w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl
      text-sm transition-all duration-300 text-left ${
        active
          ? 'pl-pill-active bg-gradient-to-r from-[#0a2c2d] to-[#17575a] text-[#f4efe2] shadow-[0_10px_24px_-10px_rgba(15,61,62,0.7)]'
          : 'text-[#0f3d3e]/65 hover:bg-[#c9a96e]/10 hover:text-[#0f3d3e] hover:translate-x-0.5'
      }`}
  >
    {icon && (
      <span className={`transition-colors ${
        active ? 'text-[#c9a96e]' : 'text-[#0f3d3e]/35 group-hover:text-[#b8975a]'}`}>
        {icon}
      </span>
    )}
    <span className="flex-1 font-light tracking-wide">{label}</span>
    {count !== undefined && (
      <span className={`text-[10px] px-2 py-0.5 rounded-full tabular-nums ${
        active
          ? 'bg-[#c9a96e]/25 text-[#ecdcb0]'
          : 'bg-[#0f3d3e]/[0.05] text-[#0f3d3e]/40'
      }`}>
        {count}
      </span>
    )}
  </button>
)

const Chip = ({
  icon, label, active, onClick,
}: { icon?: React.ReactNode; label: string; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs
      border transition-all duration-300 ${
        active
          ? 'pl-pill-active bg-[#0f3d3e] text-[#f4efe2] border-[#c9a96e] shadow-[0_8px_20px_-8px_rgba(201,169,110,0.8)]'
          : 'bg-white text-[#0f3d3e]/65 border-[#0f3d3e]/12 hover:border-[#c9a96e] hover:text-[#0f3d3e] hover:-translate-y-0.5'
      }`}
  >
    {icon && <span className={active ? 'text-[#c9a96e]' : 'text-[#0f3d3e]/40'}>{icon}</span>}
    {label}
  </button>
)

const ActiveFilterBadge = ({
  label, onRemove,
}: { label: string; onRemove: () => void }) => (
  <span className="flex items-center gap-1.5 text-xs pl-3 pr-2 py-1.5
    bg-gradient-to-r from-[#0a2c2d] to-[#17575a] text-[#f4efe2] rounded-full
    border border-[#c9a96e]/50 shadow-[0_6px_16px_-8px_rgba(15,61,62,0.8)]">
    {label}
    <button onClick={onRemove}
      className="w-4 h-4 rounded-full flex items-center justify-center
        hover:bg-[#c9a96e] hover:text-[#0a2c2d] transition-colors">
      <X size={10} />
    </button>
  </span>
)

// ─── Main Page ────────────────────────────────────────────────────

const PlacesPage = () => {
  const [places, setPlaces]           = useState<TPlace[]>([])
  const [isLoading, setIsLoading]     = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sort, setSort]               = useState<(typeof SORTS)[number]>('Most popular')

  const [filters, setFilters] = useState({
    type:     'All',
    season:   'All year',
    activity: 'All',
    country:  'All',
    maxPrice: MAX_PRICE,
  })

  const COUNTRIES = useMemo(
    () => ['All', ...Array.from(new Set(places.map((p) => p.country).filter(Boolean)))],
    [places]
  )

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

  const filtered = useMemo(() => {
    const list = places.filter((p) => {
      if (filters.type     !== 'All'      && p.type    !== filters.type)    return false
      if (filters.country  !== 'All'      && p.country !== filters.country) return false
      if (filters.season   !== 'All year' && !p.seasons?.includes(filters.season as any)) return false
      if (filters.activity !== 'All'      && !p.activities?.some((a: any) => (a.label ?? a.name) === filters.activity)) return false
      if (p.price > filters.maxPrice) return false
      return true
    })
    const sorted = [...list]
    if (sort === 'Price: low–high')  sorted.sort((a, b) => a.price - b.price)
    if (sort === 'Price: high–low')  sorted.sort((a, b) => b.price - a.price)
    if (sort === 'Most activities')  sorted.sort((a, b) => (b.activities?.length ?? 0) - (a.activities?.length ?? 0))
    return sorted
  }, [places, filters, sort])

  const countFor = (key: keyof TPlace, val: string) =>
    val === 'All' || val === 'All year'
      ? places.length
      : places.filter((p: any) => {
          if (key === 'seasons')    return p.seasons?.includes(val)
          if (key === 'activities') return p.activities?.some((a: any) => (a.label ?? a.name) === val)
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
    <div className="flex h-screen items-center justify-center bg-[#fbfaf6]">
      <SpinnerBoxJump />
    </div>
  )

  const pricePct = ((filters.maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100

  return (
    <div className="min-h-screen bg-[#fbfaf6]">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      {/* ── Hero header ── */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#071f20]
        via-[#0a2c2d] to-[#0f3d3e] px-6 pt-20 pb-28">
        <div className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full
          bg-[#c9a96e]/10 blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full
          bg-[#a8d5d0]/10 blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 pointer-events-none">
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full h-40">
            <path d="M0 200 L0 140 L180 60 L330 130 L520 30 L720 140 L900 70 L1100 150 L1280 50 L1440 120 L1440 200 Z"
              fill="#e8f0ed" opacity="0.05" />
            <path d="M0 200 L0 170 L220 100 L400 160 L600 80 L820 170 L1020 100 L1240 165 L1440 110 L1440 200 Z"
              fill="#e8f0ed" opacity="0.07" />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r
          from-transparent via-[#c9a96e]/50 to-transparent" />

        <div className="max-w-[90rem] mx-auto relative pl-fade">
          <p className="text-[10px] font-medium tracking-[0.4em] uppercase
            text-[#c9a96e] mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c9a96e]/60" />
            Explore the world
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h1 className="font-serif text-5xl sm:text-6xl text-[#f4efe2] tracking-tight">
              All Places
            </h1>
            <div className="text-right">
              <p className="font-serif text-5xl pl-shimmer-text leading-none">
                {filtered.length}
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#f4efe2]/45 mt-2">
                {filtered.length === 1 ? 'destination' : 'destinations'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[90rem] mx-auto px-6 pb-28 -mt-8 relative z-10">

        {/* ── Toolbar ── */}
        <div className="bg-white rounded-3xl border border-[#0f3d3e]/[0.07] px-6 py-4
          mb-10 flex items-center justify-between gap-4 flex-wrap
          shadow-[0_1px_2px_rgba(15,61,62,0.04),0_20px_50px_-24px_rgba(15,61,62,0.25)]">

          <div className="flex items-center gap-2 flex-wrap min-h-[32px]">
            {activeFilterCount === 0 && (
              <span className="text-xs text-[#0f3d3e]/40 font-light">
                Refine your search with the filters
              </span>
            )}
            {filters.type     !== 'All'      && <ActiveFilterBadge label={filters.type}     onRemove={() => setFilter('type')('All')} />}
            {filters.country  !== 'All'      && <ActiveFilterBadge label={filters.country}  onRemove={() => setFilter('country')('All')} />}
            {filters.season   !== 'All year' && <ActiveFilterBadge label={filters.season}   onRemove={() => setFilter('season')('All year')} />}
            {filters.activity !== 'All'      && <ActiveFilterBadge label={filters.activity} onRemove={() => setFilter('activity')('All')} />}
            {filters.maxPrice !== MAX_PRICE  && <ActiveFilterBadge label={`Under $${filters.maxPrice}`} onRemove={() => setFilter('maxPrice')(MAX_PRICE)} />}
            {activeFilterCount > 0 && (
              <button onClick={resetFilters}
                className="text-xs text-[#0f3d3e]/45 hover:text-[#b8975a]
                  transition-colors ml-1">
                Clear all
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
              className="text-xs px-4 py-2.5 border border-[#0f3d3e]/15 rounded-full
                text-[#0f3d3e] bg-white outline-none hover:border-[#c9a96e]
                focus:border-[#c9a96e] focus:shadow-[0_0_0_4px_rgba(201,169,110,0.15)]
                transition-all cursor-pointer"
            >
              {SORTS.map((s) => <option key={s}>{s}</option>)}
            </select>

            <button
              onClick={() => setSidebarOpen((o) => !o)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full border
                text-xs font-medium tracking-wide transition-all duration-300 ${
                  sidebarOpen
                    ? 'bg-[#0f3d3e] text-[#f4efe2] border-[#c9a96e] shadow-[0_8px_20px_-8px_rgba(15,61,62,0.7)]'
                    : 'border-[#0f3d3e]/15 text-[#0f3d3e] hover:border-[#c9a96e]'
                }`}
            >
              <SlidersHorizontal size={14} className={sidebarOpen ? 'text-[#c9a96e]' : ''} />
              Filters
              {activeFilterCount > 0 && (
                <span className={`text-[10px] w-5 h-5 rounded-full flex items-center
                  justify-center font-semibold ${
                    sidebarOpen ? 'bg-[#c9a96e] text-[#0a2c2d]' : 'bg-[#0f3d3e] text-[#f4efe2]'
                  }`}>
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── Body — sidebar + grid ── */}
        <div className="flex gap-10 items-start">

          {sidebarOpen && (
            <aside className="w-72 flex-shrink-0 sticky top-24 pl-fade
              max-h-[calc(100vh-7rem)] overflow-y-auto rounded-[1.75rem]">
              <div className="relative bg-white border border-[#0f3d3e]/[0.07]
                rounded-[1.75rem] p-7 overflow-hidden
                shadow-[0_1px_2px_rgba(15,61,62,0.04),0_30px_60px_-30px_rgba(15,61,62,0.3)]">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
                  from-transparent via-[#c9a96e] to-transparent" />
                <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full
                  bg-[#c9a96e]/10 blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-serif text-xl text-[#0f3d3e]">Refine</p>
                    {activeFilterCount > 0 && (
                      <button onClick={resetFilters}
                        className="flex items-center gap-1.5 text-[11px] text-[#b8975a]
                          hover:text-[#0f3d3e] transition-colors">
                        <RotateCcw size={11} /> Reset
                      </button>
                    )}
                  </div>

                  <SidebarSection label="Type">
                    <div className="space-y-1">
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
                    </div>
                  </SidebarSection>

                  <SidebarSection label="Country">
                    <div className="flex flex-wrap gap-2">
                      {COUNTRIES.map((c) => (
                        <Chip
                          key={c}
                          icon={c === 'All' ? <Globe size={12} /> : <MapPin size={12} />}
                          label={c}
                          active={filters.country === c}
                          onClick={() => setFilter('country')(c)}
                        />
                      ))}
                    </div>
                  </SidebarSection>

                  <SidebarSection label="Season">
                    <div className="space-y-1">
                      {SEASONS.map(({ label, emoji }) => (
                        <SidebarPill
                          key={label}
                          icon={<span className="text-base leading-none">{emoji}</span>}
                          label={label}
                          count={countFor('seasons', label)}
                          active={filters.season === label}
                          onClick={() => setFilter('season')(label)}
                        />
                      ))}
                    </div>
                  </SidebarSection>

                  <SidebarSection label="Activities">
                    <div className="flex flex-wrap gap-2">
                      {ACTIVITIES.map(({ label, icon }) => (
                        <Chip
                          key={label}
                          icon={icon}
                          label={label}
                          active={filters.activity === label}
                          onClick={() => setFilter('activity')(label)}
                        />
                      ))}
                    </div>
                  </SidebarSection>

                  <SidebarSection label="Max price / person">
                    <div className="px-1">
                      <div className="text-center mb-5">
                        <p className="font-serif text-4xl pl-shimmer-text">
                          {filters.maxPrice === MAX_PRICE ? 'Any' : `$${filters.maxPrice}`}
                        </p>
                      </div>
                      <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={50}
                        value={filters.maxPrice}
                        onChange={(e) => setFilter('maxPrice')(Number(e.target.value))}
                        className="pl-range w-full"
                        style={{
                          background: `linear-gradient(90deg, #c9a96e 0%, #0f3d3e ${pricePct}%, rgba(15,61,62,0.12) ${pricePct}%)`,
                        }}
                      />
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-[11px] text-[#0f3d3e]/35">${MIN_PRICE}</span>
                        <span className="text-[11px] text-[#0f3d3e]/35">${MAX_PRICE}+</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {[200, 400, 600, 800].map((v) => (
                          <button
                            key={v}
                            onClick={() => setFilter('maxPrice')(v)}
                            className={`flex-1 text-[11px] py-1.5 rounded-full border
                              transition-all ${
                                filters.maxPrice === v
                                  ? 'bg-[#0f3d3e] text-[#c9a96e] border-[#c9a96e]'
                                  : 'border-[#0f3d3e]/12 text-[#0f3d3e]/45 hover:border-[#c9a96e] hover:text-[#0f3d3e]'
                              }`}
                          >
                            ${v}
                          </button>
                        ))}
                      </div>
                    </div>
                  </SidebarSection>
                </div>
              </div>
            </aside>
          )}

          {/* Results */}
          <div className="flex-1 min-w-0">
            {filtered.length > 0 ? (
              <div className="flex gap-6 flex-row items-stretch justify-center
                flex-wrap pl-fade">
                {filtered.map((p, idx) => (
                  <PlaceCard key={(p as any)._id ?? idx} place={p} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-[2rem] border border-[#0f3d3e]/[0.07]
                flex flex-col items-center justify-center py-24 px-6 text-center
                shadow-[0_20px_50px_-24px_rgba(15,61,62,0.18)] pl-fade">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br
                  from-[#f4efe2] to-[#e1f5ee] flex items-center justify-center
                  mb-8 border border-[#c9a96e]/30">
                  <Globe size={32} className="text-[#0f3d3e]/45" />
                </div>
                <p className="font-serif text-3xl text-[#0f3d3e] mb-3">
                  No places found
                </p>
                <p className="text-sm text-[#0f3d3e]/45 font-light mb-8 max-w-xs
                  leading-relaxed">
                  Nothing matches this combination. Try loosening a filter or two.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-8 py-3.5 rounded-full bg-[#0f3d3e] text-[#f4efe2]
                    text-sm font-medium tracking-wide hover:bg-[#1a5c5e]
                    transition-colors shadow-lg"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PlacesPage