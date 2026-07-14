import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Details from "../components3/DetailsToys";
import "../styles3/Details.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Outdoordetails2() {
    const donRequests = [
        { category: "Toys",  type: "Plastic", age: "13", gender: "Female", gamecategory: "Outdoor", quantity: "2" },
    ];

    return (
        <div className="outdoordetails2">
            <Navbar />
            <h1 className="listTitle">Outdoor toys Donation Requests</h1>
            {donRequests.length > 0 ? (
                <div className="thelist">
                    {donRequests.map((thing, key) => (
                        <Details 
                            key={key}
                            category={thing.category}
                            type={thing.type}
                            age={thing.age}
                            gender={thing.gender}
                            gamecategory={thing.gamecategory}
                            quantity={thing.quantity}
                        />
                    ))}
                </div>
            ) : (
                <div className="noItemsFound">
                    No toys donation requests found.
                </div>
            )}
            <Link to="/selectquan1">
                <button>Donate</button>
            </Link>
            <Footer/>
        </div>
    );
}

export default Outdoordetails2;
