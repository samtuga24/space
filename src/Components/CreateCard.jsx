import React from 'react'
import premium from '../images/premium.svg'
import standard from '../images/standard.svg'
export default function CreateCard(props) {

    return (
        <div className='create-card-container'>
            <div className='create-card-wrapper'>
                <div className='create-card-header'>Create your Card</div>
                <div className='create-card'>
                    <div className='create-card-1'>
                        <div className='button-row-1'>
                            <div className='create-btn-1'>Unlimited Topups</div>
                            <div className='create-btn-1'>Withdrawals to main wallet</div>
                        </div>
                        <div className='button-row-2'>
                            <div className='create-btn-1'>Best for Recurring payments</div>
                            <div className='create-btn-1'>Works for all payments</div>
                        </div>
                        <div className='create-card-desc'>Personalized Virtual Card Solutions for Your Everyday Payments</div>
                        <div className='create-card-button-wrap'>
                            Create Card
                        </div>
                    </div>
                    <div className='create-card-2'>
                        <div className='create-card-image-wrap'>
                            <img src={premium} alt="" />
                        </div>
                    </div>
                </div>

                <div className='create-card-row-2'>
                    <div className='create-card-1'>
                        <div className='button-row-1'>
                            <div className='create-btn-1-row-2'>Single Topups</div>
                            <div className='create-btn-1-row-2'>Withdrawals to main wallet</div>
                        </div>
                        <div className='button-row-2'>
                            <div className='create-btn-1-row-2'>Best for Recurring payments</div>
                            <div className='create-btn-1-row-2'>Works for all payments</div>
                        </div>
                        <div className='create-card-desc-row-2'>Seamless Spending, Boundless Opportunities with Alpha Space!</div>
                        <div className='create-card-button-wrap-row-2'>
                            Create Card
                        </div>
                    </div>
                    <div className='create-card-2'>
                        <div className='create-card-image-wrap'>
                            <img src={standard} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
