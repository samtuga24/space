import React, { useContext } from 'react'
import logo from '../logo/logo.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavContext from '../context/NavContext';
export default function NavBar(props) {
    const {hamburger, setHamburger} = useContext(NavContext);
    const clickHamburger = () =>{
        setHamburger(!hamburger)
    }
    return (
        <div className='navbar-container'>
            <div className='navbar-wrapper'>
                <div className='title-wrapper'>
                    <div className='logo-wrapper'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='title'>Alpha Space</div>
                </div>
                <div className='nav-list-container'>
                    <div className='nav-list-wrapper'>
                        <div className='nav-list'>
                            <ul>
                                <li>About Us</li>
                                <li>Features</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div className='nav-buttons'>
                            <div className='login-button-wrapper'>
                                <button className='login-button'>Log In</button>
                            </div>
                            <div className='register-button-wrapper'>
                                <button className='register-button'>Create Account</button>
                            </div>
                            <div className='hamburger-wrapper' onClick={clickHamburger}>
                                <div className='hamburger'>
                                    <FontAwesomeIcon icon={faBars}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
