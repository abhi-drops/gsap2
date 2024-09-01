import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Lastyear() {

  useGSAP(()=>{

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#lastyear", // Element to trigger animation
        start: 'top 0%', // When the top of the element reaches the center of the viewport
        end: 'bottom 10%', // When the bottom of the element reaches 80% of the viewport
        scrub: true, // Enables smooth scrubbing
        markers: false,
        pin:true// Show markers for testing
      },
    });

    tl.from("#cat",{
      height:0,
    })

    tl.from("#photodetails",{
      opacity:0
    })

    tl.from("#pett",{
      y:-20,
      opacity:0
    },"<")


    tl.from("#pet span ",{
      y:-30,
      opacity:0,
      stagger:0.2,
      rotateZ:"10deg"
    },"<")



  })


  return (


<>
<div id='lastyear' className='h-screen w-screen bg-amber-50 flex justify-center items-center'>

  <div className='w-4/6 h-3/4 flex items-center justify-center'>



  <div id='cat' className='w-1/2 h-full' style={{backgroundImage:"url('https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg')", backgroundSize:"cover"}}>
    <h4 id='photodetails' className='ft-para text-white p-2 ' style={{writingMode:"vertical-lr", textOrientation:"upright"}}>2023 WINNER | ALEX BARGAIN</h4>
  </div>

  <div className='w-1/2 h-full flex justify-center items-center flex-col'>
  <h1 id='pett' className='ft-para relative top-5'>Last Year's Topic</h1>
  <h2 id='pet' className=' text-8xl p-10 inline-block'>
    <span className=' inline-block py-5'>"</span>
    <span className=' inline-block py-5'>P</span>
    <span className=' inline-block py-5'>E</span>
    <span className=' inline-block py-5'>T</span>
    <span className=' inline-block py-5'>S</span>
    <span className=' inline-block py-5'>"</span>
    </h2>
  </div>

  </div>

</div>
</>
  )
}

export default Lastyear