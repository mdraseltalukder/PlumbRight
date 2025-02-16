import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './App.css'
import Root from './components/Root'
import NotFound from './Pages/404'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'


const router = createBrowserRouter([
{
  path: "/",
  element:<Root />,
  children:[
    {
      path: "/",
      element:<Home />
    },
    {
      path: "/about",
      element:<About />
    },
    {
      path: "/contact",
      element:<Contact />
    },
    {
      path: "/404",
      element:< NotFound />
    },
    
  ]
 
}

])



function App() {


  return (
    <RouterProvider router={router} />

  )
}

export default App
