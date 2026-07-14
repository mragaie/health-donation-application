import React from 'react';
import "../styles3/SearchBar.css";

function SearchBar({ onChange, onSearch }) {
    return (
        <div className="search-bar">
            <div className="leftSide">
            <input
                type="text"
                placeholder="Search by catergory..."
                className="search-input"
                onChange={onChange}
            />
            </div>
            <div className="rightSide">
             <button className="search-button" onClick={onSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;

