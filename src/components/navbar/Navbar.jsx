import React from 'react'
import logo from '../../assets/shared/logo.svg'
import './navbar.css'
import { Link } from 'react-router-dom'

import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'

const Navbar = () => {

  const [display, setDisplay] = useState(false)

  return (
    <div className='space__navbar-container'>
        <div className="space__navbar-logo">
          <Link to='/'><img src={logo} alt="" /></Link>
        </div>
        <div className="space__narvar-line">

        </div>

        <div className="space__narvar-links">
          <Link to='/' className='view'><span >00</span> Home</Link>
          <Link to='/destination'><span>01</span> Destinations</Link>
          <Link to='/crews'><span>02</span> Crews</Link>
          <Link to='/technology'><span>03</span> Technology</Link>
        </div>

        <div className="space__hamburger">
            <RxHamburgerMenu size={30} onClick={() => setDisplay(true)}/>
        </div>

        {display && 

          
            <div className='space__hamburger-mobile'>
              <h3 onClick={() => setDisplay(false)}>X</h3>
                <Link to='/' onClick={() => setDisplay(false)}><span >00</span> Home</Link>
                <Link to='/destination' onClick={() => setDisplay(false)}><span>01</span> Destinations</Link>
                <Link to='/crews' onClick={() => setDisplay(false)}><span>02</span> Crews</Link>
                <Link to='/technology' onClick={() => setDisplay(false)}><span>03</span> Technology</Link>
            </div>
        }
    </div>
  )
}

export default Navbar
