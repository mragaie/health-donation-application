import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/SubmitClinic.css"
import DoctorNavBar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";


function SubmitClinic() {
  return (
    <div className="submitclinic">
      <DoctorNavBar />
      <h1>Submitted successfully!</h1>
      <p>Your Data Is Saved.</p>
      <Link to="/doctormain" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default SubmitClinic;
