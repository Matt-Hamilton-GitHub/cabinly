import { StaticImageData } from "next/image"

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

export type SeasonsType = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'All year'

export type PlaceTagType =
  | 'Mountain'
  | 'Coastal'
  | 'Forest'
  | 'Desert'
  | 'Arctic'
  | 'Tropical'

export const ACTIVITY_VARIATIONS = ['Hiking',
  'Skiing',
  'Kayaking', 
  'Cycling', 
  'Wildlife',
  'Cultural',
  'Climbing',
  'Photography' ] as const

export type ActivityVariations = typeof ACTIVITY_VARIATIONS[number]

export type ActivityPlaceRef = {
  _id: string
  title: string
  country: string
  flag: string
  images_url: string[]
  type: string
}

export type ActivityType = {
  _id: string
  name: string
  description: string
  price: number
  duration: string
  difficulty: 'All levels' | 'Beginner' | 'Intermediate' | 'Advanced'
  label: ActivityVariations
  maxPeople: number
  spotsLeft: number
  gearIncluded: boolean
  placesRef: ActivityPlaceRef
}

export type GuideType = {
  _id: string
  name: string
  initials: string
  role: string
  bio: string
  yrsExp: number
  rating: number
  reviewCount: number
  tags: string[]
  imgUrl: string,
  xpPoints: number
}


export type ReviewType = {
  _id: string
  authorName: string
  authorInitials: string
  rating: number
  date: string
  body: string
}

export type AvailableDateType = {
  label: string
  from: string
  to: string
}

export type CabinType = {
  _id: string
  name: string
  description: string
  coordinates: number[]
  discount: number
  rating: number
  pricePerNight: number
  maxGuests: number
  amenities: string[]
  spotsLeft: number
  imageUrl: string
  tags: string[]
}

export type TPlace = {
  _id: string
  slug: string
  title: string
  type: string
  region: string
  country: string
  continent: string
  flag: string
  description: string
  images_url: string
  tags: PlaceTagType[]
  seasons: SeasonsType[]
  badge?: 'Popular' | 'New' | 'Trending'
  rating: number
  price: number
  reviewCount: number
  travellers: number
  cabinsRef: CabinType[]
  activities: ActivityType[]
  guides: GuideType[]
  reviews: ReviewType[]
  availableDates: AvailableDateType[]
  coordinates: {
    lat: number
    lng: number
  }
}

export type BookingStatusType = 'pending' | 'upcoming' | 'completed' | 'cancelled'
export type BookingType = {
  _id: string
  placeRef: string
  cabinRef: string
  activities: string[]
  from: string
  to: string
  guests: number
  totalPaid: Date
  pointsEarned: Date
  status: BookingStatusType
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

export type TabType = 'overview' | 'trips' | 'medals' | 'rewards' | 'settings'


export type TTop3 = {
    id: number,
    title: string,
    stat_img: StaticImageData,
    tag: string,
    desc: string,
    rating: string
    srtPrice: number,
    dest_ref_url: string
}
