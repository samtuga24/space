import React, { useEffect, useRef } from 'react'
import Cards from './Components/Cards'
import NavBar from './Components/NavBar'
import Introduction from './Components/Introduction'
import GetStarted from './Components/GetStarted'
import Choose from './Components/Choose'
import CreateCard from './Components/CreateCard'
import Check from './Components/Check'
import VirtualCard from './Components/VirtualCard'
import General from './Components/General'
import ServicePay from './Components/ServicePay'
import FAQs from './Components/FAQs'
import Footer from './Components/Footer'
import MobileNav from './Components/MobileNav'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Home() {
    
    return (
        <>
                <div className='home-wrapper'>
                <div className='home-navbar'><NavBar/></div>
                <div><Introduction/></div>
                <div><Cards/></div>
                <div><GetStarted/></div>
                <div><Choose /></div>
                <div><CreateCard/></div>
                <div><Check/></div>
                <div className='section'><VirtualCard/></div>
                <div className='general'><General/></div>
                <div><ServicePay/></div>
                <div><FAQs/></div>
                <div><Footer/></div>
                <div><MobileNav/></div>
                <div></div>
                </div>
        </>
    )
}
