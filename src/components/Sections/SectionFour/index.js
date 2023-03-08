import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import icon from "../../../assets/images/lemonbw3.png";
import iconWeb from "../../../assets/images/web/lemonbw3.webp";
import Button from "../../Button";
import Image from "../../Image";
import ido from "../../../assets/images/champagne.jpg";
import idoWeb from "../../../assets/images/web/champagne.webp";
import SectionFourMobile from "./mobile";
const SectionFour = () => {
    const navigate = useNavigate();
    function handlePackageDetails() {
        navigate("/ido");
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
            <section className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div className="zoomin frame flex flex-wrap container ml-[4rem] justify-center items-center">
                                <Image 
                                    srcset={idoWeb}
                                    fallback={ido}
                                    className="img w-[1400px] h-[480px] z-10"/>
                               
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 mr-[4rem] justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[#283845] text-[100px] -mb-4 ml-2">I do.</div>
                            <div className="text-2xl font-bold font-roboto text-[#283845] justify-end items-end text-end mb-6"><p>Make this a memory you'll treasure forever.</p>
                            </div>
                            <div className="justify-end items-end text-end mt-[3rem] -mb-[1.5rem] ml-[19rem]">
                            <div >
                            <Button children="Details" onClick={handlePackageDetails}/>
                            </div>
                            <div  className="icon w-3/4 h-3/4 justify-end items-end text-end -mt-[8rem] -ml-16 ">
                            <Image 
                                alt="" 
                                src={iconWeb}
                                fallback={icon} />
                            </div>
                            </div>
                    </div>
                </div>
        </section>
       : <SectionFourMobile/> };
                </>
                )
};

export default SectionFour;
