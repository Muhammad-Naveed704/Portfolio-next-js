// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./navLink";
// import { color, motion, stagger } from "framer-motion";

// const links = [
//   { url: "/", title: "Home"},
//   { url: "/about", title: "About" },
//   { url: "/portfolio", title: "Portfolio" },
//   { url: "/contact", title: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const topVariants = {
//     closed: {
//       rotate: 0,
//     },
//     opened: {
//       rotate: 45,
//       backgroundColor: "black",
//     },
//   };
//   const centerVariants = {
//     closed: {
//       opacity: 1,
//     },
//     opened: {
//       opacity: 0,
//     },
//   };
//   const botomVariants = {
//     closed: {
//       rotate: 0,
//     },
//     opened: {
//       rotate: -45,
//       backgroundColor: "black",
//     },
//   };
//   const listVariants = {
//     closed: {
//       x: "100vw",
//     },
//     opened: {
//       x: 0,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.2,
//       },
//     },
//   };
//   const listItemVariants = {
//     closed: {
//       x: -10,
//       opacity: 0,
//     },
//     opened: {
//       x: 0,
//       opacity: 1,
//     },
//   };
//   return (
//     <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
//       <div className="hidden md:flex gap-4 w-1/3"> 
//         {links.map((link) => (
//           <NavLink link={link} key={link.title} />
//         ))}
        
//       </div>

//       {/* logo */}

//       <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
//         <Link
//           href="/"
//           className="text-sm bg-red-400 rounded-md p-1 font-semibold flex items-center justify-center"
//         >
//           <span className="text-white mr-1">Mern</span>
//           <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
//             .Stack
//           </span>
//         </Link>
//       </div>
//       <div className="flex gap-6 w-1/3">
//         <Link href="https://www.linkedin.com/in/muhammad-naveed-598197230/">
//           <Image src="/linkedin.png" width={30} height={30} />
//         </Link>
//         <Link href="https://github.com/Muhammad-Naveed704">
//           <Image src="/githubsvg.png" width={30} height={30} />
//         </Link>
//         <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
//           <Image src="/gmail.png" width={30} height={30} />
//         </Link>
//         <Link href="https://www.instagram.com/muhammadnaveed7884?igsh=MXFmMmh6aGcxZ3oxMg==">
//           <Image src="/instagram.png" width={30} height={30} />
//         </Link>
//         <Link href="https://api.whatsapp.com/send?phone=923442862704&text=hi%20my%20name%20is%20Muhammad%20Naveed">
//           <Image src="/whatsapp.png" width={30} height={30} />
//         </Link>
//       </div>
//       {/* responsive */}
//       <div className="md:hidden">
//         <button
//           className="w-10 h-8 flex flex-col justify-between z-50 relative "
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           <motion.dev
//             variants={topVariants}
//             animate={open ? "opened" : "closed "}
//             className="w-10 h-1 bg-white rounded origin-left"
//           ></motion.dev>
//           <motion.dev
//             variants={centerVariants}
//             animate={open ? "opened" : "closed"}
//             className="w-10 h-1 bg-white rounded"
//           ></motion.dev>
//           <motion.dev
//             variants={botomVariants}
//             animate={open ? "opened" : "closed "}
//             className="w-10 h-1 bg-white rounded origin-left"
//           ></motion.dev>
//         </button>
//         {/* menu list */}
//         {open && (
//           <motion.div
//             variants={listVariants}
//             initial="closed"
//             animate="opened"
//             className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-40"
//           >
//             {links.map((link) => (
//               <motion.div
//                 className=""
//                 variants={listItemVariants}
//                 key={link.title}
//               >
//                 <Link href={link.url}>{link.title}</Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45, backgroundColor: "black" },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const bottomVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45, backgroundColor: "black" },
  };
  const listVariants = {
    closed: { x: "100vw" },
    opened: {
      x: 0,
      transition: { when: "beforeChildren", staggerChildren: 0.2 },
    },
  };
  const listItemVariants = {
    closed: { x: -10, opacity: 0 },
    opened: { x: 0, opacity: 1 },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-red-400 rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Mern</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .Stack
          </span>
        </Link>
      </div>

      <div className="flex gap-6 w-1/3">
        <Link href="https://www.linkedin.com/in/muhammad-naveed-598197230/">
          <Image src="/linkedin.png" width={30} height={30} alt="LinkedIn" />
        </Link>
        <Link href="https://github.com/Muhammad-Naveed704">
          <Image src="/githubsvg.png" width={30} height={30} alt="GitHub" />
        </Link>
        <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new">
          <Image src="/gmail.png" width={30} height={30} alt="Gmail" />
        </Link>
        <Link href="https://www.instagram.com/muhammadnaveed7884?igsh=MXFmMmh6aGcxZ3oxMg==">
          <Image src="/instagram.png" width={30} height={30} alt="Instagram" />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=923442862704&text=hi%20my%20name%20is%20Muhammad%20Naveed">
          <Image src="/whatsapp.png" width={30} height={30} alt="WhatsApp" />
        </Link>
      </div>

      {/* Responsive menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded"
          />
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-white rounded origin-left"
          />
        </button>

        {/* Menu list */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-white text-black flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                className=""
                variants={listItemVariants}
                key={link.title}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
