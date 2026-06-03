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