import React, { useContext, useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { EventsProvider } from '../store/EventsProvider'
import { format } from 'date-fns'
const MonthEvents = () => {
    const {currentMonth,eventForm}=useContext(EventsProvider)
    const [monthEvents,setMonthEvents]=useState([]);
    useEffect(()=>{
            const eventData=JSON.parse(localStorage.getItem("events")) || [];
            const current=eventData.filter((eve)=>{
                return eve.date.substring(0,7)==format(currentMonth,"yyyy-MM");
            })
            setMonthEvents(current);
        },[currentMonth,eventForm])
  return (
    <div className='absolute top-0 right-0 p-2 m-2'>
    <Sheet>
  <SheetTrigger className="text-white bg-sky-400 p-1 font-bold rounded-lg shadow-md shadow-black">Events</SheetTrigger>
  <SheetContent className="bg-transparent" >
    <SheetHeader>
      <SheetTitle className="text-white underline font-semibold">{format(currentMonth,"MMMM")} Events</SheetTitle>
      <SheetDescription>
      {monthEvents.length==0 && <p className='text-gray-300 font-semibold p-4 capitalize'>No Events scheduled this month</p>}
        {monthEvents.map((eve)=>{
            return <div className='bg-sky-100 p-2 m-2 rounded-lg '>
            
            <h3 className='text-black font-bold'>{eve.eveName}</h3>
            <div className='flex justify-between'>
            <p className='text-gray-600 font-semibold'>start time:{eve.sTime}</p>
            <p className='text-gray-600 font-semibold'>end-time:{eve.eTime}</p>
            </div>
            <p className='m-2 text-start'>{eve.dec}</p>
            </div>
        })
        }
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>
  )
}

export default MonthEvents
