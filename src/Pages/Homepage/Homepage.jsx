import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import banner from "../../Assets/images/banner.jpg";
import salad from "../../Assets/images/salad.jpg";
import bruschetta from "../../Assets/images/bruschetta.png";
import dessert from "../../Assets/images/dessert.jpg";
import delivery from "../../Assets/icons/delivery_icon.svg";
import stars from "../../Assets/icons/stars.png";
import martha from "../../Assets/images/martha.png";
import john from "../../Assets/images/john.png";
import rita from "../../Assets/images/rita.png";
import will from "../../Assets/images/will.png";
import background from "../../Assets/images/background.png";
import chefs from "../../Assets/images/chefs.png";
const Homepage = () => {
    const specialMenus = [
        {
            image: salad,
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
        },
        {
            image: bruschetta,
            title: "Bruschetta",
            price: "$7.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
        },
        {
            image: dessert,
            title: "Lemon Dessert",
            price: "$5.00",
            description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ];

    const specialMenusItems = specialMenus.map((menu, index) => (
      <div className="card" key={index}>
          <img src={menu.image} alt={menu.title} />
          <div className="menu-content">
              <div className="heading">
                  <p className="foodTitle">{menu.title}</p>
                  <p className="price">{menu.price}</p>
              </div>
              <p>{menu.description}</p>
              <div className="order">
                  <button className="orderbtn">Order a delivery</button>
                  <img src={delivery} alt="delivery" />
              </div>
          </div>
      </div>
  ));

  const testimonials = [
    {
      image: martha,
      name: "Martha Smith",
      description:"“Little Lemon offers a delightful culinary experience with its authentic flavors and inviting ambiance.”",
    },
    {
      image: john,
      name: "John Lewis",
      description:"“The restaurant's impeccable service and mouthwatering dishes make it a standout hotspot.”",
    },
    {
      image: rita,
      name: "Rita Stuart",
      description:"“The restaurant impresses with its vibrant dishes and cozy, family-friendly atmosphere.”",
    },
    {
      image: will,
      name: "Will Matthews",
      description:"“An exceptional dining experience, where every dish bursts with rich, authentic taste.”",
    }
  ];
  const testimonalsItems = testimonials.map((testimonial, index) => (
    <div className="card2" key={index}>
        <div className="card2-content">
        <img src={testimonial.image} alt={testimonial.name} />
        <p className="userName">{testimonial.name}</p>
        <img src={stars} alt="stars rating" />
            <p>{testimonial.description}</p>
        </div>
    </div>
));

  return (
    <div className="homepage">
      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations">
              <button>Reserve a Table</button>
            </Link>
          </div>
          <div className="banner-img">
            <img src={banner} alt="banner" />
          </div>
        </section>
      </header>
      <main>
        <section className="menu">
          <div className="menu-container">
            <div className="menu-header">
              <h2>This week’s specials!</h2>
              <Link to="/menu">
                <button>Online Menu</button>
              </Link>
            </div>
            <div className="menu-items">
                            {specialMenusItems}
                        </div>
                    </div>
        </section>
        <section className="testimonials" style={{ backgroundImage: `url(${background})` }}>
        <div className="testimonials-header">
              <h2>What people says</h2>
              <h3>Testimonials</h3>
            </div>
          <div className="testimonials-container">
            {testimonalsItems}
          </div>
        </section>
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
      </main>
    </div>
  );
}

export default Homepage;
