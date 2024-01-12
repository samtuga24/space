import React, { useState } from 'react'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function FAQs() {
    const [up, setUp] = useState(false)
    const [down, setDown] = useState(true)
    const [row2, setRow2] = useState(false)
    const [down2, setDown2] = useState(true)
    const [row3, setRow3] = useState(false)
    const [down3, setDown3] = useState(true)

    const [col1, setCol1] = useState(false)
    const [down4, setDown4] = useState(true)
    const [col2, setCol2] = useState(false)
    const [down5, setDown5] = useState(true)
    const [col3, setCol3] = useState(false)
    const [down6, setDown6] = useState(true)

    const clickDown = () => {
        setUp(true)
        setDown(false)
    }

    const clickUp = () => {
        setUp(false)
        setDown(true)
    }

    const clickDown2 = () => {
        setRow2(true)
        setDown2(false)
    }

    const clickRow2 = () => {
        setRow2(false)
        setDown2(true)
    }

    const clickDown3 = () => {
        setRow3(true)
        setDown3(false)
    }

    const clickRow3 = () => {
        setRow3(false)
        setDown3(true)
    }


    const clickDown4 = () => {
        setCol1(true)
        setDown4(false)
    }

    const clickCol1 = () => {
        setCol1(false)
        setDown4(true)
    }

    const clickDown5 = () => {
        setCol2(true)
        setDown5(false)
    }

    const clickCol2 = () => {
        setCol2(false)
        setDown5(true)
    }

    const clickDown6 = () => {
        setCol3(true)
        setDown6(false)
    }

    const clickCol3 = () => {
        setCol3(false)
        setDown6(true)
    }

    return (
        <div className='faqs-container' id='faqs'>
            <div className='faqs-wrapper'>
                <div className='faqs-header'>Frequently asked questions</div>
                <div className='faqs'>
                    <div className='faqs-1-wrapper'>
                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is alphaspace?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down ? 'show-arrow' : 'hide-arrow'} onClick={clickDown}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={up ? 'show-arrow' : 'hide-arrow'} onClick={clickUp}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {up &&
                                <div className='faqs-row-1-desc'>
                                    Alphaspace is a secured platform that enables hassle-free virtual card creation through a dashboard or an API, anytime, anywhere for all your online payment.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What types of accounts are available on alphaspace?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down2 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown2}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={row2 ? 'show-arrow' : 'hide-arrow'} onClick={clickRow2}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {row2 &&
                                <div className='faqs-row-1-desc'>
                                    You are at liberty to create either an individual account or a company account or both. Note, you are not allowed to created more than one individual account.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>How do I fund my master wallet?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down3 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown3}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={row3 ? 'show-arrow' : 'hide-arrow'} onClick={clickRow3}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {row3 &&
                                <div className='faqs-row-1-desc'>
                                    You can fund your master wallet directly from your USDT-Tron wallet. Login to your dashboard and click on “Top Up” to begin.
                                </div>
                            }
                        </div>
                    </div>
                    <div className='faqs-2-wrapper'>
                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What crypto currencies do you support?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down4 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown4}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col1 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol1}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col1 &&
                                <div className='faqs-row-1-desc'>
                                    Currently we support only USDT-Tron. However, in a few months we will be supporting most of the major crypto currencies.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-2'>
                                <div className='faqs-row-1-header'>How does alphaspace virtual card work?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down5 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown5}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col2 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol2}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col2 &&
                                <div className='faqs-row-1-desc'>
                                   Alphaspace virtual cards can be used to make purchases in the same way as a physical bank card, but without the anxiety that comes with giving out your actual card’s information. Alphaspace virtual cards are not connected to your bank account but comes with a unique, 16-digit card number, CVV, and expiration and billing address. 
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>Alphaspace is peace of mind.</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down6 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown6}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col3 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol3}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col3 &&
                                <div className='faqs-row-1-desc'>
                                  Worried that a merchant might bill you when you least expect it? Our system enables you to set customized spending limits on your virtual cards, so merchants can never authorize a transaction for more than you’ve agreed to spend for that period. 
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
