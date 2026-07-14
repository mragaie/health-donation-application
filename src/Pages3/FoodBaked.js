import React from 'react'
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/Food.css"
import FilterBarFood from '../components3/FilterBarFood';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";
import Foodd from "../assests/food.png";

function Food() {

    const filteredRequests = [
        { image: Foodd, name: "Pate", category: "Food", linkTo:"/foodbakeddetails" },
        { image: Foodd, name: "Croissant", category: "Food", linkTo:"/foodbakeddetails" }
    ];

    return (
      <div className="foodbaked">
        <Navbar />
        <FilterBarFood/>
          <h1 className="listTitle">Food and Groceries Donation Requests</h1>
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
                  No food donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default Food
