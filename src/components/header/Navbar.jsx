import React, { useState, useEffect } from 'react'
import HeaderLogo from '../../assets/images/download_logo.webp'
import './navbar.css'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const changeBackground = () => {
    //console.log(window.scrollY);
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
                <a href='/'>
                  <img src={HeaderLogo} className='logo-img' alt='HeaderLogo' />
                </a>
                <p className='rockscan'>RockScan</p>
              </div>
              <ul className='d-flex align-items-center list-unstyled gap-5 nav-links'>
                <li>
                  <a href='/' className='text-decoration-none'>
                    <button className='home'>Home</button>
                  </a>
                </li>
                <li>
                  <a href='/rocks' className='text-decoration-none'>
                    <button className='home'>Rocks</button>
                  </a>
                </li>

                <li>
                  <a href='/geoclips' className='text-decoration-none'>
                    <button className='geo_clips'>GeoClips</button>
                  </a>
                </li>

                <li>
                  <a href='#FAQ' className='text-decoration-none'>
                    <button className='home-faq'>FAQ</button>
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
