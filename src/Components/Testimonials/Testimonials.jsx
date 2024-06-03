import React from "react";
import "./Testimonials.css";
import stars from "../../Assets/icons/stars.png";
import martha from "../../Assets/images/martha.png";
import john from "../../Assets/images/john.png";
import rita from "../../Assets/images/rita.png";
import will from "../../Assets/images/will.png";
import background from "../../Assets/images/background.png";
function Testimonials() {
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
            <img className="stars" src={stars} alt="stars rating" />
                <p>{testimonial.description}</p>
            </div>
        </div>
    ));

    return (
        <section className="testimonials" style={{ backgroundImage: `url(${background})` }}>
        <div className="testimonials-wrapper">
        <div className="testimonials-header">
              <h2>What people says</h2>
              <h3>Testimonials</h3>
            </div>
          <div className="testimonials-container">
            {testimonalsItems}
          </div>
          </div>
        </section>
    );
}

export default Testimonials;