import React, { useContext } from 'react'
import logo from '../logo/logo.svg'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavContext from '../context/NavContext';
import { Link } from 'react-scroll';
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
                </div>
                <div className='nav-list-container'>
                    <div className='nav-list-wrapper'>
                        <div className='nav-list'>
                            <ul>
                                <li><Link to='footer' spy={false} smooth={true} offset={100} duration={800}>About Us</Link></li>
                                <li><Link to='create' spy={false} smooth={true} offset={-100} duration={800}>Features</Link></li>
                                <li><Link to='footer' spy={false} smooth={true} offset={100} duration={800}>Contact Us</Link></li>
                                <li><Link to='faqs' spy={false} smooth={true} offset={10} duration={800}>FAQ</Link></li>
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
