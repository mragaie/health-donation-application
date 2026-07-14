import React from 'react'
import Details from "../components3/DetailsBlood";
import { Link } from 'react-router-dom';
import "../styles3/Details.css"
import Blood from "../assests/blood.jpg";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function BloodDetails() {

    const donRequests = [
        { image: Blood, name: "Blood", category: "Blood",  patientname: "John", bloodtype: "A+", hospitalname: "AlShifa Hospital", hospitalarea: "Maadi", governorate: "Cairo" , hospitaladdress: "Street 202"},
    ];

    return (
      <div className="blooddetails">
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
                          patientname={thing.patientname}
                          bloodtype={thing.bloodtype}
                          hospitalname={thing.hospitalname}
                          hospitalarea={thing.hospitalarea}
                          governorate={thing.governorate}
                          hospitaladdress={thing.hospitaladdress}
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
            <Footer />
      </div>
  );
}

export default BloodDetails
