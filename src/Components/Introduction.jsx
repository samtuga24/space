import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Introduction() {
  const headerRef = useRef();
  useEffect(()=>{
    const el = headerRef.current;
    gsap.fromTo('.intro-header', {scale: 0},{ scale: 1, ease:"back-in", duration: 2, scrollTrigger:{
      trigger: el,
    }})
  },[])

  return (
    <div className='intro-container intro' ref={headerRef}>
      <div className='intro-wrapper'>
        <div className='intro-header'>Virtual and Physical Card Issuing with Crypto</div>
        <div className='sub-intro'>Your Trusted Partner in Crypto Prepaid Cards. Create your virtual cards hassle-free, anytime, anywhere for all your online payment.</div>
      </div>
    </div>
  )
}
