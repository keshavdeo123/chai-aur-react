import { useState } from 'react'
import LogIn from './components/logIn'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  <UserContextProvider>
    <LogIn/>
    <Profile/>
  </UserContextProvider>
  )
}

export default App
