import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/images/cutlemon.png";
import iconWeb from "../../../assets/images/web/cutlemon.webp";
import Button from "../../Button";
import Image from "../../Image";
import celebWeb from "../../../assets/images/web/hotel.webp";
import celeb from "../../../assets/images/hotel.png";
import SectionFiveMobile from "./mobile";
const SectionFive = () => {
const navigate = useNavigate();
function handlePackageDetails() {
    navigate("/celebrate");
}
const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 1025;

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
          <SectionFiveMobile/>  
        : 
        <section className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-6 items-center justify-center">
                        <div className="grid-cols-1 gap-4 ml-[4rem] justify-start items-start text-start col-md-6 col-lg-5 offset-lg-1 textImage__content parallax-text">
                            <div className="font-larissa text-[#283845] text-[80px] ml-2 -mb-4">Celebrate.</div>
                            <div className="text-2xl font-bold font-roboto text-[#283845] justify-start items-start text-start mb-4"><p>Decorations and custom setup, inside your vacation rental, </p>
                            </div>
                            <div className="text-2xl font-bold font-roboto text-[#283845] justify-start items-start text-start mb-4"><p>for any celebration or romantic getaway.</p>
                            </div>
                            <div className="justify-start items-start text-start mt-[3rem] mb-[1rem] ml-[31rem]">
                                <div className="icon w-[140%] h-[140%] justify-start items-start text-start -mt-[4rem] mb-0 -ml-[16rem] mr-2">
                            <Image 
                                alt="" 
                                src={iconWeb}
                                fallback={icon} />
                            </div>
                            </div>
                            <div className="ml-[5rem] -mt-[9rem]">
                            <Button children="Details" onClick={handlePackageDetails}/>
                            </div>
                    </div>
                    <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div className="zoomin frame flex flex-wrap container justify-center items-center -ml-[4rem]">
                                <Image 
                                    srcSet={celebWeb}
                                    fallback={celeb}
                                    className="img w-[1400px] h-[480px] z-10"/>
                            </motion.div>
                        </div>
                </div>
        </section>}
                </>
                )
};

export default SectionFive;
