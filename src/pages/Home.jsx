import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        {/* <Skills/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home