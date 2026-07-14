// MyClinic.js
import React from 'react';
import { Link } from 'react-router-dom';
import OpenLayersMap from '../components3/OpenLayersMap';
import '../styles3/MyClinic.css';
import DoctorNavBar from '../components3/DoctorNavBar';
import Footer from '../components3/Footer';

function MyClinic() {
  // Define longitude and latitude values for the clinic's location
  const longitude = 30.0444; // Example longitude value
  const latitude = 31.2357; // Example latitude value

  return (
    <div className="pageContainer">
      <DoctorNavBar />
      <div className="myClinicContainer">
        <h1>My Clinic</h1>
        <Link to="/updateinfo">
          <button className="button">Update Info</button>
        </Link>
        <div className="clinicInfo">
          <h2>Clinic Information:</h2>
          <p><strong>Specialty:</strong> Cardiology</p>
          <p><strong>Address:</strong> 13 Mohammed Fawzi, Alexandria, Egypt</p>
          <p><strong>Total Probono Cases Taken:</strong> 24</p>
        </div>
      </div>
      <div className="mapContainer">
        <OpenLayersMap coordinates={[longitude, latitude]} />
      </div>
      <Footer />
    </div>
  );
}

export default MyClinic;
