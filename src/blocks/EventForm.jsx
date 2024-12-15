import React, { useEffect, useRef, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { format } from 'date-fns'
  
const EventForm = ({eventForm,setEventForm,selectedDate}) => {
    const eveName=useRef();
    const startTime=useRef();
    const endTime=useRef();
    const dec=useRef();
    const [selectedEvent,setSelectedEvent]=useState([]);
    useEffect(()=>{
        const eventData=JSON.parse(localStorage.getItem("events")) || [];
        console.log(eventData);
        const current=eventData.filter((eve)=>{
            return eve.date==format(selectedDate,"yyyy-MM-dd");
        })
        setSelectedEvent(current);
    },[selectedDate])
    const saveEvent=()=>{
        const eventData=JSON.parse(localStorage.getItem("events")) || [];
        const event={
            id:eventData.length || 0,
            date:format(selectedDate,"yyyy-MM-dd"),
            eveName:eveName.current.value,
            sTime:startTime.current.value,
            eTime:endTime.current.value,
            dec:dec.current.value,
        }
        localStorage.setItem("events",JSON.stringify([...eventData,event]));
        eveName.current.value=""
        startTime.current.value=""
        endTime.current.value=""
        dec.current.value=""
        setEventForm(false);
    }
    const deleteEvent=(id)=>{
        const eventData=JSON.parse(localStorage.getItem("events")) || [];
        const current=eventData.filter((eve)=>{
            return eve.id!=id;
        })
        localStorage.setItem("events",JSON.stringify([current]));
        setEventForm(false);
    }
  return (
    <div>
      <Dialog open={eventForm} onOpenChange={setEventForm} >
  <DialogTrigger></DialogTrigger>
  <DialogContent className="bg-slate-950 rounded-lg border-gray-500">
    <DialogHeader>
      <DialogTitle className="text-white font-bold">{format(selectedDate,"dd MMMM yyyy")}</DialogTitle>
      <div className='flex flex-col gap-3 overflow-y-auto max-h-[60vh]'>
      <div className='text-white text-start'>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="event-name">event-name</label>
      <input type="text" className='bg-slate-800 rounded-lg p-1 my-1' ref={eveName}/>
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="start-time">start-time</label>
      <input type="time" className='bg-slate-800 rounded-lg p-1 my-1' ref={startTime}/>
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="end-time">end-time</label>
      <input type="time" className='bg-slate-800 rounded-lg p-1 my-1' ref={endTime}/>
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="description">Description</label>
      <textarea className='bg-slate-800 rounded-lg p-1 my-1 font-normal' placeholder='enter description(optional)' ref={dec}/>
      </div>
      <button className='bg-green-500 p-1 px-2 font-bold rounded-xl' onClick={saveEvent}>Save Event</button>
      </div>
      <hr />
      <DialogDescription>
      {selectedEvent && selectedEvent.length>0?<h2 className='text-white font-semibold font-mono text-xl underline'>Saved Events</h2>:<h2 className='text-white font-semibold font-mono text-xl'>No Saved Events</h2>}
    {
    selectedEvent && selectedEvent.map((eve)=>{
            return <div className='bg-sky-100 p-2 m-2 rounded-lg '>
            <h3 className='text-black font-bold'>{eve.eveName}</h3>
            <div className='flex justify-between'>
            <p className='text-gray-600 font-semibold'>start time:{eve.sTime}</p>
            <p className='text-gray-600 font-semibold'>end-time:{eve.eTime}</p>
            </div>
            <p className='m-2 text-start'>{eve.dec}</p>
            <button className='bg-red-600 text-white p-1 px-2 font-bold rounded-lg' onClick={()=>{
                deleteEvent(eve.id);
            }}>Delete</button>
            </div>
        })
    }
      </DialogDescription>
      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default EventForm
