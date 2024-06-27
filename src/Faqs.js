import React from 'react'
import "./Faqs.css"

function ImageCombined() {
  return (
    <div className='faqs-left'>
      <div className='faqs-image-container'>
        <img src='assets/faqs-left.png' alt="" />
        <img id="faqs-left-2" src='assets/faqs-left-2.png' alt="" />
      </div>
    </div>
  )
}

function Faqs() {
  return (
    <div className='faqs-container'>
      <p id="faqs-type">Get Your Answer</p>
      <p id="faqs-title">Frequently Asked Questions</p>
      <div className='faqs-flex d-flex w-100 align-items-stretch'>
        <ImageCombined />
        <div className='faqs-right'>
          <p>Why choose our medical for your family?<span class='plus'>+</span></p>
          <p>Why we are different from others?<span class='plus'>+</span></p>
          <p>Trusted & experience senior care & love<span class='plus'>+</span></p>
          <p>How to get appointment for emergency cases?<span class='plus'>+</span></p>
        </div>
      </div>

    </div>
  )
}

export default Faqs