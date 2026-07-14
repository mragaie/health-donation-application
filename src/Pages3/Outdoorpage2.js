import React from 'react'
//import { donRequests } from "../helpers/DonationReqList";
import Items from "../components3/Items";
// FilterBarToys from "../components/FilterBarToys"
import "../styles3/Toys.css"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";
import rope from "../assests/jumprope.jpeg";
import hoop from "../assests/hoop.jpeg"


function Outdoorpage2() {

    const filteredRequests = [
        { image: rope, name: "Jump rope", category: "Toys", linkTo:"/outdoordetails2" },
        { image:hoop, name: "basketball hoop", category: "Toys", linkTo:"/outdoordetails2" }
    ];


    return (
      <div className="outdoorpage2">
        <Navbar />
        
          <h1 className="listTitle"> Outdoor toys Donation Requests</h1>
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

export default Outdoorpage2;
