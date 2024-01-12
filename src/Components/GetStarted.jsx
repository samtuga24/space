import React from 'react'
import group from '../images/group.svg'
import five from '../images/five.svg'
import six from '../images/six.svg'
export default function GetStarted(props) {
    return (
        <div className='get-started-container'>
            <div className='get-started-wrapper'>
                <div className='get-started-header-wrap'>
                    <div className='get-started-header'>Join us and be part of the financial revolution!</div>
                    <div className='get-started-button-wrap'>
                        Get Started
                    </div>
                </div>
                <div className='get-started-image-wrap'>
                    <img src={group} alt="" />
                </div>

                <div className='get-started-image-mobile-wrap'>
                    <img src={five} alt="" />
                    <img src={six} alt="" />
                </div>
            </div>
        </div>
    )
}