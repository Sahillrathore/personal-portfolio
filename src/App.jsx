import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } 
from 'react-router-dom'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Hero/>} />
              <Route path='about' element={<About/>} />
              <Route path='projects' element={<Projects/>} />
              <Route path='contact' element={<Contact/>} />
            </Routes>
          <Footer/>
        </BrowserRouter>
      </>
  )
}

export default App