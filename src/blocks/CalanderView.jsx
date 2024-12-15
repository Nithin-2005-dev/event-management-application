import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useEffect, useState } from 'react';
const CalanderView = () => {
    //useState is to manage the months and to make the calander stateful
  const [currentMonth,setCurrentMonth]=useState(new Date());
    const getDaysInMonth=()=>{
    const start=startOfMonth(currentMonth);
    const end=endOfMonth(currentMonth);
    const days=[];
for(let i=start;i<=end;i=addDays(i,1)){
        days.push(new Date(i));
    }
    return days;
    }
    const days=getDaysInMonth();
    const changeMonth=(action)=>{
      setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth()+action)));
    }
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
    <div className='w-3/4 gap-3 m-3  p-3 flex flex-wrap justify-center items-center rounded-xl shadow-xl shadow-black'>

    {
      days.map((day)=>{
          return <div className='flex flex-col cursor-pointer hover:scale-110'>
          <p className='text-white p-2 m-2 bg-slate-500 rounded-full'>{format(day,"dd")}</p>
          </div>
       })
      }
    </div>
    </div>
      
  )
}

export default CalanderView
