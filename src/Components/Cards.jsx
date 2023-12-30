import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import first from '../images/first.svg'
import second from '../images/second.svg'
import third from '../images/third.svg'
export default function Cards() {
    gsap.registerPlugin(ScrollTrigger)
    useLayoutEffect(()=>{
        const tl = gsap.timeline()
      tl.fromTo('.first, .second, .third', {y: 100},
      {
        scrollTrigger:{
            trigger:".cards-container"
        },
      y: 0, ease:"power4.inOut", stagger:0.3, duration: 2.2,
    })
    },[])
    return (
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <div className='first'>
                    <div className='first-image'>
                        <img src={first} alt="" />
                    </div>
                    <div className='first-desc'>Effortless virtual card creation at your fingertips in easy steps</div>
                </div>
                <div className='second'>
                    <div className='first-image'>
                        <img src={second} alt="" />
                    </div>
                    <div className='first-desc'>Personalized virtual card solutions for your everyday payments</div>
                </div>
                <div className='third'>
                    <div className='first-image'>
                        <img src={third} alt="" />
                    </div>
                    <div className='first-desc'>Streamline your corporate expenses with Alpha virtual cards</div>
                </div>
            </div>
        </div>
    )
}
