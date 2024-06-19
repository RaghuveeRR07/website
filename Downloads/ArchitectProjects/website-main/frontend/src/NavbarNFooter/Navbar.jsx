import React from 'react'
import { Link } from 'react-router-dom' 

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-top-border'><div className="expanding-div"></div></div>
      <a href = "/" className="site-title"><img src="RAID_logo.jpeg" alt="" className="logo-img"/></a>
      
      <div className='navbar-buttons'><Link to="/">Home</Link></div>
      <div className='navbar-buttons'><Link to="/team">Team</Link></div>
      <div className='navbar-buttons'><Link to="/publications">Publications</Link></div>
      <div className='nav-bottom-border'><div className="expanding-div"></div></div>
    </nav>
  );
}
