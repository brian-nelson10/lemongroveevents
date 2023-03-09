import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Button from "../components/Button";
import Image from "../components/Image";
import champagneWeb from "../assets/images/web/champagne.webp";
import champagne from "../assets/images/champagne.jpg";
import floralWeb from "../assets/images/web/floral.webp";
import floral from "../assets/images/floral.jpg";
import grazerWeb from "../assets/images/web/grazer.webp";
import grazer from "../assets/images/grazer.jpeg";
import hotelWeb from "../assets/images/web/hotel.webp";
import hotel from "../assets/images/hotel.png";

import { LazyLoadComponent } from "react-lazy-load-image-component";

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
const AddOns= () => {
     // Scroll user to top to avoid showing the footer
     React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);
    // const navigate = useNavigate();
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 700) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    // function handleAddOns() {
    //     navigate("/addons");
    // };
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
            className="mx-[1rem] lg:mx-[2rem] mt-[7rem] z-50">
        <section className="grid grid-cols-2 -mx-3 lg:mx-[2rem] flex items-center h-[30%] w-vw mb-10 bg-fixed bg-center bg-cover rounded-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] addon-head">
  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-wide">
  Add On's 
  </motion.div>
</section>
<section className="text-center font-roboto font-bold tracking-wide text-[#283845] mt-6 lg:-mb-14">

<div className="text-[2.2rem] lg:text-[3rem] font-larissa">Customize your package.</div>

<div className="text-xl lg:text-[1.5rem] mb-[1rem] lg:mb-1 lg:-mt-2">If you have a special vision, we will deliver your special day.</div>
<hr className="mb-[1rem] lg:mt-6"/>
</section>
<section className="overflow-hidden text-bold tracking-wide lg:text-xl text-[#283845] h-[35rem] lg:h-auto z-50">
  <div className="container lg:mx-auto lg:px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap lg:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="-mb-[6rem] p-1 lg:p-2">
          <Image
            srcset={grazerWeb}
            fallback={grazer}
            alt="grazer table"
            className="block h-full w-full rounded-lg object-cover object-center"/>
          <div className="mt-6 mb-[4rem] lg:mb-1 font-larissa font-bold text-lg lg:text-xl">Charcuterie Grazing Table.</div>
        </div>
        <div className="w-full p-1 lg:p-2">
          <Image
            srcset={champagneWeb}
            fallback={champagne}
            alt="bubbles of champagne"
            className="block h-full w-full rounded-lg object-cover object-center"/>
            <div className="mt-6 font-larissa font-bold text-lg lg:text-xl ">Champagne.</div>
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 lg:p-2">
        <Image
            srcset={floralWeb}
            fallback={floral}
            alt="floral arrangement"
            className="block h-full w-full rounded-lg object-cover object-center"/>
            <div className="mt-6 font-larissa font-bold text-lg lg:text-xl text-end">Floral Arrangements.</div>
        </div>
        <div className="-mb-[6rem] p-1 lg:p-2">
        <div className="mb-6 font-larissa font-bold text-lg lg:text-xl">Custom Hotel Parties.</div>
          <Image
            srcset={hotelWeb}
            fallback={hotel}
            alt="grazer table"
            className="block h-full w-full rounded-lg object-cover object-center"/>
          
        </div>
      </div>
    </div>
  </div>
</section>
{/* <section className="grid mt-[22rem] -ml-[3rem] lg:mb-[9rem] z-40"> */}
    <LazyLoadComponent>
    <div className="grid mt-[42rem] -mb-[60rem] lg:-mb-[45rem] z-40" >
    <Lemon />
    </div>
    </LazyLoadComponent>
{/* </section> */}
        </motion.main>
        <LazyLoadComponent>
          <div className="-mt-[12rem]">
        <Footer/>
        </div>
        </LazyLoadComponent>
        </>
    );
};
export default AddOns;