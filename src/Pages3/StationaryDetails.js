import React from 'react'
import Details from "../components3/DetailsStationary";
import { Link } from 'react-router-dom';
import "../styles3/Details.css"
import School from "../assests/school.png";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function StationaryDetails() {

    const donRequests = [
        { image: School, name: "Pen", category: "School Supplies",  type: "plastic", quantity: "5" },
    ];

    return (
      <div className="stationarydetails">
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
                        type={thing.type}
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

export default StationaryDetails
