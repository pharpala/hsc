import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'
import logo from '../../assets/hsc-bg.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/'

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${(isHomePage && !sticky) ? '' : 'dark-nav'}`}>
      <Link to="/" >
        <img src={logo} alt="logo" className='logo logo-link'/>
      </Link>
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/blog">Dharma Diaries</Link></li>
          <li><Link to="/contact" className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt="menu icon" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
