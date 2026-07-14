import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/VerifySubmit.css"
import DoctorNavBar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";


function Submitted() {
  return (
    <div className="doctorsubmitted">
      <DoctorNavBar />
      <h1>Submitted successfully!</h1>
      <p>The Admin Will Verify Your Qualifications.</p>
      <Link to="/doctormain" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default Submitted;
