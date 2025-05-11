"use client";
import { useState } from "react";
import { addDays } from "date-fns";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
// import { useReservation } from "../contexts/ReservationContext"

// function isAlreadyBooked(range, datesArr) {
//   return (
//     range.from &&
//     range.to &
//     datesArr.some((date) =>
//       isWithinInterval(date, { start: range.from, end: range.to })
//     )
//   );
// }

function DateSelector() {

const today = new Date();
  const tomorrow = addDays(today, 1);

  const [selected, setSelected] = useState<DateRange | undefined>({
    from: today,
    to: tomorrow,
  });

  const handleSelect = (newSelected: DateRange | undefined) => {
    setSelected(newSelected);
  };

  return (
    <div className="flex flex-col justify-between">
      <DayPicker
      animate
      mode="range"
      
      selected={selected}
      onSelect={handleSelect}
      
    />

      {/* <div className="flex items-center justify-between px-8 bg-accent-500 text-primary-800 h-[72px]">
        <div className="flex items-baseline gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold uppercase">Total</span>{" "}
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div> */}
    </div>
  );
}

export default DateSelector;
