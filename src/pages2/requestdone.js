// RequestDone.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Styles/requestdone.css"
import Navbar from "../components/navbar";

function RequestDone() {
  const navigate = useNavigate();

  const handleRequestAgain = () => {
    navigate('/request'); // Redirect to request page
  };

  return (
    <div className='homeorg'>
      <Navbar />
      <div className="RequestDone">
        <h1>Request Submitted Successfully</h1>
        <p>Your request is waiting to be approved.</p>
        <button onClick={handleRequestAgain}>Request Again</button>
      </div>
    </div>
  );
}

export default RequestDone;
