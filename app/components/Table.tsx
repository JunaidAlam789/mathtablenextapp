"use client"
import MathTable from "./MathTable"
import { TableForm } from "./TableForm"
import React from 'react'
const useState= React.useState
//import TableRow from './TableRow'
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';


export default function Table(){

const [inputNumber, setNumber]=useState([1,2,3,4,5,6,7,8,9,10,11,12])
useEffect(() => {
    AOS.init();
  }, []) 
return(
    <>
    <div className='justify-center  bg-gradient-to-r from-cyan-500 to-blue-500
     text-black p-20'>
    {/* <TableForm value={5}/> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
     {  inputNumber.map((n,i)=>{return <div key={i} data-aos={ n % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={n*20}
      className="border-2  mx-auto p-10 bg-white"><MathTable value={n}/></div>}) 
     }
     {/* <div className="border-2  mx-auto p-10 bg-white ">
    <MathTable value={n}/>
    </div> */}
    </div>
    </div>
    
    </>
)


}