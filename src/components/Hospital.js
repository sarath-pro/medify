import React, { useState } from 'react'
import "./Hospital.css"
import { getDate, getDate2 } from './utils'

function Hospital({ hospTitle, city, state, hospType, count, isBooking, bookingDetails }) {
    const [bookings, showBookings] = useState(false)
    const [slotPosition, setSlotPosition] = useState(0)
    const [bluePosition, setBluePosition] = useState(0)
    let slot1, slot2, slot3
    if (slotPosition === 0) {
        slot1 = 'Today'
        slot2 = 'Tomorrow'
        slot3 = getDate(2)
    } else if (slotPosition === 1) {
        slot1 = 'Tomorrow'
        slot2 = getDate(2)
        slot3 = getDate(3)
    } else {
        slot1 = getDate(slotPosition)
        slot2 = getDate(slotPosition + 1)
        slot3 = getDate(slotPosition + 2)
    }
    let slotsAvailable1 = 18, slotsAvailable2 = 18, slotsAvailable3 = 17;
    let morningSessions = ['9:00 AM', '9:30 AM', '10:00 AM', '11:00 AM']
    let afternoonSessions = ['12:00 PM', '12:30 PM', '1:00 PM', '2:00 PM', '2:30 PM']
    let eveningSessions = ['6:00 PM', '6:30 PM', '7:00 PM', '8:00 PM', '8:30 PM']
    let slotdate1 = 'slots-date'
    let slotdate2 = 'slots-date'
    let slotdate3 = 'slots-date'
    if (bluePosition === 0) {
        slotdate1 += ' slots-date-blue'
    } else if (bluePosition === 1) {
        slotdate2 += ' slots-date-blue'
    } else {
        slotdate3 += ' slots-date-blue'
    }

    const leftHandler = () => {
        if (slotPosition > 0) {
            setSlotPosition((prev) => (prev - 1))
        }
    }

    const rightHandler = () => {
        if (slotPosition < 4) {
            setSlotPosition((prev) => (prev + 1))
        }
    }

    const handleBooking = (event) => {
        let bookingTime = event.target.textContent;
        let bookingDate = getDate2(slotPosition+bluePosition)
        console.log('bookingTime:: ', bookingTime)
        console.log('bookingDate:: ', bookingDate)
        let bookingDetails = {
            hospTitle,
            city,
            state,
            count,
            hospType,
            bookingTime,
            bookingDate
        }
        let bookings = localStorage.getItem('bookings')
        if(!bookings) {
            let bookings = [bookingDetails]
            localStorage.setItem('bookings', JSON.stringify(bookings))
        } else {
            bookings = JSON.parse(bookings)
            bookings.push(bookingDetails)
            localStorage.setItem('bookings', JSON.stringify(bookings))
        }
        console.log('booking done')
    }

    return (
        <>
            <div className='hospital-card'>
                <div className='hospital-main'>
                    <div className='u-d-flex'>
                        <div className='u-pos-has'>
                            <div className='hospital-img-container'>
                                <img src="assets/hospital-card-img.png" alt="" />
                            </div>
                            <div className='badge'>
                                <img src="assets/badge.png" alt='' />
                            </div>
                        </div>
                        <div className='hospital-card-info'>
                            <p className='hosp-title'>{hospTitle}</p>
                            <div className='uv2-spacer'>
                                <p className='hosp-location'>{city}, {state}</p>
                                <p className='hosp-text'>{hospType}</p>
                                <p className='hosp-text'>more</p>
                                {
                                    !isBooking && (
                                        <div className='hosp-text hosp-text-2'><span className='hosp-free'>FREE</span>  <span className='hosp-fee'>&#8377;500</span>  Consultation fee at clinic</div>
                                    )
                                }

                            </div>
                            <div className='thumbs-container'>
                                <div className='thumbs'>
                                    <img src="assets/thumbsup.png" alt="" />
                                    <span className='thumbs-count'>{count}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    {
                        !isBooking ? (
                            <div className='u-d-flex-2'>
                                <p className='available-today'>Available Today</p>
                                <button className='book-free' onClick={() => showBookings(!bookings)}>Book FREE Center Visit</button>
                            </div>
                        ) : (
                            <div className='u-d-flex-3'>
                                <div className='booking-time'>{bookingDetails.time}</div>
                                <div className='booking-date'>{bookingDetails.date}</div>
                            </div>
                        )
                    }

                </div>
                {
                    bookings && (
                        <div className='bookings-section'>
                            <div className='solid-line'></div>
                            <div className='success-div'></div>
                            <div className='bookings-details'>
                                <div className='slots'>
                                    <button onClick={leftHandler}>&lt;</button>
                                    <div className='slots-dates-list'>
                                        <div className={slotdate1} onClick={() => setBluePosition(0)}><p className='date-top'>{slot1}</p><p className='date-bottom'>{slotsAvailable1} Slots Available</p></div>
                                        <div className={slotdate2} onClick={() => setBluePosition(1)}><p className='date-top'>{slot2}</p><p className='date-bottom'>{slotsAvailable2} Slots Available</p></div>
                                        <div className={slotdate3} onClick={() => setBluePosition(2)}><p className='date-top'>{slot3}</p><p className='date-bottom'>{slotsAvailable3} Slots Available</p></div>
                                    </div>
                                    <button onClick={rightHandler}>&gt;</button>
                                </div>
                                <div className='slots-2'>
                                    <div className='slots-buttons-container bottom-border'><div className='session-type'>Morning</div>
                                        <div className='slots-buttons'>
                                            {
                                                morningSessions.map((item) => (<button onClick={handleBooking}>{item}</button>))
                                            }
                                        </div>
                                    </div>
                                    <div className='slots-buttons-container bottom-border'><div className='session-type'>Afternoon</div>
                                        <div className='slots-buttons'>
                                            {
                                                afternoonSessions.map((item) => (<button onClick={handleBooking}>{item}</button>))
                                            }
                                        </div>
                                    </div>
                                    <div className='slots-buttons-container'><div className='session-type'>Evening</div>
                                        <div className='slots-buttons'>
                                            {
                                                eveningSessions.map((item) => (<button onClick={handleBooking}>{item}</button>))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </>

    )
}

export default Hospital