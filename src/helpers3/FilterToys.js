import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterClothes.css"

function FilterToys() {
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
                        <p>Age</p>
                        <Link to="/toysfem1">1-3 years</Link>
                        <Link to="/toysmale4">3-13 years</Link>
                        <Link to="/outdoorpage2">13+ years</Link>
                        <Link to="/Boardm">18+ years</Link>
                    </div>
                    <div className="secondcol">
                        <p>Gender</p>
                        <Link to="/toysmale4">Male</Link>
                        <Link to="/toysfem1">Female</Link>
                    </div>
                    <div className="thirdcol">
                        <p>Category</p>
                        <Link to="/Boardm">Board Games</Link>
                        <Link to="/toysstuffed">Stuffed Toys</Link>
                        <Link to="/toysfem1">Dolls</Link>
                        <Link to="/toyssports">Sports</Link>
                        <Link to="/toysmale4">Car</Link>
                        <Link to="/outdoorpage2">Outdoor</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterToys;
