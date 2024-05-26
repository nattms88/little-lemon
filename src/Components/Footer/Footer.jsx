import React from "react";
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
            <li>
              <a href="#login">Login</a>
            </li>
          </ul>
        </div>
        <div className="hours">
          <ul>
            <h3>Opening Hours</h3>
            <li>
              <span>Monday - Friday</span>
              <br />
              12:00 PM - 10:00 PM
            </li>
            <li>
              <span>Saturday</span>
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
              <a className="social" href="#instagram">
                <img src={instagram} alt="instagram" />
              </a>
              <a className="social" href="#facebook">
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