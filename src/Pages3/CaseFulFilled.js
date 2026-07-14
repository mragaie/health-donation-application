import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/CaseFulFilled.css"
import DoctorNavBar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";


function CaseFulFilled() {
  return (
    <div className="casefulfilled">
      <DoctorNavBar />
      <h1>Submitted successfully!</h1>
      <p>Your Donation Has Been Sent.</p>
      <Link to="/doctormain" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default CaseFulFilled;
