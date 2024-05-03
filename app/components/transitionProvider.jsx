"use client";
import { AnimatePresence, delay } from 'framer-motion'
import Navbar from './navbar'
import {motion} from "framer-motion"
import { usePathname } from 'next/navigation';
const TransitionProvider =({children}) => {
    const pathName = usePathname();
  return (
    <AnimatePresence>
    <div key={pathName} className="w-screen h-screen  bg-black bg-gradient-to-b from-blue-100 to-red-100">
   <motion.div className='h-screen w-screen fixedrounded-b-[100px]  z-40' animate={{height:"0vh"}} exit={{height:"140vh"}} transition={{duration:2, ease:"easeOut"}}/>
   <motion.div
    className='h-screen w-screen fixed  bg-red-500  rounded-b-[100px] bottom-0 z-40'
     initial={{height:"140vh"}} 
     animate={{height:"0vh", transition:{delay:2}}} />
          <div className="h-24">
        <Navbar/>
               </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
    </AnimatePresence>
  )
} 

export default TransitionProvider
