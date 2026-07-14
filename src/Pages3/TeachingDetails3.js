import React from 'react'
//import { toysRequests } from "../helpers/ListToys";
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsTeaching";
import "../styles3/TeachingDet.css"
import Medical from "../assests/medical.png";
import TeacherNavBar from "../components3/TeacherNavBar";
import Footer from "../components3/Footer";
import OpenLayersMap from '../components3/OpenLayersMap';

function TeachingDetails3() {
    const longitude = 31.2357; // Example longitude value
    const latitude =  30.0444;
   
    const donRequests = [
        { numberofstudents: 24, address: "20, Algezira street, Maadi, Giza, Egypt", subjects: "English"}
    ];

    return (
      <div className="teachingdetails2">
        <TeacherNavBar />
          <h1 className="listTitle">Teaching Posts</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                      key={key}
                      numberofstudents={thing.numberofstudents} 
                      address={thing.address}
                      subjects={thing.subjects}
                      />
                  ))}
              </div>
          ) : (
              <div className="noItemsFound">
                  No toys donation requests found.
              </div>
          )}
          <div className="mapContainer">
            <OpenLayersMap coordinates={[longitude, latitude]} />
        </div>
          <Link to="/teachfulfilled">
                <button>Fulfill Case</button>
            </Link>
            <Footer/>
      </div>
  );
}

export default TeachingDetails3
