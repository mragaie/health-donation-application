import React from 'react'
//import { toysRequests } from "../helpers/ListToys";
import { Link } from 'react-router-dom';
import Details from "../components3/DetailsBooks";
import "../styles3/Details.css"
import School from "../assests/school.png";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function BookDetails() {

    const donRequests = [
        { image: School, name: "Book", category: "School Supplies",  bookname: "Harry Potter", author: "John", language: "English", edition: "3rd",  shortsummary: "lolololo", quantity: "3" },
    ];

    return (
      <div className="bookdetails">
        <Navbar />
          <h1 className="listTitle">Toys Donation Requests</h1>
          {donRequests.length > 0 ? (
              <div className="thelist">
                  {donRequests.map((thing, key) => (
                      <Details 
                      key={key}
                      image={thing.image} 
                      name={thing.name} 
                      category={thing.category}
                      bookname={thing.bookname}
                      author={thing.author}
                      language={thing.language}
                      edition={thing.edition}
                      shortsummary={thing.shortsummary}
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
            <Footer />
      </div>
  );
}

export default BookDetails
