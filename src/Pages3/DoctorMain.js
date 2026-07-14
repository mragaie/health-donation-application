import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assests/docmain.jpg';
import '../styles3/DoctorMain.css';
import DoctorNavBar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";
import Medical from "../assests/medical.png";

function DoctorMain() {
  return (
    <div className="doctormain">
        <DoctorNavBar />
      <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Donations Org.</h1>
          <p>Welocomee</p>
          <Link to="/medicalcases">
            <button>DONATE NOW!</button>
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="donations">
          <h2>Suggested</h2>
          <div className="donationBlocks">
            <Link to="/uploaddocument">
              <div className="donationBlock">
               <img src={Medical} alt="Verification Document" />
                <p>Upload Document For Verification</p>
              </div>
            </Link>
            <Link to="/updateinfo">
              <div className="donationBlock">
              <img src={Medical} alt="Verification Document" />
                <p>Specify Clinic Location</p>
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

export default DoctorMain;
