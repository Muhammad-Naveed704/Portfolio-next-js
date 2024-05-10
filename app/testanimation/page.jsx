 "use client"
 import React from 'react'
import {motion} from "framer-motion";
 
function TestPage() {
  const varients ={
    variant1:{
      x:400,
      y:300,
      opacity: 0.5,
      transition:{
        duration : 3
      }
    },
    variant2:{
      x:100,
      y:-300,
      rotation :90,
    },
  }
  return (
    <div className='f-full flex items-center justify-center'>
        <motion.div  className="w-96 h-96 bg-red-400 rounded" variants={varients} animate="variant1"></motion.div>
    </div>
  )
}

export default TestPage
