

const CheckInInput = ({setDatesRange}) => {

    const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const from = e.target.value;
    setDatesRange((prev) => ({
      ...prev,
      from: from,
    }));
  };
  return (
     <div className="search-filter">
        <label
          htmlFor="dates-input"
          className="block text-sm text-gray-400 mb-2"
        >
          Check-in
        </label>

        <input
          type="date"
          onChange={handleFromChange}
          placeholder="from"
          className="w-full px-4 py-3 rounded-lg"
        />
      </div>
  )
}

export default CheckInInput