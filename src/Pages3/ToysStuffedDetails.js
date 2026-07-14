import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Details from "../components3/DetailsToys";
import "../styles3/Details.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function ToysDetails() {
    const donRequests = [
        { category: "Toys",  type: "Cotton", age: "15", gender: "Female", gamecategory: "Stuffed Toys", quantity: "3" },
    ];

    return (
        <div className="toysstuffeddetails">
            <Navbar />
            <h1 className="listTitle">Toys Donation Requests</h1>
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

export default ToysDetails;
