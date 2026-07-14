import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import FilterBarToys from "../components3/FilterBarToys"
import "../styles3/Toys.css"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Toys() {

    const filteredRequests = donRequests.filter(request => request.category == "Toys");

    return (
      <div className="toyslist">
        <Navbar />
        <FilterBarToys/>
          <h1 className="listTitle">Toys Donation Requests</h1>
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
                  No toys donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default Toys
