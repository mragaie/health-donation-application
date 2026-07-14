import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/TeachingDetails.css"
import TeacherNavBar from "../components3/TeacherNavBar";
import Footer from "../components3/Footer";


function TeachFulFilled() {
  return (
    <div className="teachfulfilled">
      <TeacherNavBar />
      <h1>Submitted successfully!</h1>
      <p>Thank you for your donation.</p>
      <Link to="/teachermain" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default TeachFulFilled;
