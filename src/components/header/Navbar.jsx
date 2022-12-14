import React, { useState, useEffect } from 'react'
import HeaderLogo from '../../assets/images/download_logo.webp'
import './navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll', changeBackground)
  })
  return (
    <header className={`header-wrapper fixed-top ${nav ? 'nav-gray' : ''}`}>
      <nav className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='navbar-wrapper d-flex justify-content-between align-items-center'>
              <div>
                <a href='#home'>
                  <img src={HeaderLogo} className='logo-img' alt='HeaderLogo' />
                </a>
                <p className='rockscan'>RockScan</p>
              </div>
              <ul className='d-flex align-items-center list-unstyled gap-5 nav-links'>
                <li>
                  <a href='#Features' className='text-decoration-none'>
                    Features
                  </a>
                </li>
                <li>
                  <a href='#Download' className='text-decoration-none'>
                    Download
                  </a>
                </li>
                <li>
                  <a href='#FAQ' className='text-decoration-none'>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
