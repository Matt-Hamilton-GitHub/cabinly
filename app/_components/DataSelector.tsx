"use client";

import { DayPicker, DateRange ,getDefaultClassNames} from "react-day-picker";
import "react-day-picker/dist/style.css";



type Props = {
  selected: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
  disabledRanges: DateRange[];
};

export default function DateSelector({ selected, onChange, disabledRanges }: Props) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      classNames={{
        today: `text-amber-700 border-amber-500 font-bold`,
        selected: `bg-amber-500 border-2 border-black rounded-3xl text-cyan-900 fill-[red]`,
        disabled: 'text-gray-400',
        root: `${defaultClassNames.root} flex justify-center items-center text-center p-5 bg-gray-200 rounded-xl max-w-100 lg:max-w-180 border-3`,
      }}
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={onChange}
      disabled={disabledRanges}
    />
  );
}
