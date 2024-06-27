import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='social-links'>
          <div>
            <img id='logo-2' src="assets/medify.png" alt='' />
          </div>
          <div className='social'>
            <div className='social-media'><img id='facebook' src="assets/facebook.png" alt='facebook' /></div>
            <div className='social-media'><img id='twitter' src="assets/twitter.png" alt='twitter' /></div>
            <div className='social-media'><img id='youtube' src="assets/youtube.png" alt='youtube' /></div>
            <div className='social-media'><img id='pinterest' src="assets/pinterest.png" alt='pinterest' /></div>
          </div>
        </div>
        <div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>About Us</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Our Pricing</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Our Gallery</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Appointment</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Privacy Policy</span></div>
        </div>
        <div>
        <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Orthology</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Neurology</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Dental Care</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Opthalmology</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Cardiology</span></div>
        </div>
        <div>
        <div className='link'><img id='right' src="assets/right.png" alt='' /><span>About Us</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Our Pricing</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Our Gallery</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Appointment</span></div>
          <div className='link'><img id='right' src="assets/right.png" alt='' /><span>Privacy Policy</span></div>
        </div>
      </div>
      <div>
        <p id='copyright'>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer