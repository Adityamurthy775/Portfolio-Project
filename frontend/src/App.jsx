import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Preloader from '../components/Preloader'
import Home from '../components/Home'

function App() {
  const reactobj=createBrowserRouter([
    {
      path:'/',
      element:<Preloader/>
    },
    {
      path:'/home',
      element:<Home/>
    }
  ])
  return (
    <div>
      <RouterProvider router={reactobj}/>
    </div>
  )
}

export default App
