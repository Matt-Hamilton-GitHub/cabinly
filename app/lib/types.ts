export type TierType = 'Explorer' | 'Adventurer' | 'Pioneer' | 'Summit'


export type UserType = {
  userId: string
  name: string
  email: string
  avatarUrl?: string
  joinedAt: string
  points: number
  tier: TierType
  medals: string[]
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
  authUser: AuthUser | null
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
  isValidating: boolean
}

export type AuthUser = {
  userId: string
  name: string
  email: string
}