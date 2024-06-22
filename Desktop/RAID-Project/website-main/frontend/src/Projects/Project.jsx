import React from 'react'

import './Projects.css';

export default function Project() {
  return (
    <div className="projects-page">
    <div className="projects-header">
        <h1>Projects</h1>
        <p className="tagline">
        We make amazing Projects
        </p>
    </div>
<div className='card-section'>
    <div className="card">
            <div className="card-details">
                <p className="text-title">Card Title</p>
                <p className="text-body">Here are the details of the card</p>
            </div>
            <button className="card-button">More info</button>
        </div>

        <div className="card">
            <div className="card-details">
                <p className="text-title">Card Title</p>
                <p className="text-body">Here are the details of the card</p>
            </div>
            <button className="card-button">More info</button>
        </div>
</div>
</div>
  )
}
