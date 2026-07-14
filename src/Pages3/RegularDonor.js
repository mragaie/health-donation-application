import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assests/back.png';
import '../styles3/Home.css';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function RegularDonor() {
  return (
    <div className="regulardonor">
        <Navbar />
      <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Donations Org.</h1>
          <p>Some description here...</p>
          <Link to="/donationrequests">
            <button>DONATE NOW!</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="donations">
          <h2>Suggested</h2>
          <div className="donationBlocks">
            <Link to="/toyslist">
              <div className="donationBlock">
                <p>Donate Toys</p>
              </div>
            </Link>
            <Link to="/foodlist">
              <div className="donationBlock">
                <p>Donate Food</p>
              </div>
            </Link>
            {/* Add more blocks for other donation items */}
          </div>
        </div>
        <hr />
      </div>
      <Footer/>
    </div>
  );
}

export default RegularDonor;
