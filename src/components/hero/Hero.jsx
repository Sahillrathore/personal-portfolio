import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import './hero.css';
import { Typewriter } from 'react-simple-typewriter'

import reduxImg from '../../assets/redux-logo.png'
import TransitionEffect from '../transitionEff/TransitionEffect';

const scaleVariants = {
  whileInView: {
    // x: [-50, 0],
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const Hero = () => {

  return (
    <>
      <TransitionEffect/>
      <div className="hero-section">
        <div className="hero-elements-container bg-gray-200 flex md:flex-row flex-col w-full sm:px-20 px-12 py-16 pt-14 justify-center lg:gap-32 gap-12 overflow-hidden items-center lg:mb-32 sm:mb-64 mb-64 z-30 relative" style={{ minHeight: "91vh" }}>

          <div className="left-container">

            <motion.div
              whileInView={{ x: [-200, 0], opacity: [0, 1] }}
              transition={{ duration: 2 }}
              className=""
            >

              <div className="text-boxes relative md:block flex sm:flex-row flex-col gap-6 justify-center">

                <div className="name-intro-text overflow-hidden flex-col flex backdrop-blur-sm bg-zinc-50/50 w-52 md:w-60 p-4 py-6 text-center rounded-xl relative z-40 shadow-slate-400/60 shadow-lg md:mb-8">
                  <span className='text-zinc-600 text-sm tracking-wide'>Hello! I am </span>
                  <span className='font-bold text-4xl text-zinc-800 tracking-wider'>Sahil</span>
                </div>

                
                <svg className='absolute md:top-8 sm:-top-12 top-8 md:h-full sm:h-60 h-full' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stopColor="rgba(248, 117, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M16.8,-26.1C19.6,-21.1,18.3,-13.3,20.6,-6.6C23,0.1,29,5.8,28,9.2C27.1,12.6,19,13.9,13.2,13.6C7.3,13.2,3.7,11.3,-1.7,13.7C-7.1,16,-14.2,22.7,-19.2,22.7C-24.3,22.8,-27.3,16.3,-27.9,10.1C-28.5,3.9,-26.6,-2.1,-24.3,-7.5C-22,-13,-19.3,-17.9,-15.2,-22.5C-11,-27.1,-5.5,-31.5,0.7,-32.5C7,-33.5,14,-31.2,16.8,-26.1Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path>
                </svg>

                <div className="name-desg-text overflow-hidden flex-col flex backdrop-blur-sm bg-zinc-50/50 relative z-40 bg-zinc-50 md:w-60 w-52 p-4 py-6 justify-center text-start rounded-xl shadow-slate-400/60 shadow-lg text-sm uppercase " >
                  <span className='text-zinc-600 twtext'>
                    <Typewriter
                      words={['FrontEnd Developer', 'React.Js Developer', 'Passionate Coder',]}
                      loop={Infinity}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={30}
                      delaySpeed={2000}
                      className='font-mono'
                    // onLoopDone={handleDone}
                    // onType={handleType}
                    />
                  </span>
                  <span className='text-zinc-600 font-mono'>Web Developer</span>
                </div>

              </div>

            </motion.div>


            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className='redux-logo h-28 w-fit p-4 bg-violet-100 rounded-full absolute top-1/4 -left-6'
            >
              <img src={reduxImg} alt="redux-logo" className='h-full -rotate-12' />
            </motion.div>

            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className='react-logo sm:h-28 h-20 w-fit sm:p-4 p-2 bg-blue-100 rounded-full absolute md:top-3/4 md:left-28 top-20 right-2'
            >
              <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png' alt="react-logo" className='h-full' />
            </motion.div>

          </div>

          <div className="right-contatainer lg:w-1/2 md:w-2/3 w-full relative">
            <motion.div
              whileInView={{ opacity: [0, 1], x: [100, 0] }}
              transition={{ duration: 2, delayChildren: 0.7 }}
              className='flex flex-col gap-8 center-container'
            >
              <h1 className='lg:text-6xl sm:text-5xl text-3xl font-bold text-zinc-800 z-20'>
                <span className='' style={{lineHeight: "1.15"}}>Turning Vision Into Reality With </span>
                <span className='text-indigo-600'>Code </span> And {' '}
                <span className='text-indigo-600 '>
                  Design
                </span>
                .
              </h1>

              <p className='leading-relaxed text-gray-700 z-20'>As a skilled web developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects showcasing my expertise in React.js and web development.</p>

              <div className="hero-cta-buttons ">
                <NavLink
                to='contact'
                className='px-4 py-2 transition-colors bg-indigo-500 text-zinc-50 rounded-md mr-4 relative z-30'>
                  Contact Me
                  <i className="fa-solid fa-up-right-from-square ml-2"></i>
                </NavLink>
                {/* <button className='px-4 py-2 transition-colors bg-indigo-500 text-zinc-50 rounded-md relative z-30'>Resume</button> */}
              </div>
            </motion.div>

            <motion.div
              variants={scaleVariants}
              whileInView={scaleVariants.whileInView}
              className='tailwind-logo sm:h-28 h-24 w-fit p-4 md:bg-cyan-100 bg-cyan-100/80 rounded-full absolute z-20 -bottom-24 right-20 rotate-3'
            >
              <img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png' alt="tailwind-logo" className='h-full md:opacity-100 opacity-80' />
            </motion.div>

          </div>

          

          <div className="next-page-btn text-4xl text-green-600 sm:absolute sm:block hidden top-2/4 right-5">
            <NavLink
            to='about'
            >
              <i className="fa-solid fa-angles-right"></i>
            </NavLink>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero