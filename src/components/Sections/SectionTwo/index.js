import React from "react";
import "../SectionOne/sectionone.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../../../assets/images/lemonbw.png";
import iconWeb from "../../../assets/images/web/lemonbw.webp";
import Button from "../../Button";
import Image from "../../Image";
import dateWeb from "../../../assets/images/web/date.webp";
import date from "../../../assets/images/date.jpg";
const SectionTwo = () => {
    const navigate = useNavigate();
    function handlePackageDetails() {
        navigate("/date");
    }
    return (
        <>
        <br/><br/>
            <motion.section layout className="container flex sm:items-center xl:ml-20 -ml-4 w-screen -mb-[4rem] xl:mb-6">
                    <div className="grid xl:grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div layout className="zoomin frame flex flex-wrap container xl:ml-[4rem] justify-center items-center">
                                <Image
                                    className="img w-[1500px] h-[480px] z-10"
                                    srcset={dateWeb}
                                    fallback={date}
                                    alt="date package photo"/>
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 mr-[4rem] justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[50px] xl:text-[100px] text-[#283845] -mb-4 xl:ml-2">Date. </div>
                            <div className="text-lg xl:text-2xl font-bold font-roboto text-[#283845] justify-end items-end text-end mb-4"><p>Let us deliver your perfect day.</p>
                            </div>
                            <div className="xl:justify-end xl:items-end xl:text-end mt-[3rem] -mb-[1.5rem] xl:ml-[18rem]">
                            <div className="-mr-8 xl:mr-0">
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
