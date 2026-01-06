import { useEffect,useState } from "react";

 function useCurrencyInfo(currency){
 const[data,setData]=useState({})

useEffect(()=>{
   async function fetchCurrency() {
    const result= await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
   const ans=await result.json();
   setData(ans[currency]);
   }
fetchCurrency();



},[currency])
return data;

 }
 export default useCurrencyInfo;