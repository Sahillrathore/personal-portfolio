import React, { useState } from 'react'
import { motion } from 'framer-motion'
import reduxLogo from '../../assets/redux-logo.png'
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
    const [images, setImages] = useState([
        {title: "React Js", img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"},
        {title: "Redux", img: reduxLogo},
        {title: "JavaScript", img: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png"},
        {title: "Html", img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png"},
        {title: "Css", img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png"},
        {title: "Tailwind", img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png"},
        {title: "Bootstrap", img: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/576/bootstrap-256.png"},
        {title: "Strapi", img: "https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png"},
        { title: "Firebase", img: "359956.png"},
    ])

    return (
        <>
            <TransitionEffect />
            <div className="about-section">
                <div className="about-elements-container pt-8 bg-gray-200 flex lg:flex-row flex-col w-full justify-around z-30 relative">

                    <div className='lg:w w-full flex flex-col px-16'>
                        <motion.div
                            whileInView={{ opacity: [0, 1], y: [80, 0] }}
                            transition={{ duration: 1 }}
                            className='flex justify-between items-center'
                        >
                            <div className="about-text mb-8  px-6 w-1/2">
                                <h1 className='about-heading md:text-5xl text-3xl font-bold text-zinc-800 mb-8'>About <span className='text-indigo-600'>Me</span></h1>
                                <p className='text-zinc-600 mb-6'>
                                    Hello! I'm Sahil Rathore, a passionate web developer with a strong foundation in modern web technologies. I specialize in creating dynamic, responsive, and user-friendly websites and applications using a variety of tools and frameworks.
                                </p>
                                <p className='text-zinc-600'>
                                    I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.
                                </p>
                            </div>

                            <div className="service-cards pt-8 w-fit bg-">

                                <div className="info-cards w-fit flex flex-wrap justify-center gap-14 px-6">
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

                        <div className="skills-section my-8">

                            <div className='' >
                                <div className='' >
                                    <h1 className='text-zinc-800 md:text-5xl text-3xl font-bold mb-8'>Skills</h1>

                                    <div className="more-skills flex flex-wrap md:gap-12 gap-6 mt-7 text-sm">

                                        <FramerMotionSlider images={images}/>
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


const FramerMotionSlider = ({ images }) => {
    const slideWidth = 100 / images.length;

    return (
        <div className="w-full overflow-hidden">
            <motion.div
                className="flex gap-8"
                initial={{ x: 0 }}
                animate={{ x: `-${100}%` }}
                transition={{
                    repeat: Infinity,
                    duration: 12, // Total duration for one loop
                    ease: 'linear',
                }}
            >
                {images.map((image, index) => (
                    <div className="flex-shrink-0 w-fit flex flex-col items-center" style={{ width: `${slideWidth}%` }} key={index}>
                        <img className=" rounded-lg h-20 w-20" src={image.img} alt={`Slide ${index}`} />
                        <p className='text-center'>{image.title}</p>
                    </div>
                ))}
                {/* Duplicate the slides for continuous effect */}
                {images.map((image, index) => (
                    <div className="flex-shrink-0 w-fit flex flex-col items-center" style={{ width: `${slideWidth}%` }} key={index + images.length}>
                        <img className=" rounded-lg h-20 w-20" src={image.img} alt={`Slide ${index}`} />
                        <p className='text-center'>{image.title}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};