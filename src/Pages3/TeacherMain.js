import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assests/teacher.jpg';
import '../styles3/TeacherMain.css';
import TaecherNavBar from "../components3/TeacherNavBar";
import Footer from "../components3/Footer";
import School from "../assests/school.png";

function TeacherMain() {
  return (
    <div className="teachermain">
        <TaecherNavBar />
      <div className="banner" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Donations Org.</h1>
          <p>Welocomee</p>
          <Link to="/teachingposts">
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
               <img src={School} alt="Verification Document" />
                <p>Choose Subject And Classes For Teaching</p>
              </div>
            </Link>
            <Link to="/teachingposts">
              <div className="donationBlock">
              <img src={School} alt="Verification Document" />
                <p>View Teaching Posts</p>
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

export default TeacherMain;
