import react from "react"
import { useState } from "react";

function Color (){
    const[color,setColor]=useState("black")

    return (


        <div className="w-full h-screen fixed top-0  "
        style={{backgroundColor:color}}
        >
            
            <div className="bottom-5 fixed  gap-4 p-4  rounded-2xl  bg-amber-100 text-black justify-center flex flex-wrap items-center "
            >
           <button className=""
           style={{backgroundColor:"red"}}
           onClick={()=>setColor("red")}
           >Red</button>
           <button
           style={{backgroundColor:"green"}}
           onClick={()=>setColor("green")}
           >Green</button>
           <button
           style={{backgroundColor:"orange"}}
           onClick={()=>setColor("orange")}
           >Orange</button>
           <button
           style={{backgroundColor:"violet"}}
           onClick={()=>setColor("violet")}
           >violet</button>
           <button
           style={{backgroundColor:"yellow"}}
           onClick={()=>setColor("yellow")}
           >yellow</button>
           <button
           style={{backgroundColor:"grey"}}
           onClick={()=>setColor("grey")}
           >grey</button>
            </div>
         </div>
        
        

    );
}

export default  Color