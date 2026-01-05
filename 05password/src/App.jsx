import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const[length,setLength]=useState(8);
  const[num,setNum]=useState(true);
  const[char,setChar]=useState(true);
  const[password,setPassword]=useState("");

  const passRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=" ";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num){
      str+="0123456789";
    }
    if(char) str+="@!#$%^&*()_+=~[]{}\|.,?/"
    for (let i = 1; i <= length; i++) {
      
      let pos= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(pos);
    }
    setPassword(pass);

  },
  [length,num,char])

  const copyPasswordToClip=useCallback(()=>{
    passRef.current?.focus();
passRef.current?.setSelectionRange(1,5);

  window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
passwordGenerator()

  },[length,num,char,setPassword])

  

  return (
    <>
    <div className='text-white w-full max-w-md mx-auto shadow-md rounded-xl px-2 mt-10 bg-gray-700'>
<h1 className='text-2xl text-center' >Password Generator</h1>
      
     <div className='flex justify-center my-2  '>
      <input className='bg-white rounded-l text-gray-500
      ' 
      placeholder='password'
      value={password}
      ref={passRef}

      type="text" />
      <button className='bg-blue-700 border-2 border-solid border-white hover:bg-red-400'
      onClick={copyPasswordToClip}
      >Copy</button>
     </div>
     <div className='flex gap-4'>
     <div className=''
     >
<input type="range"
min={6}
max={50}
value={length}
className='cursor-pointer'
onChange={(e)=>{setLength(e.target.value)}}
/>
<label >length={length}</label>
     </div>
     <div>
      <input type="checkbox"
      defaultChecked={num}
      id='numberInput'
      onChange={()=>{
        setNum((prev)=>!prev)
      }}
      />
      <label htmlFor='numberInput' >Numbers</label>
     </div>

     <div>
      <input type="checkbox" 
      id='characterInput'
      defaultChecked={char}
      onChange={()=>{

        setChar((prev)=>!prev)
      }}
      />
      <label htmlFor="charInput">Characters</label>
     </div>
     
     </div>
    </div>
     
    </>
  )
}

export default App
