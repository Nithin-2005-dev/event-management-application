import CalanderView from "./blocks/CalanderView"
import Heading from "./blocks/Heading"

const App = () => {
  return (
   <div className="min-h-screen bg-background flex flex-col gap-y-10">
   <Heading/>
   <CalanderView/>
   </div>
  )
}

export default App
