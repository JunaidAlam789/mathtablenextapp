"use client"
import MathTable from "./MathTable"
import { TableForm } from "./TableForm"
import React from 'react'
import { text } from "stream/consumers"
const useState= React.useState
//import TableRow from './TableRow'

export default function CustomTable(){

const [inputNumber, setNumber]=useState('1')
const [inputNumber2, setNumber2]=useState('1')


return(
    <>
    <div className='justify-center  bg-gradient-to-r from-cyan-500 to-blue-500
     text-black p-20'>
    {/* <TableForm value={5}/> */    }
      {/* <form key="1234" onSubmit={""} >
            <fieldset>
                <legend> Table </legend>
            <input onChange={e => {setNumber(e.target.value)}} value={inputNumber} placeholder="Number for Table" ></input>
            <button className="bg-blue-800 text-white border-2 rounded-lg p-2   ">Submit</button>
            </fieldset>
        </form>  */}
        <input onChange={e=> {setNumber(e.target.value)}} value={inputNumber} placeholder="Number for Table" ></input>
        <h1 className="text-2xl flex justify-center p-10 ">Multiplication Table of {inputNumber}</h1>
    
    <div className="border-2 p-10 bg-white ">
    
        <MathTable value={Number(inputNumber)}/></div>
        
     {/* <div className="border-2  mx-auto p-10 bg-white ">
    <MathTable value={n}/>
    </div> */}
    </div>
    
     
     
    
   
    
    </>
)


}