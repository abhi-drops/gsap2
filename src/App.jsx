import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import React, { useRef } from 'react'
import Hero from './componets/Hero'
import AboutUs from './componets/AboutUs'
import Lastyear from './componets/Lastyear'
import Galary from './componets/Galary'
import Footer from './componets/Footer'

const App = () => {

  const mn = useRef()
  const cur = useRef()

  useGSAP(()=>{
    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      gsap.to(cur.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: 'back.out',
      });
    };

    // Add mousemove event listener
    mn.current.addEventListener('mousemove', handleMouseMove);
  })
  return (
    <main ref={mn} className=' cursor-none'>
      <div ref={cur} id='cursor' className=' w-4 h-4 rounded-full bg-white fixed z-50 mix-blend-difference'></div>
      <Hero/>
      <AboutUs/>
      <Galary/>
      <Lastyear/>
      <Footer/>
    </main>
  )
}

export default App
