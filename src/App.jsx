import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Gallery from './Pages/Gallery'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'


const App = () => {
  return (
    <><
      Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App