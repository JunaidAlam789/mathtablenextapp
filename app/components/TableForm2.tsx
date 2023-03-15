"use client"
//import { render } from '@testing-library/react'
//import { toHaveFocus } from '@testing-library/jest-dom';
import React from 'react'
const useState= React.useState

  
     export function TableForm2(props: any) {
     
        const [number, setNumber]=useState(props.value)
        
        const [ans1,setAns1]=useState('')
        const [ans2,setAns2]=useState('')
        const [ans3,setAns3]=useState('')
        const [ans4,setAns4]=useState('')
        const [ans5,setAns5]=useState('')
        const [ans6,setAns6]=useState('')
        const [ans7,setAns7]=useState('')
        const [ans8,setAns8]=useState('')
        const [ans9,setAns9]=useState('')
        const [ans10,setAns10]=useState('')
        const [result1,setResult1]=useState('')
        const [result2,setResult2]=useState('')
        const [result3,setResult3]=useState('')
        const [result4,setResult4]=useState('')
        const [result5,setResult5]=useState('')
        const [result6,setResult6]=useState('')
        const [result7,setResult7]=useState('')
        const [result8,setResult8]=useState('')
        const [result9,setResult9]=useState('')
        const [result10,setResult10]=useState('')
        
        function formEventHandler1(e: any){
            e.preventDefault()
            
         setNumber(number)
         // setNumber(Number(inputnumber))
         setAns1('')
         setAns2('')
         setAns3('')
         setAns4('')
         setAns5('')
         setAns6('')
         setAns7('')
         setAns8('')
         setAns9('')
         setAns10('')
         setResult1('')
         setResult2('')
         setResult3('')
         setResult4('')
         setResult5('')
         setResult6('')
         setResult7('')
         setResult8('')
         setResult9('')
         setResult10('')
         
        
        }
       function formEventHandler3(f: any){
        f.preventDefault()
        let count=0;
        let results=[result1,result2,result3,result4, result5, result6,result7,result8,result9, result10]
        results.map((result)=> {if(result=="correct"){count++}})
        if(count===10){alert("Score"+ count + " Excellent !!!")}
        else(alert("Try Again"))
       
       }
        function onChangeInput1(e: any,index: any){
            e.preventDefault()
        console.log(e.target.value)
        
      
        if(index==1) { setAns1(e.target.value); number*1 == e.target.value? setResult1("correct"):setResult1("wrong") }
        if(index==2) { setAns2(e.target.value);number*2 == e.target.value? setResult2("correct"):setResult2("wrong") }
        if(index==3) { setAns3(e.target.value);number*3 == e.target.value? setResult3("correct"):setResult3("wrong") }
        if(index==4) { setAns4(e.target.value);number*4 == e.target.value? setResult4("correct"):setResult4("wrong") }
        if(index==5) { setAns5(e.target.value);number*5 == e.target.value? setResult5("correct"):setResult5("wrong") }
        if(index==6) { setAns6(e.target.value);number*6 == e.target.value? setResult6("correct"):setResult6("wrong") }
        if(index==7) { setAns7(e.target.value);number*7 == e.target.value? setResult7("correct"):setResult7("wrong") }
        if(index==8) { setAns8(e.target.value);number*8 == e.target.value? setResult8("correct"):setResult8("wrong") }
        if(index==9) { setAns9(e.target.value);number*9 == e.target.value? setResult9("correct"):setResult9("wrong") }
        if(index==10) { setAns10(e.target.value);number*10 == e.target.value? setResult10("correct"):setResult10("wrong") }
                                                   
                                                                        
        
        
            
        }
        
       // bg-gradient-to-r from-cyan-500 to-blue-500'    
        return (<>
        
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-20' >
        <form key="1234" onSubmit={formEventHandler1}>
            <fieldset>
                <legend> Table </legend>
            <input className="bg-blue-100 border-blue-800 border-2" onChange={e =>{ formEventHandler1(e);setNumber(e.target.value)}} placeholder="Number for Table" ></input>
            <button className="bg-blue-800 text-white border-2 rounded-lg ml-10 mr-auto p-2   ">Submit</button>
            </fieldset>
        </form>
         <h1 className="m-10 text-lg font-bold">Multiplication Table of {number}</h1>
          
   
      
        <form key="1236" onSubmit={formEventHandler3} className="grid grid-cols-3 md:grid-cols-[10%,20%,5%] text-center ">
        
        <h3  key="1">{number} x {1} = </h3> <input value={ans1}  className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,1)} key="11"   placeholder="Ans"></input><h3> {result1=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3  key="2">{number} x {2} = </h3><input value={ans2} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,2)} key="12"   placeholder="Ans"></input><h3> {result2=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="3">{number} x {3} = </h3><input value={ans3} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,3)} key="13"   placeholder="Ans"></input><h3> {result3=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="4">{number} x {4} = </h3><input value={ans4} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,4)} key="14"   placeholder="Ans"></input><h3> {result4=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="5">{number} x {5} = </h3><input value={ans5} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,5)} key="15"   placeholder="Ans"></input><h3> {result5=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="6">{number} x {6} = </h3><input value={ans6} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,6)} key="16"   placeholder="Ans"></input><h3> {result6=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="7">{number} x {7} = </h3><input value={ans7} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,7)} key="17"   placeholder="Ans"></input><h3> {result7=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="8">{number} x {8} = </h3><input value={ans8} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,8)} key="18"   placeholder="Ans"></input><h3> {result8=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="9">{number} x {9} = </h3><input value={ans9} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,9)} key="19"   placeholder="Ans"></input><h3> {result9=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <h3 key="10">{number} x {10} =</h3><input value={ans10} className="bg-blue-100 border-blue-800 border-2" onChange={(e)=>onChangeInput1(e,10)} key="20"   placeholder="Ans"></input><h3> {result10=="correct"? <i className="fa fa-check text-green-300"></i>:<i className="fa fa-times text-red-600"></i>} </h3> 
        <button className=" bg-blue-800 text-white rounded-lg border-2 ml-20 my-10 mr-auto p-2">Submit</button>
        
        </form>
        </div>
        
        
       
        </>);
   


     }
    