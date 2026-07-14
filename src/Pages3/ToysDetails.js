import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Details from "../components3/DetailsToys";
import "../styles3/Image.css";
import Toys from "../assests/car.jpg";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function ToysDetails() {
    const donRequests = [
        { image: Toys, name: "Car", category: "Toys",  type: "Plastic", age: "13+", gender: "Male", gamecategory: "Electric Cars", quantity: "2" },
    ];

    return (
        <div className="toysdetails">
            <Navbar />
            <h1 className="listTitle">Toys Donation Requests</h1>
            {donRequests.length > 0 ? (
                <div className="thelist">
                    <img src={Toys} alt="" />
                    {donRequests.map((thing, key) => (
                        <Details 
                            key={key}
                            // image={thing.image} 
                            name={thing.name} 
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
