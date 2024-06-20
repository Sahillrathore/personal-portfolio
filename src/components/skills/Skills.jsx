import React from 'react'
import {motion} from 'framer-motion';

import reactlogo from '../../assets/reactlogo.png'
import gitlogo from '../../assets/gitlogo.png'


const logoImages = [
  {
    img: reactlogo,
    name: "React.js"
  },
  {
    img: gitlogo,
    name: "Git"
  },
  {
    img: reactlogo,
    name: "Redux"
  },
  {
    img: gitlogo,
    name: "Tailwind Css"
  },
  {
    img: reactlogo,
    name: "Material UI"
  },
  {
    img: reactlogo,
    name: "Bootstrap"
  },
  {
    img: reactlogo,
    name: "Html"
  },
  {
    img: reactlogo,
    name: "Css"
  },
  {
    img: reactlogo,
    name: "JavaScript"
  },
]

const Skills = () => {
  return (
    <div className="skills-section" id='#skills'>
      <div className="skills-elements-container py-16 px-6">

      <motion.div>
        <div className="skills-title-text sm:text-4xl text-2xl font-bold leading-normal text-center mb-14">
          <h2 className='text-zinc-800'>
            Technical
            <span className='text-indigo-800'> Skills</span>
          </h2>
        </div>

        <div className="tech-stack">
          <div className="stack-icons flex justify-center flex-wrap">

            {
              logoImages.map((item) => (
                <div className={`${item.name}logo p-4 text-center`} key={item.name}>
                  <img src={item.img} alt="logo" className='w-20 p-3 rounded-full bg-indigo-100'/>
                  <span>{item.name}</span>
                </div>
              ))
            }
          </div>
        </div>
      </motion.div>

      </div>
    </div>
  )
}

export default Skills