
import { addDays, endOfMonth, format, startOfMonth } from 'date-fns';
import { createContext, useRef, useState } from 'react';
export const EventsProvider= createContext([]);
export const EventProvider=({children})=>{
    //to make the event form stateful 
    const [eventForm,setEventForm]=useState(false);
    //to know the selected date in calander
    const [selectedDate,setSelectedDate]=useState(new Date());
    //to handle the inputs in the form
        const eveName=useRef();
        const startTime=useRef();
        const endTime=useRef();
        const dec=useRef();
    //to know the current month for calander rendering
        const [currentMonth,setCurrentMonth]=useState(new Date());
        //to get the days of the present viewing month
              const getDaysInMonth=()=>{
              const start=startOfMonth(currentMonth);
              const end=endOfMonth(currentMonth);
              const days=[];
            for(let i=start;i<=end;i=addDays(i,1)){
                  days.push(new Date(i));
              }
              return days;
              }
              //function to change the months
              const changeMonth=(action)=>{
                setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth()+action)));
              }
              //function to save the events in local storage |get local storage data->add the current event with previous events->and send new data to local storage
              const saveEvent=()=>{
                      const eventData=JSON.parse(localStorage.getItem("events")) || [];
                      const event={
                          id:Math.round(Math.random(selectedDate)*10000000),
                          date:format(selectedDate,"yyyy-MM-dd"),
                          eveName:eveName.current?.value,
                          sTime:startTime.current?.value,
                          eTime:endTime.current?.value,
                          dec:dec.current?.value,
                      }
                      localStorage.setItem("events",JSON.stringify([...eventData,event]));
                      eveName.current.value=""
                      startTime.current.value=""
                      endTime.current.value=""
                      dec.current.value=""
                      setEventForm(false);
                  }
                  //function to delete the eveent |get events from local storage->remove the clicked event by filter and save it to another array->send the new array to local storage
                  const deleteEvent=(id)=>{
                      const eventData=JSON.parse(localStorage.getItem("events")) || [];
                      const current=eventData.filter((eve)=>{
                          return eve.id!=id;
                      })
                      localStorage.setItem("events",JSON.stringify(current));
                      setEventForm(false);
                  }
                  const [selectedEvent,setSelectedEvent]=useState([]);
    return <EventsProvider.Provider value={{currentMonth,getDaysInMonth,changeMonth,saveEvent,deleteEvent,selectedEvent,setSelectedEvent,eveName,startTime,endTime,dec,selectedDate,setSelectedDate,eventForm,setEventForm}}>
        {children}
    </EventsProvider.Provider>
}