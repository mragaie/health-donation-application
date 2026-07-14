import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import FilterBarSchool from "../components3/FilterBarSchool"
import "../styles3/School.css"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function School() {
    const filteredRequests = donRequests.filter(request => request.category == "School Supplies");

    return (
      <div className="schoollist">
        <Navbar />
        <FilterBarSchool/>
          <h1 className="listTitle">School Supplies Donation Requests</h1>
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
                  No school supplies donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default School
