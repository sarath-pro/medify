import React from 'react'
import SpecialisationCard from './SpecialisationCard'
import "./Specialisation.css"

function Specialisation() {
  return (
    <div className='specialisation-container'>
        <p className='title'>Find By Specialisation</p>
        <div>
            <div className='row'>
                <SpecialisationCard imgSrc={'assets/Drugstore.png'} title={'Dentistry'} />
                <SpecialisationCard imgSrc={'assets/Stethoscope.png'} title={'Primary Care'} />
                <SpecialisationCard imgSrc={'assets/Heart Rate.png'} title={'Cardiology'} />
                <SpecialisationCard imgSrc={'assets/Heart Rate Monitor.png'} title={'MRI Resonance'} />
            </div>
            <div className='row'>
                <SpecialisationCard imgSrc={'assets/Blood Sample.png'} title={'Blood Test'} />
                <SpecialisationCard imgSrc={'assets/Immune.png'} title={'Piscologist'} />
                <SpecialisationCard imgSrc={'assets/Drugstore.png'} title={'Laboratory'} />
                <SpecialisationCard imgSrc={'assets/X-Ray.png'} title={'X-Ray'} />
            </div>
        </div>
        <button>View All</button>
    </div>
  )
}

export default Specialisation