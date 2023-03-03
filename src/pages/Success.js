import React, { useEffect } from "react"
import { motion } from "framer-motion";
import SuccessTxt from "../components/SuccessTxt";
import champWeb from "../assets/images/web/champagne.webp";
import champ from "../assets/images/champagne.jpg";
import { useNavigate } from "react-router-dom";
import Image from "../components/Image";

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
const Success = () => {
    const navigate = useNavigate();
    // Scroll user to top to avoid showing the footer
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
      useEffect(() => {
        setTimeout(() => {
            navigate("/");
          }, 6000);
      });
    return (
        <motion.main 
            layout
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] mt-[7rem]">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-center items-strech mx-4">
                    <div className="lg:w-4/12 flex justify-center items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-gray-900 w-7/12"><SuccessTxt text="Success"/></h1>
                            <p className="md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-roboto font-bold tracking-wide leading-normal text-[#283845]">We will give you phone call in a couple minutes to process payment. Thank you for supporting our small, local business.</p>
                            <motion.p 
                                initial={{opacity: 0}}
                                animate={{opacity: 1, transition: {delay: 2, duration: 1.4}}}
                                
                                className="md:w-7/12 lg:w-11/12 xl:w-10/12 mt-4 lg:mt-5 font-tomatoes text-[2rem] font-bold leading-normal text-[#283845]">- Amy</motion.p>
                        </div>
                    </div>
                    <div className="lg:w-8/12 mt-6 md:mt-8 lg:mt-0">
                        <div className="relative w-full h-full">
                            <Image
                                srcset={champWeb}
                                fallback={champ}
                                alt="champagne img"/>
                        </div>
                    </div>
                </div>
            </div>
            </motion.main>
    );
};
export default Success;

