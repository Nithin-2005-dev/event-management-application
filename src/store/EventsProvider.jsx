import React, { useRef, useState } from 'react'
import { createContext } from 'react'
import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';
export const EventsProvider = createContext([]);
export const EventProvider=({children})=>{
        //useState is to manage the months and to make the calander stateful
    const [eventForm,setEventForm]=useState(false);
        const [selectedDate,setSelectedDate]=useState(new Date());
        const eveName=useRef();
        const startTime=useRef();
        const endTime=useRef();
        const dec=useRef();
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
              const changeMonth=(action)=>{
                setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth()+action)));
              }
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
                  const [selectedEvent,setSelectedEvent]=useState([]);
    return <EventsProvider.Provider value={{currentMonth,getDaysInMonth,changeMonth,saveEvent,deleteEvent,selectedEvent,setSelectedEvent,eveName,startTime,endTime,dec,selectedDate,setSelectedDate,eventForm,setEventForm}}>
        {children}
    </EventsProvider.Provider>
}