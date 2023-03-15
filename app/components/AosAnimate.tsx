"use client"
import React,{ useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
//import React,{useEffect} from "react";
// importing aos


export default function AosAnimate() {
     useEffect(() => {
        AOS.init();
      }, []) 
  return (
    <div className="text-center">
    <h1>Using AOS to Add Animations</h1>
<h2>Basic Animation</h2>
<p>You need to scroll down to see the effect.</p>
<div className="bg-blue-600 text-white text-center w-96 h-48 mx-auto my-20 p-10" data-aos="fade-up">
<h2>Animated using <code>fade-up</code>.</h2></div>
<div className=" bg-blue-600 text-white text-center w-96 h-48 mx-auto my-20 p-10" data-aos="flip-down"><h2>Animated using <code>flip-down</code>.</h2></div>
<div className=" bg-blue-600 text-white text-center w-96 h-48 mx-auto my-20 p-10" data-aos="zoom-in"><h2>Animated using <code>zoom-in</code>.</h2></div>
<div className=" bg-blue-600 text-white text-center w-96 h-48 mx-auto my-20 p-10" data-aos="fade-right"><h2>Animated using <code>fade-right</code>.</h2></div>
<div className=" bg-blue-600 text-white text-center w-96 h-48 mx-auto my-20 p-10" data-aos="fade-left"><h2>Animated using <code>fade-left</code>.</h2></div>
</div>
  );
}