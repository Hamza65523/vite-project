import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepsForm from './components/StepsForm'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <div className='h-screen w-full '>
     <div className="h-full w-full">
     <Header/>
    <StepsForm/>
     </div>
    </div>
  )
}

export default App
