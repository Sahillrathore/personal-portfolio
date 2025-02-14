import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { title: "React Js", img: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
  { title: "JavaScript", img: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" },
  { title: "Html", img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-256.png" },
  { title: "Css", img: "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png" },
  { title: "Tailwind", img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,w_500,h_500,g_center/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/events/Tailwind_CSS_Logo.svg_GkNDLAs.png" },
  { title: "Bootstrap", img: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/576/bootstrap-256.png" },
  { title: "Strapi", img: "https://assets.super.so/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png" },
  { title: "Firebase", img: "359956.png" },
];

const Skills = () => {
  return (
  <div className="skills-section bg-gray-200" id="skills">
      <div className="skills-elements-container py-16 px-14">
        <motion.div>
          <div className="skills-section my-4 mt-8 px-6">
            <h1 className="text-zinc-800 md:text-5xl text-3xl font-bold mb-8 text-center w-fit m-auto">Skills</h1>
            <div className="more-skills flex flex-wrap md:gap-12 gap-6 mt-7 text-sm">
              <FramerMotionSlider images={images} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const FramerMotionSlider = ({ images }) => {
  const slideWidth = 100 / images.length;

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-8 h-fit"
        initial={{ x: 0 }}
        animate={{ x: `-${100}%` }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: 'linear',
        }}
      >
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-fit flex flex-col h-fit items-center" style={{ width: `${slideWidth}%` }} key={index}>
            <img className="rounded-lg sm:h-20 sm:w-20 w-20" src={image.img} alt={image.title} />
            <p className="text-center sm:block hidden">{image.title}</p>
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-shrink-0 w-fit flex h-fit flex-col items-center" style={{ width: `${slideWidth}%` }} key={index + images.length}>
            <img className="rounded-lg sm:h-20 sm:w-20" src={image.img} alt={image.title} />
            <p className="text-center">{image.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
