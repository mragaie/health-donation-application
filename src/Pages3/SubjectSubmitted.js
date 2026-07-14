import React from 'react';
import { Link } from 'react-router-dom';
import "../styles3/SubjectSubmitted.css"
import TeacherNavBar from "../components3/TeacherNavBar";
import Footer from "../components3/Footer";


function SubjectSubmitted() {
  return (
    <div className="subjectsubmitted">
      <TeacherNavBar />
      <h1>Submitted successfully!</h1>
      <p>Thank you for your submission.</p>
      <Link to="/teachermain" className="button">Go to Home Page</Link>
      <Footer/>
    </div>
  );
}

export default SubjectSubmitted;
