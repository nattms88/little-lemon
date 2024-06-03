import React, { useState } from 'react';
import './Reservations.css';
import ReservationForm from '../../Components/ReservationForm/ReservationForm';
import Confirmation from '../Confirmation/Confirmation';
import backgroundImage from '../../Assets/images/restaurant.png';

function Reservations() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

    return (
        <section className="reservation-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {formSubmitted ? (
                <Confirmation />
            ) : (
                <ReservationForm submitForm={handleFormSubmit} />
            )}
        </section>
    );
}

export default Reservations;






