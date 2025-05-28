



const DatesInput = ({ datesRange, setDatesRange }) => {


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
    <div className="relative flex flex-col items-center  ">
      <label
        htmlFor='dates-input' className=' bg-black w-full  text-center text-white block text-sm font-medium rounded-t-2xl'
      >When</label>
      <div id='dates-input'
        className="flex flex-row">
        <input
          type="date"
          onChange={handleFromChange}
          placeholder="from"
          className="p-1 border-2 border-black px-2 h-12  shadow-inner shadow-[#686868] bg-white rounded-b-3xl  hover:placeholder-[black]" />
        <input
          type="date"
          onChange={handleToChange}
          placeholder="to"
          className="p-1 border-2 border-black px-2 h-12  shadow-inner shadow-[#686868] bg-white rounded-b-3xl  hover:placeholder-[black]" />
      </div>
    </div>
  )
}

export default DatesInput