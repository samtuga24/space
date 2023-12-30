import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Introduction() {
  // let ctx = gsap.context(()=>{})
  // ctx.revert()
  const tl = gsap.timeline()
  useEffect(() => {
    tl.fromTo('.intro-header, .sub-intro',{x: '-100vw'},{ x: '0vw', ease: "power4.inOut",stagger:0.2,duration: 2.2 })
  
  }, [])
  return (
    <div className='intro-container intro'>
      <div className='intro-wrapper'>
        <div className='intro-header'>Virtual and Physical Card Issuing with Crypto</div>
        <div className='sub-intro'>Your Trusted Partner in Crypto Prepaid Cards. Create your virtual cards hassle-free, anytime, anywhere for all your online payment.</div>
      </div>
    </div>
  )
}
