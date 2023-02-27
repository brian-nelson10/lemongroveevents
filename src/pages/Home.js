import React from "react";
import "./home.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Hero from "../assets/images/stock.jpeg";
import Hero1 from "../components/BackgroundImage";
import HeroText from "../components/HeroText";
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
    return (
        // <AnimateSharedLayout type='crossfade'>
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
                className="grid grid-rows-2 z-40">
                    <motion.div className="z-50">
                      <LazyLoadComponent>
            <ScrollToTop/>
            </LazyLoadComponent>
            </motion.div>
              <section
                style={{backgroundImage: `url(${Hero1})`}}
                className='w-screen h-screen flex flex-wrap absolute'>
             <div className={show ? "invisible navi" : "navi z-30"}> 
            
               <Navbar text="Lemon Grove"/> 
               
               </div> 
              <div className="heroContainer items-center justify-center md:flex flex-wrap">
                <Hero1 className="w-screen h-screen z-10 overflow-hidden"/>
                <div className="top-2/4 right-2/4 left-2/4">
                    <BookButton />
                </div>
                <div className="top-[7rem] h-1/2 md:left-[14rem] z-20 absolute ">
                <HeroText />
                </div>
                <div className="z-20 fixed">
                    <Social />
                </div>
              </div>
              <LazyLoadComponent>
              <SectionOne />
              </LazyLoadComponent>
              <LazyLoadComponent>
              <section>
                <Lemon />
              </section>
              </LazyLoadComponent>
              </section>  
              </motion.section>
              
              </motion.main>
          </>               
      </AnimatePresence>
    // </AnimateSharedLayout>
    );
};