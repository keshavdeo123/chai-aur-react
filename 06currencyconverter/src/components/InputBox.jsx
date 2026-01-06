import React, { useState } from "react";

function InputBox(){
  const[fromAmount,setFromAmount]=useState(0)
  const[toAmount,setToAmount]=useState(0)

  const[fromCurrency,setFromCurrency]=useState("usd")
  const[toCurrency,setToCurrency]=useState("inr")  

  const swap=()=>{
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  }

   return(   <div>

<div className="bg-white/30 justify-center items-center border-1 border-solid border-white   w-[480px]  px-3">

{/* from */}
<div className="bg-white rounded-lg p-4 flex items-center justify-between mt-2">
  <div className="flex flex-col gap-4">
    <p>From</p>
    <input className="bg-gray-300"
    type="number"
    value={fromAmount}
    onChange={(e)=>setFromAmount(e.target.value)}

    />
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-right">Currency Type</p>
  <select 
  value={fromCurrency}
  onChange={(e)=>setFromAmount(e.target.value)}
  >
    <option value={fromCurrency}>{fromCurrency}</option>
  </select>
  </div>

</div>
<div className="flex justify-center -my-2">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-900 "
  onClick={swap}
  
  >Swap</button>
</div>

{/* tooooo */}

<div className="bg-white rounded-lg p-4 flex items-center justify-between mb-2 ">
  <div className="flex flex-col gap-4">
    <p>To</p>
    <input className="bg-gray-300"
    type="number"
    value={toAmount}
    onChange={(e)=>setToAmount(e.target.value)}

    />
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-right">Currency Type</p>
  <select 
  value={toCurrency}
  onChange={(e)=>setToAmount(e.target.value)}
  >
    <option value={toCurrency}>{toCurrency}</option>
  </select>
  </div>

</div>




</div>

   
   
   </div>
   );

}
export default InputBox