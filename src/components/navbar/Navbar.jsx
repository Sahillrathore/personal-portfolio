import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { motion } from "framer-motion"

import './navbar.css'
import bgImage from '../../assets/bgWhite.png'

const variants = {
    open: {
        clipPath: "circle(1200px at 1% 5%)",
        transition: {
            type: "spring",
            stiffness: 15,
        }
    },
    closed: {
        clipPath: "circle(1200px at 50% 50%)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
        }
    }
}


const Navbar = () => {

    const [navToggle, setNavToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const ThemeChangeHandler = () => {
        const htmlTag = document.querySelector("html");
        darkMode? htmlTag.classList.add("dark") : htmlTag.classList.remove("dark");
    }

    useEffect(()=>{
        ThemeChangeHandler();
    },[darkMode])

    const navToggleHandler = () => {
        setNavToggle(false)
    }

    return (
        <nav className=''>
            <div className="navbar-header bg-white/40 backdrop-blur-sm  flex py-4 lg:px-28 sm:px-14 px-8 justify-between relative z-50 items-center dark:bg-gray-800 ">
                <div className="logo text-2xl font-semibold uppercase text-purple-600 font-mono">Sahil</div>

                <div className="nav-links md:flex items-center gap-8 hidden">
                    <ul className='flex gap-8'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => `${isActive ? "text-purple-600 border-b border-b-black" : "text-zinc-700 dark:text-zinc-300"}  hover:text-purple-700 uppercase text-md pb-[5px]`}
                            >
                                <i className="fa-solid fa-angle-left text-sm text-indigo-600"></i>Home<i className="fa-solid fa-angle-right text-sm text-indigo-600"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to='about'
                                className={({ isActive }) => `${isActive ? "text-purple-600 border-b border-b-black" : "text-zinc-700 dark:text-zinc-300"}  hover:text-purple-700 uppercase text-md pb-[5px]`}
                            >
                               <i className="fa-solid fa-angle-left text-sm text-indigo-600"></i>
                               About
                               <i className="fa-solid fa-angle-right text-sm text-indigo-600"></i>
                            </NavLink>
                        </li>

                        {/* <li>
                            <NavLink
                                to="skills"
                                className={({ isActive }) => `${isActive ? "text-purple-600" : "text-zinc-700 dark:text-zinc-300"}  hover:text-purple-700 uppercase text-md`}
                            >
                                <i className="fa-solid fa-angle-left text-sm text-indigo-600"></i>Skills<i className="fa-solid fa-angle-right text-sm text-indigo-600"></i>
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink
                                to="projects"
                                className={({ isActive }) => `${isActive ? "text-purple-600 border-b border-b-black" : "text-zinc-700 dark:text-zinc-300"}  hover:text-purple-700 uppercase text-md pb-[5px]`}
                            >
                                <i className="fa-solid fa-angle-left text-sm text-indigo-600"></i>Projects<i className="fa-solid fa-angle-right text-sm text-indigo-600"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="contact"
                                className={({ isActive }) => `${isActive ? "text-purple-600 border-b border-b-black" : "text-zinc-700 dark:text-zinc-300"}  hover:text-purple-700 uppercase text-md pb-[5px]`}
                            >
                                <i className="fa-solid fa-angle-left text-sm text-indigo-600"></i>
                                Contact
                                <i className="fa-solid fa-angle-right text-sm text-indigo-600"></i>
                            </NavLink>
                        </li>
                    </ul>

                    {/* <div className="theme-mode-icon md:block hidden text-2xl min-w-6" >
                    {
                        darkMode ? <i className="fa-solid fa-moon" onClick={()=>{setDarkMode(false)}} ></i>
                        : <i className="fa-regular fa-sun" onClick={()=>{setDarkMode(true)}} ></i>
                    }
                    </div> */}
                </div>


                <i className="fa-solid fa-bars p-3 text-white md:hidden bg-indigo-500 rounded-full " onClick={() => { setNavToggle(true) }}></i>

            </div>

            <motion.div className="nav-links-sidemenu top-0 h-screen right-0 z-50 fixed"
            animate={navToggle ? "open" : "closed"}>

                {
                    navToggle &&
                    <motion.div className='w-72 bg-zinc-100 h-full  p-8 pt-6 z-400'

                        variants={variants}
                        // whileInView={{ x: [300, 0] }}
                        // transition={{ duration: 0.45, ease: 'easeOut' }}
                        

                        style={{
                            backgroundImage: `url(${bgImage})`, backgroundSize: "contain"
                        }}
                    >
                        <i className="fa-solid fa-xmark text-indigo-800 text-2xl float-right z-0" onClick={() => { setNavToggle(false) }}></i>


                        <ul className='flex flex-col mt-8 gap-4'>
                            <li>
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-600 dark:text-zinc-400"} p-1.5 hover:text-indigo-400 uppercase font-medium`}
                                    id="#home"
                                    onClick={navToggleHandler}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to='about'
                                    className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-600 dark:text-zinc-400"} p-1.5 hover:text-indigo-400 uppercase font-medium`}
                                    id="#about"
                                    onClick={navToggleHandler}
                                >
                                    About
                                </NavLink>
                            </li>

                            {/* <li>
                                <NavLink
                                    to='skills'
                                    className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-600 dark:text-zinc-400"} p-1.5 hover:text-indigo-400 uppercase font-medium`}
                                >
                                    Skills
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink
                                    to='projects'
                                    className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-600 dark:text-zinc-400"} p-1.5 hover:text-indigo-400 uppercase font-medium`}
                                    onClick={navToggleHandler}
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='contact'
                                    className={({ isActive }) => `${isActive ? "text-indigo-600" : "text-gray-600 dark:text-zinc-400"} p-1.5 hover:text-indigo-400 uppercase font-medium`}
                                    onClick={navToggleHandler}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <div className="socialandtheme mt-8 ml-2 text-xl text-zinc-800">
                            {/* <div className="theme-mode-icon inline-block mr-8">
                                {
                                    darkMode ? <i className="fa-solid fa-moon" onClick={()=>{setDarkMode(false)}} ></i>
                                    : <i className="fa-regular fa-sun" onClick={()=>{setDarkMode(true)}} ></i>
                                }
                            </div> */}
                            <a href="https://github.com/sahillrathore" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/sahil-rathore-666b3525a" target="_blank">
                                <i className="fa-brands fa-linkedin-in ml-8"></i>
                            </a>
                        </div>
                    </motion.div>
                }
            </motion.div>
        </nav>
    )
}

export default Navbar