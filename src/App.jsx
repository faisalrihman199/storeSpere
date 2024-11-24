import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/NavSide/Navbar'
import Footer from './Components/Footer'

function App() {
  

  return (
    
      <Router>
            <Navbar />
            <div className='md:container md:mx-auto sm:px-6 py-3 xsm:px-6' >

            <Routes>
              <Route path='/'  element={<Home />} />
            </Routes>
            <Footer />
            </div>

      </Router>
    
  )
}

export default App
