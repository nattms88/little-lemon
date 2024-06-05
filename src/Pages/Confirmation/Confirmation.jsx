import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirmation.css";
import backgroundImage from '../../Assets/images/restaurant.png';


function Confirmation() {
  const location = useLocation();
  const { reservationData } = location.state || {};

  return (
    <section className="confirmation-section" style={{ backgroundImage: `url(${backgroundImage})` }}>

    <div className="confirmation-section-container">
      <h2>Your table is confirmed!</h2>
      <h3>Confirmation number: 123456789</h3>
      {reservationData ? (
        <div className="confirmation-info">
          <p>Name: {reservationData.name}</p>
          <p>Email: {reservationData.email}</p>
          <p>Date: {reservationData.date}</p>
          <p>Time: {reservationData.time}</p>
          <p>Number of Guests: {reservationData.numGuests}</p>
          <p>Occasion: {reservationData.occasion}</p>
          <p>Special Requests: {reservationData.specialRequests}</p>
        </div>
      ) : (
        <p>No reservation data available.</p>
      )}
      <p><span>Please note: If you are more than 15 minutes late, we cannot guarantee your table. Thank you for your understanding.</span></p>
    </div>

    </section>
  );
}

export default Confirmation;
