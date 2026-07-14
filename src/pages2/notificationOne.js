import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/notificationOne.css';
import Navbar from "../components/navbar";

function NotificationOne() {
  const [vehicleType, setVehicleType] = useState('check');
  const [errorMessage, setErrorMessage] = useState('');

  const generateTimeOptions = () => {
    // Generate time options 30 minutes apart starting from midnight
    const times = [];
    for (let i = 0; i < 24 * 2; i++) {
      const hours = Math.floor(i / 2);
      const minutes = i % 2 === 0 ? '00' : '30';
      const time = `${String(hours).padStart(2, '0')}:${minutes}`;
      times.push(time);
    }
    return times;
  };

  const handleSubmit = () => {
    if (vehicleType === 'check') {
      setErrorMessage('Please select the vehicle type');
    } else {
      setErrorMessage('');
      // Redirect to home page after submitting
      window.location.href = '/organization';
    }
  };

  return (
    <div className='NotificationOnee'>
      <Navbar />
      <div className='notify1'>
        <h2>Coordinate Pickup</h2>
        <div>
          <label htmlFor="arrivalTime">Arrival Time:</label>
          <select id="arrivalTime">
            {generateTimeOptions().map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="vehicleType">Vehicle Type:</label>
          <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
            <option value="check">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="pickupTruck">Pickup Truck</option>
            <option value="van">Van</option>
            <option value="truck">Truck</option>
            <option value="boxCars">Box Cars</option>
          </select>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <div className="submit-container">
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default NotificationOne;
