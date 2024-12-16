import { EventsProvider } from "@/store/EventsProvider"
import { format } from "date-fns"
import { useContext } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

const CalanderView = () => {
  const {currentMonth,changeMonth}=useContext(EventsProvider)
  return (
    <section className='flex flex-col justify-center items-center w-full'>
    <div className='flex justify-between w-full'>
<div className='text-orange-300 font-semibold text-xl'>{format(currentMonth,"MMMM")+"-"+format(currentMonth,"yyyy")}</div>
    <div className='text-white shadow-lg shadow-black rounded-full p-2 flex'>
      <button className='px-2 text-xl hover:scale-125' onClick={()=>{
        changeMonth(-1)
      }}><FaAngleLeft /></button>
      <button className='px-2 text-xl hover:scale-125' onClick={()=>{
        changeMonth(1)
      }}><FaAngleRight /></button>
    </div>
    </div>
    </section>
      
  )
}

export default CalanderView
