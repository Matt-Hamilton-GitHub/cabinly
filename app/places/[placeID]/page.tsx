"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { TPlace } from "@/app/lib/types";

import PlaceHero from "@/app/_components/place.components/PlaceHero";
import PlaceStats from "@/app/_components/place.components/PlaceStats";
import PlaceAbout from "@/app/_components/place.components/PlaceAbout";
import CabinSelector from "@/app/_components/place.components/CabinSelector";
import ActivitySignup from "@/app/_components/place.components/ActivitySignup";
import GuideList from "@/app/_components/place.components/GuideCard";
import ReviewList from "@/app/_components/place.components/ReviewList";
import BookingSidebar from "@/app/_components/place.components/BookingSidebar";
import PlacePageSkeleton from "@/app/_components/place.components/PlacePageSkeleton";
import CabinMap from "@/app/_components/GoogleMaps";

const GLOBAL_CSS = `
@keyframes tpFadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.tp-fade { animation: tpFadeUp .7s cubic-bezier(.2,.7,.2,1) both; }
`;

// Elegant card wrapper for each content section
const Section = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <section
    style={{ animationDelay: `${delay}ms` }}
    className={`tp-fade relative bg-white rounded-[2rem] border
      border-[#0f3d3e]/[0.07] p-8 sm:p-10 overflow-hidden
      shadow-[0_1px_2px_rgba(15,61,62,0.04),0_30px_60px_-34px_rgba(15,61,62,0.25)]
      ${className}`}
  >
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r
      from-transparent via-[#c9a96e]/60 to-transparent" />
    {children}
  </section>
);

const TripPage = ({ params }: { params: Promise<{ placeID: string }> }) => {
  const { placeID } = use(params);

  const [place, setPlace] = useState<TPlace | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCabinId, setSelectedCabinId] = useState("");
  const [signedActivityIds, setSignedActivityIds] = useState<string[]>([]);

  useEffect(() => {
    if (!placeID) return;
    const fetch_ = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/places/${placeID}`);
        const data = await res.json();
        setPlace(data.place);
        setSelectedCabinId(data.place?.cabinsRef?.[0]?._id ?? "");
      } finally {
        setIsLoading(false);
      }
    };
    fetch_();
  }, [placeID]);

  if (isLoading) return <PlacePageSkeleton />;

  if (!place)
    return (
      <div className="min-h-screen flex flex-col items-center justify-center
        bg-[#fbfaf6] px-6 text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f4efe2]
          to-[#e1f5ee] flex items-center justify-center mb-8 border
          border-[#c9a96e]/30">
          <Globe size={32} className="text-[#0f3d3e]/45" />
        </div>
        <p className="font-serif text-3xl text-[#0f3d3e] mb-3">Place not found</p>
        <p className="text-sm text-[#0f3d3e]/45 font-light mb-8">
          This destination may have moved or no longer exists.
        </p>
        <Link
          href="/places"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full
            bg-[#0f3d3e] text-[#f4efe2] text-sm font-medium tracking-wide
            border border-[#c9a96e]/60 hover:bg-[#1a5c5e] transition-colors"
        >
          <ArrowLeft size={14} className="text-[#c9a96e]" />
          Back to all places
        </Link>
      </div>
    );

  const coords = place.coordinates?.coordinates;

  const bookingSidebar = (
    <BookingSidebar
      place={place}
      selectedCabinId={selectedCabinId}
      signedActivityIds={signedActivityIds}
      onCabinChange={setSelectedCabinId}
      onActivityChange={setSignedActivityIds}
    />
  );

  return (
    <main className="bg-[#fbfaf6] min-h-screen pb-28">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      <PlaceHero place={place} />
      <PlaceStats place={place} />

      {/* Gold divider between header and content */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a96e]/50
        to-transparent" />

      <div className="max-w-[84rem] mx-auto px-6 pt-10">
        <Link
          href="/places"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em]
            uppercase text-[#b8975a] hover:text-[#0f3d3e] transition-colors
            mb-8"
        >
          <ArrowLeft size={13} />
          All places
        </Link>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          {/* Main content */}
          <div className="space-y-10 min-w-0">
            <Section delay={0}>
              <PlaceAbout place={place} />
            </Section>

            {coords && (
              <Section delay={80} className="!p-3 sm:!p-4">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <CabinMap locationProp={coords} />
                </div>
              </Section>
            )}

            <Section delay={120}>
              <CabinSelector
                cabins={place.cabinsRef}
                selectedCabinId={selectedCabinId}
                onSelect={setSelectedCabinId}
              />
            </Section>

            {/* Mobile booking panel */}
            <div className="lg:hidden block tp-fade">{bookingSidebar}</div>

            <div className="hidden lg:block">
              <Section delay={160}>
                <ActivitySignup
                  activities={place.activities}
                  signedIds={signedActivityIds}
                  onToggle={(id) =>
                    setSignedActivityIds((prev) =>
                      prev.includes(id)
                        ? prev.filter((a) => a !== id)
                        : [...prev, id],
                    )
                  }
                />
              </Section>
            </div>

            <Section delay={200}>
              <GuideList guides={place.guides} />
            </Section>

            <Section delay={240}>
              <ReviewList reviews={place.reviews} />
            </Section>
          </div>

          {/* Sticky booking sidebar (desktop) */}
          <aside className="hidden lg:block lg:sticky lg:top-24 self-start tp-fade"
            style={{ animationDelay: "120ms" }}>
            <div className="relative rounded-[2rem] overflow-hidden bg-white
              border border-[#c9a96e]/30
              shadow-[0_2px_4px_rgba(15,61,62,0.05),0_40px_80px_-30px_rgba(15,61,62,0.4)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r
                from-[#ecdcb0] via-[#c9a96e] to-[#8a6d35] z-10" />
              {bookingSidebar}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default TripPage;