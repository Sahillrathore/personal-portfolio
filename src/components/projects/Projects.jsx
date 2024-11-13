import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './projects.css';
import projImg1 from '../../assets/astro snip.png'
import projImg2 from '../../assets/passsnip.jpg'
import projImg3 from '../../assets/ecomAppSnip.png'
import { Link } from 'react-router-dom';
import ProjectCard from '../Projectc-card-temp/ProjectCard';
import TransitionEffect from '../transitionEff/TransitionEffect';

const Projects = () => {

  const [cardData, setCardData] = useState([
    {
      img: projImg1,
      title: "E-Commerce Project",
      text: "Complete Shopping Platform",
      gitUrl: "https://github.com/Sahillrathore/react_redux_demo",
      liveUrl: "https://astrocart.netlify.app/",
      techStack: ["React", "Redux", "Tailwind", "Material", "UI"]
    },
    {
      img: projImg2,
      title: "Travel Website UI",
      text: "Web Designed For Travel Company",
      gitUrl: "https://github.com/Sahillrathore/react_redux_demo",
      liveUrl: "https://s-travels.netlify.app/",
      techStack: ["Html", "Css", "Tailwind", "Material", "UI"]
    }
  ])

  return (
    <>
      <TransitionEffect />
      <div className="projets-section" id='projects'>
        <div className="projects-elements-container pt-4 bg-gray-200 py-2 sm:px-16 px-6 flex flex-col items- z-30 relative">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center'
          >
            <h1 className='sm:text-5xl ml-6 text-4xl mt-2 mb-6 font-bold text-start w-full text-zinc-800'>What I've <span className='text-indigo-600'>Built</span></h1>

            {/* <div className="first-proj-container sm:w-5/6 mx-auto w-full lg:h-96 h-full flex lg:flex-row flex-col items-center lg:gap-8 gap-2 bg-white p-8 sm:px-12 px-4 rounded-2xl border border-zinc-500  shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4"
            >

              
            </div> */}
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [80, 0] }}
            transition={{ duration: 1 }}

            className="second-proj-container w-full mt-4 flex flex-wrap items-center justify-start lg:gap-8 gap-4"
          >
            {/* <div className="one lg:p-3 p-3 max-w-[22rem] h-fit bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              
            </div> */}

            <div className="one lg:p-3 p-3 max-w-[22rem] h-fit bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="E-commerce Application" desc="A Complete Ecommerce shopping app made with react and redux state management library for cart components functionality" img={projImg1} stack={["React", "Redux", "Tailwind", "Mui"]} liveLink="https://astrocart.netlify.app" codeLink="https://github.com/Sahillrathore/astrocart-ecommerce-project" imgWidth="w-full" />
            </div>
            <div className="one lg:p-3 p-3 max-w-[22rem] h-fit bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="SecureVault" desc="Password manager web application" stack={["React", "Tailwind", "JavaScript", "Localstorage"]} liveLink="https://manageyourpass.netlify.app" codeLink="https://github.com/Sahillrathore/password-manager" img={projImg2} imgWidth="w-full" />
            </div>

            <div className="two p-3 max-w-[22rem] h-fit bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="StyleSquare" desc="Online store in which products are integrated by fetching data from API's" stack={["Html", "Tailwind", "JavaScript", "React", "API"]} liveLink="https://stylesquare.netlify.app" codeLink="https://github.com/Sahillrathore/stylesquare-ecom" img={projImg3} imgWidth="w-full" />
            </div>

            <div className="two p-3 bg-white max-w-[22rem] h-fit rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="Object Detector" desc="An Object Detector which can determine objects that comes in view of the camera." stack={["Html", "Tailwind", "JavaScript", "React",]} liveLink="https://objecstdetection.netlify.app" codeLink="https://github.com/Sahillrathore/objectDetector" img='17878image9.png' imgWidth="w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default Projects