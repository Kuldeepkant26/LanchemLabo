import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.tsx'
import Chatbot from './components/Chatbot.tsx'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Chatbot />
    </>
  )
}

export default App
