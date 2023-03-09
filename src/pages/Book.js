import React, { useState } from "react";
import "./home.css";
import { motion } from "framer-motion";
// import img1 from "../assets/images/event.jpg";
// import img1Web from "../assets/images/web/event.webp";
import img2 from "../assets/images/champagne.jpg";
import img2Web from "../assets/images/web/champagne.webp";
import img3 from "../assets/images/date.jpg";
import img3Web from "../assets/images/web/date.webp";
import Contact from "../components/Contact";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Image from "../components/Image";

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
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1250;
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth)
      window.addEventListener("resize", handleWindowResize);
  
      // // Return a function from the effect that removes the event listener
      // return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
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
            className="mx-[1rem] lg:mx-[2rem] mt-[7rem] z-40">
                
        <section className="grid grid-cols-2 -mx-3 xl:mx-[2rem] flex items-center h-[30%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-vw mb-10 bg-fixed bg-center bg-cover rounded-sm book-img"
>

  <motion.div 
    variants={head}
    initial="initial"
    whileInView="animate"
    className="p-5 items-center justify-start font-larissa pt-11 text-[1.4rem] xl:text-[1.8rem] h-[7.5rem] text-white ">
  Book Online
  </motion.div>
 
</section>
{width > breakpoint ?  
    <section className="grid grid-cols-2 gap-4 ">
    <div className="mt-2">
    <Image
            srcset={img2Web}
            fallback={img2}
            />
    </div>
    <div>
    <Image
            srcset={img3Web}
            fallback={img3}
            />
       
    </div>    
</section>

:
<section className="grid grid-cols-3 gap-4 xl:mx-[5rem]">
<div className="">
    <Image
            srcset={img3Web}
            fallback={img3}
            />
       
    </div>    
    <div className="mt-6">
    <Image
            srcset={img2Web}
            fallback={img2}
            />
    </div>
    <div>
    <Image
            srcset={img3Web}
            fallback={img3}
            />
       
    </div>    
</section> }

<hr className="mt-10"/>
<section>
</section>
<section className="grid -mt-[14rem] -ml-[3rem] mb-[40rem] xl:mb-[9rem] z-40">
    <div className=" z-40" >
    <Contact />
    </div>
    <br/>
    <div className="grid mt-[122rem] -mb-[110rem] xl:mt-0 z-40" >
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