import React, { useState, useEffect } from 'react';
import { donRequests } from "../helpers3/DonationReqList";
import Items from "../components3/Items";
import "../styles3/DonationRequests.css";
import SearchBar from "../components3/SearchBar";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function DonationRequests() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([...donRequests]); // Initialize with all items

    useEffect(() => {
        setFilteredItems([...donRequests]); // Update filteredItems whenever donRequests changes
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    

    const handleSearch = () => {
        const filtered = donRequests.filter((donitem) =>
            donitem.category && donitem.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
    }; 
    
    const renderItems = searchQuery
        ? donRequests.filter((donitem) =>
              donitem.category && donitem.category.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : donRequests;

    // Use filtered items if available, otherwise display a message
    const itemsToRender = filteredItems.length > 0 ? filteredItems : null;

    return (
        <div className="donationRequests">
            <Navbar />
            <h1 className="requestsTitle">Donated Items</h1>
            {/* SearchBar component with search button */}
            <SearchBar onChange={handleSearchChange} onSearch={handleSearch} />
            <div className="Requests">
                {/* Render items based on search query, or display a message if there are no items */}
                {itemsToRender ? (
                    itemsToRender.map((donitem, key) => (
                        <Items
                            key={key}
                            image={donitem.image}
                            name={donitem.name}
                            category={donitem.category}
                            linkTo={donitem.linkTo}
                        />
                    ))
                ) : (
                    <div className="noItemsFound">
                        <p>No items found.</p>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

export default DonationRequests;
