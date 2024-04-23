import React, { useEffect, useRef, useState } from 'react'
import './App.css';
 
 function App() {
const emptyArray = ["","","",""]
const reff = [useRef(),useRef(),useRef(),useRef()]
const [inputs,setinputs] = useState(emptyArray)
const [missing,setmissing] = useState(emptyArray)
useEffect(()=>
{
reff[0].current.focus()
},[])

const handleInputChange = (e,index)=>
{
     const val = e.target.value
     console.log(val)
     if(!Number(val))
     return 

     if(index < inputs.length - 1)
     {

       reff[index+1].current.focus()
      }

 const copyvalue = [...inputs]
 copyvalue[index]= val
 setinputs(copyvalue)

 console.log(copyvalue)
     
}
const handelkeydown = (e,index)=>
{
  if(e.keyCode === 8   ){
   
       const copyinputs = [...inputs]
       copyinputs[index] = ""
       setinputs(copyinputs)

  if(index > 0){

    reff[index-1].current.focus()
  }
  }
}

const handlePaste = (e) => {
  const data = e.clipboardData.getData('text');
  if(!Number(data) || data.length !=inputs.length)
  return 
const savedata = data.split("")
  setinputs(savedata)
  reff[inputs.length -1 ].current.focus()
};

const handledEvenet = ()=>
{
   const missing = inputs.map((item,i)=>
  {
    if(item === '')
    return i
  }).filter((item)=>(item || item === 0))
    setmissing(missing)


    console.log(missing)
}
   return (
     <div className='App'>Two Way To Verify otp Section

     <div className='box'>
     {emptyArray.map((value, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
             value={inputs[index]}
            ref={reff[index]}
            className={missing.includes(index) ?'error':''}
            onPaste={handlePaste}
            onKeyDown={(e)=>handelkeydown(e,index)}
            onChange={(e) => handleInputChange(e,index)}
          />
        ))}
     </div>
     <button  onClick={handledEvenet} className='btn'>Submit </button>
     </div>
   )
 }
 
 export default App



