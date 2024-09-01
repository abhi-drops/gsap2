import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './hero.css';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {

  const text1 = useRef(null);

  useGSAP(() => {
    gsap.from("nav h1 , nav a", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.5,
    });

    gsap.from("#hero_img1", {
      width: 0,
      duration: 1,
      delay: 1,
      scale:1.2,
    });
    gsap.from("#hero_img2", {
      width: 0,
      duration: 1,
      delay: 1,
      scale:1.2,
    });
    gsap.from("#hero_img3", {
      width: 0,
      duration: 1.5,
      delay: 2,
      scale:1.2,
    });

    gsap.from(".h1-ph2 span", {
      opacity:0,
      x: -20,
      duration: 0.2,
      ease: "power3.out",
      stagger: 0.5,
      repeat:-1,
      yoyo:true,
      delay:1
    });

    gsap.from(".h1-ph3",{
      opacity:0,
      duration:1,
      delay:3,
    })

    // gsap.to(".h1-ph3",{
    //   y:-300,
    //   duration: 1.5,
    //   scrollTrigger: {
    //     trigger: ".h1-ph3",
    //     start: "top bottom",
    //     end: "top 400px",
    //   }
    // })

  });

  return (
    <>
      <div className='w-screen md:h-screen h-[80vh] md:max-h-screen max-h-[80vh] bg-amber-50'>

        <nav className='flex justify-between w-full p-5 items-center '>
          <h1 className=' text-xl font-bold md:w-60 w-full'>WEST GARDEN</h1>
          <div className='flex px-5 gap-5 font-semibold uppercase text-sm invisible md:visible'>
            <a href="" className='hover:underline underline-offset-8 hover:tracking-widest'>About US</a>
            <a href="" className='hover:underline underline-offset-8 hover:tracking-widest'>Theme</a>
            <a href="" className='hover:underline underline-offset-8 hover:tracking-widest'>Last Year's Winner</a>
            <a href="" className='hover:underline underline-offset-8 hover:tracking-widest'>Login</a>
          </div>
        </nav>

        <div className=''>
          <img id='hero_img1' src="https://images.pexels.com/photos/2512280/pexels-photo-2512280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='md:w-72 invisible md:visible hero-img ' />
          <img id='hero_img2'  src="https://images.pexels.com/photos/2984588/pexels-photo-2984588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-96 hero-img2 ' />

          <img id='hero_img3'  src="https://images.pexels.com/photos/4207568/pexels-photo-4207568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-72 hero-img3 ' />
        </div>

        <h1 ref={text1} className='h1-ph2'>
          <span>P</span>
          <span>h</span>
          <span>o</span>
          <span>t</span>
          <span>o</span>
          <span>g</span>
          <span>r</span>
          <span>a</span>
          <span>p</span>
          <span>h</span>
          <span>y</span>
        </h1>
        <h1 className='ft-cur h1-ph3'>Competition `24</h1>

      </div>
    </>
  )
}

export default Hero