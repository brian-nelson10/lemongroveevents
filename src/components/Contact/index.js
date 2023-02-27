import React, { useRef, useState } from "react";
import "./contact.css";
import { motion, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import DatePicker from "../DatePicker";
import { useNavigate } from 'react-router-dom';

const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .5,
            ease: "easeIn"
        }
    }
}
const Contact = () => {
    const form = useRef();
    const [isPackageOne, setIsPackageOne] = useState('');
    const [isPackageTwo, setIsPackageTwo] = useState('');
    const [isPackageThree, setIsPackageThree] = useState('');
    const [isAddOns, setIsAddOns] = useState('');
    const navigate = useNavigate();
    const routeChange = () => {
        let path = "/success";
        navigate(path);
    }
  const [isAnimating, setIsAnimating] = useState(false);
  const loadingBarControls = useAnimation();
  const animate = async () => {
    setIsAnimating(true);
    loadingBarControls.start({
        width: '100%',
        transition: { duration: 1.35 }
      });
      await loadingBarControls.start({
        width: '100%',
        transition: { duration: 1.35 }
      });
       routeChange();
      setIsAnimating(false);
    };
    const handlePackage = () => {
        setIsPackageOne(!isPackageOne);
    };
    const handlePackageTwo = () => {
        setIsPackageTwo(!isPackageTwo);
    };
    const handlePackageThree = () => {
        setIsPackageThree(!isPackageThree);
    };
    const handleAddOns = () => {
        setIsAddOns(!isAddOns);
    }

    const sendEmail = (e) => {
        e.preventDefault();
       
        emailjs.sendForm('service_b1dblxj', 'template_6bq4mri', form.current, 'a6ADH15ktmshf56k_')
            // .then((result) => {
            //     alert('Success!!');
            // })
    }

    return (
        <div className="container contactBody mt-[18rem] mb-100px] w-max drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <section className="container contactImg relative mx-auto items-center justify-center text-center h-[20rem] w-max ml-[9rem] bg-fixed bg-center bg-cover rounded-xl z-50"
            >
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="p-5 font-larissa text-[4rem] text-white tracking-wide">
                    Book Online
                </motion.div>
                <motion.div
                    variants={pack}
                    initial="initial"
                    whileInView="animate"
                    className="p-5 -mt-[3rem] font-larissa text-[1.2rem] text-white tracking-wide">
                    We Will Contact You Momentarily To Complete Booking.
                </motion.div>
                <div className="container text-gray-800 mt-[6rem] px-4 md:px-12">
                    <div className="block blocker rounded-lg shadow-xl py-10 md:py-12 px-2 md:px-6 -mt-[100px] bg-[#efe5dc]">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="flex flex-wrap">
                            <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12 px-3 lg:px-6 mb-12 xl:mb-0">
                                    <div className="grid grid-cols-2 gap-2">
                                    <div className="form-group mb-6">
                                        <input type="text" name="fName" className="form-control block
                w-full
                px-3
                py-1.5
                font-roboto
                font-bold
                tracking-wide
                text-[#283845]
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-[#283845] focus:bg-white focus:border-[#283845] focus:outline-none"
                                            placeholder="First Name" />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input type="text" name="lName" className="form-control block
                w-full
                px-3
                py-1.5
                font-roboto
                font-bold
                tracking-wide
                text-[#283845]
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-[#283845] focus:bg-white focus:border-[#283845] focus:outline-none"
                                            placeholder="Last Name" />
                                    </div>
                                    </div>
                                    <div className="form-group mb-6">
                                        <input type="tel" name="phone" className="form-control block
                w-full
                px-3
                py-1.5
                font-roboto
                font-bold
                tracking-wide
                text-[#283845]
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-[#283845] focus:bg-white focus:border-[#283845] focus:outline-none"
                                            placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group mb-6">
                                        <input type="text" name="email" className="form-control block
                w-full
                px-3
                py-1.5
                font-roboto
                font-bold
                tracking-wide
                text-[#283845]
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-[#283845] focus:bg-white focus:border-[#283845] focus:outline-none"
                                            placeholder="Email address" />
                                    </div>
                                    <DatePicker className="form-control" type="text" name="date"/>
                                    <div className="form-group mb-6 mt-6">
                                        <textarea name="message" className="
                form-control
                block
                w-full
                px-3
                py-1.5
                font-roboto
                font-bold
                tracking-wide
                text-[#283845]
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-[#283845] focus:bg-white focus:border-[#283845] focus:outline-none" rows="3" placeholder="Message">
                </textarea>
                                    </div>
                                    {/* <div className="form-group form-check text-center mb-6">
                                        <input type="checkbox" 
                                            className="
                  form-check-input 
                  appearance-none h-4 w-4 
                  border border-gray-300 
                  rounded-sm bg-white 
                  checked:bg-blue-600 
                  checked:border-blue-600 
                  focus:outline-none transition 
                  duration-200 mt-1 align-top 
                  bg-no-repeat bg-center bg-contain 
                  mr-2 cursor-pointer"/>
                                        <label className="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this
                                            message</label>
                                    </div> */}
                                    <div className="container mt-8 justify-center items-center">
                                        <button className="btn1 btn-solid1 btn-white1 text-[#283845] font-larissa tracking-widest font-bold border-[#283845]" >
                                        <input className="texter hover:cursor-pointer" type="submit" value="Complete Booking" onClick={() => !isAnimating && animate()}/>
                                        <motion.div className="loading-bar" animate={loadingBarControls}/>
                                        </button>
                                    </div>
                                {/* </form> */}
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                                <div className="-mt-2 mb-[2rem]">
                                    <span className="font-larissa text-[2.2rem]">Select Your Package</span>
                                    
                                </div>
                                <div className="flex flex-wrap">
                                    
                                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="p-4 bg-white border-2 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="Date"
                                                            name="package"
                                                            checked={isPackageOne}
                                                            onChange={handlePackage} />
                                                        <svg viewBox="0 0 21 18">
                                                            <symbol id="tick-path" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            </symbol>
                                                            <defs>
                                                                <mask id="tick">
                                                                    <use className="tick mask" href="#tick-path" />
                                                                </mask>
                                                            </defs>
                                                            <use className="tick" href="#tick-path" stroke="currentColor" />
                                                            <path fill="white" mask="url(#tick)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                                                        </svg>
                                                        <svg className="lines" viewBox="0 0 11 11">
                                                            <path d="M5.88086 5.89441L9.53504 4.26746" />
                                                            <path d="M5.5274 8.78838L9.45391 9.55161" />
                                                            <path d="M3.49371 4.22065L5.55387 0.79198" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="grow ml-6">
                                                <p className="text-[#283845] font-bold font-larissa tracking-wide mb-1">Date.</p>
                                                <p className="text-gray-500 text-sm font-roboto font-bold mb-1">A Perfect Date Night.</p>
                                                <p className="text-[#283845] font-larissa">$300</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                        <div className="flex items-start">
                                            <div className="shrink-0">
                                                <div className="p-4 bg-white border-2 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <label className="checkbox2">
                                                        <input
                                                            type="checkbox"
                                                            value="Event"
                                                            name="package"
                                                            checked={isPackageTwo}
                                                            onChange={handlePackageTwo} />
                                                        <svg viewBox="0 0 21 18">
                                                            <symbol id="tick-path2" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            </symbol>
                                                            <defs>
                                                                <mask id="tick2">
                                                                    <use className="tick2 mask2" href="#tick-path2" />
                                                                </mask>
                                                            </defs>
                                                            <use className="tick2" href="#tick-path2" stroke="currentColor" />
                                                            <path fill="white" mask="url(#tick2)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                                                        </svg>
                                                        <svg className="lines" viewBox="0 0 11 11">
                                                            <path d="M5.88086 5.89441L9.53504 4.26746" />
                                                            <path d="M5.5274 8.78838L9.45391 9.55161" />
                                                            <path d="M3.49371 4.22065L5.55387 0.79198" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="grow ml-6">
                                                <p className="text-[#283845] font-bold font-larissa tracking-wide mb-1">Event.</p>
                                                <p className="text-gray-500 font-roboto font-bold mb-1 text-sm">A curated amenity for a beach lifestyle</p>
                                                <p className="text-[#283845] font-larissa">$400</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                        <div className="flex align-start">
                                            <div className="shrink-0">
                                                <div className="p-4 bg-white border-2 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <label className="checkbox3">
                                                        <input
                                                            type="checkbox"
                                                            value="I do"
                                                            name="package"
                                                            checked={isPackageThree}
                                                            onChange={handlePackageThree} />
                                                        <svg viewBox="0 0 21 18">
                                                            <symbol id="tick-path3" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            </symbol>
                                                            <defs>
                                                                <mask id="tick3">
                                                                    <use className="tick3 mask3" href="#tick-path3" />
                                                                </mask>
                                                            </defs>
                                                            <use className="tick3" href="#tick-path3" stroke="currentColor" />
                                                            <path fill="white" mask="url(#tick3)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                                                        </svg>
                                                        <svg className="lines" viewBox="0 0 11 11">
                                                            <path d="M5.88086 5.89441L9.53504 4.26746" />
                                                            <path d="M5.5274 8.78838L9.45391 9.55161" />
                                                            <path d="M3.49371 4.22065L5.55387 0.79198" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="grow ml-6">
                                                <p className="text-[#283845] font-bold font-larissa tracking-wide mb-1">I do.</p>
                                                <p className="text-gray-500 font-roboto font-bold mb-1 text-sm">Make this a memory you'll treasure forever.</p>
                                                <p className="text-[#283845] font-larissa">$300</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                                        <div className="flex align-start">
                                            <div className="shrink-0">
                                                <div className="p-4 bg-white border-2 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <label className="checkbox4">
                                                        <input
                                                            type="checkbox"
                                                            value="Add On's"
                                                            name="package"
                                                            checked={isAddOns}
                                                            onChange={handleAddOns} />
                                                        <svg viewBox="0 0 21 18">
                                                            <symbol id="tick-path4" viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69" fill="none" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                                            </symbol>
                                                            <defs>
                                                                <mask id="tick4">
                                                                    <use className="tick4 mask4" href="#tick-path4" />
                                                                </mask>
                                                            </defs>
                                                            <use className="tick4" href="#tick-path4" stroke="currentColor" />
                                                            <path fill="white" mask="url(#tick4)" d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z" />
                                                        </svg>
                                                        <svg className="lines" viewBox="0 0 11 11">
                                                            <path d="M5.88086 5.89441L9.53504 4.26746" />
                                                            <path d="M5.5274 8.78838L9.45391 9.55161" />
                                                            <path d="M3.49371 4.22065L5.55387 0.79198" />
                                                        </svg>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="grow ml-6">
                                                <p className="text-[#283845] font-bold font-larissa tracking-wide mb-1">Add On's.</p>
                                                <p className="text-gray-500 font-roboto font-bold mb-1 text-sm">Curated Amenities for a Beach Lifestyle</p>
                                                <p className="text-[#283845] font-larissa">$$$</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default Contact; 