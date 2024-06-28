import React from 'react'
import '../styles/Bottom.css'

export default function Bottom() {
    return (
        <div className='bottom-container'>
            <div className="bottom-left">
                <div className="bottom-quote">
                    Large enough Embeddings, and predict Anything...
                </div>
            </div>
            <div className="bottom-right">
                <div className="subscribe-tile">
                    <div className="subscribe-title">
                        Subscribe to our Blogs, Events and more...
                    </div>
                    <div className="subscribe-form-container">
                        <form className='subscribe-form'>
                            <input className='subscribe-input' type="email" name="" id="" placeholder='Enter you email here...'/>
                            <button className='subscribe-button' type="button">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="contact-section">
                    <div className="contact-title">
                        <h1>
                            Contact Us
                        </h1>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <div className="contact-info-icon ri-mail-line"></div>
                            <div className="contact-info-text">
                                raid@iitj.ac.in
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon ri-phone-fill"></div>
                            <div className="contact-info-text">
                                +91 8889722887
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
