import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import FilterBarToys from "../components3/FilterBarToys";
import "../styles3/Toys.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";
import chess from "../assests/toys.png";
import monopoly from "../assests/toys.png"

function Boardm() {

    const filteredRequests = [
        {image:monopoly,  name: "Monopoly", category: "Board", linkTo:"/Boardmdetails" },
        { image:chess, name: "Chess", category: "Board", linkTo:"/Boardmdetails" }
    ];


    return (
      <div className="Boardm">
        <Navbar />
        
          <h1 className="listTitle">Board games Donation Requests</h1>
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
                  No Board games donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default Boardm
