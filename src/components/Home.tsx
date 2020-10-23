import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const homeContainerVariants = {
  hidden: {
    opacity:0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5, duration: 2
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  },
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={homeContainerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.h2>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  )
}

export default Home;