import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Skills from '../components/skills/Skills'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Projects from '../components/projects/Projects'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Skills/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home