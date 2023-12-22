import React, { useEffect, useRef } from 'react'
import service from '../images/service.svg'
import uber from '../images/uber.svg'
import netflix from '../images/netflix.svg'
import playstation from '../images/playstation.svg'
import red from '../images/red.svg'
import green from '../images/green.svg'
import store from '../images/store.svg'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function ServicePay() {
    const headerRef = useRef();
    return (
        <div className='service-container' ref={headerRef}>
            <div className='service-wrapper'>
                <div className='service-1'>
                    <div className='service-1-image'>
                        <img src={service} alt="" />
                    </div>
                    <div className='service-1-desc'>Pay any service instantly for work</div>
                </div>
                <div className='service-2'>
                    <div className='service-2-header'>Pay any service instantly for your personal use</div>
                    <div className='service-icons-wrap'>
                        <div className='service-icons-1'>
                            <div className='service-icon'><img src={uber} alt="" /></div>
                            <div className='service-icon'><img src={netflix} alt="" /></div>
                            <div className='service-icon'><img src={playstation} alt="" /></div>
                        </div>
                        <div className='service-icons-1'>
                            <div className='service-icon'><img src={red} alt="" /></div>
                            <div className='service-icon'><img src={green} alt="" /></div>
                            <div className='service-icon'><img src={store} alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
