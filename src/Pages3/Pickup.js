import React, { useState } from 'react';
import '../styles3/Pickup.css';
import BannerImage from "../assests/back.png";
import { Link } from 'react-router-dom';


import { LocalNotifications } from '@capacitor/local-notifications';
import Footer from '../components3/Footer';
import Navbar from '../components3/navbar';







function Pickup() {
  const [pickupTime, setPickupTime] = useState('');
  const [eta, setEta] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const handlePickupTimeChange = (event) => {
    setPickupTime(event.target.value);
  };


  const handleCalculateEta = () => {
    // Validate pickup time
    const isValidDate = isValidDateTime(pickupTime);
    if (!isValidDate) {
      setErrorMessage('Invalid date format');
      setEta('');
      return;
    } else {
      setErrorMessage('');
    }
    const pickupDate = new Date(pickupTime);
    const currentDate = new Date();
    if (pickupDate < currentDate) {
      setErrorMessage('Error: Pickup time cannot be in the past');
      setEta('');
      return;
    } else {
      setErrorMessage('');
    }

    const selectedTransportationInput = document.querySelector('input[name="vehicle"]:checked');
  if (!selectedTransportationInput) {
    setErrorMessage('Choose a vehicle');
    setEta('');
    return;
  }
  const transportationType = selectedTransportationInput.value;
 

  const eta = calculateEta(pickupTime,transportationType);
  if (eta === 'Error') {
    setErrorMessage('Error: Invalid pickup time');
    setEta('');
  }
  
   else {
    setErrorMessage('');
    setEta(eta);
  }
};

  const isValidDateTime = (dateTime) => {
    
    const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
    return regex.test(dateTime);
  };
 
  

  const calculateEta = (pickupTime,transportationType) => {
    const pickupDate = new Date(pickupTime);
    const currentDate = new Date();
    const timeDiff = pickupDate.getTime() - currentDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    


    if (daysDiff < 0) {
      return 'Error';
    }
    setButtonClicked(true);
    const checkbox = document.getElementById('notification');
    if (checkbox && checkbox.checked) {
      LocalNotifications.schedule({
        notifications: [
          {
            title: 'Pickup arrival',
            body: 'Your driver has arrived',
            id: 1,
            
            schedule: { at: new Date(pickupTime) } 
          }
        ]
      });
    }
    

    return 'You chose ' + transportationType + ' ,ETA  ' + daysDiff + ' day(s)';
  };
 
  const [notificationEnabled, setNotificationEnabled] = useState(false);

  const handleCheckboxChange = (event) => {
    const check = event.target.checked
    setNotificationEnabled(check);
    const message = check ? 'Notification enabled' : 'Notification disabled';
    
    alert(message);
      if(check){
      LocalNotifications.schedule({
        notifications: [
          {
            title: 'Pickup arrival',
            body: 'Your driver has arrived',
            id: 1,
            
            schedule: { at: new Date(pickupTime) } 
          }
        ]
      });
      }
  };
  
  


  return (
     <div className="pickup">
      <Navbar/>
    <div className="pickup-container">
      <div className="form-container">
        <label htmlFor="transportation-type">Select a suitable transportation vehicle:</label>
        <div className="wrapper">
        <div class="title">Select your option</div>
        <div className="box">
        <input type="radio" id="option-1" name="vehicle" className="option-1" value="motorcycle" />
        <input type="radio" id="option-2" name="vehicle" className="option-2" value="car" />
        <input type="radio" id="option-3" name="vehicle" className="option-3" value="truck" />

          <label for="option-1" className="option-1">
            
            <div className="dot"></div>
            <div className="text">motorcycle</div>
            </label>
            <label for="option-2" className="option-2">
            
            <div className="dot"></div>
            <div className="text">car</div>
            </label>
            <label for="option-3" className="option-3">
            
            <div className="dot"></div>
            <div className="text">truck</div>
            </label>
            </div>
          
        </div>
        <div className="form-group">

          <label htmlFor="pickup-time">Schedule Selection for Donation Pickup:</label>
          
          <input type="dateTime-local" id="pickup-time" value={pickupTime} onChange={handlePickupTimeChange} placeholder="Select pickup time" />
          <script>
            
          
            

            flatpickr("input[id=pickup-time]",{})
            
          </script>
          </div>
          <p className="error-message">{errorMessage}</p>
        
        <div className="form-group">
          <button id="calculate-eta" onClick={handleCalculateEta} className={buttonClicked ? 'hidden' : ''}>View Estimated Time of Arrival</button>
          <p id="eta">{eta}</p>
        </div>
        <div className="checkbox">
          
          
        <input type="checkbox" id="notification" checked={notificationEnabled}  onChange={handleCheckboxChange} />
          <label htmlFor="notification">notify me when driver arrives</label>
          
        </div>
      </div>
      <div className="submit">
      <Link to="/submitted">
        <button>Submit</button>
      </Link>
      </div>
      </div>
      <Footer/>
     
      </div>
  );
}

export default Pickup;