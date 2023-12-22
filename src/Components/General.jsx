import React from 'react'

export default function General(){
  return (
    <div className='general-container'>
        <div className='general-wrapper'>
            <div className='general-header'>General pricing model</div>
            <div className='general-list-wrap'>
                <div className='general-list'>0% card activation fees</div>
                <div className='general-list'>0% fee for loading master wallet</div>
                <div className='general-list'>0% fees for unsuccessful payment attempts</div>
                <div className='general-list'>1% fee for withdrawal from card</div>
                <div className='general-list'>$2 card issuance fees</div>
                <div className='general-list'>2.5% card load fees</div>
                <div className='general-list'>$2 card monthly maintenance fees</div>
                <div className='general-list'>$1,500 monthly API access fees</div>
            </div>
        </div>
    </div>
  )
}
