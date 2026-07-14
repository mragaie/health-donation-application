import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles3/SelectQuan.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function SelectQuan1() {
  const [selectedNumber, setSelectedNumber] = useState(1); // Default selected number is 1

  const handleChange = (event) => {
    setSelectedNumber(parseInt(event.target.value)); // Update selected number when dropdown value changes
  };

  const handleSubmit = () => {
    // You can do something with the selected number here before redirecting
    // For now, let's just log it to console
    console.log("Selected Number:", selectedNumber);
  };

  return (
    <div className="selectquan1">
      <Navbar />
      <h1>Number Selector</h1>
      <p>The available numbers are 1 to 3.</p>
      <label htmlFor="number">Select the number:</label>
      <select id="number" value={selectedNumber} onChange={handleChange}>
        {[1, 2, 3].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <Link to="/pickup">
        <button onClick={handleSubmit}>Next</button>
      </Link>
      <Footer/>
    </div>
  );
}

export default SelectQuan1;
