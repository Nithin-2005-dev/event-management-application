import Dates from "./blocks/Dates"
import Heading from "./blocks/Heading"
import MonthEvents from "./blocks/MonthEvents"
import { EventProvider } from "./store/EventsProvider"


const App = () => {
  return (
   <main className="min-h-screen bg-background flex flex-col gap-y-10 w-screen justify-center items-center">
    <EventProvider>
   <Heading/>
   <Dates/>
   <MonthEvents/>
   </EventProvider>
   </main>
  )
}

export default App
