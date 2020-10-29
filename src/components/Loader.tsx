import React from 'react'
import { motion,useCycle } from 'framer-motion'


const loadervariants = {
  animationOne: {
    // x: [-150,-110],
    // y: [-320, -360],
    x: [20, 40],
    y: [0, 70], 
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5
      },
      y: {
        yoyo: Infinity,
        duration: 1,
        ease: 'easeOut'
      }
    }
  },
  animationTwo: {
    // x: [30,-290],
    // y: [0, 40],
    x: [20, 40],
    y: [0, 70],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
}


const Loader = () => {

  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div onHoverEnd={() => cycleAnimation()} className='loader'
        variants={loadervariants}
        animate={animation}
      />
      {/* </motion.div> */}
      {/* <div >Cycle Loader</div> */}
    </>
  )
}

export default Loader;