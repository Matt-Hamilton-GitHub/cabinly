// FETCH STORE AND CACHE USER BOKKINGS

import { useQuery } from "@tanstack/react-query";
import { useUserContext } from "../contexts/UserContext";
import { BookingType } from "../lib/types";

const fetchBookings = async (userId: string) : Promise<BookingType[]> => {
    const res = await fetch(`/api/bookings/user/${userId}`);
    if (!res.ok) throw new Error("Failed to fetch bookings");
    const data = await res.json();
    console.log('booking fethced', data)
    return data.data;
  };

export const useUserBookings = () => {
  const { authUser } = useUserContext();

  return useQuery<BookingType[]>({
    queryKey: ["bookings", authUser?.userId],
    queryFn: () => fetchBookings(authUser!.userId),
    enabled: !!authUser?.userId,
    staleTime: 1000 * 60 * 2,
  });
};
