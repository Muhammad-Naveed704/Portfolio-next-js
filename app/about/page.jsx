"use client";

// import React, { useRef } from "react";
// import { motion, useInView, useScroll } from "framer-motion";
import Brain from "../components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll  lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY title */}

            <h1 className="font-bold text-2xl text-white">Professional Journey</h1>
            <div className="w-64 h-1 rounded bg-red-400 -mt-11"></div>
            {/* BIOGRAPHY desc */}

            <p className="text-lg  text-white text-justify">
            My journey into the world of technology began with an intermediate education in Pre-Engineering, which provided me with a strong analytical and problem-solving background. This foundation was further solidified through the Saylani Mass IT Training Program, where I specialized in the MERN stack. This intensive program equipped me with practical, hands-on experience and a deep understanding of modern web development technologies
            </p>
            {/* BIOGRAPHY quote */}

            <span className="text-justify text-white">
            Passionate MERN stack developer dedicated to creating innovative web applications and continuously advancing my technical expertise
            </span>
            {/* BIOGRAPHY sign svg */}

            <div className="self-end from-neutral-50 text-white">Muhammad Naveed</div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#e2e8f0"
              width={50}
              height={50}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </motion.svg>
          </div>
          {/* SKILL CONTAINER */}
          <div className="flex flex-col gap-12 -mt-12 md:-mt-24 xl:-mt-32 justify-center" ref={skillRef}>
            {/* SKILL title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              SKILLS 
              <h1 className="mt-5"><span className="text-red-400">FrontEnd</span> Development</h1>
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=" flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Bootstrap
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              React Native
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              TypeScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              jQuery
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Styled-components
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Framer Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Github
              </div>
              
            </motion.div>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
               
        <span className="text-red-400">BackEnd</span> Development
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className=" flex gap-4 flex-wrap"
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
             Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Express.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              MySQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              WebSocket
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-red-400 text-white hover:bg-white hover:text-black">
              Firebase 
              </div>
             
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#f1f5f9"
              width={50}
              height={50}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M12 6V14"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M15 11L12 14L9 11"
                  stroke="#f1f5f9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}

          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE title */}

            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl text-white"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE list */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERIENCE list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Frontend Developer 
                  </div>
                  {/* job desc */}
                  <div className=" p-3 text-sm italic text-white">
                  I am working as a frontend developer on Upwork
                  </div>
                  {/* job data */}
                  <div className="p-3 text-white text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* company name */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Upwork
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-red-400 rounded relative ">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* EXPERIENCE list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-red-400 rounded relative ">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                  Full Stack Development Intern
                  </div>
                  {/* job desc */}
                  <div className=" p-3 text-sm italic text-white">
                  I am interning as a Full Stack Developer at Cognifyz Technologies
                  </div>
                  {/* job data */}
                  <div className="p-3  text-sm font-semibold text-white">
                    2024 - April
                  </div>
                  {/* company name */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Cognifyz Technologies
                  </div>
                </div>
              </div>
              {/* EXPERIENCE list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Operation Supervisor
                  </div>
                  {/* job desc */}
                  <div className=" p-3 text-sm italic text-white">
                  I work as an Operations and Inventory Supervisor at Connect Logistics
                  </div>
                  {/* job data */}
                  <div className="p-3 text-white text-sm font-semibold">
                    2020 - Jan 2024
                  </div>
                  {/* company name */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Connect Logistics
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 ">
                  {/* line */}
                  <div className="w-1 h-full bg-red-400 rounded relative ">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden  xl:1/4 lg:block  w-1/3  sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
