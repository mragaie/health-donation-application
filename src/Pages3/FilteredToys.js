import React from 'react'
//import { donRequests } from "../helpers/DonationReqList";
import ItemClothes from "../components3/Items";
import "../styles3/Clothes.css"
import Clothes from "../assests/clothes.jpg";
import FilterBarToys from '../components3/FilterBarToys';
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function FilteredToys() {
    const donRequests = [
        { image: Clothes, name: "Barbie", category: "Toys", linkTo:"/toysdetails" },
        { image: Clothes, name: "Car", category: "Toys", linkTo:"/toysdetails" }
    ];

    // Filter requests based on certain criteria

    return (
      <div className="filteredtoys">
        <Navbar />
        <FilterBarToys/>
          <h1 className="listTitle">Toys Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <ItemClothes 
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
                  No clothes donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default FilteredToys
