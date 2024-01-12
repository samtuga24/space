import React, { useEffect, useRef } from 'react'
import wallet from '../images/wallet.svg'
import check from '../images/code.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Check() {
    useEffect(()=>{
        const tl = gsap.timeline()
        tl.fromTo('.check-header',{opacity:0.2},{opacity:1,duration:2.2})
        tl.fromTo('.check-1, .check-2', {y: 100},{ y: 0, ease:"power4.inOut", stagger: 0.2, duration: 2.2},"<")
      },[])
    return (
        <div className='check-container'>
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
                        <div className='check-button'>Get Started</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
