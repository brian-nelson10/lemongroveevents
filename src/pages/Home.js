import React from "react";
import "./home.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Hero1 from "../components/BackgroundImage";
// import Image from "../components/Image";
// import heroWeb from "../assets/images/web/event.webp";
// import hero from "../assets/images/event.jpg";
import HeroText from "../components/HeroText/index";
import HeroTextMobile from "../components/HeroText/mobile.js";
import Navbar from "../components/Navbar";
import BookButton from "../components/BookButton";
import Social from "../components/Social";
import SectionOne from "../components/Sections/SectionOne";
import Lemon from "../components/Lemon";
import ScrollToTop from "../components/ScrollToTop";
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
};
export default function Home() {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
      const [show, setShow] = useState(false)
      const changeShow = () => {
        if (window.scrollY >= 3460) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
      window.addEventListener('scroll', changeShow);

      const [width, setWidth] = React.useState(window.innerWidth);
      const breakpoint = 520;
    
      React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
    
        // // Return a function from the effect that removes the event listener
        // return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
    return (
        <AnimatePresence>
            <>
            <motion.main 
            layout
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit">
            <motion.section
                layout
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
                className="md:grid md:grid-rows-2">
                    <motion.div>
                      <LazyLoadComponent>
                        <div className="z-50">
            <ScrollToTop/>
            </div>
            </LazyLoadComponent>
            </motion.div>
              <section
                className='flex flex-wrap absolute '>
             <div className={show ? "invisible navi " : "w-full h-full navi z-50"}> 
               <Navbar text="Lemon Grove"/> 
               </div> 
              <div className="md:items-center md:justify-center md:flex md:flex-wrap">
                <div className="h-screen w-screen event-hero bg-fixed">
                  
                  {/* <div className="invisible md:visible">
                  <Image
                  srcSet={heroWeb}
                  fallback={hero}
                  className=""/></div> */}
                  </div>
                <div className="">
                    <BookButton />
                </div>
                <div className="top-[6rem] -left-[9.6rem] md:top-[7rem] md:h-1/2 md:left-[14rem] z-20 absolute">
                  {width < breakpoint ? <HeroTextMobile/> : <HeroText/>};
                </div>
                <div className="z-20 fixed">
                    <Social />
                </div>
              </div>
              <LazyLoadComponent>
              <SectionOne />
              </LazyLoadComponent>
              <LazyLoadComponent>
              <section className="z-10">
                <Lemon />
              </section>
              </LazyLoadComponent>
              </section>  
              </motion.section>
              </motion.main>
          </>               
      </AnimatePresence>
    );
};