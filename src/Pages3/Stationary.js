import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/Stationary.css"
import FilterBarSchool from '../components3/FilterBarSchool';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Stationary() {
    const bloodRequests = donRequests.filter(request => request.name == "Pen" || request.name === "Notebook" || request.name === "Highlighter");

    return (
      <div className="stationarylist">
        <Navbar />
        <FilterBarSchool/>
          <h1 className="listTitle">Stationary Donations Requests</h1>
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
          <Footer/>
      </div>
  );
}

export default Stationary
