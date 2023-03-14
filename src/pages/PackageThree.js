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
import mobile from "../assets/images/idoResize.png";
import mobileWeb from "../assets/images/web/ido.webp";
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
const PackageThree = () => {
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
  function handleEvent() {
    navigate("/event");
  }
  function handleCeleb() {
    navigate("/celebrate");
  }
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 520;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // // Return a function from the effect that removes the event listener
    // return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return (
    <>
      <div className={color ? "z-50 fixed top-0 transition-ease hidden" : "z-50 fixed top-0 transition-ease visible"}>
        <Navbar text="Lemon Grove" className="bg-white" />
      </div>
      <motion.main
        variants={main}
        initial="initial"
        animate="animate"
        exit="exit"
        className="mx-[1rem] lg:mx-[2rem] mt-[7rem] -mb-[16rem] z-40">
        <section className="grid grid-cols-2 -mx-3 lg:mx-[2rem] flex items-center h-[30%] w-vw mb-10 bg-fixed rounded-sm drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] ido-head">
          <motion.div
            variants={pack}
            initial="initial"
            whileInView="animate"
            className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-wide">
            I Do.
          </motion.div>
        </section>
        <section>
          <section className="mb-32 text-[#283845]">
            <div className="container mx-auto xl:px-32 text-center lg:text-left">
              <div className="grid lg:grid-cols-2 flex items-center">
                <div className="mb-12 lg:mb-0">

                  <div
                    className="block rounded-lg shadow-[0_35px_80px_10px_rgba(0,0,1,1)] px-6 py-12 lg:py-6 xl:py-12 lg:px-12 lg:-mr-14"
                    style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)" }}
                  >
                    <h3 className="text-lg lg:text-[2rem] text-[#283845] font-bold font-roboto mb-6">Give your partner the proposal of their dreams, a moment you will never forget.</h3>
                    <h5 className="text-xl text-[#283845] font-roboto font-bold tracking-wide ml-1 lg:mb-5 xl:mb-3">Let's make this a memory you'll relish forever.</h5>
                    <div className="grid grid-cols-3">
                      <div className="col-span-3">
                        <p className="font-bold text-end font-larissa text-[3rem] lg:text-[4rem] text-[#283845] tracking-widest lg:-mt-[2rem] -mb-4 justify-start">I do.</p>
                      </div>
                    </div>
                    <ul className="mx-4">
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP mr-5">- Complimentary Champagne</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP mr-5">- 2 Hours</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- 'Marry Me' light up sign</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- Boho Tent</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- Flower Petals</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- Pillows, Rugs & Chairs</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- Festive Lighting & Candles</p>
                      </li>
                      <li className="flex items-center justify-start mb-4">
                        <p className="font-roboto text-lg font-bold text-[#283845] linksP">- Bluetooth Speaker with your playlist</p>
                      </li>
                      <li className="flex items-center justify-start mb-4 ml-2">
                        <p className="font-larissa text-bold text-xl text-[#283845]">Price $ 400.</p>
                      </li>
                    </ul>
                    <div className="grid lg:grid-cols-4 gap-4 z-40">
                      <div className="grid z-40 text-center ">
                        <Button children="Book Now" onClick={handleBook} />
                      </div>
                    </div>
                  </div>
                </div>
                {width < breakpoint ?
                  <div className="absolute mr-4 mb-[4rem] -bottom-[56rem]">
                  <Image
                    srcSet={mobileWeb}
                    fallback={mobile}
                  />
                </div>
                  :
                  <div
                  className="w-full rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[60rem] bg-fixed ido-img"
                  alt=""
                />
                }
              </div>
            </div>
          </section>
        </section>
        <section className="grid -mt-[15rem] -ml-[3rem] mb-[32rem] lg:mb-[9rem] z-10">
          <br />
          <LazyLoadComponent>
            <div className="grid z-40" >
              <Lemon2 />
            </div>
          </LazyLoadComponent>
        </section>
        <hr className="border-[#283845]" />
        <div className="grid grid-cols-2 mt-[5rem] z-50">
          <div className="grid col-span-1 flex flex-row ml-[2rem] group" onClick={handleEvent}>
            <svg className="rotate-[90deg] z-60 hover:cursor-pointer" width="36" height="66" viewBox="0 0 26 46" fill="#283845" stroke="#283845" strokeWidth="0" opacity=".9" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z" />
            </svg>
            <p className="font-larissa font-bold tracking-wide text-md -mt-7 -ml-3 lg:opacity-0 group-hover:opacity-100">Event</p>
          </div>
          <div className="grid col-span-1 flex flex-row lg:mr-[2rem] -mt-[14px] group justify-end" onClick={handleCeleb}>
            <svg className="-rotate-[90deg] z-60 hover:cursor-pointer" width="36" height="66" viewBox="0 0 26 46" fill="#283845" stroke="#283845" strokeWidth="0" opacity=".9" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.2929 45.7071C7.68342 46.0976 8.31659 46.0976 8.70711 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34315 37.9289C1.95263 37.5384 1.31946 37.5384 0.928936 37.9289C0.538412 38.3195 0.538412 38.9526 0.928936 39.3431L7.2929 45.7071ZM7 1.02965e-07L7 45L9 45L9 -1.02965e-07L7 1.02965e-07Z" />
            </svg>
            <div className="font-larissa font-bold tracking-wide text-md lg:opacity-0 group-hover:opacity-100">Celebrate</div>
          </div>
        </div>
      </motion.main>
      <LazyLoadComponent>
        <Footer />
      </LazyLoadComponent>
    </>
  );
};
export default PackageThree;