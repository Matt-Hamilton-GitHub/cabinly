

const Button = ({ isDisabled, action, onClick, color }) => {

    const bgClass = {
        red: "hover:bg-red-500",
        orange: "hover:bg-orange-500",
        green: "hover:bg-green-800",
        black: "hover:bg-[black]",
    }[color]

    return (
        <button
            className={`border-[black] border-2 bg-[white] p-2 rounded-xl shadow-lg inset-shadow-gray-550 text-[black] hover:scale-110 
    hover:text-[white]  hover:border-[white] hover:cursor-pointer transition-all ease-in-out ${bgClass}`}
            onClick={onClick}
            disabled={isDisabled}
        >{action}</button>
    )
}

export default Button