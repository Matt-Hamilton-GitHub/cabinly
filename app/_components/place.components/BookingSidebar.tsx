"use client";

import { useEffect, useState } from "react";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  Check,
  ShieldCheck,
  Calendar,
  Users,
  Zap,
} from "lucide-react";
import {
  TPlace,
  CabinType,
  ActivityType,
  AvailableDateType,
} from "@/app/lib/types";
import { getNights } from "@/app/_utils/utils";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/app/contexts/UserContext";

// ─── Types ───────────────────────────────────────────────────────

interface BookingSidebarProps {
  place: TPlace;
  selectedCabinId: string;
  signedActivityIds: string[];
  onCabinChange: (id: string) => void;
  onActivityChange: (ids: string[]) => void;
}

// ─── Sub-components ──────────────────────────────────────────────

const SectionTitle = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) => (
  <p
    className="text-[10px] font-medium tracking-[0.3em] uppercase mb-4
      flex items-center gap-2.5 text-[#b8975a]"
  >
    {icon}
    {children}
    <span className="h-px flex-1 bg-gradient-to-r from-[#c9a96e]/40 to-transparent" />
  </p>
);

const Divider = () => (
  <div className="h-px my-5 bg-gradient-to-r from-transparent via-[#c9a96e]/40 to-transparent" />
);

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
  <div className="flex items-center justify-between gap-3">
    <span
      className={`text-sm font-light ${
        bold
          ? "text-[#f4efe2] font-normal tracking-wide"
          : muted
            ? "text-[#f4efe2]/40"
            : "text-[#f4efe2]/65"
      }`}
    >
      {label}
    </span>
    <span
      className={
        bold
          ? "font-serif text-3xl text-[#ecdcb0]"
          : "text-sm font-medium text-[#f4efe2]"
      }
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
}) => {
  const btn = `w-9 h-9 rounded-full border border-[#0f3d3e]/15 flex items-center
    justify-center text-[#0f3d3e] disabled:opacity-25 disabled:cursor-not-allowed
    hover:border-[#c9a96e] hover:bg-[#c9a96e]/10 transition-all`;
  return (
    <div
      className="flex items-center justify-between border border-[#0f3d3e]/10
        rounded-2xl px-5 py-3.5 bg-[#fbfaf6]"
    >
      <span className="text-sm text-[#0f3d3e]">{label}</span>
      <div className="flex items-center gap-4">
        <button onClick={onDecrement} disabled={value <= min} className={btn}>
          <Minus size={14} />
        </button>
        <span className="font-serif text-xl text-[#0f3d3e] w-5 text-center">
          {value}
        </span>
        <button onClick={onIncrement} disabled={value >= max} className={btn}>
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

// ─── Price Summary Card ───────────────────────────────────────────

interface PriceSummaryProps {
  selectedCabin: CabinType | undefined;
  signedActivities: ActivityType[];
  selectedDate: AvailableDateType | undefined;
  adults: number;
  childCount: number;
  wishlist: boolean;
  onWishlistToggle: () => void;
  breakdownOpen: boolean;
  onBreakdownToggle: () => void;
  onBook: () => void;
  bookingLoading: boolean;
  bookingError: { status: boolean; msg: string };
}

const PriceSummary = ({
  selectedCabin,
  signedActivities,
  selectedDate,
  adults,
  childCount: childCount,
  wishlist,
  onWishlistToggle,
  breakdownOpen,
  onBreakdownToggle,
  onBook,
  bookingLoading,
  bookingError,
}: PriceSummaryProps) => {
  const totalGuests = adults + childCount;
  const nights = selectedDate
    ? getNights(selectedDate.from, selectedDate.to)
    : 0;

  const cabinSubtotal = selectedCabin
    ? selectedCabin.pricePerNight * nights
    : 0;

  const activitiesSubtotal = signedActivities.reduce(
    (sum, act) => sum + act.price * totalGuests,
    0,
  );

  const serviceFee = Math.round((cabinSubtotal + activitiesSubtotal) * 0.07);
  const total = cabinSubtotal + activitiesSubtotal + serviceFee;

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] p-7
        bg-gradient-to-br from-[#0a2c2d] via-[#0f3d3e] to-[#17575a]
        shadow-[0_30px_60px_-30px_rgba(15,61,62,0.8)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a96e]/80 to-transparent" />
      <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-[#c9a96e]/15 blur-3xl pointer-events-none" />

      <div className="relative space-y-4">
        {/* Price header */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#c9a96e] mb-2">
            Your trip
          </p>
          {selectedCabin ? (
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-5xl text-[#f4efe2]">
                ${selectedCabin.pricePerNight}
              </span>
              <span className="text-sm text-[#f4efe2]/45 font-light">
                / night
              </span>
            </div>
          ) : (
            <p className="text-sm text-[#f4efe2]/50">No cabin selected</p>
          )}
          {selectedCabin && (
            <p className="text-xs text-[#f4efe2]/45 font-light mt-1.5">
              {selectedCabin.name} · {totalGuests} guest
              {totalGuests !== 1 ? "s" : ""}
            </p>
          )}
        </div>

        <Divider />

        {/* Breakdown toggle */}
        <button
          onClick={onBreakdownToggle}
          className="flex items-center justify-between w-full group"
        >
          <span className="text-xs tracking-[0.15em] uppercase text-[#f4efe2]/55 group-hover:text-[#c9a96e] transition-colors">
            Price breakdown
          </span>
          {breakdownOpen ? (
            <ChevronUp size={15} className="text-[#c9a96e]" />
          ) : (
            <ChevronDown size={15} className="text-[#c9a96e]" />
          )}
        </button>

        {breakdownOpen && (
          <div className="space-y-3">
            {selectedCabin && (
              <LineItem
                label={`${selectedCabin.name} × ${nights} nights`}
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
          className="relative overflow-hidden w-full py-4 rounded-full
            bg-gradient-to-r from-[#ecdcb0] via-[#c9a96e] to-[#ecdcb0]
            text-[#0a2c2d] text-sm font-semibold tracking-[0.1em] uppercase
            shadow-[0_14px_30px_-10px_rgba(201,169,110,0.8)]
            hover:shadow-[0_18px_36px_-10px_rgba(201,169,110,1)]
            hover:-translate-y-0.5 transition-all duration-300
            disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0
            flex items-center justify-center gap-2"
        >
          {bookingLoading ? (
            <>
              <div className="w-4 h-4 rounded-full border-2 border-[#0a2c2d]/30 border-t-[#0a2c2d] animate-spin" />
              Booking...
            </>
          ) : (
            "Book this trip"
          )}
        </button>

        {bookingError.status && (
          <div className="flex items-center gap-3 bg-red-500/10 border border-red-400/30 rounded-2xl px-4 py-3">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
            <p className="text-xs text-red-200">{bookingError.msg}</p>
          </div>
        )}

        <button
          onClick={onWishlistToggle}
          className="w-full py-3 rounded-full border border-[#f4efe2]/15
            text-[#f4efe2]/65 text-xs tracking-wide hover:border-[#c9a96e]/60
            hover:text-[#f4efe2] transition-all flex items-center
            justify-center gap-2"
        >
          <Heart
            size={14}
            className={
              wishlist ? "fill-[#c9a96e] text-[#c9a96e]" : "text-[#f4efe2]/60"
            }
          />
          {wishlist ? "Saved to wishlist" : "Save to wishlist"}
        </button>
      </div>
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
  selected: AvailableDateType | undefined;
  onSelect: (date: AvailableDateType) => void;
}) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  return (
    <div>
      <SectionTitle icon={<Calendar size={11} />}>Choose dates</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        {dates &&
          dates.map((date) => {
            const active =
              !!selected &&
              selected.from === date.from &&
              selected.to === date.to;
            return (
              <button
                key={date.label}
                onClick={() => onSelect(date)}
                className={`relative text-xs py-3.5 px-3 rounded-2xl border text-center
                  transition-all duration-300 hover:cursor-pointer ${
                    active
                      ? "bg-gradient-to-br from-[#0a2c2d] to-[#17575a] text-[#f4efe2] border-[#c9a96e] shadow-[0_12px_26px_-12px_rgba(15,61,62,0.8)]"
                      : "bg-white text-[#0f3d3e] border-[#0f3d3e]/12 hover:border-[#c9a96e] hover:-translate-y-0.5"
                  }`}
              >
                {active && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#c9a96e] text-[#0a2c2d] flex items-center justify-center">
                    <Check size={11} strokeWidth={3} />
                  </span>
                )}
                <span className="block font-serif text-base">{date.label}</span>
                <span className="block font-light mt-0.5">{`${formatDate(date.from)} – ${formatDate(date.to)}`}</span>
                <span
                  className={`block mt-1.5 text-[10px] tracking-[0.2em] uppercase ${
                    active ? "text-[#c9a96e]" : "text-[#0f3d3e]/35"
                  }`}
                >
                  {getNights(date.from, date.to)} nights
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
    <SectionTitle icon={<Zap size={11} />}>Activities</SectionTitle>
    <div className="space-y-2.5">
      {activities.map((act) => {
        const signed = signedIds.includes(act._id);
        return (
          <button
            key={act._id}
            onClick={() => onToggle(act._id)}
            className={`w-full flex items-center justify-between px-5 py-3.5
              rounded-2xl border text-left transition-all duration-300 ${
                signed
                  ? "bg-gradient-to-r from-[#faf6ec] to-white border-[#c9a96e] shadow-[0_10px_24px_-14px_rgba(201,169,110,0.8)]"
                  : "bg-white border-[#0f3d3e]/10 hover:border-[#c9a96e]/60"
              }`}
          >
            <div className="min-w-0">
              <span className="text-sm text-[#0f3d3e] block truncate">
                {act.name}
              </span>
              <span className="text-[10px] tracking-wide text-[#0f3d3e]/40">
                {act.spotsLeft} spots left · ${act.price}
              </span>
            </div>
            <div
              className={`w-6 h-6 rounded-full border flex items-center
                justify-center transition-all flex-shrink-0 ml-3 ${
                  signed
                    ? "bg-[#0f3d3e] border-[#c9a96e]"
                    : "border-[#0f3d3e]/20"
                }`}
            >
              {signed && (
                <Check size={12} className="text-[#c9a96e]" strokeWidth={3} />
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
    className="flex items-start gap-3 bg-gradient-to-br from-[#faf6ec] to-white
      rounded-2xl p-5 border border-[#c9a96e]/25"
  >
    <ShieldCheck size={16} className="text-[#b8975a] mt-0.5 flex-shrink-0" />
    <p className="text-xs text-[#0f3d3e]/55 leading-relaxed font-light">
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
  onActivityChange,
}: BookingSidebarProps) => {
  const [selectedDate, setSelectedDate] = useState<
    AvailableDateType | undefined
  >(place.availableDates?.[0]);
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
  const router = useRouter();
  const [bookingError, setBookingError] = useState({
    status: false,
    msg: "",
  });

  const [isBookingLoading, setIsBookingLoading] = useState(false);
  const { authUser } = useUserContext();

  const nights = selectedDate
    ? getNights(selectedDate.from, selectedDate.to)
    : 0;
  const cabinSubtotal = selectedCabin
    ? selectedCabin.pricePerNight * nights
    : 0;
  const activitiesSubtotal = signedActivities.reduce(
    (sum, act) => sum + act.price * (adults + children),
    0,
  );
  const serviceFee = Math.round((cabinSubtotal + activitiesSubtotal) * 0.07);
  const total = cabinSubtotal + activitiesSubtotal + serviceFee;

  const handleBooking = async () => {
    if (!authUser?.userId) {
      router.push("/log-in");
      return;
    }
    if (!selectedCabin) {
      setBookingError({ status: true, msg: "Please select a cabin" });
      return;
    }
    if (!selectedDate) {
      setBookingError({ status: true, msg: "Please select dates" });
      return;
    }

    setIsBookingLoading(true);
    setBookingError({ status: false, msg: "" });

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userRef: authUser.userId,
          placeRef: place._id,
          cabinRef: selectedCabinId,
          activities: signedActivityIds,
          from: selectedDate.from,
          to: selectedDate.to,
          guests: adults + children,
          totalPaid: total,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setBookingError({ status: true, msg: data.error ?? data.message });
        return;
      }

      router.push("/booking/confirmed?status=reserved");
    } catch (err) {
      setBookingError({
        status: true,
        msg: "Something went wrong. Please try again.",
      });
      console.log(err);
    } finally {
      setIsBookingLoading(false);
    }
  };

  const toggleActivity = (id: string) =>
    onActivityChange(
      signedActivityIds.includes(id)
        ? signedActivityIds.filter((a) => a !== id)
        : [...signedActivityIds, id],
    );

    

const cabinMaxGuests = selectedCabin?.maxGuests;

useEffect(() => {
  if (cabinMaxGuests == null) return;
  const nextAdults = Math.min(adults, cabinMaxGuests);
  const nextChildren = Math.min(children, cabinMaxGuests - nextAdults);
  if (nextAdults !== adults) setAdults(nextAdults);
  if (nextChildren !== children) setChildren(nextChildren);
}, [cabinMaxGuests, adults, children]);

  return (
    <aside
      className="bg-white px-6 sm:px-8 py-9 space-y-8 rounded-[2rem] border
        border-[#0f3d3e]/[0.07] shadow-[0_30px_60px_-34px_rgba(15,61,62,0.25)]
        lg:rounded-none lg:border-0 lg:shadow-none"
    >
      <div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#c9a96e] mb-2">
          Reserve
        </p>
        <h2 className="font-serif text-3xl text-[#0f3d3e] tracking-tight">
          Plan your stay
        </h2>
      </div>

      <DatePicker
        dates={place.availableDates}
        selected={selectedDate}
        onSelect={setSelectedDate}
      />

      <div>
        <SectionTitle icon={<Users size={11} />}>Guests</SectionTitle>
        <div className="space-y-2.5">
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

      <PriceSummary
        selectedCabin={selectedCabin}
        signedActivities={signedActivities}
        selectedDate={selectedDate}
        adults={adults}
        childCount={children}
        wishlist={wishlist}
        onWishlistToggle={() => setWishlist((w) => !w)}
        breakdownOpen={breakdownOpen}
        onBreakdownToggle={() => setBreakdownOpen((o) => !o)}
        onBook={handleBooking}
        bookingLoading={isBookingLoading}
        bookingError={bookingError}
      />

      <InfoNote />
    </aside>
  );
};

export default BookingSidebar;
