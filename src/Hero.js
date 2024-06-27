import React from 'react'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero-container d-flex align-items-center'>
        <div className='hero-left'>
            <div className='tag-hero'>
                <h4>Skip the travel! Find Online <span>Medical</span> <span id='centers'>Centers</span></h4>
                <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
            </div>
            <button>Find centers</button>
        </div>
        <img src='assets/hero_image.png' alt='doctors image' />
    </div>
  )
}

export default Hero