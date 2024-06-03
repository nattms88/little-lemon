import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReservationForm.css';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [occasion, setOccasion] = useState('Casual Dining');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/confirmation', {
      state: {
        reservationData: { date, time, numGuests, occasion, specialRequirements }
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      
      <label htmlFor="time">Time:</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>{availableTime}</option>
        ))}
      </select>
      
      <label htmlFor="numGuests">Number of Guests:</label>
      <input type="number" id="numGuests" value={numGuests} min={1} max={10} onChange={(e) => setNumGuests(e.target.value)} required />
      
      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Casual Dining">Casual Dining</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Engagement">Engagement</option>
      </select>
      
      <label htmlFor="specialRequirements">Special Requirements:</label>
      <textarea id="specialRequirements" value={specialRequirements} onChange={(e) => setSpecialRequirements(e.target.value)} />
      
      <button type="submit">Reserve a Table</button>
    </form>
  );
};

export default ReservationForm;