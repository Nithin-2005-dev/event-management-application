import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useContext, useEffect, useState } from 'react';
import {EventsProvider} from '../store/EventsProvider';
import Dates from './Dates';
const CalanderView = () => {
  const {currentMonth,getDaysInMonth,changeMonth}=useContext(EventsProvider)
  
  return (
    <div className='flex flex-col w-screen justify-center items-center'>
    <div className='w-3/4 flex justify-between'>

<div className='text-orange-300 font-semibold text-xl'>{format(currentMonth,"MMMM")+"-"+format(currentMonth,"yyyy")}</div>
    <div className='text-white shadow-lg shadow-black rounded-full p-2'>
      <button className='px-2 text-xl hover:scale-125' onClick={()=>{
        changeMonth(-1)
      }}><FaAngleLeft /></button>
      <button className='px-2 text-xl hover:scale-125' onClick={()=>{
        changeMonth(1)
      }}><FaAngleRight /></button>
    </div>
    </div>
    <Dates/>
    </div>
      
  )
}

export default CalanderView
