import React from "react";
import "./About.css";
import chefs from "../../Assets/images/chefs.png";
function About() {
    return (
        <section className="about">
          <div className="about-container">
            <div className="about-text">
            <h2>About Us</h2>
            <h3>Little Lemon - Chicago</h3>
            <p>At the heart of our kitchen are our passionate chefs, Mariano and Adrian, whose combined expertise and love for cooking bring a unique and delightful experience to every dish. </p>
            <p>With years of culinary excellence, Chef Mariano and Chef Adrian craft each meal with fresh, locally-sourced ingredients, ensuring a vibrant and unforgettable dining experience.</p>
            <p>Join us at Little Lemon Mediterranean, and savor the exceptional creations of two chefs dedicated to celebrating the rich culinary heritage of the Mediterranean.</p>       
            </div>
            <img src={chefs} alt="chefs" />
          </div>
        </section>
    )
}
export default About;