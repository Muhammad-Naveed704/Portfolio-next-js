"use client"
import Image from "next/image";
import {motion} from "framer-motion";
import Link from "next/link";
const Homepage = () => {
  return(
 <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1.2}}>

    <div className="h-full flex flex-col lg:flex-row px-4  bg-black sm:px-8  md:px-12 lg:px-20 xl:px-48">
    {/* image container */}
    <div className="h-1/2 lg:h-full  -mt-2 lg:w-1/2 relative lg:mr-32" >
      <Image src="/hero.png"  alt="" fill className="object-contain "  />
    </div>
    {/* text container */}
    <div className="h-2/3 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center  sm:-pt-30  justify-center">
      {/* title */}
      <h1 className=" text-2xl  md:text-4xl  w-full text-white font-bold"> Hi I am <span className="text-red-400">M</span>uhammad <span className="text-red-400">N</span>aveed Mern Stack Developer  </h1>
  
      {/* desc */}
      <p className="mt-6 md:-mt-4 md-text-xl text-justify text-2xl  text-white">Welcome to my portfolio I am a dedicated MERN stack developer with a strong passion for building scalable and efficient web applications. With a solid foundation in MongoDB, Express.js, React, and Node.js, I bring a comprehensive skill set to every project I undertake.
</p>
      <div className="w-full flex justify-evenly  -mt-3 "> 
        <Link href={"/portfolio"}>
        <Link href={"/portfolio"}><button className="p-3 md:p-4 lg:p-4  rounded-lg ring-1  ring-white bg-red-400 text-white">View My Work</button></Link>
        </Link>
        <a href={"/NEW MERN STACK DEV CV.pdf"} download={"cv"} ><button className="p-3 md:p-4 lg:p-4 rounded-lg ring-2 ring-red-400 bg-white text-black font-bold">Download Cv</button></a>
        
      </div>
    </div>
    </div>
 </motion.div>
) 
};

export default Homepage;