import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles3/UpdateInfo.css';
import DoctorNavBar from '../components3/DoctorNavBar';
import Footer from '../components3/Footer';
import OpenLayersMapSelect from '../components3/OpenLayerMapSelect'; // Import the OpenLayersMapSelect component
import PopUpMap from './PopUpMap';

const UpdateInfo = () => {
  const [address, setAddress] = useState('');
  const [area, setArea] = useState('');
  const [governorate, setGovernorate] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [numberOfCases, setNumberOfCases] = useState('');
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address || !area || !governorate || !specialty || !numberOfCases) {
      setErrorMessage('Please fill in all fields');
      return;
    }
    if (isNaN(numberOfCases)) {
      setErrorMessage('Please enter a valid number for the number of cases');
      return;
    }
    // Proceed with form submission
    console.log('Form submitted:', { address, area, governorate, specialty, numberOfCases });
    // Redirect to another page
    if (address && area && governorate && specialty && !isNaN(numberOfCases)) {
      window.location.href = "/submitclinic";
    }
  };

  return (
    <div className="updateinfo">
      <DoctorNavBar />
      <div className="formContainer">
        <h2>Specify Clinic Information</h2>

        
        <form onSubmit={handleSubmit}>
        <label htmlFor="filll">Choose Location On Map Before Filling Anything</label>
          <Link to="/popUpMap">
                <button>Show Map</button>
            </Link>
          <div className="formGroup">
            <label htmlFor="address">Address Of The Clinic</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="area">Area</label>
            <select id="area" value={area} onChange={(e) => setArea(e.target.value)}>
              <option value="">Select Area</option>
              <option value="Area 1">Maadi</option>
              <option value="Area 2">Dokki</option>
              <option value="Area 3">Zamalek</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="governorate">Governorate</label>
            <select id="governorate" value={governorate} onChange={(e) => setGovernorate(e.target.value)}>
              <option value="">Select Governorate</option>
              <option value="Governorate 1">Cairo</option>
              <option value="Governorate 2">Giza</option>
              <option value="Governorate 3">Alexandria</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="specialty">Your Specialty</label>
            <input
              type="text"
              id="specialty"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
          </div>
          <div className="formGroup">
            <label htmlFor="numberOfCases">Number of Probono Cases</label>
            <input
              type="number"
              id="numberOfCases"
              value={numberOfCases}
              onChange={(e) => setNumberOfCases(e.target.value)}
            />
          </div>
          {/* Add the map container */}
          
          
          <button type="submit">Submit</button>
          {errorMessage && <p className="errorMessage">{errorMessage}</p>}

         
        </form>

      </div>
      <Footer />
    </div>
  );
};

export default UpdateInfo;
