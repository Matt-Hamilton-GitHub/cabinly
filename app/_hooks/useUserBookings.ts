// FETCH STORE AND CACHE USER BOKKINGS

import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../contexts/UserContext";

export const useUserBookings = () => {
  const { authUser } = useUserContext();

  const fetchBookings = async (userId: string) => {
    const res = await fetch(`/api/bookings/user/${userId}`);
    if (!res.ok) throw new Error("Filed to fetch bookings");
    const data = await res.json();
    return data.data;
  };

  return useQuery({
    queryKey: ["bookings", authUser?.userId],
    queryFn: () => fetchBookings(authUser!.userId),
    enabled: !!authUser?.userId,
    staleTime: 1000 * 60 * 2,
  });
};
