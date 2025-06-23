
'use client'
import { useUserContext } from "../contexts/UserContext"
import { useReservation } from "../contexts/ReservationContext";
import { UserRound } from 'lucide-react';
import { Flame } from 'lucide-react';
import { BookMarked } from 'lucide-react';
import { Handshake } from 'lucide-react';


export default function Profile() {

    const { user, userGroups } = useUserContext()
    const {reservations} = useReservation()
   
  return (
    <div className="w-full h-full flex justify-start flex-col items-start p-10">
      
      <div className="w-full flex justify-center items-center flex-row py-15 gap-10 flex-wrap">
        <UserRound size={50}/>
        <div>
        <div className="flex w-full bg-gray-200 p-2">Name: <span className="font-bold px-4">{user?.name}</span></div>
         <div className="flex w-full bg-gray-200 p-2">Email: <span className="font-bold px-4">{user?.email}</span></div>
        </div>
      </div>

    <div className="flex flex-wrap justify-center items-center flex-row gap-5 w-full border-y-1 border-gray-300 py-5">
      
      <div className="bg-black text-white flex flex-row gap-2 justify-center items-center p-2 rounded-2xl">
        <Flame color="red"/>
        <span className="">Points Earned on Trevel: 0</span>
      </div>

      <div className="bg-black text-white flex flex-row gap-2 justify-center items-center p-2 rounded-2xl">
        <BookMarked  color="green"/>
        <span className="">Reservations Made: {reservations.length}</span>
      </div>
      <div className="bg-black text-white flex flex-row gap-2 justify-center items-center p-2 rounded-2xl">
        <Handshake  color="orange"/>
        <span className="">Groups Joined: {userGroups.length}</span>
      </div>
    </div>
    </div>
  );
}
