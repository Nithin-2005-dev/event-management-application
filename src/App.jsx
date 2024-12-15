import Dates from "./blocks/Dates"
import Heading from "./blocks/Heading"
import { EventProvider } from "./store/EventsProvider"


const App = () => {
  return (
   <div className="min-h-screen bg-background flex flex-col gap-y-10 w-screen justify-center items-center">
    <EventProvider>
   <Heading/>
   <Dates/>
   </EventProvider>
   </div>
  )
}

export default App
