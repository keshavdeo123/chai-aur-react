import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'
import userContextProvider from '../context/userContextProvider'

function logIn() {
    const [userName,setUsername]=useState('')
    const [pass,setPass]=useState('')
    const {setUser}=useContext(userContext)

    const handleSubmit=(e)=>{
        e.preventDefault();
setUser({userName,pass})
    }
  return (
    <div>
        <h1>LogIn Page</h1>
        <div>
            <input
            value={userName}
            onChange={(e)=>{setUsername(e.target.value)}}
            type="text " placeholder='Username' />
            <input
            value={pass}
            onChange={(e)=>{setPass(e.target.value)}}
            type="number" placeholder='Password' />
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default logIn