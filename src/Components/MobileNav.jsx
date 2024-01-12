import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo/logo.svg'
import NavContext from '../context/NavContext';
export default function MobileNav() {
    const { hamburger, setHamburger } = useContext(NavContext);
    const clickCancel = () => {
        setHamburger(false)
    }
    return (
        <div className='mobile-nav-container'>

            <div className='mobile-nav-wrapper' id={hamburger ? 'slide-in' : null}>
                <div className='mobile-nav-header'>
                    <div className='mobile-logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='mobile-close-button' onClick={clickCancel}>
                        <FontAwesomeIcon icon={faXmark} className='close-icon' />
                    </div>
                </div>

                <div className='mobile-nav-items-wrap'>
                    <div className='mobile-nav-items'>
                        About Us
                    </div>
                    <div className='mobile-nav-items'>
                        Features
                    </div>
                    <div className='mobile-nav-items'>
                        Contact Us
                    </div>
                    <div className='mobile-nav-items'>
                        FAQ
                    </div>
                </div>

                <div className='mobile-signup'>
                    <div className='signup-button-wrap'>
                        <div className='signup-button'>Create Account</div>
                        <div className='button-arrow'><FontAwesomeIcon icon={faArrowRight} /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
