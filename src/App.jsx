import CalanderView from "./blocks/CalanderView"
import Heading from "./blocks/Heading"
import {EventProvider} from "./store/EventsProvider"

const App = () => {
  return (
   <div className="min-h-screen bg-background flex flex-col gap-y-10">
    <EventProvider>
   <Heading/>
   <CalanderView/>
   </EventProvider>
   </div>
  )
}

export default App
