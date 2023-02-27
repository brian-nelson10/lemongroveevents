import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function Navbar({text}) {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate('/book')
  };
  function handleHome() {
    navigate('/home')
  };
  function handlePackage() {
    navigate('/date')
  }
  function handlePackageTwo() {
    navigate('/event')
  }
  function handlePackageThree() {
    navigate('/ido')
  }
  function handleAddOns() {
    navigate('/addons')
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 968) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  let drop={
    visibility: "hidden"
  };
  if(isHover){
    drop.visibility="visible"
  }
  else{
    drop.visibility="hidden"
  }

  window.addEventListener('scroll', changeColor)

  const letters = Array.from(text);

  const dropDown = {
    opened: {
      backgroundColor: "transparent",
      opacity: .8,
     top: -20,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    closed: {
      top: "-90vh",
    },
  };
  const linkVariants = {
    opened: {
      opacity: 1,
      y: 1,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  const links = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 1.5],
      },
    },
  };
  const lineTop = {
    opened: {
      rotate: 45,
      translateY: 10
    },
    closed: {
       rotate: 0,
       translateY: 0    
    },
  }
  const lineMiddle = {
    opened: {
      opacity: 0
    },
    closed: {
      opacity: 1
    },
  }
  const lineBottom = {
    opened: {
      rotate: -45,
      translateY: -8,
      backgroundColor: "white"
    },
    closed: {
       rotate: 0,
       translateY: 0
    },
  }
// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {  staggerChildren: .08, delayChildren: 1.4 * i },
    }),
  };
// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 1.8,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child1 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2.5,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child2 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 2.75,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child3 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 3,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  function sendEmail() {
    window.location = "mailto:lemongroveevents@gmail.com";
  }
  return (
      <>
      <motion.nav viewport={{ once: true }} layout className={color ? 'navbar z-60 bg-white opacity-[80%] fixed flex flex-wrap w-screen -mt-6 p-1 pt-2 z-50 hover:cursor-pointer md:p-4' : 'navbar z-60 bg-transparent fixed flex flex-wrap w-screen p-1 pt-2 z-50 hover:cursor-pointer md:p-4'}>
        <div className="grid grid-cols-3 w-screen ">
       <motion.div
       layout
     className="text-xl justify-start text-start items-center pl-4 pt-5 md:text-4xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span className="font-larissa text-black hover:text-[#d6d6d6]" variants={child} key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div> 
    <motion.div 
      layout
      variants={links}
      className="font-larissa text-black text-center text-xl items-center pt-6 justify-center md:text-3xl">
      <motion.span onClick={handleHome} className="mx-4 links">Home</motion.span>
      <motion.button
        onClick={()=>setIsHover(!isHover)}
        className="mx-4 links"
        >Packages</motion.button>
      <motion.span onClick={handleNavigate} className="mx-4 links">Book Online</motion.span>
      </motion.div>
        <motion.div className="container-fluid flex flex-wrap justify-end pr-6">
          <motion.div 
            variants={links}
            className={isOpen ? "invisible" : "font-larissa text-[1.5rem] mt-4 mr-4"}>305-894-0900</motion.div>
      <motion.div
        layout
        //   variants={iconVariants}
        className="container-fluid md:pr-6"
        animate={isOpen ? "opened" : "closed"}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact"
      >
        <motion.svg 
            className="w-14 h-15 sm:w-20 h-20" 
             viewBox="0 0 90 90" id="emoji" xmlns="http://www.w3.org/2000/svg">
          <g id="color" />
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <motion.g 
            animate={isOpen ? "opened" : "closed"}
            initial={false}
            id="line">
              <motion.g 
          variants={child3} 
          initial="hidden"
          animate="visible">
            <motion.line className="line top" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineTop} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="26" y2="26" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterLimit="10" strokeWidth="2" />
            </motion.g>
            <motion.g 
          variants={child2} 
          initial="hidden"
          animate="visible">
            <motion.line className="line middle" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineMiddle}  transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="36" y2="36" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterLimit="10" strokeWidth="2" />
            </motion.g>
            <motion.g 
          variants={child1} 
          initial="hidden"
          animate="visible">
            <motion.line className="line bottom" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineBottom}  transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="46" y2="46" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterLimit="10" strokeWidth="2" />
            </motion.g>
          </motion.g>
        </motion.svg>
        </motion.div>
      </motion.div>

      </div>
      <div className="container mx-auto h-0">
      <motion.div layout variants={dropDown} initial={false} animate={isHover ? "opened" : "closed"} id="package" style={drop} className="ml-[39rem] relative z-70 bg-transparent divide-y divide-gray-100 text-center rounded-lg shadow-black shadow-sm w-44">
    <ul className="py-2 mt-2 text-sm ">
      <motion.li variants={linkVariants}>
        <div onClick={handlePackage} className="px-4 py-2 bg-[#283845] rounded-large text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Date.</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div onClick={handlePackageTwo} className="px-4 py-2 bg-[#283845] text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Event.</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div onClick={handlePackageThree} className="px-4 py-2 bg-[#283845] text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">I do.</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div onClick={handleAddOns} className="px-4 py-2 bg-[#283845] text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Add-Ons</div>
      </motion.li>
    </ul>
</motion.div>
</div>

    </motion.nav>
    <motion.nav
      className="h-0 w-screen fixed right-0 flex flex-col items-center justify-center align-center z-60"
      initial={false}
      animate={isOpen ? "opened" : "closed"}
    >
        <motion.div id="drawer-contact" variants={dropDown} initial={false} animate={isOpen ? "opened" : "closed"} className="fixed mt-10 bg-transparent -right-[18rem] p-4 overflow-y-auto transition-transform -translate-x-full w-80" tabIndex="-1" aria-labelledby="drawer-contact-label">
   <h5 id="drawer-label" className="inline-flex items-center mb-6 text-xl font-semibold text-white font-larissa uppercase "><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>Contact us</h5>
  
   <form action="#" className="mb-6 bg-[#efe5dc] rounded-lg p-6">
      <div className="mb-6">
         <label htmlFor="email" className="block font-roboto font-bold text-lg mb-2 text-[#283845]">Your email</label>
         <input type="email" id="email" className="bg-[#283845] border border-gray-300 text-[#efe5dc] text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 placeholder:font-roboto placeholder:font-bold" placeholder="name@company.com" required/>
      </div>
      <div className="mb-6">
         <label htmlFor="subject" className="block mb-2 font-roboto font-bold text-lg text-[#283845]">Subject</label>
         <input type="text" id="subject" className="bg-[#283845] border border-gray-300 text-[#efe5dc] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:font-roboto placeholder:font-bold" placeholder="Let us know how we can help you" required/>
      </div>
      <div class="mb-6">
         <label htmlFor="message" className="block mb-2 font-roboto font-bold text-lg text-whited">Your message</label>
         <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-[#efe5dc] bg-[#283845] rounded-lg border placeholder:font-roboto placeholder:font-bold" placeholder="Your message..."></textarea>
      </div>
      <Button children="Submit" className="w-full"/>
   </form>
   <div className="mb-2 text-sm text-[#efe5dc] font-larissa">
      <div onClick={sendEmail} className="hover:underline hover:cursor-pointer">lemongroveevents@gmail.com</div>
   </div>
   <div className="text-sm text-[#efe5dc] font-larissa">
      <div className="hover:underline">305-894-0900</div>
   </div>
</motion.div>
      </motion.nav>
      </>
    );
};