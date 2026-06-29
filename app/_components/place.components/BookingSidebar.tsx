"use client";

import { useEffect, useState } from "react";
import { Heart, ChevronDown, ChevronUp, Info } from "lucide-react";
import {
  TPlace,
  CabinType,
  ActivityType,
  AvailableDateType,
} from "@/app/lib/types";
import { getNights } from "@/app/_utils/utils";
import { useRouter } from 'next/navigation'
import { useUserContext } from "@/app/contexts/UserContext";
import { useInvalidateProfile } from "@/app/_hooks/useUserProfile";

// ─── Types ───────────────────────────────────────────────────────

interface BookingSidebarProps {
  place;
  selectedCabinId: string;
  signedActivityIds: string[];
  onCabinChange: (id: string) => void;
  onActivityChange: (ids: string[]) => void;
}

// ─── Sub-components ──────────────────────────────────────────────

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-medium text-[#0f3d3e] mb-3">{children}</p>
);

const Divider = () => <div className="border-t border-[#e8f0ed]/10 my-4" />;

const LineItem = ({
  label,
  value,
  bold,
  muted,
}: {
  label: string;
  value: string;
  bold?: boolean;
  muted?: boolean;
}) => (
  <div className="flex items-center justify-between">
    <span
      className={`text-sm ${muted ? "text-[#e8f0ed]/40" : "text-[#e8f0ed]/60"}`}
    >
      {label}
    </span>
    <span
      className={`text-sm font-medium ${
        bold ? "text-[#a8d5d0]" : "text-[#e8f0ed]"
      }`}
    >
      {value}
    </span>
  </div>
);

const GuestCounter = ({
  label,
  value,
  onDecrement,
  onIncrement,
  min = 0,
  max = 10,
}: {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min?: number;
  max?: number;
}) => (
  <div
    className="flex items-center justify-between border
    border-[#0f3d3e]/12 rounded-xl px-4 py-3"
  >
    <span className="text-sm text-[#0f3d3e]">{label}</span>
    <div className="flex items-center gap-3">
      <button
        onClick={onDecrement}
        disabled={value <= min}
        className="w-7 h-7 rounded-full border border-[#0f3d3e]/15
          flex items-center justify-center text-[#0f3d3e]
          disabled:opacity-30 hover:border-[#a8d5d0] transition-colors"
      >
        −
      </button>
      <span className="text-sm font-medium text-[#0f3d3e] w-4 text-center">
        {value}
      </span>
      <button
        onClick={onIncrement}
        disabled={value >= max}
        className="w-7 h-7 rounded-full border border-[#0f3d3e]/15
          flex items-center justify-center text-[#0f3d3e]
          disabled:opacity-30 hover:border-[#a8d5d0] transition-colors"
      >
        +
      </button>
    </div>
  </div>
);

// ─── Price Summary Card ───────────────────────────────────────────

interface PriceSummaryProps {
  selectedCabin: CabinType | undefined;
  signedActivities: ActivityType[];
  selectedDate: AvailableDateType;
  adults: number;
  children: number;
  wishlist: boolean;
  onWishlistToggle: () => void;
  breakdownOpen: boolean;
  onBreakdownToggle: () => void;
  onBook: () => void;
  bookingLoading: boolean;
  bookingError: {status: boolean; msg: string}

}

const PriceSummary = ({
  selectedCabin,
  signedActivities,
  selectedDate,
  adults,
  children: childCount,
  wishlist,
  onWishlistToggle,
  breakdownOpen,
  onBreakdownToggle,
  onBook,
  bookingLoading,
  bookingError,
}: PriceSummaryProps) => {
  const totalGuests = adults + childCount;

  const cabinSubtotal = selectedCabin
    ? selectedCabin.pricePerNight *
      getNights(selectedDate.from, selectedDate.to)
    : 0;

  const activitiesSubtotal = signedActivities.reduce(
    (sum, act) => sum + act.price * totalGuests,
    0,
  );

  const serviceFee = Math.round((cabinSubtotal + activitiesSubtotal) * 0.07);
  const total = cabinSubtotal + activitiesSubtotal + serviceFee;
  

  return (
    <div className="bg-[#0f3d3e] rounded-2xl p-6 space-y-4">
      {/* Price header */}
      <div>
        <p
          className="text-[10px] font-medium tracking-[0.2em] uppercase
          text-[#a8d5d0] mb-1"
        >
          Your trip
        </p>
        {selectedCabin ? (
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-medium text-[#e8f0ed]">
              ${selectedCabin.pricePerNight}
            </span>
            <span className="text-sm text-[#e8f0ed]/40 font-light">
              / night
            </span>
          </div>
        ) : (
          <p className="text-sm text-[#e8f0ed]/50">No cabin selected</p>
        )}
        {selectedCabin && (
          <p className="text-xs text-[#e8f0ed]/40 font-light mt-0.5">
            {selectedCabin.name} · {totalGuests} guest
            {totalGuests !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <Divider />

      {/* Breakdown toggle */}
      <button
        onClick={onBreakdownToggle}
        className="flex items-center justify-between w-full"
      >
        <span className="text-xs text-[#e8f0ed]/50 font-light">
          Price breakdown
        </span>
        {breakdownOpen ? (
          <ChevronUp size={14} className="text-[#e8f0ed]/40" />
        ) : (
          <ChevronDown size={14} className="text-[#e8f0ed]/40" />
        )}
      </button>

      {breakdownOpen && (
        <div className="space-y-2.5">
          {selectedCabin && (
            <LineItem
              label={`${selectedCabin.name} × ${getNights(selectedDate.to, selectedDate.from)} nights`}
              value={`$${cabinSubtotal}`}
            />
          )}
          {signedActivities.map((act) => (
            <LineItem
              key={act._id}
              label={`${act.name} × ${totalGuests}`}
              value={`$${act.price * totalGuests}`}
            />
          ))}
          <LineItem label="Service fee (7%)" value={`$${serviceFee}`} muted />
        </div>
      )}

      <Divider />

      <LineItem label="Total" value={`$${total.toLocaleString()}`} bold />

      <button
        onClick={onBook}
        disabled={bookingLoading}
        className="w-full py-3 rounded-full bg-[#a8d5d0] text-[#0f3d3e]
          text-sm font-medium hover:bg-[#bce0db] transition-colors
          disabled:opacity-60 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
         {bookingLoading ? (
          <>
            <div className="w-4 h-4 rounded-full border-2
              border-[#0f3d3e]/30 border-t-[#0f3d3e] animate-spin" />
            Booking...
          </>
        ) : (
          'Book this trip'
        )}
      </button>
       {bookingError.status && (
        <div className="flex items-center gap-2 bg-red-50 border
          border-red-100 rounded-xl px-4 py-3">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
          <p className="text-xs text-red-600">{bookingError.msg}</p>
        </div>
      )}

      <button
        onClick={onWishlistToggle}
        className="w-full py-2.5 rounded-full border border-[#e8f0ed]/15
          text-[#e8f0ed]/60 text-xs hover:border-[#e8f0ed]/30
          transition-colors flex items-center justify-center gap-2"
      >
        <Heart
          size={13}
          className={
            wishlist ? "fill-[#a8d5d0] text-[#a8d5d0]" : "text-[#e8f0ed]/60"
          }
        />
        {wishlist ? "Saved to wishlist" : "Save to wishlist"}
      </button>
    </div>
  );
};

// ─── Date Picker ─────────────────────────────────────────────────

const DatePicker = ({
  dates,
  selected,
  onSelect,
}: {
  dates: AvailableDateType[];
  selected: AvailableDateType;
  onSelect: (date: AvailableDateType) => void;
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  return (
    <div>
      <SectionTitle>Choose dates</SectionTitle>
      <div className="grid grid-cols-2 gap-2">
        {dates &&
          dates.map((date) => {
            const active = selected.label === date.label;
            return (
              <button
                key={date.label}
                onClick={() => onSelect(date)}
                className={`text-xs py-2.5 px-3 rounded-xl border text-center
              transition-all ${
                active
                  ? "bg-[#0f3d3e] text-[#e8f0ed] border-[#0f3d3e]"
                  : "bg-white text-[#0f3d3e] border-[#0f3d3e]/12 hover:border-[#a8d5d0]"
              }`}
              >
                <span className="block font-medium">{date.label}</span>
                <span className="block font-light">{`( ${formatDate(date.from)} – ${formatDate(date.to)} )`}</span>
                <span
                  className={`block mt-1 text-[10px] ${
                    active ? "text-[#e8f0ed]/50" : "text-gray-400"
                  }`}
                >
                  {getNights(date.to, date.from)} nights
                </span>
              </button>
            );
          })}
      </div>
    </div>
  );
};

// ─── Activity Quick Toggle ────────────────────────────────────────

const ActivityToggle = ({
  activities,
  signedIds,
  onToggle,
}: {
  activities: ActivityType[];
  signedIds: string[];
  onToggle: (id: string) => void;
}) => (
  <div>
    <SectionTitle>Activities</SectionTitle>
    <div className="space-y-2">
      {activities.map((act) => {
        const signed = signedIds.includes(act._id);
        return (
          <button
            key={act._id}
            onClick={() => onToggle(act._id)}
            className={`w-full flex items-center justify-between px-4 py-3
              rounded-xl border text-left transition-all ${
                signed
                  ? "bg-[#f8faf9] border-[#0f3d3e]"
                  : "bg-white border-[#0f3d3e]/10 hover:border-[#a8d5d0]"
              }`}
          >
            <div className="min-w-0">
              <span className="text-sm text-[#0f3d3e] font-light block truncate">
                {act.name}
              </span>
              <span className="text-[10px] text-gray-400">
                {act.spotsLeft} spots left
              </span>
            </div>
            <div
              className={`w-4 h-4 rounded-full border flex items-center
              justify-center transition-colors flex-shrink-0 ml-2 ${
                signed ? "bg-[#0f3d3e] border-[#0f3d3e]" : "border-[#0f3d3e]/20"
              }`}
            >
              {signed && (
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="#e8f0ed"
                  strokeWidth="2.5"
                >
                  <polyline points="1.5,5 4,7.5 8.5,2.5" />
                </svg>
              )}
            </div>
          </button>
        );
      })}
    </div>
  </div>
);

// ─── Info Note ────────────────────────────────────────────────────

const InfoNote = () => (
  <div
    className="flex items-start gap-2.5 bg-[#f8faf9] rounded-xl p-4
    border border-[#0f3d3e]/08"
  >
    <Info size={14} className="text-[#a8d5d0] mt-0.5 flex-shrink-0" />
    <p className="text-xs text-gray-400 leading-relaxed font-light">
      Free cancellation up to 14 days before your trip. Activities can be added
      or removed after booking.
    </p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────

const BookingSidebar = ({
  place,
  selectedCabinId,
  signedActivityIds,
  onCabinChange,
  onActivityChange,
}: BookingSidebarProps) => {
  const [selectedDate, setSelectedDate] = useState<AvailableDateType>(
    place.availableDates?.[0],
  );
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [wishlist, setWishlist] = useState(false);
  const [breakdownOpen, setBreakdownOpen] = useState(false);

  const selectedCabin = place.cabinsRef?.find((c) => c._id === selectedCabinId);
  const maxGuests = selectedCabin?.maxGuests ?? 1;
  const allActivities = place.activities ?? [];
  const signedActivities = allActivities.filter((a) =>
    signedActivityIds.includes(a._id),
  );
  const router = useRouter()
  const [bookingError, setBookingError] = useState({
        status: false,
        msg: ""
      })
      

  const [isBookingLoading, setIsBookingLoading] = useState(false)
  const {authUser} = useUserContext()

  const nights             = selectedDate ? getNights(selectedDate.from, selectedDate.to) : 0
  const cabinSubtotal      = selectedCabin ? selectedCabin.pricePerNight * nights : 0
  const activitiesSubtotal = signedActivities.reduce(
    (sum, act) => sum + act.price * (adults + children), 0
  )
  const serviceFee = Math.round((cabinSubtotal + activitiesSubtotal) * 0.07)
  const total      = cabinSubtotal + activitiesSubtotal + serviceFee

   const handleBooking = async () => {
    if (!authUser?.userId) {
      router.push('/log-in')
      return
    }
    if (!selectedCabin) {
      setBookingError({ status: true, msg: 'Please select a cabin' })
      return
    }
    if (!selectedDate) {
      setBookingError({ status: true, msg: 'Please select dates' })
      return
    }

    setIsBookingLoading(true)
    setBookingError({ status: false, msg: '' })

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userRef:    authUser.userId,   // ← don't forget this
          placeRef:   place._id,         // ← was place (the whole object)
          cabinRef:   selectedCabinId,
          activities: signedActivityIds,
          from:       selectedDate.from,
          to:         selectedDate.to,
          guests:     adults + children,
          totalPaid:  total,             // ← from closure
        })
      })

      const data = await res.json()

      if (!res.ok) {
        setBookingError({ status: true, msg: data.error ?? data.message })
        return
      }

      router.push('/booking/confirmed?status=reserved')

    } catch (err){
      setBookingError({ status: true, msg: 'Something went wrong. Please try again.' })
    } finally {
      setIsBookingLoading(false)
    }
  }
  
  const toggleActivity = (id: string) =>
    onActivityChange(
      signedActivityIds.includes(id)
        ? signedActivityIds.filter((a) => a !== id)
        : [...signedActivityIds, id],
    );
  useEffect(() => {
    if (maxGuests < adults + children) {
      setAdults(1);
      setChildren(0);
    }
  }, [selectedCabin]);

  return (
    <aside className="sticky top-8 px-6 py-8 space-y-6">
      <PriceSummary
        selectedCabin={selectedCabin}
        signedActivities={signedActivities}
        selectedDate={selectedDate}
        adults={adults}
        children={children}
        wishlist={wishlist}
        onWishlistToggle={() => setWishlist((w) => !w)}
        breakdownOpen={breakdownOpen}
        onBreakdownToggle={() => setBreakdownOpen((o) => !o)}
        onBook={handleBooking}           // ← pass down
        bookingLoading={isBookingLoading}
        bookingError={bookingError}
      />

      <DatePicker
        dates={place.availableDates}
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      <div>
        <SectionTitle>Guests</SectionTitle>
        <div className="space-y-2">
          <GuestCounter
            label="Adults"
            value={adults}
            onDecrement={() => setAdults((n) => Math.max(1, n - 1))}
            onIncrement={() =>
              setAdults((n) => Math.min(maxGuests - children, n + 1))
            }
            min={1}
            max={maxGuests - children}
          />
          <GuestCounter
            label="Children"
            value={children}
            onDecrement={() => setChildren((n) => Math.max(0, n - 1))}
            onIncrement={() =>
              setChildren((n) => Math.min(maxGuests - adults, n + 1))
            }
            max={maxGuests - adults}
          />
        </div>
      </div>

      <ActivityToggle
        activities={allActivities}
        signedIds={signedActivityIds}
        onToggle={toggleActivity}
      />

      <InfoNote />
    </aside>
  );
};

export default BookingSidebar;
