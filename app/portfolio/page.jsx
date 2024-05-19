"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "bg-black",
    title: " E-Commerce Red Store",
    desc: "This is an e-commerce website that I created using HTML, CSS, JavaScript, and Bootstrap. It features a beautifully crafted layout and design, and it is a static website. I deployed it using Firebase. You can visit the site to check it out",
    img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://shoppingstore-007.web.app/",
  },
  {
    id: 2,
    color: "bg-black",
    title: "Social Media Web app",
    desc: "This is a full-stack CRUD application for social media, built using React.js. It includes features for user login and signup. The application is dynamic, utilizing MongoDB for the backend with Node.js, Express.js, and Firebase. I deployed it live using GitHub and Vercel. Feel free to visit and explore the application",
    img: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://react-social-media-app-ebon.vercel.app/",
  },
  {
    id: 3,
    color: "bg-black",
    title: "Netflix Clone",
    desc: "This is a Netflix clone built using ReactJS, utilizing hooks such as useState, useRef, useEffect, and fetching data through APIs to display movies dynamically. It's a fully responsive website clone. Feel free to visit and check it out!",
    img: "https://images.pexels.com/photos/5082568/pexels-photo-5082568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://netflix0.vercel.app/",
  },
  {
    id: 4,
    color: "bg-black",
    title: "linkedin Clone",
    desc: "This is a LinkedIn clone I've built using ReactJS. It's a dynamic web clone with features like login, signup, and a homepage. Firebase authentication and Firebase storage are used to save user data. Feel free to visit and check it out!",
    img: "https://images.pexels.com/photos/16564260/pexels-photo-16564260/free-photo-of-smartphone-with-linkedin-app.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://linkedin-clone-pi-one.vercel.app/",
  },
  {
    id: 5,
    color: "bg-black",
    title: "Weather Web app",
    desc: "This is a weather web application built using ReactJS, utilizing a free API. It's a dynamic web app created with React and utilizes the fetch npm package. Feel free to visit and check it out!.",
    img: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://react-weather-app-mauve-six.vercel.app/",
  },
  {
    id: 6,
    color: "bg-black",
    title: "e-Commarce web app",
    desc: "This is an e-commerce website that I created using reactjs  JavaScript, and Tailwind css. It features a beautifully crafted layout and design, and it is a static website.  You can visit the site to check it out",
    img: "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://buynest.vercel.app/",
  },
  {
    id: 7,
    color: "bg-black",
    title: "Curency Change app",
    desc: "This is a Curency Change web clone built using ReactJS, utilizing hooks such as useState, useRef, useEffect, and fetching data through APIs to display curency dynamically.  Feel free to visit and check it out!",
    img: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://currencychange.vercel.app//",
  },
  {
    id:8,
    color: "bg-black",
    title: "landing webpage",
    desc: "This is an Landing  webpage asign me to codesoft that I created using HTML, CSS,   It features a beautifully crafted layout and design, and it is a static website. I deployed it using vercel. You can visit the site to check it out",
    img: "https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://cod-soft-b989.vercel.app/",
  },
  {
    id:9,
    color: "bg-black",
    title: "Card Flip",
    desc: "This is an card flip react component  that I created using Reactjs on hover card flip and rotate. I deployed it using vercel. You can visit the site to check it out",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://cardflip-eta.vercel.app/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] text-7xl md:text-8xl lg:text-8xl flex items-center justify-center  text-center">
          <span className="text-white">My Works</span> 
        </div>
        <div className="sticky top-0 flex h-screen gap-6 items-center overflow-hidden bg-red-500">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center  justify-around bg-gradient-to-r bg-black to-black" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex justify-items-stretch justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white">
                  <h1 className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl mt-12">
                    {item.title}
                  </h1>
                  <div className="relative  pt-1 w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  {/* <Link href={item.link}> */}

                    <Image src={item.img} alt="" className="rounded-2xl"  width={350} height={350}/>
                  {/* </Link> */}
                    
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px]  lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex mb-40 justify-end">
                    <button className="p-2  text-sm md:p-4 md:text-md lg:p-1  lg:text-lg bg-red-500 text-white font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex bg-black  flex-col  items-center justify-center text-center">
        <h1 className=" lg:text-4xl font-bold  sm:text-2xl  text-white ">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64  md:w-[400px] md:h-[400px] "
          >
            <defs >
              <path 
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#fff">
              <textPath xlinkHref="#circlePath" className="text-xl">
                
                  Front-end Developer and UI Designer
                   
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28  cursor-pointer md:h-28 absolute top-0 font-bold left-0 right-0 bottom-0 m-auto bg-red-400 text-white rounded-full flex items-center justify-center"
          >
              
              Hire Me
       
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
