import React from 'react'
import './Header.css'
import logo from './logo.jpeg';
import { Link } from 'react-router-dom'

function Header() {

  return (
    <div className='Headerdiv'>


      <div className='Header-image'>
        <a href="https://travelinc.pk">
          <img src={logo} alt="Logo" className='logoImage' />
        </a>
      </div>

      <div className='Header-margin'>

        <div className='Header-content-main'>


          <div className='Header-content-text'><Link className='link' to='/'>Home</Link></div>
          <div className='Header-content-text'><Link className='link' to='/About'>About</Link></div>
          <div className='Header-content-text'><Link className='link' to='/Umrah'>Umrah Packages</Link></div>
          <div className='Header-content-text'><Link className='link' to='/Hajj'>Hajj Packages</Link></div>
          <div className='Header-content-text'><Link className='link' to='/Travel'>Travel Packages</Link></div>
          <div className='Header-content-text'><Link className='link' to='/Customer'>Customer Review</Link></div>
          <div className='Header-content-text'><Link className='link' to='/Contact'>Contact Us</Link></div>
        </div>

      </div>

    </div>
  )
}

export default Header;