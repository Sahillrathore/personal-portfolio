import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TransitionEffect from '../transitionEff/TransitionEffect';

const skillsData = [
    {
        text: "Building interactive and performant user interfaces with reusable components.",
        tech: "REACT JS",
        logo: ""
    },

    {
        text: "Rapidly building custom designs with a utility-first CSS framework.",
        tech: "REDUX",
        logo: "",
        padding: "p-2"

    },
    {
        text: "Rapidly building custom designs with a utility-first CSS framework.",
        tech: "TAILWIND CSS",
        logo: "",
    },

    {
        text: "Bringing websites to life with dynamic and interactive features.",
        tech: "JAVASCRIPT",
        logo: ""
    },
]

const About = () => {

    const [cardData, setCardData] = useState([
        {
            img: "https://thumbs.dreamstime.com/b/web-developer-working-laptop-web-developer-working-laptop-vector-illustration-designer-developing-design-programming-150765500.jpg",
            title: "Web Developer",
            text: "I am a Web developer with a passion for building beautiful and functional web applications.",
        },
        {
            img: "https://i.pinimg.com/736x/d6/35/7c/d6357c8a65f8c2f3ac5c4f97eb64a147.jpg",
            title: "Frontend Developer",
            text: "As a front-end developer, I specialize in crafting engaging user experiences for web applications.",
        },
        {
            img: "https://media.istockphoto.com/id/1341415561/vector/web-ui-ux-design-web-development-3d-concept.jpg?s=612x612&w=0&k=20&c=fuQZC3NmQDViKiWOte0e7a54LMmk3st3m2v-sVIS1Ks=",
            title: "Web Designer",
            text: "As a passionate web designer, I create visually stunning, user-friendly websites that captivate users and drive business growth",
        },
    ]);
    return (
        <>
            <TransitionEffect />
            <div className="about-section">
                <div className="about-elements-container pt-12 bg-zinc-200 flex lg:flex-row flex-col w-full justify-around lg:mb-32 sm:mb-64 mb-64 z-30 relative">

                    <div className='lg:w w-full flex flex-col'>
                        <motion.div
                            whileInView={{ opacity: [0, 1], y: [80, 0] }}
                            transition={{ duration: 1 }}
                        >
                            <div className="about-text mb-8 sm:px-16 px-6">
                                <h1 className='about-heading md:text-5xl text-3xl font-bold text-zinc-800 mb-8'>About <span className='text-indigo-600'>Me</span></h1>
                                <p className='text-zinc-600 mb-6'>
                                    Hello! I'm Sahil Rathore, a passionate web developer with a strong foundation in modern web technologies. I specialize in creating dynamic, responsive, and user-friendly websites and applications using a variety of tools and frameworks.
                                </p>
                                <p className='text-zinc-600'>
                                    I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.
                                </p>
                            </div>

                            <div className="service-cards pt-8">

                                <div className="info-cards flex flex-wrap justify-center gap-14 sm:px-16 px-6">
                                    {
                                        cardData.map((item, i) => (
                                            <div className="cards w-52 hover:scale-110 transition duration-500" key={i}>
                                                <img src={item.img} alt={`${item.title}image`} className='rounded-2xl w-full h-44' />

                                                <h4 className='text-lg font-bold mt-4 mb-3'>{item.title}</h4>

                                                <p className='text-sm text-zinc-500'>{item.text}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>

                        <div className="skills-section">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fillOpacity="0.7" d="M0,32L30,37.3C60,43,120,53,180,85.3C240,117,300,171,360,181.3C420,192,480,160,540,154.7C600,149,660,171,720,165.3C780,160,840,128,900,106.7C960,85,1020,75,1080,90.7C1140,107,1200,149,1260,176C1320,203,1380,213,1410,218.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                            </svg>

                            <div className='' style={{ backgroundColor: "#f7da3f" }}>
                                <div className='sm:px-16 px-6 pb-12 md:relative md:-top-20' style={{ backgroundColor: "#f7da3f" }}>
                                    <h1 className='text-zinc-800 md:text-5xl text-3xl font-bold mb-8'>Skills</h1>

                                    <div className="more-skills flex flex-wrap md:gap-12 gap-6 mt-7 text-sm">

                                        <div className='text-center w-16'>
                                            <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='mb-2' />
                                            REACT JS
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="http://localhost:5173/src/assets/redux-logo.png" className='mb-2' />
                                            REDUX
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" className='mb-2' />
                                            TAILWIND CSS
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" className='mb-2' />
                                            JAVASCRIPT
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" className='mb-2' />
                                            HTML
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" className='mb-2' />
                                            CSS
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png" className='mb-2' />
                                            STRAPI
                                        </div>
                                        <div className='text-center w-16'>
                                            <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/576/bootstrap-256.png" className='mb-2' />
                                            BOOTSTRAP
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default About