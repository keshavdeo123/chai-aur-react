
import './App.css'

import {  createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/About'
import { Route } from 'react-router-dom'


import Product from './pages/product'
import Rootlayout from './assets/latout/Rootlayout'

function App() {
 
const router=createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Rootlayout/>}>
          <Route index element={<Home/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      )

      )
  return (
  
 <>
 <RouterProvider router={router}/></>

  )
}

export default App
