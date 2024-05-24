import React, { useState } from 'react';
import logo from '../Assets/logo.svg';
import hamburger from '../Assets/icons/hamburger_icon.svg';

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <a href="/" className='logo'>
      <img src={logo} alt="logo" />
      </a>

      {/* mobile navbar */}
      <div className='menu-icon' onClick={toggleMenu}>
    <div><img src={hamburger} alt="menu" /></div>
      </div>

      {/* desktop navbar */}
      <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;