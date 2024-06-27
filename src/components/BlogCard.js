import React from 'react'
import "./BlogCard.css"

function BlogCard() {
  return (
    <div className='blog-card'>
        <img src="assets/detox.png" alt="" />
        <div className='card-details'>
            <div className='card-title'>Medical<div className='pseudo'></div>March 31, 2022</div>
            <div className='card-text'>
                <p>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <div>
                    <img className="small-doc" src="assets/small-doc.png" alt="" />
                    <span>Rebecca Lee</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogCard