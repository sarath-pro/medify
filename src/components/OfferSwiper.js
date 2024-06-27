import React from 'react'
import "./OfferSwiper.css"

function OfferSwiper() {
    return (
        <div className='offers-container'>
            <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
                <swiper-slide><img src="assets/Off_100.png" alt="100 rupees off" /></swiper-slide>
                <swiper-slide><img src="assets/Off_30_percent.png" alt="30 percent off" /></swiper-slide>
                <swiper-slide><img src="assets/Off_100.png" alt="100 rupees off" /></swiper-slide>
            </swiper-container>
            <div className='swiper-dots d-flex w-100 '>
                <img src='assets/slider_dot.png' alt="" />
                <img src='assets/slider_dot.png' alt="" />
                <img src='assets/slider_dot.png' alt="" />
            </div>
        </div>

    )
}

export default OfferSwiper