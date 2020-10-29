import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { IBaseProps, IPizza} from './interfaces';
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
  }
}

const nextVariants = {
  hidden: {
    x: '-100vw'
  },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  },
}

const listVariants = {
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

// const buttonVariants = {
//   hover: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px rgb(255,255,255)",
//     boxShadow: "0px 0px 8px rgb(255,255,255)",
//   },
// }

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

const Base: FunctionComponent<IBaseProps> = ({ addBase, base, toppings }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h3>Step 1: Choose Your Base</h3>
      {/* <ul>
        
        {bases.map((Bases:string) => {
          const spanClass = base === Bases ? 'active' : '';       
          return (
            <motion.li key={Bases} onClick={(): void => addBase(Bases)}
              variants={listVariants}
              whileHover='listHover'
            >
              <span className={spanClass}>{ Bases }</span>
            </motion.li>
          
          )
        })}
      </ul> */}

      {base && (
        <motion.div className="next"
          variants={nextVariants}
          // initial='hidden'
          // animate='visible'
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;