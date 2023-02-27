import React from "react";
import lemon from "../../assets/images/lemonWhole.png";
import lemonWeb from "../../assets/images/web/lemonWhole.webp";
import Image from "../Image";
export default function Lemon() {
    return (
        <>
        <div className="z-50 relative -top-[30rem] right-[6rem] -mb-[45rem]">
            <div className="h-[250px] w-[200px] bottom-1/2 right-1/2 left-1/2">
            <Image 
                src={lemonWeb}
                fallback={lemon}
                alt=""/>
                </div>
            </div></>
    )
}