import React from 'react';
import { Link } from 'react-router-dom';
import { IBaseProps, IPizza } from './interfaces';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.5
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)"
  },
  listHover: {
    scale: 1.3,
    originX: 0,
    color: '#f8e112', 
    transition: {
      type: 'spring',
      stiffness: 300,
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

const Toppings: React.FunctionComponent<IPizza> = ({ addTopping,  base, toppings }) => {
  let TToppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {TToppings.map((topping: string) => {
          let spanClass = toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              variants={containerVariants}
              whileHover='listHover'
              
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
            variants={buttonVariants}
            whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;