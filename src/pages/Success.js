import React from "react"
import { motion } from "framer-motion";
import SuccessTxt from "../components/SuccessTxt";

const main = {
    initial: {
        y: -1000,
        opacity: 0
    },
    animate: {
        opacity: 1,
        y: 0,
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

function Success() {
     // Scroll user to top to avoid showing the footer
     React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
    return (
        <>
         <motion.main 
            layout
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] mt-[7rem]">
                <div className="container">
       <SuccessTxt text="Success"/>
       </div>
    </motion.main>
        </>

    )
};
export default Success;

