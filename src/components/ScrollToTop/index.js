import React, { useState, useEffect } from 'react';
import Arrow from '../../assets/images/arrow.svg';
import { motion } from "framer-motion";
const ScrollToTop = () =>{
const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 900){
      setVisible(true)
    } 
    else if (scrolled < 500){
      setVisible(false)
    }
  };
  
useEffect(() => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}, []);

window.addEventListener('scroll', toggleVisible);
const scroll = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delay: .5,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 1.5],
      },
    },
  };
return (
    <>
      <motion.img 
      layout
      variants={scroll}
      initial={false}
      animate= {visible ? "animate" : "initial" }
      style={{
        visibility: visible ? 'visible' : 'hidden',
      }}
      onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
      className="fixed bottom-[40px] inline-block -right-5 bg-transparent h-[8%] w-[8%] hover:cursor-pointer"
      src={Arrow} alt="arrow"/>
  </>
);
}
export default ScrollToTop;