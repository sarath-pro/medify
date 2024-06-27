import React from 'react'
import "./Phone.css"

function Phone({id}) {
  return (
    <div id={id}>
        <img className='outerframe' src='assets/SeekPng 2.png' alt="" />
        <img className="innerimage" src="assets/big-image.png" alt='' />
    </div>
  )
}

export default Phone