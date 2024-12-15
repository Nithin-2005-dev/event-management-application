import React, { useState } from 'react'
import { createContext } from 'react'
import { addDays, endOfMonth, startOfMonth } from 'date-fns';
export const EventsProvider = createContext([]);
export const EventProvider=({children})=>{
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
              const changeMonth=(action)=>{
                setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth()+action)));
              }
    return <EventsProvider.Provider value={{currentMonth,getDaysInMonth,changeMonth}}>
        {children}
    </EventsProvider.Provider>
}