import React, { useContext, useState } from 'react'
import { EventsProvider } from '../store/EventsProvider';
import { format } from 'date-fns';
import EventForm from './EventForm';

const Dates = () => {
    const {currentMonth,getDaysInMonth,changeMonth,selectedDate,setSelectedDate,eventForm,setEventForm}=useContext(EventsProvider)
    const days=getDaysInMonth();
  return (
      <div className='w-3/4 gap-3 m-3  p-3 flex flex-wrap justify-center items-center rounded-xl shadow-xl shadow-black'>
      <EventForm eventForm={eventForm} setEventForm={setEventForm} selectedDate={selectedDate}/>

{
 days.map((day)=>{
      return <div className='flex flex-col cursor-pointer hover:scale-110' onClick={()=>{
        setSelectedDate(day);
        setEventForm(true)
      }}>
      {format(new Date(),"yyyy-MM-dd")==format(day,"yyyy-MM-dd")? <p className='text-white p-2 m-2 bg-sky-300 rounded-full shadow-lg shadow-slate-500'>{format(day,"dd")}</p>: <p className='text-white p-2 m-2 bg-slate-500 rounded-full '>{format(day,"dd")}</p>}
      </div>
   })
  }
</div>
  )
}

export default Dates
