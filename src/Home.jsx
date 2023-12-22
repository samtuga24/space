import React from 'react'
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
export default function Home() {
    return (
        <>
            <div className='home-wrapper'>
                <NavBar/>
                <Introduction/>
                <Cards />
                <GetStarted/>
                <Choose />
                <CreateCard/>
                <Check/>
                <VirtualCard/>
                <General/>
                <ServicePay/>
                <FAQs/>
                <Footer/>
                <MobileNav/>
            </div>
        </>
    )
}
