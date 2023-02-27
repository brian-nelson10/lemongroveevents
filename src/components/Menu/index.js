import React from "react";
import "./menu.css";
import { motion } from 'framer-motion';
import Button from "../Button";
import { useNavigate } from "react-router-dom";
const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .8,
            ease: "easeIn"
        }
    }
}
const Menu = () => {
    const navigate = useNavigate();
    function handleBook() {
        navigate("/book")
    }
    return (
        <>
            <br /><br />
            <section className="container bg-[#efe5dc] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] -mb-[10rem] mt-[3rem] relative mx-auto items-center justify-center text-center h-[75rem] w-screen ml-[9rem] bg-fixed bg-center bg-cover rounded-xl z-50 menu-img">
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="p-5 font-larissa text-[5rem] text-[#283845] tracking-wide">
                    Pricing Plans
                </motion.div>
                
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="font-roboto text-[2rem] mb-6 -mt-7 text-[#283845] tracking-widest">
                    Let us deliver your perfect day.
                </motion.div>
                <hr className="top-2 border-[#283845] border-solid"/>
                <div className="container my-20 px-6 mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-x-12">
                        <div className="mb-6 lg:mb-0">
                            <div className="block border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5] rounded-lg shadow-lg bg-white h-[40rem]">
                                <div className="p-6 border-b border-gray-300 bordertext-center">
                                    <p className="uppercase mb-4 text-lg text-[#283845] tracking-widest font-larissa">
                                        <strong>Date.</strong>
                                    </p>
                                    <h3 className="text-2xl font-larissa mb-6 text-[#283845] ">
                                        <strong>$ 300</strong>
                                    </h3>
                                    <div >
                                        <Button children="Book Now" onClick={handleBook} />
                                    </div>
                                </div>
                                <div className="container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside items-center justify-center text-center mt-10 ml-6">
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>2 Hours
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>2-4 People
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Low Picnic Table
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Tableware & Decor
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Rugs, Pillows & Chairs
                                        </li>
                                        <li className="mb-4 flex items-center tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg><div className=" font-roboto font-bold">Choice of Location</div>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 -mt-[2rem] lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-[40rem] border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase font-larissa tracking-widest mb-4 text-lg">
                                        <strong>I do.</strong>
                                    </p>
                                    <h3 className="text-2xl  font-larissa mb-6">
                                        <strong>$ 300</strong>
                                        
                                    </h3>
                                    <div >
                                    <div >
                                        <Button children="Book Now" onClick={handleBook} />
                                    </div>
                                    </div>
                                </div>
                                <div className="p-6 container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside mt-8">
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>2 Hours
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>'Marry Me' light up sign
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Boho Tent
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Flower Petals & Arrangement
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Pillows, Rugs & Chairs
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Festive Lighting & Candles
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Bluetooth Speaker w/ Preset Playlist
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 lg:mb-0">
                            <div className="block rounded-lg shadow-lg bg-white h-[40rem] border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase font-larissa tracking-widest mb-4 text-lg">
                                        <strong>Event.</strong>
                                    </p>
                                    <h3 className="text-2xl font-larissa mb-6">
                                        <strong>$ 400</strong>
                                       
                                    </h3>
                                    <div >
                                    <div >
                                        <Button children="Book Now" onClick={handleBook} />
                                    </div>
                                    </div>
                                </div>
                                <div className="p-6 container flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside font-roboto font-bold tracking-wide">
                                        <li className="mb-4 flex items-center">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>2 Hours
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>2-8 People
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Low Picnic Tables
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Boho Tent
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Rugs, Pillows & Chairs
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Festive Lighting & Candles
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Tableware & Decor
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Choice of Location
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 mt-2 z-50 lg:mb-0 ">
                            <div className="block rounded-lg shadow-lg bg-white h-[20rem] border-spacing-[3rem] border-seperate border-2 border-solid border-spacing-[3rem] border-seperate border-2 border-solid border-[#afafa5]">
                                <div className="p-6 border-b border-gray-300 text-center">
                                    <p className="uppercase mb-4 text-lg tracking-widest font-larissa">
                                        <strong>Add On's</strong>
                                    </p>
                                    <div >
                                    <div >
                                        <Button children="Book Now" onClick={handleBook} />
                                    </div>
                                    </div>
                                </div>
                                <div className="container grid flex pt-6 items-center justify-center text-center">
                                    <ol className="list-inside items-center justify-center text-center">
                                    <div className="grid gap-4 grid-cols-2">
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Charcuterie Grazing Tables
                                        </li>
                                        <li className="mb-4 flex items-center justify-end font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Fruit Platters & Beverages
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Custom Themed Decor & Styling, Color Options
                                        </li>
                                        <li className="mb-4 flex items-center justify-end font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Upgraded Venue Selections
                                        </li>
                                        <li className="mb-4 flex items-center font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Partner with Outside Vendor or Services
                                        </li>
                                        <li className="mb-4 flex items-center justify-end font-roboto font-bold tracking-wide">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                                className="text-[#283845] w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path fill="currentColor"
                                                    d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z">
                                                </path>
                                            </svg>Upgraded Floral Selection
                                        </li>
                                        </div>
                                    </ol>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
};

export default Menu; 