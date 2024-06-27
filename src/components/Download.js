import React from 'react'
import "./Download.css"
import Phone from './Phone'

function Download() {
    return (
        <div className='download-container d-flex align-items-center'>
            <div className='phone-container'>
                <Phone id={"phone-1"} />
                <Phone id={"phone-2"} />
            </div>
            <div className='download-container-right'>
                <p className='download-medify'>Download the <span style={{ color: "var(--primary)" }}>Medify</span> App</p>
                <form>
                    <div className='link-to'>Get the link to download the app</div>
                    <div class="download-input">
                        <div className='mobile-number'>
                            <span className='plus-91'>+91</span>
                            <input type="text" placeholder="Enter phone number" />
                        </div>
                        <button>Send SMS</button>
                    </div>
                    <div >
                        <img className='me-2' src="assets/google_play.png" alt='google play' />
                        <img className='ms-2' src="assets/apple_store.png" alt='apple store' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Download