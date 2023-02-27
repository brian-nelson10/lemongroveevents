import React from "react";
import CompleteBookButton from "../components/CompleteBookButton";
import "./test.css";


export default function Test() {
    return (
        <>
        <section className="container z-10 w-full h-full text-center justify-center items-center">
        <div className="success-animation">
<svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
</div>
<div className="bg-black">
<CompleteBookButton/>
</div>
        </section>
</>
    )
};