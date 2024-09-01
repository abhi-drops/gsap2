import React from 'react'
import { gsap } from 'gsap';
import './hero.css';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutUs() {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutus", // Element to trigger animation
        start: 'top 0%', // When the top of the element reaches the center of the viewport
        end: 'bottom 10%', // When the bottom of the element reaches 80% of the viewport
        scrub: true, // Enables smooth scrubbing
        pin:true// Show markers for testing
      },
    });

    tl.from("#au",{
      duration: 0.5,
      x:100,
      opacity:0,
    })

    tl.from("#para",{
      duration: 0.5,
      x:100,
      opacity:0,
    })

    tl.from("#pic",{
      duration: 1,
      height:0
    })

  })
  return (
    <>
    <div id='aboutus' className='md:h-screen w-screen bg-amber-50 flex  justify-center items-center'>

      <div className=' md:w-4/6 w-full md:h-3/4 flex items-center justify-center md:flex-row flex-col'>
        <div className='flex w-full h-full flex-col justify-center'>
        <p id='au' className=' text-5xl font-semibold p-8 ps-0 relative top-11 md:mb-0 mb-8'>About Us</p>
        <p id='para' className='md:w-4/5 pt-5 ft-para para' style={{textAlign:"justify"}}>Welcome to the Annual Photography Contest hosted by West Garden, a cherished green oasis in Ihba City, Estanogania. Our contest celebrates the vibrant spirit of our community, inviting photographers of all levels to capture the beauty and diversity of the garden’s flora, fauna, and landscapes. This event is more than a competition; it’s a gathering of nature lovers, artists, and locals who share a passion for creativity and the natural world. Join us in showcasing the unique perspectives that make our garden a beloved local treasure!</p>
        </div>

        <div>
          <img id="pic" src="https://images.pexels.com/photos/2360684/pexels-photo-2360684.jpeg?auto=compress&cs=tinysrgb&w=600" className='h-[70vh] md:w-[40vw] w-full object-cover' alt="" />
        </div>

      </div>

    </div>
    </>
  )
}

export default AboutUs