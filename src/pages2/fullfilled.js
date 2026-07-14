import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/fullfilled.css";
import Navbar from "../components/navbar";

function Fulfilled() {
  const [acknowledgedList, setAcknowledgedList] = useState({});

  let counter = 2922; // Initial counter value

  const handleClick = (id) => {
    setAcknowledgedList({ ...acknowledgedList, [id]: true });
  };

  return (

    <div className="fulfilled-container">

      {[1, 2, 3, 4, 5].map(() => {
        const id = counter++;
        const isAcknowledged = acknowledgedList[id];
        return (
          <div key={id} className="fulfilled-item">
            <h3>Donation #{id}</h3>
            <Link to="/fullfilleddetails" className="blue-link">View Details</Link>
            <button onClick={() => handleClick(id)} disabled={isAcknowledged}>
              {isAcknowledged ? 'Acknowledged' : 'Acknowledge donor contributions'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Fulfilled;
