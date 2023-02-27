import React from "react";
import "./sectionone.css";
import { motion } from "framer-motion";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import Footer from "../../Footer";
import SectionFour from "../SectionFour";
import Menu from "../../Menu";
import Contact from "../../Contact";
import { LazyLoadComponent } from "react-lazy-load-image-component";
// import BackgroundImage from "../../BackgroundImage";

const content = {
    offscreen: {
        x: 100,
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 50,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            restDelta: 0.001,
            delay: 1.8
          }
    }
}
const content2 = {
    offscreen: {
        x: -100,
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 50,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            restDelta: 0.001,
            delay: .8
          }
    }
}
const content3 = {
    offscreen: {
        y: 150,
        opacity: 0
    },
    onscreen: {
        y: 50,
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            restDelta: 0.001,
            delay: .8
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
            delay: .5,
            ease: "easeIn"
        }
    }
}
const SectionOne = () => {
    return(
    <>
<br/><br/><br/><br/>

<motion.section layout className="container mt-[2rem] flex items-center justify-center h-[30%] m-auto -mb-10 bg-fixed bg-center bg-cover rounded-xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] custom-img"
>
  <motion.div
    layout
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa text-[5rem] text-white tracking-widest ">
  The Packages.
  </motion.div>
</motion.section>
<br/>
<LazyLoadComponent>
<motion.section
layout
variants={content}
viewport={{ once: true }}
initial="offscreen"
whileInView="onscreen">
    <SectionTwo />
</motion.section>
</LazyLoadComponent>
<motion.section
layout
variants={content2}
viewport={{ once: true }}
initial="offscreen"
whileInView="onscreen">
    <SectionThree />
</motion.section>
<motion.section
layout
variants={content}
viewport={{ once: true }}
initial="offscreen"
whileInView="onscreen">
    <SectionFour />
</motion.section>
<motion.section
layout
variants={content2}
viewport={{ once: true }}
initial="offscreen"
whileInView="onscreen">
    <Menu />
</motion.section>
<br/>
{/* <Lemon2/> */}
<motion.section
layout
variants={content}
viewport={{ once: true }}
initial="offscreen"
whileInView="onscreen">
    <Contact/>
</motion.section>
<motion.div 
    layout
    variants={content3}
    viewport={{ once: true }}
    initial="offscreen"
    whileInView="onscreen"
    className="mt-[100px] bottom-0">
 <Footer/>
</motion.div>
    </>
    );
};
export default SectionOne;