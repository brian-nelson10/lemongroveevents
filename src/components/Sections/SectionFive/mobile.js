import React from "react";
import "../SectionOne/sectionone.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import icon from "../../../assets/images/cutlemon.png";
import iconWeb from "../../../assets/images/web/cutlemon.webp";
import Button from "../../Button";
import Image from "../../Image";
import celebWeb from "../../../assets/images/web/hotel.webp";
import celeb from "../../../assets/images/hotel.png";
const SectionFiveMobile = () => {
    const navigate = useNavigate();
    function handlePackageDetails() {
        navigate("/event");
    }
    
    return (
        <>
        <br/><br/>
            <motion.section layout className="container flex sm:items-center md:ml-20 -ml-4 w-screen mb-2">
                    <div className="grid md:grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div layout className="zoomin frame flex flex-wrap container md:ml-[4rem] justify-center items-center">
                                <Image
                                    className="img w-[1500px] h-[480px] z-10"
                                    srcset={celebWeb}
                                    fallback={celeb}
                                    alt="date package photo"/>
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-4 justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[50px] md:text-[100px] text-[#283845] -mb-4 md:ml-2">Celebrate. </div>
                            <div className="text-lg ml-10 font-bold font-roboto text-[#283845] justify-start items-start text-center mb-4"><p>Decorations and custom setup, inside your vacation rental, </p>
                            </div>
                            <div className="text-lg ml-10 font-bold font-roboto text-[#283845] justify-start items-start text-center mb-4"><p>for any celebration or romantic getaway.</p>
                            </div>
                            <div className="md:justify-end md:items-end md:text-end mt-[3rem] -mb-[1.5rem] md:ml-[18rem]">
                            <div className="mr-[4rem]">
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

export default SectionFiveMobile;
