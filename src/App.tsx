
import {RouterProvider } from "react-router-dom"
import { Element } from './routes/Mainrouter'

const App = () => {
  return (
    <div>
      <RouterProvider router={Element} />
    </div>
  )
}

export default App