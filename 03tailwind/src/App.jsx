import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-amber-100 text-black rounded-xl p-4 mb-5' >Tailwind test</h1>
     
    <Card />
    </>
  )
}

export default App
