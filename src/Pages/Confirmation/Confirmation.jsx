import React from "react";
import { useLocation } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const location = useLocation();
  const { reservationData } = location.state || {};

  return (
    <section className="confirmation-section">
      <h2>Reservation Confirmation</h2>
      {reservationData ? (
        <div>
          <p>Date: {reservationData.date}</p>
          <p>Time: {reservationData.time}</p>
          <p>Number of Guests: {reservationData.numGuests}</p>
          <p>Occasion: {reservationData.occasion}</p>
          <p>Special Requirements: {reservationData.specialRequirements}</p>
        </div>
      ) : (
        <p>No reservation data available.</p>
      )}
    </section>
  );
}

export default Confirmation;
