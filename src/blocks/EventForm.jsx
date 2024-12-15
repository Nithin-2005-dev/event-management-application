import React from 'react'
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
  return (
    <div>
      <Dialog open={eventForm} onOpenChange={setEventForm} >
  <DialogTrigger></DialogTrigger>
  <DialogContent className="bg-slate-950">
    <DialogHeader>
      <DialogTitle className="text-white font-bold">{format(selectedDate,"dd MMMM yyyy")}</DialogTitle>
      <div className='flex flex-col gap-3 overflow-y-auto max-h-[60vh]'>
      <div className='text-white text-start'>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="event-name">event-name</label>
      <input type="text" className='bg-slate-800 rounded-lg p-1 my-1' />
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="start-time">start-time</label>
      <input type="time" className='bg-slate-800 rounded-lg p-1 my-1' />
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="end-time">end-time</label>
      <input type="time" className='bg-slate-800 rounded-lg p-1 my-1' />
      </div>
      <div className='flex flex-col p-1 capitalize font-semibold'>
      <label htmlFor="description">Description</label>
      <textarea className='bg-slate-800 rounded-lg p-1 my-1 font-normal' placeholder='enter description(optional)'/>
      </div>
      <button className='bg-green-500 p-1 px-2 font-bold rounded-xl'>Save Event</button>
      </div>
      <hr />
      <h2 className='text-white'>Saved Events</h2>

      </div>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default EventForm
