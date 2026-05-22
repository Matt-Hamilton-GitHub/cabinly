export type TierType = 'Explorer' | 'Adventurer' | 'Pioneer' | 'Summit'

export type MedalType = {
  id: string
  name: string
  emoji: string
  description: string
  earnedAt?: string    // undefined = locked
}

export type UserType = {
  userId: string
  name: string
  email: string
  avatarUrl?: string
  joinedAt: string
  points: number
  tier: TierType
  medals: MedalType[]
  completedActivities: string[]   // activity IDs
  completedTrips: string[]        // place IDs
  savedPlaces: string[]           // wishlist
  bookings: BookingType[]
}

export type BookingType = {
  _id: string
  placeRef: string
  cabinRef: string
  activities: string[]
  from: string
  to: string
  guests: number
  totalPaid: number
  pointsEarned: number
  status: 'upcoming' | 'completed' | 'cancelled'
}

export type AuthContextType = {
  user: UserType | null
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>
  isValidating: boolean
  refreshUser: () => Promise<void>
}