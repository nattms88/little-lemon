import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationForm.css';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('Casual Dining');
  const [specialRequests, setSpecialRequests] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [formValid, setFormValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/reservationApi.json');
        const data = await response.json();
        const day = new Date(date).toLocaleDateString('en-US', { weekday: 'long' });
        const availability = data.availability.find((item) => item.day === day);
        if (availability) {
          setAvailableTimes(availability.time);
        } else {
          setAvailableTimes([]);
        }
      } catch (error) {
        console.error('Error fetching available times:', error);
      }
    };

    if (date) {
      fetchAvailableTimes();
    }
  }, [date]);

  useEffect(() => {
    const isValid = name && email && date && time && numGuests > 0 && occasion;
  console.log("Form Valid:", isValid);
  setFormValid(isValid);
}, [name, email, date, time, numGuests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      navigate('/confirmation', {
        state: {
          reservationData: { name, email, date, time, numGuests, occasion, specialRequests }
        }
      });
    }
  };

  return (
    <div className='reservation-form-container'>
      <h2>Reserve a Table</h2>
      <p>To reserve a table, please call us at (312) 555-7890 or fill out the form below.</p>
      <form className='reservation-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          min={new Date().toISOString().split('T')[0]} 
        />
        
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>{availableTime}</option>
          ))}
        </select>
        
        <label htmlFor="numGuests">Number of Guests:</label>
        <input
          type="number"
          id="numGuests"
          value={numGuests}
          min={1}
          max={10}
          onChange={(e) => setNumGuests(e.target.value)}
          required
        />
        
        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Casual Dining">Casual Dining</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>
        
        <label htmlFor="specialRequests">Special Requests:</label>
        <textarea
          id="specialRequests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
        />
        
        <button type="submit" disabled={!formValid} aria-label="Reserve a Table - On Click">Reserve a Table</button>
      </form>
    </div>
  );
};

export default ReservationForm;
