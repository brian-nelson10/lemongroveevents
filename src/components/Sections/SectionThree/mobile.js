import React from "react";
import "../SectionOne/sectionone.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../../../assets/images/lemonbw2.png";
import iconWeb from "../../../assets/images/web/lemonbw2.webp";
import Button from "../../Button";
import Image from "../../Image";
import event from "../../../assets/images/event.jpg";
import eventWeb from "../../../assets/images/web/event.webp";
const SectionThreeMobile = () => {
    const navigate = useNavigate();
    function handlePackageDetails() {
        navigate("/event");
    }
    return (
        <>
        <br/><br/>
            <motion.section layout className="container flex sm:items-center md:ml-20 -ml-4 w-screen -mb-[3rem] z-40">
                    <div className="grid md:grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div layout className="zoomin frame flex flex-wrap container md:ml-[4rem] justify-center items-center">
                                <Image
                                    className="img w-[1500px] h-[480px] z-10"
                                    srcset={eventWeb}
                                    fallback={event}
                                    alt="date package photo"/>
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 mr-[4rem] justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[50px] md:text-[100px] text-[#283845] -mb-4 md:ml-2">Event. </div>
                            <div className="text-lg md:text-2xl font-bold font-roboto text-[#283845] justify-end items-end text-end mb-4"><p>Get together for an unforgettable celebration.</p>
                            </div>
                            <div className="md:justify-end md:items-end md:text-end mt-[3rem] -mb-[1.5rem] md:ml-[18rem]">
                            <div className="-mr-8">
                            <Button children="Details" onClick={handlePackageDetails} />
                            </div>
                            <div className="icon w-[170px] h-[170px] justify-end items-end text-end -mt-[6rem] mb-0 ml-8">
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

export default SectionThreeMobile;
