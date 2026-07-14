import React from 'react'
import { donRequests } from "../helpers3/CasesList";
import Items from "../components3/Items";
import "../styles3/Cases.css"
import Navbar from "../components3/DoctorNavBar";
import Footer from "../components3/Footer";
import FilterBarCases from '../components3/FilterBarCases';
import Medical from "../assests/medical.png";

function CaseSurgery() {

    const donRequests = [
        { image: Medical, name: "Broken bone repair", category: "Case", linkTo:"/casedetails2" },
        { image: Medical, name: "Angioplasty", category: "Case", linkTo:"/casedetails2" }
    ];


    return (
      <div className="surgery">
        <Navbar />
        <FilterBarCases/>
          <h1 className="listTitle">Medication Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
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
                  No medical donation requests found.
              </div>
          )}
          <Footer/>
      </div>
  );
}

export default CaseSurgery
