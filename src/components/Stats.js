import React from 'react'
import "./Stats.css"

function StatsCard({ imgSrc, value, text, cls}) {
    return (
        <div className={cls}>
            <img src={imgSrc} alt='' />
            <p className='stats-card-value'>{value}</p>
            <p className='stats-card-text'>{text}</p>
        </div>
    )
}

function Stats() {
    return (
        <div className='stats-container w-100'>
            <div className='stats-left'>
                <p id='stats-left-1'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
                <p id='stats-left-2'>Our Families</p>
                <p id='stats-left-3'>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </div>
            <div className='stats-right'>
                <div className='stats-row'>
                    <StatsCard cls={'stats-card'} imgSrc={"assets/happy-patients.png"} value={'5000+'} text={'Happy Patients'} />
                    <StatsCard cls={'stats-card second'} imgSrc={"assets/hospitals.png"} value={'200+'} text={'Hospitals'} />
                </div>
                <div className='stats-row'>
                    <StatsCard cls={'stats-card'} imgSrc={"assets/laboratories.png"} value={'1000+'} text={'Laboratories'} />
                    <StatsCard cls={'stats-card second'} imgSrc={"assets/expert-doctors.png"} value={'700+'} text={'Expert Doctors'} />
                </div>


            </div>
        </div>
    )
}

export default Stats