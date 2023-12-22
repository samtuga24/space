import React from 'react'
import four from '../images/four.svg'
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
                    <img src={four} alt="" />
                </div>
            </div>
        </div>
    )
}
