import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/stock.jpeg";
import Contact from "../components/Contact";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const main = {
    initial: {
        x: -1000,
        opacity: 0
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            mass: 0.4,
            damping: 8,
            duration: .8,
        }
    },
    exit: {
        opacity: 1,
        x: 1000,
        transition: {
            ease: 'easeInOut',
            duration: .3
        }
    }
}
const head = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .8,
            ease: "easeIn"
        }
    }
}
const Book = () => {
    // const navigate = useNavigate();
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 675) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
        <div className={color ? "z-50 fixed top-0 transition-ease hidden" : "z-50 fixed top-0 transition-ease visible"}>
        <Navbar text="Lemon Grove" className="bg-white"/>
        </div>
        <motion.main 
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] mt-[7rem] z-40">
                
        <section className="grid grid-cols-2 mx-[2rem] flex items-center h-[30%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-vw mb-20 bg-fixed bg-center bg-cover rounded-sm custom-img"
>

  <motion.div 
    variants={head}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white ">
  Book Online
  </motion.div>
 
</section>
<section className="grid grid-cols-3 gap-4 mx-[5rem]">
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>    
</section>
<hr className="mt-10"/>
<section>
</section>
<section className="grid -mt-[14rem] -ml-[3rem] mb-[9rem] z-50">
    <div className=" z-50" >
    <Contact />
    </div>
    <br/>
    <div className="grid z-40" >
    <Lemon />
    </div>
</section>

<br/>
        </motion.main>
        <Footer/>
        </>
    );
};
export default Book;