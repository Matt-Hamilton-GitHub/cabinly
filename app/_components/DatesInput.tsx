



const DatesInput = ({datesRange, setDatesRange}) => {


  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const from = e.target.value;
    setDatesRange((prev) => ({
      ...prev, from: from
    }))

  }


  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const to = e.target.value

    setDatesRange((prev) => ({
     ...prev,
      to: to
    }))
  }

  return (
    <div className="flex justify-start items-start gap-1 sm:gap-4">
        <input 
            type="date" 
            onChange={handleFromChange}
            placeholder="from"
            className="p-1  text-center text-gray-500 border-white shadow-inner shadow-[#686868] bg-white rounded-3xl hover:placeholder-[black] "/>
        <input 
            type="date" 
            onChange={handleToChange}
            placeholder="to"
            className="p-1 text-center text-gray-500  shadow-inner shadow-[#686868] bg-white rounded-3xl hover:placeholder-[black]" />
    </div>
  )
}

export default DatesInput