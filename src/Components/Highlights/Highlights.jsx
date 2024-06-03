import React from "react";
import { Link } from "react-router-dom";
import "./Highlights.css";
import salad from "../../Assets/images/salad.jpg";
import bruschetta from "../../Assets/images/bruschetta.png";
import dessert from "../../Assets/images/dessert.jpg";
import delivery from "../../Assets/icons/delivery_icon.svg";

function Highlights() {
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
    return (
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
    );
}   
export default Highlights;