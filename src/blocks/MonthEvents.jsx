import React, { useContext, useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {motion} from 'framer-motion'
import { EventsProvider } from '../store/EventsProvider'
import { format } from 'date-fns'
import exportFromJSON from 'export-from-json'
const MonthEvents = () => {
    const {currentMonth,eventForm}=useContext(EventsProvider)
    const [monthEvents,setMonthEvents]=useState([{}]);
    //to filter out the current month data and update it whenever current month changes or user enters to eventform 
    useEffect(()=>{
            const eventData=JSON.parse(localStorage.getItem("events")) || [];
            const current=eventData.filter((eve)=>{
                return eve.date.substring(0,7)==format(currentMonth,"yyyy-MM");
            })
            setMonthEvents(current);
        },[currentMonth,eventForm])
        //to download the current month events in csv format using export-from-json library
        const handleDownload=()=>{
          const fileName="events"+currentMonth;
          const exportType=exportFromJSON.types.csv;
          const data=monthEvents;
          exportFromJSON({data,fileName,exportType});
        }
  return (
    <motion.section layout className='absolute top-0 right-0 p-2 m-2'>
    <Sheet>
  <SheetTrigger className="text-white bg-sky-400 p-1 font-bold rounded-xl shadow-md shadow-black">Events</SheetTrigger>
  <SheetContent className="bg-transparent" >
    <SheetHeader>
      <SheetTitle className="text-white underline font-semibold">{format(currentMonth,"MMMM")} Events</SheetTitle>
      <SheetDescription>
      {monthEvents.length==0 && <p className='text-gray-300 font-semibold p-4 capitalize'>No Events scheduled this month</p>}
      <div>
        {monthEvents.map((eve)=>{
            return <motion.div layout className='bg-sky-100 p-2 m-2 rounded-lg '>
            
            <h3 className='text-black font-bold'>{eve.eveName}</h3>
            <div className='flex justify-between'>
            <p className='text-gray-600 font-semibold'>start time:{eve.sTime}</p>
            <p className='text-gray-600 font-semibold'>end-time:{eve.eTime}</p>
            </div>
            <p className='m-2 text-start'>{eve.dec}</p>
            </motion.div>
        })
        }
        <button className='text-white bg-blue-600 p-2 font-bold rounded-xl hover:scale-110 m-1' onClick={handleDownload}>Download Events</button>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</motion.section>
  )
}

export default MonthEvents
