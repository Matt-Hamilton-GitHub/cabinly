// hooks/useActivities.ts
import { useQuery } from '@tanstack/react-query'
import { ActivityType } from '@/app/lib/types'

const fetchActivities = async (): Promise<ActivityType[]> => {
  const res = await fetch('/api/activities/all')
  if (!res.ok) throw new Error('Failed to fetch activities')
  const data = await res.json()
  return data.data
}

export const useActivities = () => {
  return useQuery<ActivityType[]>({
    queryKey: ['activities', 'all'],
    queryFn: fetchActivities,
    staleTime: 1000 * 60 * 100,  // activities don't change often — 10 min cache
  })
}