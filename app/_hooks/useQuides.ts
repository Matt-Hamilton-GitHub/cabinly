import { useQuery } from '@tanstack/react-query'
import { GuideType } from '@/app/lib/types'

const fetchGuides = async (): Promise<GuideType[]> => {
  const res = await fetch('/api/guides')
  if (!res.ok) throw new Error('Failed to fetch guides')
  const data = await res.json()
  return data.data
}

export const useGuides = () => {
  return useQuery<GuideType[]>({
    queryKey: ['guides'],
    queryFn: fetchGuides,
    staleTime: 1000 * 60 * 100,
  })
}