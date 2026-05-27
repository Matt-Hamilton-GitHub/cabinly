// hooks/useUserProfile.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useUserContext } from '@/app/contexts/UserContext'
import { UserType } from '@/app/lib/types'

const fetchUserProfile = async (userId: string): Promise<UserType> => {
  const res = await fetch(`/api/account/${userId}`)
  if (!res.ok) throw new Error('Failed to fetch profile')
  const data = await res.json()
  return data.user
}

export const useUserProfile = () => {
  const { authUser } = useUserContext()

  return useQuery({
    queryKey: ['user', authUser?.userId],
    queryFn:  () => fetchUserProfile(authUser!.userId),
    enabled:  !!authUser?.userId,   // only fetch if logged in
    staleTime: 1000 * 60 * 5,      // cache for 5 minutes
  })
}

// use this after any mutation that changes user data
export const useInvalidateProfile = () => {
  const queryClient = useQueryClient()
  const { authUser } = useUserContext()

  return () => queryClient.invalidateQueries({
    queryKey: ['user', authUser?.userId]
  })
}