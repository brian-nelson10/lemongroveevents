import React, { useState } from "react";
import { motion } from "framer-motion";
import "./home.css";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
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
            className="mx-[2rem] mt-[7rem] z-40">
        <section className="grid grid-cols-2 mx-[2rem] flex items-center h-[30%] w-vw mb-10 bg-fixed bg-center bg-cover rounded-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] custom-img">
  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-wide">
  Add On's 
  </motion.div>
</section>
<section className="text-center font-roboto font-bold tracking-wide text-[#283845] mt-6 -mb-14">

<div className="text-[3rem] font-larissa">Customize your package.</div>

<div className="text-[1.5rem] -mt-2">If you have a special vision, we will deliver your special day.</div>
<hr className="mt-6"/>
</section>
<section className="overflow-hidden text-bold tracking-wide text-xl text-[#283845] ">
  <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
    <div className="-m-1 flex flex-wrap md:-m-2">
      <div className="flex w-1/2 flex-wrap">
        <div className="-mb-[6rem] p-1 md:p-2">
          <Image
            srcset={grazerWeb}
            fallback={grazer}
            alt="grazer table"
            className="block h-full w-full rounded-lg object-cover object-center"/>
          <div className="mt-6 font-larissa font-bold text-xl">Charcuterie Grazing Table.</div>
        </div>
        {/* <div className="w-1/2 p-1 md:p-2">
          <img
            alt="gallery"
            className="block h-full w-full rounded-lg object-cover object-center"
            src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />d
        </div> */}
        <div className="w-full p-1 md:p-2">
          <Image
            srcset={champagneWeb}
            fallback={champagne}
            alt="bubbles of champagne"
            className="block h-full w-full rounded-lg object-cover object-center"/>
            <div className="mt-6 font-larissa font-bold text-xl ">Champagne.</div>
        </div>
      </div>
      <div className="flex w-1/2 flex-wrap">
        <div className="w-full p-1 md:p-2">
        <Image
            srcset={floralWeb}
            fallback={floral}
            alt="floral arrangement"
            className="block h-full w-full rounded-lg object-cover object-center"/>
            <div className="mt-6 font-larissa font-bold text-xl text-end">Floral Arrangements.</div>
        </div>
        <div className="-mb-[6rem] p-1 md:p-2">
        <div className="mb-6 font-larissa font-bold text-xl">Custom Hotel Parties.</div>
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
{/* <section>
<section class="mb-32 text-gray-800">
<div class="container mx-auto xl:px-32 text-center lg:text-left">
  <div class="grid lg:grid-cols-2 flex items-center">
    <div class="mb-12 lg:mb-0">
   
      <div
        className="block rounded-lg shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
        style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}
      >
      <h3 class="text-[2rem] text-[#283845] font-roboto mb-3">Do you want to plan a perfect date to show your partner how much they mean to you?</h3>
      <h5 class="text-lg text-[#283845] font-roboto font-bold mb-12 lg:mb-10 xl:mb-12">Let us deliver your perfect day</h5>
<div className="grid grid-cols-3">
    <div className="col-span-2 ">
      <p class="font-bold font-larissa text-[3rem] text-[#283845] tracking-widest mb-4 justify-start">Event.</p>
      </div>
      <div className="h-[40%] w-[50%] col-span-1 justify-end"><img alt="lemon icon" src={lemon}/></div>
      </div>
      <ul className="z-60 mx-4">
        <li className="flex items-center justify-start mb-4">
           <p className="font-roboto text-lg text-[#283845] linksP mr-5">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto text-lg text-[#283845] linksP">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto text-lg text-[#283845] linksP">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto text-lg text-[#283845] linksP">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto text-lg text-[#283845] linksP">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4">
            <p className="font-roboto text-lg text-[#283845] linksP">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start mb-4 ml-2">
            <p className="font-larissa text-lg text-[#283845]">Price $400.</p>
        </li>

      </ul>
      <div className="grid grid-cols-4 gap-4">
        <div className="grid z-50 text-center">
            <Button className="btn btn-solid btn-white" onClick={handleAddOns} >Add On's</Button>
        </div>
      </div>
      </div> 
    </div>
    <div>
      <div
        // src={img1}
        class="w-full rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[60rem] bg-fixed bg-center bg-cover custom-img"
        alt=""
      />
    </div>
  </div>
</div>
</section>
</section> */}

<section className="grid -mt-[22rem] -ml-[3rem] mb-[9rem] z-40">
    <br/>
    <LazyLoadComponent>
    <div className="grid z-40" >
    <Lemon />
    </div>
    </LazyLoadComponent>
</section>
<br/>
        </motion.main>
        <LazyLoadComponent>
        <Footer/>
        </LazyLoadComponent>
        </>
    );
};
export default AddOns;