import React, { useRef, useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import { useAnimation } from "framer-motion";

export default function Navbar({ text }) {
  const form = useRef();
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
  function handlePackageFour() {
    navigate('/celebrate')
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
  let drop = {
    visibility: "hidden"
  };
  if (isHover) {
    drop.visibility = "visible"
  }
  else {
    drop.visibility = "hidden"
  }

  window.addEventListener('scroll', changeColor)

  const letters = Array.from(text);
  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        type: "spring",
        damping: 12,
        stiffness: 100,
        
      },
    },
    closed: {
      top: "-190vh",
    },
  };
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
        delay: 1,
        duration: 2,
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
      transition: { staggerChildren: .08, delayChildren: 1.1 * i },
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

  const [isAnimating, setIsAnimating] = useState(false);
  const loadingBarControls = useAnimation();
  const textControls = useAnimation();
  const newTextControls = useAnimation();
  const animate = async () => {
    setIsAnimating(true);
    loadingBarControls.start({
      width: '100%',
      transition: { duration: 1.35 }
    });
    await loadingBarControls.start({
      width: '100%',
      transition: { duration: 1.35 }
    });
    textControls.start({
      opacity: '0',
      transition: { duration: .3, ease: 'ease' }
    });
    await newTextControls.start({
      opacity: '100',
      transition: { duration: .3 }
    });

    setIsAnimating(false);
  };
  function sendEmail() {
    window.location = "mailto:lemongroveevents@gmail.com";
  }
  const sendEmailButton = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b1dblxj', 'template_yetur2s', form.current, 'a6ADH15ktmshf56k_')
  }
  return (
    <>
      <motion.nav viewport={{ once: true }} layout className={color ? 'navbar z-60 bg-white w-screen opacity-[80%] h-[4.5rem] xl:h-[5.5rem] fixed flex flex-wrap -mt-6 p-1 pt-2 hover:cursor-pointer xl:p-4' : 'navbar z-60 bg-transparent w-screen h-[4.5rem] fixed xl:flex xl:flex-wrap p-1 pt-2 z-50 hover:cursor-pointer xl:p-4'}>
        <div className="grid grid-cols-3 w-screen my-2">
          <motion.div
            layout
            className="text-xl justify-start text-start items-center xl:pl-4 pt-5 xl:text-4xl hover:cursor-pointer"
            variants={container}
            initial="hidden"
            animate="visible"
            onClick={handleHome}
          >
            {letters.map((letter, index) => (
              <motion.span className="font-larissa text-black hover:text-[#d6d6d6] hover:cursor-pointer " variants={child} key={index} >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            layout
            variants={links}
            className="invisible xl:visible font-larissa text-black text-center text-xl items-center pt-6 justify-center xl:text-3xl">
            <motion.span onClick={handleHome} className="mx-4 links">Home</motion.span>
            <motion.button
              onClick={() => setIsHover(!isHover)}
              className="mx-4 links"
            >Packages</motion.button>
            <motion.span onClick={handleNavigate} className="mx-4 links">Book Online</motion.span>
          </motion.div>
          <motion.div className="flex-row container-fluid span-col-2 flex xl:flex-wrap justify-end xl:pr-6">
            <motion.div
              variants={links}
              className={isOpen ? "invisible" : "font-larissa text-xs mt-7 -ml-4 xl:ml-0 xl:text-[1.5rem] xl:mt-7 xl:mr-4"}>305-894-0900</motion.div>
            <motion.div
              layout
              //   variants={iconVariants}
              className="xl:container-fluid xl:pr-6"
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
                      initial={false} variants={lineTop} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="26" y2="26" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                  </motion.g>
                  <motion.g
                    variants={child2}
                    initial="hidden"
                    animate="visible">
                    <motion.line className="line middle" animate={isOpen ? "opened" : "closed"}
                      initial={false} variants={lineMiddle} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="36" y2="36" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                  </motion.g>
                  <motion.g
                    variants={child1}
                    initial="hidden"
                    animate="visible">
                    <motion.line className="line bottom" animate={isOpen ? "opened" : "closed"}
                      initial={false} variants={lineBottom} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="46" y2="46" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
                  </motion.g>
                </motion.g>
              </motion.svg>
            </motion.div>
          </motion.div>

        </div>
        <div className="container invisible xl:visible mx-auto h-0">
          
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
                <div onClick={handlePackageFour} className="px-4 py-2 bg-[#283845] text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Celebrate.</div>
              </motion.li>
              <motion.li variants={linkVariants}>
                <div onClick={handleAddOns} className="px-4 py-2 bg-[#283845] text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Add-Ons</div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

      </motion.nav>
      
    <motion.nav
      className="visible xl:invisible h-screen w-screen fixed flex flex-col items-center justify-center align-center z-60 mobile-img"
      initial={false}
      variants={menuVariants}
      animate={isOpen ? "opened" : "closed"}
    >
        <motion.li onClick={handleHome} className="text-white font-larissa mt-[4rem] mb-4 text-[3rem] list-none z-60" variants={linkVariants}>home</motion.li>
        <motion.li onClick={handleNavigate} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>Book Online</motion.li>
        <motion.li onClick={handlePackage} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>date</motion.li>
        <motion.li onClick={handlePackageTwo} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>event</motion.li>
        <motion.li onClick={handlePackageThree} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>i do</motion.li>
        <motion.li onClick={handlePackageFour} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>celebrate</motion.li>
        <motion.li onClick={handleAddOns} className="text-white font-larissa mb-4 text-[3rem] list-none" variants={linkVariants}>Add On's</motion.li>
      </motion.nav>
      
      <motion.nav
        className="h-0 w-screen fixed right-0 flex flex-col items-center justify-center align-center z-60 invisible xl:visible"
        initial={false}
        animate={isOpen ? "opened" : "closed"}
      >
        <motion.div id="drawer-contact" variants={dropDown} initial={false} animate={isOpen ? "opened" : "closed"} className="fixed mt-10 bg-transparent -right-[18rem] p-4 overflow-y-auto transition-transform -translate-x-full w-80" tabIndex="-1" aria-labelledby="drawer-contact-label">
          <h5 id="drawer-label" className="inline-flex items-center mb-6 text-xl font-semibold text-[#283845] font-larissa uppercase "><svg className="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>Contact us</h5>

          <form ref={form} onSubmit={sendEmailButton} className="mb-6 bg-[#efe5dc] rounded-lg p-6">
            <div className="mb-6">
              <label htmlFor="email" className="block font-roboto font-bold text-lg mb-2 text-[#283845]">Your email</label>
              <input type="email" name="email" id="email" className="bg-[#283845] border border-gray-300 text-[#efe5dc] text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 placeholder:font-roboto placeholder:font-bold" placeholder="name@company.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block mb-2 font-roboto font-bold text-lg text-[#283845]">Subject</label>
              <input type="text" name="subject" id="subject" className="bg-[#283845] border border-gray-300 text-[#efe5dc] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:font-roboto placeholder:font-bold" placeholder="Let us know how we can help you" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 font-roboto font-bold text-lg text-whited">Your message</label>
              <textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-[#efe5dc] bg-[#283845] rounded-lg border placeholder:font-roboto placeholder:font-bold" placeholder="Your message..."></textarea>
            </div>
            <div className="container mt-8 justify-center items-center">
              <button className="btn1 btn-solid1 btn-white1 text-[#283845] font-larissa tracking-widest font-bold border-[#283845]" onClick={() => !isAnimating && animate()}  >
                <motion.div animate={textControls}>
                <input className="texter hover:cursor-pointer z-50" type="submit" value="Submit" />
                </motion.div>
                <motion.div className="opacity-0 top-3 absolute z-40" animate={newTextControls}>Sent!</motion.div>
                <motion.div className="loading-bar z-50" animate={loadingBarControls} />
              </button>
            </div>
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