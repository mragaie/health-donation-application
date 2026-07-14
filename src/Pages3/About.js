import React from 'react';
import UsImg from "../assests/us.png";
import "../styles3/About.css";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <Navbar />
      <div 
        className="aboutTop" 
        style={{backgroundImage : `url(${UsImg})`}}>           
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
        qwgdjhqdjqjhdgqjhdgqhjdgqhjd
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default About
