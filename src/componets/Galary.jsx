import React from 'react'
import './galary.css'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Galary() {

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#theme", // Element to trigger animation
        start: 'top 0%', // When the top of the element reaches the center of the viewport
        end: 'bottom 10%', // When the bottom of the element reaches 80% of the viewport
        scrub: true, // Enables smooth scrubbing
        pin:true// Show markers for testing
      },
    });

    tl.from("#sub",{
      y:-20,
      opacity:0
    })

    tl.from("#wind span ",{
      y:-100,
      opacity:0,
      stagger:1,
      rotateZ:"10deg"
    })



  })

  return (
    <>
    <div id='theme' className='h-screen w-screen bg-amber-50 flex justify-center items-center'>

      <div className=' w-4/6 h-3/4 flex items-center justify-center'>
        <div className='flex w-full h-full flex-col justify-center items-center'>
            <h1 id='sub' className='ft-para  text-2xl p-1 mb-0 relative top-14'>This year's Theme </h1>
            <h1 id='wind' style={{fontSize:"15rem"}} className=' p-7 py-0 mt-0 inline-block'>
              <span className=' inline-block' >"</span>
              <span className=' inline-block' >W</span>
              <span className=' inline-block' >I</span>
              <span className=' inline-block' >N</span>
              <span className=' inline-block' >D</span>
              <span className=' inline-block' >"</span>
              </h1>
        </div>
      </div>

    </div>
    </>
  )
}

export default Galary