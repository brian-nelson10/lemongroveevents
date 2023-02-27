import React, { useState } from 'react';
import { motion } from "framer-motion";
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';

const log = {
    initial: { x: -100, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1.9,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 1.5],
      },
    },
  };
const Social = () => {
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 200) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    return (
<motion.div 
    layout
    variants={log} 
    initial="initial"
    animate="animate"
    className={color ? "social text-black fill-black flex flex-col gap-8 absolute right-[42.7rem] top-[7rem] w-50px " : "social fill-white stroke-white text-white flex flex-col gap-8 absolute right-[42.7rem] top-[7rem] w-50px "  }>
            <div className="socialIndicator w-50px ">
              <p className='text-[1.8rem] text-white tracking-[1rem] rotate-90 -translate-y-[90px] -translate-x-[75px] text-larissa'>Social</p>
              <img className='max-h-6 translate-x-[5px]' src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="socialText inline-block tracking-5px text-[1.6rem] mb-[2rem] -translate-x-[1px] ">
              <ul>
              <li>
                  <a
                    href="http://instagram.com/lemongrove_eventskw"
                    target="_blank"
                    rel="noreferrer"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg" className='mb-[2rem]' strokeWidth={2} viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"/></svg>
                    {/* <FaInstagram className='mb-[2rem]'/> */}
                  </a>
                </li>
                 <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    
                    <svg xmlns="http://www.w3.org/2000/svg"  className='mb-[2rem]' viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
                    {/* <FaFacebook className='mb-[2rem]'/> */}
                  </a>
                </li>
                <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className='mb-[2rem]' viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 15 3 C 8.373 3 3 8.149 3 14.5 C 3 17.901215 4.5506695 20.947232 7 23.052734 L 7 28 L 11.835938 25.582031 C 12.845524 25.846308 13.903007 26 15 26 C 21.627 26 27 20.851 27 14.5 C 27 8.149 21.627 3 15 3 z M 13.861328 11.357422 L 16.8125 14.3125 L 22.083984 11.357422 L 16.138672 17.800781 L 13.255859 14.703125 L 7.8457031 17.730469 L 13.861328 11.357422 z"/></svg>
                    {/* <FaFacebookMessenger className='mb-[2rem]'/> */}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
)};
export default Social;