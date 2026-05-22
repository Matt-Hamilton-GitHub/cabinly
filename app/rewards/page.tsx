import Link from 'next/link'
import {
  Zap, ArrowLeft, Star, Home, MapPin,
  CheckCircle2, Users, Gift, Trophy,
  ArrowRight, Info
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────

const EARN_WAYS = [
  {
    icon: <Home size={20} />,
    category: 'Booking',
    color: 'bg-[#e1f5ee] text-[#085041]',
    items: [
      { action: 'Complete a booking',          pts: 100,  note: 'Per trip booked'              },
      { action: 'Reserve a cabin',             pts: 50,   note: 'Per night'                    },
      { action: 'First booking of the season', pts: 200,  note: 'Bonus — once per season'      },
    ],
  },
  {
    icon: <MapPin size={20} />,
    category: 'Activities',
    color: 'bg-[#faeeda] text-[#633806]',
    items: [
      { action: 'Sign up for an activity',     pts: 75,   note: 'Per activity'                 },
      { action: 'Complete an activity',        pts: 150,  note: 'Per activity completed'       },
      { action: 'Book 3+ activities in a trip',pts: 250,  note: 'Bonus per trip'               },
    ],
  },
  {
    icon: <Star size={20} />,
    category: 'Community',
    color: 'bg-[#e8e1fa] text-[#3d0663]',
    items: [
      { action: 'Leave a review',              pts: 50,   note: 'Per verified review'          },
      { action: 'Refer a friend',              pts: 300,  note: 'When they complete a booking' },
      { action: 'Sign up',                     pts: 500,  note: 'One-time welcome bonus'       },
    ],
  },
]

const SPEND_WAYS = [
  {
    emoji: '🎽',
    title: 'Equipment rental discount',
    desc: 'Get 10% off any gear or equipment rental at your destination.',
    cost: 500,
    category: 'Gear',
  },
  {
    emoji: '⛷️',
    title: 'Free activity upgrade',
    desc: 'Upgrade any standard activity to a premium private guided experience.',
    cost: 1000,
    category: 'Activities',
  },
  {
    emoji: '🗓️',
    title: 'Priority guide booking',
    desc: 'Skip the queue and get first access to the most in-demand local guides.',
    cost: 750,
    category: 'Activities',
  },
  {
    emoji: '🌟',
    title: 'Exclusive event access',
    desc: 'Gain entry to secret seasonal events not available to the public.',
    cost: 2000,
    category: 'Experiences',
  },
  {
    emoji: '🏕️',
    title: 'Free cabin night',
    desc: 'Redeem one complimentary night at any cabin of your choice.',
    cost: 5000,
    category: 'Cabins',
  },
  {
    emoji: '👑',
    title: 'VIP summit experience',
    desc: 'A fully private guided alpine expedition with premium accommodation included.',
    cost: 8000,
    category: 'Experiences',
  },
]

const TIERS = [
  {
    name: 'Explorer',
    range: '0 – 999 pts',
    color: 'bg-[#e1f5ee] text-[#085041]',
    bar: 'bg-[#085041]',
    width: 'w-[10%]',
    perks: ['Access to all standard bookings', 'Earn points on every trip'],
  },
  {
    name: 'Adventurer',
    range: '1,000 – 4,999 pts',
    color: 'bg-[#faeeda] text-[#633806]',
    bar: 'bg-[#633806]',
    width: 'w-[40%]',
    perks: ['5% discount on all activities', 'Early access to new destinations'],
  },
  {
    name: 'Pioneer',
    range: '5,000 – 9,999 pts',
    color: 'bg-[#e8e1fa] text-[#3d0663]',
    bar: 'bg-[#3d0663]',
    width: 'w-[70%]',
    perks: ['Priority booking windows', 'Free gear day pass per trip', 'Pioneer badge on profile'],
  },
  {
    name: 'Summit',
    range: '10,000+ pts',
    color: 'bg-[#a8d5d0] text-[#0f3d3e]',
    bar: 'bg-[#0f3d3e]',
    width: 'w-full',
    perks: ['Exclusive summit events', 'Personal guide assignment', 'Summit badge on profile', 'Free cabin night annually'],
  },
]

const FAQS = [
  {
    q: 'Do points expire?',
    a: 'No. Summit Points never expire as long as your account remains active. Accounts inactive for more than 24 months may have points reviewed.',
  },
  {
    q: 'Can I transfer points to another user?',
    a: 'Points are non-transferable and tied to your account. However, you can refer friends and both parties earn bonus points.',
  },
  {
    q: 'How quickly are points added after a booking?',
    a: 'Booking points are added instantly. Activity completion points are added within 24 hours of your trip end date.',
  },
  {
    q: 'What happens to my points if I cancel a booking?',
    a: 'Points earned from a booking are deducted if the booking is cancelled. Points from completed activities are never deducted.',
  },
  {
    q: 'Can I use points and pay the remaining balance?',
    a: 'Yes. The rewards store allows partial redemption — use points to cover part of the cost and pay the remainder normally.',
  },
]

// ─── Page ────────────────────────────────────────────────────────

export default function RewardsInfo() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-[#0f3d3e] px-6 pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px]
            opacity-[0.05]">
            <svg viewBox="0 0 100 100">
              <path d="M50 5 L10 90 L90 90 Z" fill="#e8f0ed" />
              <path d="M50 25 L25 90 L75 90 Z" fill="#e8f0ed" opacity=".4" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-10 w-64 h-64 opacity-[0.04]">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="#e8f0ed"
                strokeWidth="1" fill="none" />
            </svg>
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <Link href="/account"
            className="inline-flex items-center gap-2 text-[#e8f0ed]/50
            text-xs mb-10 hover:text-[#e8f0ed] transition-colors">
            <ArrowLeft size={13} />
            Back to account
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-[#a8d5d0]/20
              border border-[#a8d5d0]/30 flex items-center justify-center">
              <Zap size={24} className="text-[#a8d5d0]" />
            </div>
            <p className="text-[10px] font-medium tracking-[0.3em] uppercase
              text-[#a8d5d0]">
              Summit Points
            </p>
          </div>

          <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)]
            text-[#e8f0ed] leading-[1.1] mb-5">
            Earn points on every adventure
          </h1>
          <p className="text-[#e8f0ed]/55 font-light text-lg leading-relaxed
            max-w-xl">
            Summit Points are Cabinly's way of rewarding you for exploring
            the world. Earn them by booking, completing activities, and
            building community. Spend them on gear, upgrades, and experiences
            you won't find anywhere else.
          </p>
        </div>
      </div>

      {/* ── How to earn ── */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3">
            Collecting points
          </p>
          <h2 className="font-serif text-3xl text-[#0f3d3e] mb-3">
            Ways to earn
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
            Points are added automatically — no codes, no forms. Just book,
            explore, and watch your balance grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {EARN_WAYS.map((group) => (
            <div key={group.category}
              className="border border-[#0f3d3e]/08 rounded-2xl p-5
              hover:border-[#a8d5d0]/50 transition-colors">
              <div className={`w-10 h-10 rounded-xl flex items-center
                justify-center mb-4 ${group.color}`}>
                {group.icon}
              </div>
              <p className="text-sm font-medium text-[#0f3d3e] mb-4">
                {group.category}
              </p>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.action}
                    className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs text-[#0f3d3e] font-light leading-snug">
                        {item.action}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {item.note}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-xs font-medium
                      text-[#a8d5d0] bg-[#0f3d3e] px-2 py-0.5 rounded-full">
                      +{item.pts}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How to spend ── */}
      <div className="bg-[#f8faf9] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[10px] font-medium tracking-[0.25em] uppercase
              text-[#a8d5d0] mb-3">
              Spending points
            </p>
            <h2 className="font-serif text-3xl text-[#0f3d3e] mb-3">
              What you can unlock
            </h2>
            <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
              From gear discounts to VIP mountain experiences — your points
              open doors that aren't available to regular bookings.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPEND_WAYS.map((reward) => (
              <div key={reward.title}
                className="bg-white border border-[#0f3d3e]/08 rounded-2xl
                p-5 hover:border-[#a8d5d0]/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{reward.emoji}</span>
                  <span className="text-[10px] font-medium px-2 py-1
                    rounded-full bg-[#0f3d3e] text-[#a8d5d0]">
                    {reward.category}
                  </span>
                </div>
                <p className="text-sm font-medium text-[#0f3d3e] mb-2">
                  {reward.title}
                </p>
                <p className="text-xs text-gray-400 leading-relaxed font-light
                  mb-4">
                  {reward.desc}
                </p>
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-[#a8d5d0]" />
                  <span className="text-sm font-medium text-[#0f3d3e]">
                    {reward.cost.toLocaleString()} pts
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-[#e1f5ee]
              border border-[#0f3d3e]/08 rounded-xl px-4 py-3">
              <Info size={14} className="text-[#085041] flex-shrink-0" />
              <p className="text-xs text-[#085041] font-light">
                The full rewards store is coming soon. Points you earn now
                will carry over and be ready to spend at launch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tiers ── */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3">
            Membership tiers
          </p>
          <h2 className="font-serif text-3xl text-[#0f3d3e] mb-3">
            The more you explore, the more you unlock
          </h2>
          <p className="text-sm text-gray-400 font-light max-w-md mx-auto">
            Your tier is determined by your lifetime Summit Points balance
            and comes with permanent perks at every level.
          </p>
        </div>

        <div className="space-y-4">
          {TIERS.map((tier, i) => (
            <div key={tier.name}
              className="border border-[#0f3d3e]/08 rounded-2xl p-5
              hover:border-[#a8d5d0]/40 transition-colors">
              <div className="flex items-start gap-4 flex-wrap">

                {/* Tier number + name */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs text-[#0f3d3e]/20 font-medium
                    w-5 text-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-xs font-medium px-3 py-1.5
                    rounded-full ${tier.color}`}>
                    {tier.name}
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    {tier.range}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="flex-1 min-w-[120px]">
                  <div className="h-1.5 bg-[#0f3d3e]/06 rounded-full
                    overflow-hidden">
                    <div className={`h-full rounded-full ${tier.bar}
                      ${tier.width}`} />
                  </div>
                </div>

                {/* Perks */}
                <div className="flex flex-wrap gap-2 w-full mt-2 pl-8">
                  {tier.perks.map((perk) => (
                    <div key={perk}
                      className="flex items-center gap-1.5">
                      <CheckCircle2 size={12}
                        className="text-[#a8d5d0] flex-shrink-0" />
                      <span className="text-xs text-gray-500 font-light">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Medals callout ── */}
      <div className="bg-[#0f3d3e] py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full"
            preserveAspectRatio="none">
            <path d="M0 100 L50 50 L100 100 Z" fill="#e8f0ed" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[10px] font-medium tracking-[0.25em] uppercase
                text-[#a8d5d0] mb-3">
                Also worth knowing
              </p>
              <h2 className="font-serif text-2xl text-[#e8f0ed] mb-4">
                Medals are separate from points
              </h2>
              <p className="text-[#e8f0ed]/55 font-light text-sm
                leading-relaxed mb-6">
                Alongside points, you earn permanent medals for completing
                specific adventures — your first hike, your first ski day,
                visiting multiple continents. Medals can't be bought or lost.
                They're a record of everywhere you've been.
              </p>
              <Link href="/account?tab=medals"
                className="inline-flex items-center gap-2 text-sm
                text-[#a8d5d0] font-medium hover:text-[#e8f0ed]
                transition-colors group">
                View your medal shelf
                <ArrowRight size={14} className="group-hover:translate-x-0.5
                  transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {['🏔️','⛷️','🧗','📸','🍷','🌊','🔥','🌍','❄️','👑'].map((emoji, i) => (
                <div key={i}
                  className={`w-12 h-12 rounded-full flex items-center
                  justify-center text-xl border-2 ${
                    i < 4
                      ? 'bg-[#a8d5d0]/20 border-[#a8d5d0]/30'
                      : 'bg-[#e8f0ed]/05 border-dashed border-[#e8f0ed]/15'
                  }`}>
                  <span className={i >= 4 ? 'opacity-20 grayscale' : ''}>
                    {emoji}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[10px] font-medium tracking-[0.25em] uppercase
            text-[#a8d5d0] mb-3">
            Common questions
          </p>
          <h2 className="font-serif text-3xl text-[#0f3d3e]">
            FAQ
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q}
              className="border border-[#0f3d3e]/08 rounded-2xl p-5">
              <p className="text-sm font-medium text-[#0f3d3e] mb-2">
                {faq.q}
              </p>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-[#0f3d3e]/08 py-14 px-6 text-center">
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase
          text-[#a8d5d0] mb-3">
          Ready to start?
        </p>
        <h2 className="font-serif text-2xl text-[#0f3d3e] mb-4">
          Every trip earns. Every point counts.
        </h2>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/places"
            className="flex items-center gap-2 px-6 py-3 rounded-full
            bg-[#0f3d3e] text-[#e8f0ed] text-sm font-medium
            hover:bg-[#1a5c5e] transition-colors group">
            Browse destinations
            <ArrowRight size={14} className="group-hover:translate-x-0.5
              transition-transform" />
          </Link>
          <Link href="/account"
            className="px-6 py-3 rounded-full border border-[#0f3d3e]/15
            text-[#0f3d3e] text-sm hover:border-[#0f3d3e]/30 transition-colors">
            View my points
          </Link>
        </div>
      </div>

    </div>
  )
}