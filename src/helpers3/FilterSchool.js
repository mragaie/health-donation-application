import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterClothes.css"

function FilterSchool() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="filterclothes">
            <FilterAltIcon onClick={toggleDropdown}/>
            {isOpen && (
                <div className="filterclotheslist">
                    <div className="firstcol">
                        <p>Books</p>
                        <Link to="/bookslist">All Books</Link>
                    </div>
                    <div className="secondcol">
                        <p>Stationary</p>
                        <Link to="/stationarylist">All Stationary</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterSchool;
