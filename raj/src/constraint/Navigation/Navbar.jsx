import React from 'react'
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className='app__header app__flex'>
        <motion.div 
        whileHover={{color:'GrayText',opacity:[0,100]}}
        transition={{duration:5}}>
            <div  className="cont">
            Navbar</div></motion.div></div>
  )
}

export default Navbar