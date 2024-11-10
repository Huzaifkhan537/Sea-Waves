import React, { useEffect } from 'react'
import './index.css'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  useEffect(() => {

    // Initialize Lenis
    const lenis = new Lenis();

    // Listen for the scroll event and log the event data
    lenis.on('scroll', (e) => {
      console.log(e);
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


  }, [])

  useGSAP(() => {
    
     document.querySelectorAll('.elem').forEach(elem=>{

      let image=elem.querySelector('img')
      let tl = gsap.timeline()
      
      let xTransform = gsap.utils.random(-100,100)
      
      tl
      .set(image,{
        transformOrigin : `${xTransform < 0 ? 0:'100%'}`,
      },"start")
      .to(image,{
        scale:0,
        ease:'none',
        scrollTrigger:{
          trigger:image,
          scrub:true,
          start:'top top',
          end:'bottom top'
        }
      },"start")
      .to(elem,{
        xPercent:xTransform,
        ease:'none',
        scrollTrigger:{
          trigger:image,
          scrub:true,
          start:'top bottom',
          end:'bottom top'
        }

      })

     })






  });

  return (


    <>
      <div className='justify-center items-center flex w-full h-screen flex z-10'>
        <h1 className='fixed text-8xl '>Sea Waves</h1>
        <h3 className='fixed text-3xl mt-32 '>Tides and vibes.</h3>
      </div>
      <div className="grid grid-cols-8 grid-rows-20 gap-4 p-4 overflow-hidden">
        <div className="aspect-square elem " style={{ gridRow: 'var(--r, 1)', gridColumn: 'var(--c, 3)' }}>
          <img src="/img/image1.jpg" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 1)', gridColumn: 'var(--c, 7)' }}>
          <img src="/img/image2.jpg" alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 2)', gridColumn: 'var(--c, 2)' }}>
          <img src="/img/image3.jpg" alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 2)', gridColumn: 'var(--c, 5)' }}>
          <img src="/img/image4.jpg" alt="Image 4" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 3)', gridColumn: 'var(--c, 1)' }}>
          <img src="/img/image5.jpg" alt="Image 5" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 3)', gridColumn: 'var(--c, 8)' }}>
          <img src="/img/image6.jpg" alt="Image 6" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 4)', gridColumn: 'var(--c, 4)' }}>
          <img src="/img/image7.jpg" alt="Image 7" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 4)', gridColumn: 'var(--c, 6)' }}>
          <img src="/img/image8.jpg" alt="Image 8" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 5)', gridColumn: 'var(--c, 2)' }}>
          <img src="/img/image9.jpg" alt="Image 9" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 5)', gridColumn: 'var(--c, 7)' }}>
          <img src="/img/image10.jpg" alt="Image 10" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 6)', gridColumn: 'var(--c, 1)' }}>
          <img src="/img/image11.jpg" alt="Image 11" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 6)', gridColumn: 'var(--c, 5)' }}>
          <img src="/img/image12.jpg" alt="Image 12" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 7)', gridColumn: 'var(--c, 3)' }}>
          <img src="/img/image13.jpg" alt="Image 13" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 7)', gridColumn: 'var(--c, 8)' }}>
          <img src="/img/image14.jpg" alt="Image 14" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 8)', gridColumn: 'var(--c, 2)' }}>
          <img src="/img/image15.jpg" alt="Image 15" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 8)', gridColumn: 'var(--c, 6)' }}>
          <img src="/img/image16.jpg" alt="Image 16" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 9)', gridColumn: 'var(--c, 4)' }}>
          <img src="/img/image17.jpg" alt="Image 17" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 9)', gridColumn: 'var(--c, 7)' }}>
          <img src="/img/image18.jpg" alt="Image 18" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 10)', gridColumn: 'var(--c, 1)' }}>
          <img src="/img/image19.jpg" alt="Image 19" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 10)', gridColumn: 'var(--c, 5)' }}>
          <img src="/img/image20.jpg" alt="Image 20" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 11)', gridColumn: 'var(--c, 3)' }}>
          <img src="/img/image21.jpg" alt="Image 21" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 11)', gridColumn: 'var(--c, 8)' }}>
          <img src="/img/image22.jpg" alt="Image 22" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 12)', gridColumn: 'var(--c, 2)' }}>
          <img src="/img/image23.jpg" alt="Image 23" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 12)', gridColumn: 'var(--c, 6)' }}>
          <img src="/img/image24.jpg" alt="Image 24" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 13)', gridColumn: 'var(--c, 1)' }}>
          <img src="/img/image25.jpg" alt="Image 25" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 13)', gridColumn: 'var(--c, 7)' }}>
          <img src="/img/image26.jpg" alt="Image 26" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 14)', gridColumn: 'var(--c, 4)' }}>
          <img src="/img/image27.jpg" alt="Image 27" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 14)', gridColumn: 'var(--c, 8)' }}>
          <img src="/img/image28.jpg" alt="Image 28" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 15)', gridColumn: 'var(--c, 2)' }}>
          <img src="/img/image29.jpg" alt="Image 29" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 15)', gridColumn: 'var(--c, 5)' }}>
          <img src="/img/image30.jpg" alt="Image 30" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 16)', gridColumn: 'var(--c, 1)' }}>
          <img src="/img/image31.jpg" alt="Image 31" className="w-full h-full object-cover" />
        </div>
        <div className="aspect-square elem" style={{ gridRow: 'var(--r, 16)', gridColumn: 'var(--c, 6)' }}>
          <img src="/img/image32.jpg" alt="Image 32" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className='h-screen w-full bg-zinc-100 z-500 relative justify-center items-center flex flex-col'>
        <h5 className='text-2xl text-center p-32 '>The sea is a huge body of water that stretches far and wide, filled with life and beauty. Its waves move gently, telling stories of faraway places and the secrets hidden below. The sea is home to many creatures, from colorful fish to giant whales, creating a lively and unique ecosystem. It brings peace and joy to people, making them feel free and adventurous. Whether listening to the waves crash or watching the sun set over the water, the sea is a place that captures the hearts of everyone who visits.</h5>
        <div className='w-32 h-0.5 bg-zinc-900 mt-10  '></div>
      </div>
    </>
  )
}

export default App
