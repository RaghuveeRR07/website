import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='text-container'>
                <p className='footer-raid'>
                    Realm of AI and Data, IIT Jodhpur
                    <img src="IITJ_logo.png" alt="IIT Jodhpur" className='iitj-logo'/>
                </p>
                <p className='vertical-line'></p>
                <p className='copyright'>©2024  @all rights reserved</p>
            </div>
            <div class="socials">
                <div><a className='ri-instagram-line social-logo' href="https://www.instagram.com/raid.iitj/" target="_blank"></a></div>
                <div><a className="ri-linkedin-fill social-logo" href="https://www.linkedin.com/company/raid-iitj/" target="_blank"></a></div>
                <div><a className="ri-whatsapp-line social-logo" href="https://wa.me/918889722887" target="_blank"></a></div>
            </div>
        </div>
    )
}
