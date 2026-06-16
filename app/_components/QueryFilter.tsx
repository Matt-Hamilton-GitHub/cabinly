"use client";
import CheckInInput from "./CheckInInput";
import CheckOutInput from "./CheckOutInput";
import LocationInput from "./LocationInput";
import Button from "./Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import ActivitiesSelector from "./ActivitySelector";

type LocationInputType =
   {
      address: string | undefined;
      coordinates: {
        lat: string | undefined;
        lng: string | undefined;
      };
    }
  | undefined;

const QueryFilter = () => {
  const [datesRange, setDatesRange] = useState<
    { from: Date; to: Date } | undefined
  >(undefined);
  const [capacity, setCapacity] = useState("1");
  const [location, setLocation] = useState<LocationInputType>(undefined);
  const [maxPrice, setMaxPrice] = useState(null)
  const [amnities, setAmnities] = useState<string[]>([])



  const router = useRouter();
  const pathname = usePathname();

  const handleRouting = () => {
    const params = new URLSearchParams();

    if (capacity) params.set("capacity", capacity);
    if (datesRange?.from) params.set("start", datesRange.from.toString());
    if (datesRange?.to) params.set("end", datesRange.to.toString());
    if (location?.address) params.set("address", location.address);
    if (location?.coordinates.lat && location?.coordinates.lng) {
      params.set("lat", location.coordinates.lat);
      params.set("lng", location.coordinates.lng);
    }
    if (maxPrice) params.set("maxPrice", maxPrice)


    const queryString = params.toString();
    // setLocation(undefined)
    router.push(`${pathname}?${queryString}`);
  };

  const handleShowAll = () => {
    setDatesRange(undefined);
    setCapacity("1");
    setLocation(undefined);

    router.push("/cabins");
  };

  useEffect(() => {
    console.log(datesRange, capacity, location);
  }, [datesRange, capacity, location]);

  return (
    <div className="w-[95%] mx-auto max-w-450 px-6">
      <div className="glass-card rounded-2xl p-6 md:p-8">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <svg
            className="w-6 h-6 text-orange-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>{" "}
          Search &amp; Filter
        </h2>

        {/* <!-- Search Grid -->  */}
        <form action="" onSubmit={(e) => e.preventDefault()} className="">
          <div className="flex gap-10 md:flex-wrap justify-start md:items-center flex-col md:flex-row xl:justify-center">
            <LocationInput location={location} setLocation={setLocation} />
            <CheckInInput setDatesRange={setDatesRange} />
            <CheckOutInput setDatesRange={setDatesRange} />
            <div className="search-filter ">
              <label
                htmlFor="capacity-input"
                className=" block text-sm text-gray-400 mb-2"
              >
                Guests
              </label>
              <select
                id="capacity-input"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="w-full px-4 py-3 rounded-lg "
              >
                <option value="">Any</option>
                // <option value="1">1 Guest</option>{" "}
                <option value="2">2 Guests</option>{" "}
                <option value="4">4 Guests</option>
                // <option value="6">6 Guests</option>{" "}
                <option value="8">8+ Guests</option>
              </select>
            </div>

            {/* <!-- Price Range --> */}
            <div className="search-filter">
              <label className="block text-sm text-gray-400 mb-2">
                Max Price/Night
              </label>
              <input
                type="number"
                id="price-filter"
                placeholder="Any"
                min="0"
                className="w-full px-4 py-3 rounded-lg"
                value=""
              />
            </div>
          </div>

          {/* <!-- Amenities Filter --> */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">
              Amenities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="wifi"
              >
                <span className="mr-2">📡</span> Wi-Fi{" "}
              </button>
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="fireplace"
              >
                <span className="mr-2">🔥</span> Fireplace{" "}
              </button>{" "}
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="hot-tub"
              >
                <span className="mr-2">🛁</span> Hot Tub{" "}
              </button>{" "}
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="kitchen"
              >
                <span className="mr-2">🍳</span> Full Kitchen{" "}
              </button>
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="washer"
              >
                <span className="mr-2">🧺</span> Washer/Dryer{" "}
              </button>{" "}
              <button
                className="filter-btn amenity-tag px-4 py-2 rounded-lg text-sm"
                data-amenity="parking"
              >
                <span className="mr-2">🅿️</span> Parking{" "}
              </button>
            </div>
          </div>
        <div className="flex justify-center flex-col md:flex-row items-center gap-10">
          {/* <!-- Sort & Search Button --> */}
          
            <select id="sort-filter" className="flex-1 px-4 py-3 rounded-lg">
              <option value="relevance">Sort by: Relevance</option>{" "}
              <option value="price-low">Sort by: Price (Low to High)</option>{" "}
              <option value="price-high">Sort by: Price (High to Low)</option>{" "}
              <option value="rating">Sort by: Rating</option>{" "}
            </select>
          
          <button
            id="search-btn"
            className="btn-primary flex-1 md:flex-initial py-5 p-10 rounded-lg font-semibold animate-pulse-glow hover:cursor-pointer"
            onClick={handleRouting}
            
          >
            Search Cabins
          </button>
        </div>
        </form>

        {/* <div className="flex flex-col justify-center text-sm text-white font-bold gap-5 ">
          <button onClick={handleShowAll}>
            {" "}
            <span
              className="relative rounded-2xl bg-black px-1 border-2 text-white hover:cursor-pointer hover:text-[black] hover:bg-white hover:border-black 
         transition-all duration-500"
            >
              Show All
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default QueryFilter;
