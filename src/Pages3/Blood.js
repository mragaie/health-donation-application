import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/DisplayItems.css"
import FilterBarBlood from "../components3/FilterBarBlood"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";


function Blood() {
    const bloodRequests = donRequests.filter(request => request.category == "Blood Donation");

    return (
      <div className="bloodlist">
        <Navbar />
        <FilterBarBlood/>
          <h1 className="listTitle">Blood Donations Requests</h1>
          {bloodRequests.length > 0 ? (
              <div className="thelist">
                  {bloodRequests.map((thing, key) => (
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

export default Blood
