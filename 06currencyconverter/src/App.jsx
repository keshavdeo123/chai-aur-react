import { useState } from 'react'
import  useCurrencyInfo  from './Hooks/useCurrencyInfo'

import InputBox from './components/InputBox'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)

  return (
    < >
     <div className='min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center'
     style={{
      backgroundImage:"url('https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?q=80&w=955&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
     }}
     >
     
<InputBox/>

  </div>

     
    </>
  )
}

export default App
