import React from 'react';
import '../Styles/FullfilledDetails.css';
import image from "../assests/notebook.jpg";
import Navbar from "../components/navbar";
function FullfilledDetails() {
  return (
    <div className="fullfilled-details">
      <Navbar />
      <img src={image} alt="" />
      <p className="bold">Type: Notebook</p>
      <p className="bold">Amount: 30</p>
      <p className="bold">Condition: New</p>
      <p className="bold">Target Group Age: Any</p>
    </div>
  );
}

export default FullfilledDetails;
