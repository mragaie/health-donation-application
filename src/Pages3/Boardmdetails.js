import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Details from "../components3/DetailsToys";
//import "../styles/Boardmdetails.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Boardmdetails() {
    const donRequests = [
        { category: "Toys",  type: "Plastic", age: "18", gender: "male", gamecategory: "Board", quantity: "2" },
    ];

    return (
        <div className="Boardmdetails">
            <Navbar />
            <h1 className="listTitle">Board games Donation Requests</h1>
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
                    No Board games donation requests found.
                </div>
            )}
            <Link to="/selectquan1">
                <button>Donate</button>
            </Link>
            <Footer/>
        </div>
    );
}

export default Boardmdetails;
