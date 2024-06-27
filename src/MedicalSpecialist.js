import React from 'react'
import MedicalSpecialistCard from './MedicalSpecialistCard'
import "./MedicalSpecialist.css"

function MedicalSpecialist() {
    return (
        <div className='medical-specialist-container'>
            <p className='title'>Our Medical Specialist</p>
            <swiper-container slides-per-view="4" speed="500" css-mode="true" space-between="10" loop="true">
                <swiper-slide><MedicalSpecialistCard imgSrc={'assets/doc-1.png'} name={'Dr. Ahmad Khan'} title={'Neurologist'} /></swiper-slide>
                <swiper-slide><MedicalSpecialistCard imgSrc={'assets/doc-2.png'} name={'Dr. Heena Sachdeva'} title={'Orthopadics'} /></swiper-slide>
                <swiper-slide><MedicalSpecialistCard imgSrc={'assets/doc-3.png'} name={'Dr. Ankur Sharma'} title={'Medicine'} /></swiper-slide>
                <swiper-slide><MedicalSpecialistCard imgSrc={'assets/doc-1.png'} name={'Dr. Balakrishna'} title={'Cardiologist'} /></swiper-slide>
                <swiper-slide><MedicalSpecialistCard imgSrc={'assets/doc-2.png'} name={'Dr. Nani'} title={'General Surgeon'} /></swiper-slide>
            </swiper-container>
            <div className='swiper-dots d-flex w-100 '>
                <img src='assets/slider_dot.png' alt="" />
                <img src='assets/slider_dot.png' alt="" />
                <img src='assets/slider_dot.png' alt="" />
            </div>
        </div>
    )
}

export default MedicalSpecialist