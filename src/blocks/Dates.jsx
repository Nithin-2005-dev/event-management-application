import React, { useContext, useEffect, useState } from 'react'
import { EventsProvider } from '../store/EventsProvider';
import { format } from 'date-fns';
import EventForm from './EventForm';
import CalanderView from './CalanderView';

const Dates = () => {
    const {currentMonth,getDaysInMonth,changeMonth,selectedDate,setSelectedDate,eventForm,setEventForm}=useContext(EventsProvider)
    const [events,setEvents]=useState([]);
    //event form state is taken as reference to dynamically change the colors while deleting or adding the events 
    useEffect(()=>{
            const eventData=JSON.parse(localStorage.getItem("events"));
            const dates=[];
            eventData?.map((eve)=>{
              dates.push(eve.date);
            })
            setEvents(dates);
        },[eventForm])
    const days=getDaysInMonth();
    const emptyDays=[];
    console.log(days[0].getDay())
    for(let i=0;i<days[0].getDay();i++){
        emptyDays.push("")
    }
    const daysInWords=["sun","mon","tue","wed","thu","fri","sat"]
  return (
    <div className='w-3/4  xl:w-[40vw] lg:w-1/2'>
    <CalanderView></CalanderView>
    <EventForm eventForm={eventForm} setEventForm={setEventForm} selectedDate={selectedDate}/>
      <div className='grid grid-cols-7 gap-3  p-1 flex-wrap justify-center items-center rounded-xl shadow-xl shadow-black'>
    {
        daysInWords.map((ele)=>{
           return <p className='text-white p-2 m-2 rounded-full sm:text-base text-[10px]'>{ele}</p>
        })
    }
      {
        emptyDays.map((ele)=>{
           return <p className='text-white p-2 m-2 rounded-full sm:text-base text-xs'>{ele}</p>
        })
      }
{
 days.map((day)=>{
      return <div className='flex flex-col cursor-pointer hover:scale-110' onClick={()=>{
        setSelectedDate(day);
        setEventForm(true)
      }}>
      {format(new Date(),"yyyy-MM-dd")==format(day,"yyyy-MM-dd")? <p className='text-white p-2 m-2 bg-sky-300 rounded-full shadow-lg shadow-slate-500 text-center sm:text-base text-[10px]'>{format(day,"dd")}</p>:<p className={` p-2 m-2  rounded-full ${events.findIndex((eve)=>eve==format(day,"yyyy-MM-dd"))==-1?'sm:bg-slate-500 text-white':'bg-yellow-300 text-black font-extrabold'} text-center sm:text-base text-[10px]`}>{format(day,"dd")}</p>}
      </div>
   })
  }
</div>
</div>
  )
}

export default Dates
