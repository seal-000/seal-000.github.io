import { useState, useEffect } from 'react'
import Navbar from '@/src/components/Navbar'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import CreateGlobal from "@/src/components/CreateGlobal";
import CustomCursor from '@/src/components/CustomCursor';
import { keepTheme } from '@/src/utils/themes'
import Projects from '@/src/components/Projects'
import Experience from '@/src/components/Experience';
import Contact from '@/src/components/Contact';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    keepTheme()

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      });
    });
  }, [])

  return (
    <>
      <Navbar />
      <CustomCursor />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
    </>
  )
}

export default App
