import React, { useEffect, useState } from 'react'
import "./Search.css"

function Search({ mainPage, cls, handleSearch }) {
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [medCenters, setMedCenters] = useState([])
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    useEffect(() => {
        async function fetchStates() {
            let statesUrl = 'https://meddata-backend.onrender.com/states'
            let response = await fetch(statesUrl)
            let data = await response.json()
            console.log('fetchStates:: ', data)
            setStates(data)
        }
        fetchStates()
    }, [])

    useEffect(() => {
        async function fetchCities() {
            if (selectedState !== '') {
                let citiesUrl = 'https://meddata-backend.onrender.com/cities/' + selectedState
                let response = await fetch(citiesUrl)
                let data = await response.json()
                console.log('fetchCities:: ', data)
                setCities(data)
            }

        }
        fetchCities()
    }, [selectedState])

    useEffect(() => {
        async function fetchMedCenters() {
            if (selectedState !== '') {
                let medCentersUrl = `https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`
                let response = await fetch(medCentersUrl)
                let data = await response.json()
                console.log('fetchMedCenters:: ', data)
                setMedCenters(data)
            }
        }
        fetchMedCenters()
    }, [selectedCity])

    return (
        <div className={cls}>
            <div className='select-container'>
                <select onChange={(event) => setSelectedState(event.target.value)}>
                    <option value=''>State</option>
                    {
                        states.length > 0 && states.map((state) => (<option value={state}>{state}</option>))
                    }
                </select>
                <select onChange={(event) => setSelectedCity(event.target.value)}>
                    <option value=''>City</option>
                    {
                        cities.length > 0 && cities.map((city) => (<option>{city}</option>))
                    }
                </select>
                <button className='button-1' onClick={()=>(handleSearch(medCenters, selectedCity))}><span><img src="assets/search_icon.png" /></span>Search</button>
            </div>
            {
                mainPage && (
                    <div className='service-cards-container'>
                        <h4>
                            You may be looking for
                        </h4>
                        <div className='service-cards-list'>
                            <div className='service-card'><img src="assets/Doctor.png" /><p>Doctors</p></div>
                            <div className='service-card'><img src="assets/Drugstore.png" /><p>Labs</p></div>
                            <div className='service-card'><img src="assets/Hospital.png" /><p>Hospitals</p></div>
                            <div className='service-card'><img src="assets/Capsule.png" /><p>Medical Store</p></div>
                            <div className='service-card'><img src="assets/Ambulance.png" /><p>Ambulance</p></div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Search