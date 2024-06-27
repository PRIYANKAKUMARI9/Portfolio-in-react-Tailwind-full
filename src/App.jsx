// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './Component/Navbar'
import Homme from './Component/Homme'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Foooter from './Component/Foooter'
import Contact from './Component/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
    <Navbar/>
     <Homme/>
     <About/>
     <Portfolio/>
     <Contact/>
     <Foooter/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
