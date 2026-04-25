import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import { keepTheme } from './utils/themes'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    keepTheme()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      
    </>
  )
}

export default App
