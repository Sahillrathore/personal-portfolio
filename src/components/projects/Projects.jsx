import React, { useState } from 'react'
import { motion } from 'framer-motion'

import './projects.css';
import projImg1 from '../../assets/ecomAppSnip.png'
import projImg2 from '../../assets/stravelImg.png'
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
      liveUrl: "https://stylesquare.netlify.app/",
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
        <div className="projects-elements-container bg-gray-200 py-12 px-6 flex flex-col items-center lg:mb-32 sm:mb-64 mb-64 z-30 relative">
          <motion.div
            whileInView={{ opacity: [0, 1], y: [60, 0] }}
            transition={{ duration: 1 }}
            className='flex flex-col items-center'
          >
            <h1 className='sm:text-5xl text-4xl mt-2 font-bold mb-10 text-zinc-800'>What I've <span className='text-indigo-600'>Built</span></h1>

            <div className="first-proj-container sm:w-5/6 w-full lg:h-96 h-fit flex lg:flex-row flex-col items-center lg:gap-8 gap-2 bg-white p-8 sm:px-12 px-4 rounded-2xl border border-zinc-500  shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4"
            >

              <ProjectCard title="E-commerce Application" desc="A Complete Ecommerce shopping app made with react and redux state management library for cart components functionality" img={projImg1} stack={["React", "Redux", "Tailwind", "Mui"]} liveLink="https://stylesquare.netlify.app" codeLink="https://github.com/Sahillrathore/react_redux_demo" imgHeight="h-full" imgHeightCol="h-80" />
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: [0, 1], y: [80, 0] }}
            transition={{ duration: 1 }}

            className="second-proj-container sm:w-5/6 w-full mt-14 flex md:flex-nowrap flex-wrap justify-between lg:gap-16 gap-10"
          >

            <div className="one lg:p-6 p-4 bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="S-Travel Website" desc="A travel website disign layout fully responsive" stack={["Html", "Css", "JavaScript"]} liveLink="https://s-travels.netlify.app" codeLink="https://github.com/sahillrathore/s-travel-ui" img={projImg2} imgWidth="w-full" />
            </div>

            <div className="two lg:p-6 p-4 bg-white rounded-2xl border border-zinc-500 w-full shadow-zinc-400 shadow-sm border-r-gray-800 border-r-4 border-b-gray-800 border-b-4">
              <ProjectCard title="S-Travel Website" desc="A travel website disign layout fully responsive disign layout fully responsive" stack={["Html", "Css", "JavaScript"]} liveLink="https://s-travels.netlify.app" codeLink="https://github.com/sahillrathore/s-travel-ui" img="https://wordpressboss.com/opb/vtravel-demo/assets/images/place/place3.jpg" imgWidth="w-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </>
  )
}

export default Projects