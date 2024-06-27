import React, { useEffect, useState } from 'react'
import Search from './Search'
import "./MedCenters.css"
import Hospital from './Hospital'
import Advertisement from './Advertisement'

function MedCenters({ centers, city, handleSearch }) {
    const [medCenters, setMedCenters] = useState([])
    useEffect(() => {
        console.log('setting medCenters... in MedCenters...')
        setMedCenters(centers)
        console.log(centers)
        console.log('centers in MedCenters:: ', medCenters)
    }, [])


    return (
        <div>
            <div className='blue-con'>
                <Search cls={'search-container-meds'} handleSearch={handleSearch}/>
            </div>
            <div className='meds-container'>
                <div className='meds-text'>
                    <p id='meds-details-1'>{centers.length} medical centers available in {city}</p>
                    <div className='row-1'>
                        <span>
                            <img src='assets/verified.png' alt='' />
                        </span>
                        <p id='meds-details-2'>Book appointments with minimum wait-time & verified doctor details</p>
                    </div>
                </div>
                <div className='meds-list-container'>
                    <div>
                        {
                            centers.length > 0 && (
                                centers.map((item) => (
                                    <Hospital hospTitle={item['Hospital Name']} 
                                    city={item.City} 
                                    state={item.State} 
                                    hospType={item['Hospital Type']}
                                    count={item['Hospital overall rating']}/>
                                ))
                            )
                        }
                    </div>
                    <Advertisement />
                </div>

            </div>
        </div>
    )
}
// { hospTitle, city, state, hospType, count, isBooking, bookingDetails }
export default MedCenters