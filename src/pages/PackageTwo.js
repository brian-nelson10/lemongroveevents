import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Lemon2 from "../components/Lemon/lemonTwo.js";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import Image from "../components/Image";
import mobile from "../assets/images/event.jpg";
import mobileWeb from "../assets/images/web/event.webp";

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
const pack = {
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
const PackageTwo= () => {
     // Scroll user to top to avoid showing the footer
     React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    const navigate = useNavigate();
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 675) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    function handleBook() {
         navigate("/book");
     };
     function handleDate() {
      navigate("/date");
    }
    function handleIdo() {
      navigate("/ido");
    }
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
            className="mx-[1rem] lg:mx-[2rem] mt-[7rem] -mb-[16rem] z-40">
        <section className="grid grid-cols-2 -mx-3 lg:mx-[2rem] flex items-center h-[30%] w-vw mb-10 bg-fixed rounded-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] event-head">
  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-wide">
  Event.
  </motion.div>
</section>
<section>
<section className="mb-32 text-[#283845]">
<div className="container mx-auto text-center rounded-lg bg-center bg-fixed lg:visible event-img">
  <div className="grid lg:grid-cols-3 flex items-center">
    <div className="mb-12 lg:mb-0">
   
      <div
        className="block relative z-40 rounded-lg opacity-.5 shadow-[0_35px_80px_10px_rgba(0,0,1,1)] px-6 py-12 lg:py-6 lg:mt-[2rem] lg:mb-[18rem] xl:py-12 lg:px-10 lg:-mr-12"
        style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}
      >
      <h3 className="font-bold text-lg lg:text-[2rem] text-[#283845] font-roboto mb-3">Birthday, Mother's Day, Bridal Shower or just cause you're sassy and fun.</h3>
      <h5 className="text-xl text-[#283845] font-roboto font-bold tracking-wide ml-4 lg:mb-10 xl:mb-12">Let's throw an unforgettable celebration.</h5>
<div className="grid grid-cols-3">
    <div className="col-span-3">
      <p className="font-bold text-end font-larissa text-[3rem] lg:text-[4rem] text-[#283845] tracking-widest lg:-mt-[2rem] -mb-4 justify-start">Event.</p>
      </div>
      </div>
      <ul className="z-60 mx-4">
        <li className="flex items-center justify-start mb-4">
           <p className="font-roboto font-bold text-lg text-[#283845] linksP mr-5">- 2 Hours</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- 2-8 People</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Low Picnic Tables</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Boho Tent</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Rugs, Pillows & Chairs</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Festive Lighting & Candles</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Tableware & Decor</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto font-bold text-lg text-[#283845] linksP">- Choice of Location</p>
        </li>
        <li className="flex items-center justify-start mb-4 ml-2">
            <p className="font-larissa text-xl font-bold text-[#283845]">Price $ 400.</p>
        </li>
      </ul>
      <div className="grid lg:grid-cols-4 gap-4">
         <div className="grid z-50 text-center "> 
            <Button children="Book Now" onClick={handleBook} />
         </div> 
      </div>
      </div> 
    </div>
    <div className="absolute mr-4 mb-[4rem] -bottom-[46rem] lg:invisible">
      <Image 
        srcset={mobileWeb} 
        fallback={mobile}
        />
    </div>
  </div>
</div>
</section>
</section>
<section className="grid mb-[32rem] -mt-[22rem] -ml-[3rem] lg:mb-[9rem] z-10">
    <br/>
    <LazyLoadComponent>
    <div className="grid z-50" >
    <Lemon2 />
    </div>
    </LazyLoadComponent>
</section>
<hr className="border-[#283845]"/>
<div className="grid grid-cols-2 mt-[5rem] z-50">
      <div className="grid col-span-1 flex flex-row ml-[2rem] group" onClick={handleDate}>
      <svg className="rotate-[90deg] z-60 hover:cursor-pointer" width="36" height="66" viewBox="0 0 26 46" fill="#283845" stroke="#283845" strokeWidth="0" opacity=".9" xmlns="http://www.w3.org/2000/svg">
<path d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z"/>
</svg>
<p className="font-larissa font-bold tracking-wide text-md -mt-7 -ml-3 lg:opacity-0 opacity-100 group-hover:opacity-100">Date</p>
      </div>
      <div className="grid col-span-1 flex flex-row -mt-[14px] mr-[2rem] group justify-end" onClick={handleIdo}>
      <svg className="-rotate-[90deg] z-60 hover:cursor-pointer" width="36" height="66" viewBox="0 0 26 46" fill="#283845" stroke="#283845" strokeWidth="0" opacity=".9" xmlns="http://www.w3.org/2000/svg">
<path d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z"/>
</svg>
<div className="font-larissa font-bold tracking-wide text-md lg:opacity-0 opacity-100 group-hover:opacity-100">I Do</div>
      </div>
    </div>
        </motion.main>
        <LazyLoadComponent>
        <Footer/>
        </LazyLoadComponent>
        </>
    );
};
export default PackageTwo;