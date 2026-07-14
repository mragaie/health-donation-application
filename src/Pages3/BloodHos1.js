import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/DisplayItems.css"
import FilterBarBlood from "../components3/FilterBarBlood"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";
import Bloodd from "../assests/blood.jpg";

function BloodHos1() {
    const filteredRequests = [
        {image:Bloodd,  name: "blood A+", category: "Blood", linkTo:"/blooddetails" },
        { image:Bloodd, name: "blood O-", category: "Blood", linkTo:"/blooddetails" }
    ];

    return (
      <div className="bloodhos1">
        <Navbar />
        <FilterBarBlood/>
          <h1 className="listTitle">Blood Donations Requests</h1>
          {filteredRequests.length > 0 ? (
              <div className="thelist">
                  {filteredRequests.map((thing, key) => (
                      <Items 
                          key={key}
                          image={thing.image} 
                          name={thing.name} 
                          category={thing.category}
                          linkTo={thing.linkTo}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No blood donation requests found.
              </div>
          )}
          <Footer />
      </div>
  );
}

export default BloodHos1
