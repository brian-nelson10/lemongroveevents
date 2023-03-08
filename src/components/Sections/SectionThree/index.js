import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/images/lemonbw2.png";
import iconWeb from "../../../assets/images/web/lemonbw2.webp";
import Button from "../../Button";
import BackgroundImage from "../../BackgroundImage";
import Image from "../../Image";
import SectionThreeMobile from "./mobile";
const SectionThree = () => {
const navigate = useNavigate();
function handlePackageDetails() {
    navigate("/event");
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
        <br/><br/>
        {width < breakpoint ?  
            <section className="container flex sm:items-center md:ml-20 ml-14 md:mt-1 w-screen">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="grid-cols-1 gap-4 ml-[4rem] justify-start items-start text-start col-md-6 col-lg-5 offset-lg-1 textImage__content parallax-text">
                            <div className="font-larissa text-[#283845] text-[50px] md:text-[100px] ml-2 -mb-4 md:ml-2">Event.</div>
                            <div className="text-lg md:text-2xl font-bold font-roboto text-[#283845] justify-start items-start text-start mb-4"><p>Get together for an unforgettable celebration.</p>
                            </div>
                            <div className="justify-start items-start text-start mt-[3rem] mb-[1rem] ml-[31rem]">
                                <div className="icon w-[200px] h-[180px] justify-start items-start text-start -mt-[2rem] mb-0 -ml-[22rem] md:-ml-[16rem] mr-2">
                            <Image 
                                alt="" 
                                src={iconWeb}
                                fallback={icon} />
                            </div>
                            </div>
                            <div className="ml-[1rem] md:ml-[5rem] -mt-[8rem]">
                            <Button children="Details" onClick={handlePackageDetails}/>
                            </div>
                    </div>
                    <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div className="zoomin frame flex flex-wrap container justify-center items-center md:-ml-[4rem]">
                                <BackgroundImage className="img w-[1400px] h-[480px]" />
                            </motion.div>
                        </div>
                </div>
        </section>
        : <SectionThreeMobile/> };
                </>
                )
};

export default SectionThree;
