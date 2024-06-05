import React from "react";
import "./Menu.css";
import menu from "../../Assets/images/dinnermenu.png";
function Menu() {
    return (
        <section className="menu-section">
            <img src={menu} alt="menu" />
        </section>
    );
}

export default Menu;