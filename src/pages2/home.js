import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assests/seimage.jpg';
import '../Styles/Home.css';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className='homeorg'>
      <Navbar />

      <div className='home' style={{ backgroundImage: `url(${background})` }}>

        <div className='headerContainer'>
          <div className='requestSection'>
            <h1>Request Donations</h1>
            <p>Click below to request</p>
            <Link to="/Request">
              <button>Request</button>
            </Link>
          </div>
          <div className='viewSection'>
            <h1>View Fulfilled Donations</h1>
            <p>Click below to view</p>
            <Link to="Fulfilledrequest">
              <button>View</button>
            </Link>
          </div>
          <div className='viewSection'>
            <h1>View Pending Requests</h1>
            <p>Click below to view</p>
            <Link to="postorg">
              <button>View</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
