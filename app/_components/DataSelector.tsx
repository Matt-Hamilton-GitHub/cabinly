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
        today: `text-[white] border-2 fill-[black] font-bold bg-gray-400`,
        selected: `border-black text-black rounded-[10px] bg-[orange] font-bold`,
        disabled: 'text-gray-600',
        root: `${defaultClassNames.root} flex text-white justify-center items-center text-center p-5 bg-black rounded-xl max-w-100 lg:max-w-180 border-3`,
      }}
      mode="range"
      animate
      numberOfMonths={2}
      selected={selected}
      onSelect={onChange}
      disabled={disabledRanges}
    />
  );
}
