

const DisplayTotal = ({price, duration, discount}) => {
    const msInOneDay = 1000 * 60 * 60 * 24;
    
    let durationDays = 0
    if (duration?.from) durationDays = 1
    if (duration?.to && duration?.from) durationDays = 1 + (duration.to - duration.from ) / msInOneDay
  return (
    <div className="font-bold text-orange-500 text-2xl">
        <span className="">
        $
        {(price - discount) * durationDays}
        </span>
    </div>
  )
}

export default DisplayTotal