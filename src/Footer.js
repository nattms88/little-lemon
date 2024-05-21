import React from 'react';
import logo from './Assets/logo.svg';

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Little Lemon Logo" />
      <ul>
        <li>Doormat Navigation</li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order-online">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
      <ul>
        <li>Contact</li>
        <li>Address</li>
        <li>Phone</li>
        <li>Email</li>
      </ul>
      <ul>
        <li>Social Media</li>
        <li><a href="#facebook">Facebook</a></li>
        <li><a href="#twitter">Twitter</a></li>
        <li><a href="#instagram">Instagram</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
