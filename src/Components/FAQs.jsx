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


    console.log(up)
    return (
        <div className='faqs-container'>
            <div className='faqs-wrapper'>
                <div className='faqs-header'>Frequently asked questions</div>
                <div className='faqs'>
                    <div className='faqs-1-wrapper'>
                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down ? 'show-arrow' : 'hide-arrow'} onClick={clickDown}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={up ? 'show-arrow' : 'hide-arrow'} onClick={clickUp}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {up &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down2 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown2}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={row2 ? 'show-arrow' : 'hide-arrow'} onClick={clickRow2}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {row2 &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down3 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown3}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={row3 ? 'show-arrow' : 'hide-arrow'} onClick={clickRow3}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {row3 &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>
                    </div>
                    <div className='faqs-2-wrapper'>
                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down4 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown4}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col1 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol1}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col1 &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-2'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down5 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown5}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col2 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol2}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col2 &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>

                        <div className='faqs-1'>
                            <div className='faqs-row-1'>
                                <div className='faqs-row-1-header'>What is Card Hub?</div>
                                <div className='angle-icon-wrap'>
                                    <div className='faqs-row-1-icon' id={down6 ? 'show-arrow' : 'hide-arrow'} onClick={clickDown6}><FontAwesomeIcon icon={faAngleDown} /></div>
                                    <div className='faqs-row-1-icon-up' id={col3 ? 'show-arrow' : 'hide-arrow'} onClick={clickCol3}><FontAwesomeIcon icon={faAngleUp} /></div>
                                </div>
                            </div>
                            {col3 &&
                                <div className='faqs-row-1-desc'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet odio leo.
                                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
