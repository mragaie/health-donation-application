import React from 'react'
//import { toysRequests } from "../helpers/ListToys";
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsMedical";
import "../styles3/Details.css"
import Medical from "../assests/medical.png";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function MedicalDetails2() {

    const donRequests = [
        { category: "Medical Supplies",  devicetype: "Medical Equipment", use: "Injection", quantity: "3" },
    ];

    return (
      <div className="medicaldetails2">
        <Navbar />
          <h1 className="listTitle">Toys Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                      key={key}
                      image={thing.image} 
                      name={thing.name} 
                      category={thing.category}
                      use={thing.use}
                      devicetype={thing.devicetype}
                      quantity={thing.quantity}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No toys donation requests found.
              </div>
          )}
          <Link to="/selectquan1">
                <button>Donate</button>
            </Link>
            <Footer/>
      </div>
  );
}

export default MedicalDetails2
