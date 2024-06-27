import React from 'react'
import './Header.css'
import Hero from './Hero'
import Search from './Search'
import OfferSwiper from './OfferSwiper'

function Header({handleBookings, logoClick}) {
  return (
    <header>
        <div className='header-intro'> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
        <div className='d-flex flex-row justify-content-around align-items-center py-3'>
            <img className="logo" src='assets/medify.png' alt='medify logo' onClick={logoClick}/>
            <nav>
                <a>Find Doctors</a>
                <a>Hospitals</a>
                <a>Medicines</a>
                <a>Surgeries</a>
                <a>Software for Provider</a>
                <a>Facilities</a>
                <button onClick={handleBookings}>My Bookings</button>
            </nav>
        </div>
    </header>
  )
}

export default Header