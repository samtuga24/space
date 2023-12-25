import React from 'react'
import call from '../images/call.svg'
import location from  '../images/location.svg'
import mail from '../images/mail.svg'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-wrapper'>
                <div className='footer-desc-wrap'>
                    <div className='footer-desc-header-wrap'>
                        <div className='footer-desc-logo'></div>
                        <div className='footer-desc-header'>Alpha Space</div>
                    </div>
                    <div className='footer-desc'>
                        At Alpha Space we offer you platform that enables hassle-free virtual card creation through a dashboard or an API, anytime, anywhere for all your online payment.<br />All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.</div>
                </div>
                <div className='footer-connect-wrap'>
                    <div className='connect-header'>Connect on</div>
                    <div className='connect-icons-wrap'>
                        <div className='connect-icon'><FontAwesomeIcon icon={faFacebookF} /></div>
                        <div className='connect-icon'><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className='connect-icon'><FontAwesomeIcon icon={faLinkedinIn} /></div>
                        <div className='connect-icon'><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>
                </div>
                <div className='footer-service-wrap'>
                    <div className='connect-header'>Service</div>
                    <div className='service-list'>                       
                            <div className='s-list-item'>Virtual Cards</div>
                            <div className='s-list-item'>Physical Cards</div>
                    </div>
                </div>
                <div className='footer-contact-wrap'>
                    <div className='contact-header'>Contact</div>
                    <div className='contact-list-wrap'>
                        <div className='contact-list-1'>
                            <div className='contact-icon'><img src={call} alt="" /></div>
                            <div className='contact-icon-desc'>(406) 555-0120</div>
                        </div>
                        <div className='contact-list-1'>
                            <div className='contact-icon'><img src={mail} alt="" /></div>
                            <div className='contact-icon-desc'>support@alpha.africa</div>
                        </div>
                        <div className='contact-list-1'>
                            <div className='contact-icon'><img src={location} alt="" /></div>
                            <div className='contact-icon-desc'>Wyoming,USA</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
