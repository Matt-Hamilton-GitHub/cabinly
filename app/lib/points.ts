import { TierType } from '@/app/lib/types'

export const getTier = (points: number): TierType => {
  if (points >= 10000) return 'Summit'
  if (points >= 5000)  return 'Pioneer'
  if (points >= 1000)  return 'Adventurer'
  return 'Explorer'
}

export const getNextTier = (tier: TierType): TierType | null => {
  const progression: Record<TierType, TierType | null> = {
    Explorer:   'Adventurer',
    Adventurer: 'Pioneer',
    Pioneer:    'Summit',
    Summit:     null,
  }
  return progression[tier]
}

export const pointsToNextTier = (points: number): number => {
  if (points < 1000)  return 1000  - points
  if (points < 5000)  return 5000  - points
  if (points < 10000) return 10000 - points
  return 0
}

export const tierProgressPercent = (points: number): number => {
  if (points >= 10000) return 100
  if (points >= 5000)  return Math.round(((points - 5000)  / 5000)  * 100)
  if (points >= 1000)  return Math.round(((points - 1000)  / 4000)  * 100)
  return Math.round((points / 1000) * 100)
}

export const POINTS_CONFIG = {
  SIGN_UP:            500,
  BOOKING:            100,
  CABIN_PER_NIGHT:     50,
  ACTIVITY_SIGNUP:     75,
  ACTIVITY_COMPLETE:  150,
  REVIEW:              50,
  REFERRAL:           300,
  FIRST_OF_SEASON:    200,
  THREE_ACTIVITIES:   250,
}

export const TIER_COLORS = {
  Explorer:   { bg: 'bg-[#e1f5ee]', text: 'text-[#085041]', bar: 'bg-[#085041]' },
  Adventurer: { bg: 'bg-[#faeeda]', text: 'text-[#633806]', bar: 'bg-[#633806]' },
  Pioneer:    { bg: 'bg-[#e8e1fa]', text: 'text-[#3d0663]', bar: 'bg-[#3d0663]' },
  Summit:     { bg: 'bg-[#a8d5d0]', text: 'text-[#0f3d3e]', bar: 'bg-[#0f3d3e]' },
}

export const TIER_THRESHOLDS = {
  Explorer:   { min: 0,     max: 1000  },
  Adventurer: { min: 1000,  max: 5000  },
  Pioneer:    { min: 5000,  max: 10000 },
  Summit:     { min: 10000, max: 10000 },
}

export const NEXT_TIER = {
  Explorer:   'Adventurer',
  Adventurer: 'Pioneer',
  Pioneer:    'Summit',
  Summit:     null,
}

export const POINTS_INFO = [
  { action: 'Complete a booking',       pts: 100  },
  { action: 'Reserve a cabin per night',pts: 50   },
  { action: 'Sign up for an activity',  pts: 75   },
  { action: 'Complete an activity',     pts: 150  },
  { action: 'Leave a review',           pts: 50   },
  { action: 'Refer a friend',           pts: 300  },
]