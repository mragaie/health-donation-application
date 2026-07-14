import React from 'react';
import { Link } from 'react-router-dom';
import '../styles3/First.css'; // Import the CSS file
import BannerImage from '../assests/donn.jpg';

function Home() {
  return (
    <div className="home">
      <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1>Welcome to Our Website</h1>
      <p>Who are you?</p>
      <div className="button-container">
        <Link to="/regulardonor" className="button-link">
          <button>Regular Donor</button>
        </Link>
        <Link to="/teachermain" className="button-link">
          <button>Teacher</button>
        </Link>
        <Link to="/doctormain" className="button-link">
          <button>Doctor</button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default Home;

