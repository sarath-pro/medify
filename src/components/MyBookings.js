import React from 'react'
import Search from './Search'
import "./MyBookings.css"
import Advertisement from './Advertisement'
import Hospital from './Hospital'


function MyBookings() {
    let centers = localStorage.getItem('bookings')
    if(centers) {
        centers = JSON.parse(centers)
    } else {
        centers = []
    }
    
    return (
        <div>
            <div className='blue-con'>
                <p id='my-bookings'>My Bookings</p>
                <div className='input-container'>
                        <input type='text' placeholder='Search By Hospital'/>
                        <button className='button-1' onClick={()=>(console.log('fhef'))}><span><img src="assets/search_icon.png" /></span>Search</button>
                </div>
            </div>
            <div className='meds-container'>
                <div className='meds-list-container'>
                    <div>
                        {
                            centers.length > 0 ? (
                                centers.map((item) => (
                                    <Hospital hospTitle={item.hospTitle}
                                        city={item.city}
                                        state={item.state}
                                        hospType={item.hospType}
                                        count={item.count}
                                        isBooking={true}
                                        bookingDetails={{time: item.bookingTime, date: item.bookingDate}}/>
                                ))
                            ) : (
                                <h3>
                                    No Bookings
                                </h3>
                            )
                        }
                    </div>
                    <Advertisement />
                </div>

            </div>
        </div>
    )
}

export default MyBookings