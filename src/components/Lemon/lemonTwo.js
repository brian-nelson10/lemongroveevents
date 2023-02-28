import React from "react";
import lemon from "../../assets/images/lemonWhole.png";
import lemonWeb from "../../assets/images/web/lemonWhole.webp";
import Image from "../Image";
export default function Lemon2() {
    return (
        <>
        <div className="absolute -left-[5rem] top-[55rem]">
            <div className="h-[250px] w-[200px] bottom-1/2 -right-1/2 left-1/2">
            <Image 
                src={lemonWeb}
                fallback={lemon}
                alt=""/>
                </div>
            </div></>
    )
}