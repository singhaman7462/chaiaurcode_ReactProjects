import {  useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
import characters from './utils/characters';

function App() {
  const [length,setLength]=useState(8);
  const [numAllowed,setNumAllowed]=useState(true);
  const [charAllowed,setCharAllowed]=useState(true);
  const [password,setPassword]=useState("");
  
  function generateRandomNumber(r){
      let num=Math.floor(Math.random()*r);
      return num;
  }

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let lowerRange;
    let upperRange;
    numAllowed ? upperRange=62:upperRange=52;
    charAllowed ? lowerRange=0:lowerRange=52;
    if(lowerRange===52){
      let randomIndex;
         for(let i=0;i<length;i++){
          randomIndex=generateRandomNumber(10);
          pass+=characters[randomIndex+52]
         }
    }
    else{
      let randomIndex;
      for(let i=0;i<length;i++){
       randomIndex=generateRandomNumber(upperRange);
       pass+=characters[randomIndex];
      } 
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed]);


  function sliderHandler(event){
      setLength(event.target.value);
  }

  function numCheckHandler(){
       setNumAllowed((prev)=>{
        return !prev;
       })
  }

  function charCheckHandler(){
    setCharAllowed((prev)=>{
     return !prev;
    })
}

const copyToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
},[password]);

useEffect(()=>{
passwordGenerator();
},[length,numAllowed,charAllowed,passwordGenerator]);

const passwordRef=useRef(null);


  return (
    <>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg
       overflow-hidden mb-4 bg-white'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
        />
        <button className='outline-none bg-blue-600
         text-white px-3 py-0.5 shrink-0' onClick={copyToClipboard}>Copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={sliderHandler}
          />
          <label>Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
         <input
         type='checkbox'
         defaultChecked={numAllowed}
         id='numInput'
         onChange={numCheckHandler}
         ></input>
         <label>Number</label>

         <input
         type='checkbox'
         defaultChecked={charAllowed}
         id='charInput'
         onChange={charCheckHandler}
         ></input>
         <label>Character</label>
      </div>


      </div>
    </div>
      
    </>
  )
}

export default App
