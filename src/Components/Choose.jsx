import React from 'react'
import closed from '../images/closed.svg'
import phone from '../images/call.svg'
import price from '../images/pricetag.svg'
export default function Choose() {
    return (
        <div className='choose-container'>
            <div className='choose-wrapper'>
                <div className="choose-header">Why choose us?</div>
                <div className="card-wrapper">
                    <div className="card-1">
                        <div className="card-icon"><img src={closed} alt="" /></div>
                        <div className="card-header">Robust Security</div>
                        <div className="card-desc"><p>Our platform employs industry-leading security measures to ensure that your transactions remain safeguarded at all times.</p></div>
                    </div>
                    <div className="card-2">
                        <div className="card-icon"><img src={phone} alt="" /></div>
                        <div className="card-header">Reliable Support</div>
                        <div className="card-desc"><p>Committed to providing you with unmatched support, ensuring that your experience with our platform remains smooth and hassle-free</p></div>
                    </div>
                    <div className="card-3">
                        <div className="card-icon"><img src={price} alt="" /></div>
                        <div className="card-header">Transparent Pricing</div>
                        <div className="card-desc"><p>Say goodbye to hidden fees and billing structures. With our clear pricing models, you can manage your virtual card solutions well.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
