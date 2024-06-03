import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../Assets/logo.svg";
import instagram from "../../Assets/icons/instagram.svg";
import facebook from "../../Assets/icons/facebook.svg";

function Footer() {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={logo} alt="logo" />
        </div>
        <div className="navigation">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <div className="hours">
          <ul>
            <h3>Opening Hours</h3>
            <li>
              <span>Monday - Thursday</span>
              <br />
              12:00 PM - 10:00 PM
            </li>
            <li>
              <span>Friday - Saturday</span>
              <br />
              12:00 PM - 11:00 PM
            </li>
            <li>
              <span>Sunday</span>
              <br />
              12:00 PM - 09:00 PM
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <span>Address</span>
              <br />
              1234 Elm Street
              <br />
              Chicago, IL 60601
            </li>
            <li>
              <span>Phone</span>
              <br />
              (312) 555-7890
            </li>
            <li>
              <span>Email</span>
              <br />
              chicago@littlelemon.com
            </li>
            <li className="socials">
              <a className="social" href="https://www.instagram.com/littlelemon-chicago">
                <img src={instagram} alt="instagram" />
              </a>
              <a className="social" href="https://www.facebook.com/littlelemon-chicago">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;