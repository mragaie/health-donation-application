import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/Submitted.css"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";


function Submitted() {
  return (
    <div className="submitted">
      <Navbar />
      <h1>Submitted successfully!</h1>
      <p>Thank you for your submission.</p>
      <Link to="/regulardonor" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default Submitted;
