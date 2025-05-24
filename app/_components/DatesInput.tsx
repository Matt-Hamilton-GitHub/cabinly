

const DatesInput = () => {
  return (
    <div className="flex justify-start items-start gap-1 sm:gap-4">
        <input 
            type="date" 
            placeholder="from"
            className="p-1  text-center text-gray-500 border-white shadow-inner shadow-[#686868] bg-white rounded-3xl hover:placeholder-[black] "/>
        <input 
            type="date" 
            placeholder="to"
            className="p-1 text-center text-gray-500  shadow-inner shadow-[#686868] bg-white rounded-3xl hover:placeholder-[black]" />
    </div>
  )
}

export default DatesInput