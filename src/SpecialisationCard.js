import React from 'react'
import "./SpecialisationCard.css"

function SpecialisationCard({imgSrc, title}) {
  return (
    <div className='specialisation-card-container d-flex flex-column align-items-center'>
        <img src={imgSrc} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default SpecialisationCard