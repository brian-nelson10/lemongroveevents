import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../../../assets/images/lemonbw.png";
import iconWeb from "../../../assets/images/web/lemonbw.webp";
import Button from "../../Button";
import BackgroundImage from "../../BackgroundImage";
import Image from "../../Image";
const SectionTwo = () => {
    const navigate = useNavigate();
    function handlePackageDetails() {
        navigate("/date");
    }
    return (
        <>
        <br/><br/>
            <motion.section layout className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div layout className="zoomin frame flex flex-wrap container ml-[4rem] justify-center items-center">
                                 <BackgroundImage className="img w-[1400px] h-[480px] z-10" /> 
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 mr-[4rem] justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[100px] text-[#283845] -mb-4 ml-2">Date. </div>
                            <div className="text-2xl font-bold font-roboto text-[#283845] justify-end items-end text-end mb-4"><p>Let us deliver your perfect day.</p>
                            </div>
                            <div className="justify-end items-end text-end mt-[3rem] -mb-[1.5rem] ml-[18rem]">
                            <div >
                            <Button children="Details" onClick={handlePackageDetails} />
                            </div>
                            <div className="icon w-[200px] h-[180px] justify-end items-end text-end -mt-[6rem] mb-0 ml-6">
                            <Image 
                                src={iconWeb}
                                fallback={icon}
                                alt="lemon wedge" />
                            </div>
                            </div>
                    </div>
                </div>
        </motion.section>
                </>
                )
};

export default SectionTwo;
