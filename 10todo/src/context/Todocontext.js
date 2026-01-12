import { createContext, useContext } from "react";

 export const Todocontext=createContext(
    {
        todos:[
        {
        id:1,
        title:" ",
        completed:false

    }],
    addTodo:()=>{},
    updateTodo:()=>{},
    deteteTodo:()=>{},
    toggleComplete:()=>{}
    }
 )

 export const useTodo=()=>{
    return useContext(Todocontext);
 }

 export const Todoprovider=Todocontext.Provider
