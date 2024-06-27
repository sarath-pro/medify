import React from 'react'
import "./MedicalSpecialistCard.css"

function MedicalSpecialistCard({ imgSrc, name, title }) {
    return (
        <div className='medical-specialist-card'>
            <div className='img-card-container'>
                <div className='img-card'>
                    <img src={imgSrc} alt={name} />
                </div>
            </div>
            <p className='specialist-name'>{name}</p>
            <p className='specialist-title'>{title}</p>
        </div>
    )
}

export default MedicalSpecialistCard