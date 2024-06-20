import React from 'react'
import {motion} from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full bg-green-700 w-screen h-screen'
        style={{zIndex: "60"}}
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{duration: 0.53, ease: "easeInOut"}}

        />
        <motion.div className='fixed top-0 bottom-0 right-full bg-purple-600 w-screen h-screen'
        style={{zIndex: "58"}}
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay: 0.3, duration: 0.53, ease: "easeInOut"}}

        />
        <motion.div className='fixed top-0 bottom-0 right-full bg-black w-screen h-screen'
        style={{zIndex: "55"}}
        initial={{x: "100%", width: "100%"}}
        animate={{x: "0%", width: "0%"}}
        transition={{delay: 0.5, duration: 0.53, ease: "easeInOut"}}

        />
    </>
  )
}

export default TransitionEffect