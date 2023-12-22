import React, { useEffect, useRef } from 'react'
import wallet from '../images/wallet.svg'
import check from '../images/code.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Check() {
    const headerRef = useRef();
    useEffect(()=>{
        const el = headerRef.current;
        gsap.fromTo('.service-1, .service-2', {scale: 0},{ scale: 1, ease:"back-in", stagger: 0.2, duration: 2, scrollTrigger:{
          trigger: el,
        }})
      },[])
    return (
        <div className='check-container' ref={headerRef}>
            <div className='check-wrapper'>
                <div className='check-header'>Check this out</div>
                <div className='check'>
                    <div className='check-1'>
                        <div className='check-1-header'>Virtual Card Issuing with crypto!</div>
                        <div className='check-1-image-wrap'>
                            <div className='check-1-image'>
                                <img src={wallet} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='check-2'>
                        <div className='check-2-header'>Effortless Integration for Everyone</div>
                        <div className='check-2-image-wrap'>
                            <div className='check-2-image'>
                                <img src={check} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
