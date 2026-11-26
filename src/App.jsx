import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Student from './components/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
      <br />
      <Student />
      <br />
      <Welcome />
    </div>
  )
}
export default App
