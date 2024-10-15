import React from 'react'
import { NavLink } from 'react-router-dom'

import rotateText from '../../assets/web_.png'
import footImg from '../../assets/wave.png'

const socialData = [
  { profileLink: "https://github.com/sahillrathore", icon: "github", color: "zinc" },
  { profileLink: "https://www.linkedin.com/in/sahil-rathore123", icon: "linkedin-in", color: "blue" },
  // { profileLink: "sahil921031@gmail.com", icon: "google", color: "red" },
]
const textClass = ["bg-blue-700", "bg-zinc-700", "bg-red-700"]
const Footer = () => {
  return (
    <footer>
      <div className="footer-elements-container  sm:pb-7 pb-11 sm:px-20 px-10 py-7 bg-indigo-100 flex sm:flex-row flex-col sm:gap-6 gap-12 items-center justify-between fixed bottom-0 w-full z-10 lg:bg-repeat bg-no-repeat"
      style={{backgroundImage: `url(${footImg})`, backgroundPosition: "bottom", }}
      >
        <div className="footer-social">
          <h4 className='font-bold text-xl text-zinc-900 underline sm:mb-3 mb-11'>Find Me ON</h4>

          <div className="socials flex gap-4 lg:flex-row sm:flex-col flex-row">

            {
              socialData.map((item) => (
                <div className={`${item.icon}logo  text-zinc-200 bg-${item.color}-700 rounded-xl hover:rotate-6 hover:-translate-y-1`} key={item.icon}>
                  <a href={item.profileLink} target="_blank">
                    <i className={`fa-brands fa-${item.icon} p-2 sm:px-6 px-4 sm:text-3xl text-2xl`}></i>
                  </a>
                </div>
              ))
            }

          </div>
        </div>

        <div className="hire-me-button border-t-red-400 rounded-full p-4 relative sm:block hidden ">


          <div className="hire-button animate-none ">
            <NavLink to='contact' className='rounded-full text-sm bg-black text-white p-[10px] py-6 z-50'>Hire Me</NavLink>
          </div>

        </div>

        <div className="footer-links flex lg:flex-row sm:flex-col flex-row items-center gap-4">
          <NavLink
            className={({ isActive }) => isActive ? "text-purple-600" : "text-zinc-950"}
            to='/'
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "text-purple-600" : "text-zinc-950"}
            to='about'
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "text-purple-600" : "text-zinc-950"}
            to='projects'
          >
            Projects
          </NavLink>

          <NavLink
            className={({ isActive }) => isActive ? "text-purple-600" : "text-zinc-950"}
            to='contact'
          >
            Contact
          </NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer