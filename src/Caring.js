import React from 'react'
import "./Caring.css"

function Caring() {
    return (
        <div className='caring-container'>
            <div className='caring-left'>
                <div>
                    <div className='container d-flex flex-column consultation align-items-center py-2 px-3'>
                        <div><span><img src="assets/call.png" alt='' /></span><span id="free-consultation">Free Consultation</span></div>
                        <p id='container-tag' className='m-0'>Consultation with the best</p>
                    </div>
                    <img src='assets/caring-2.png' alt='' id="img-1" />
                </div>
                <img src='assets/caring-1.png' alt='' id="img-2" />
            </div>
            <div className='caring-right'>
                <p id='right-1'>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
                <p id='right-2'>Patient <span style={{ color: "var(--primary)" }}>Caring</span></p>
                <p id='right-3'>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                <ul>
                    <li className='li-item'><span><img src="assets/li.png" alt="" style={{ padding: "0 10px 0 0" }} /></span><span className='item-text'>Stay Updated About Your Health</span></li>
                    <li className='li-item'><span><img src="assets/li.png" alt="" style={{ padding: "0 10px 0 0" }} /></span><span className='item-text'>Check Your Results Online</span></li>
                    <li className='li-item'><span><img src="assets/li.png" alt="" style={{ padding: "0 10px 0 0" }} /></span><span className='item-text'>Manage Your Appointments</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Caring