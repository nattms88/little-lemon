import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import hamburger from '../../Assets/icons/hamburger_icon.svg';

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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;