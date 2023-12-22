import React from 'react'
import cards from '../images/cards.svg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function VirtualCard() {
    return (
        <div className='virtual-container'>
            <div className='virtual-wrapper'>
                <div className='virtual-header-wrap'>
                    <div className='virtual-header-wrap'>
                        <div className='virtual-header'>Sign up Now</div>
                    </div>
                    <div className='virtual-steps-wrap'>
                        <div className='virtual-steps'>Get your virtual card in easy steps</div>
                        <div className='steps-icon'><FontAwesomeIcon icon={faArrowRight}/></div>
                    </div>
                </div>
                <div className='virtual-image-wrap'>
                    <div className='virtual-image'>
                        <img src={cards} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
