import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles3/Dropdown.css';
import bloodlist from "../Pages3/Blood";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

function DropDown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={toggleDropdown}>
                Categories
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to="/clotheslist">Clothes</Link>
                    <Link to="/toyslist">Toys</Link>
                    <Link to="/foodlist">Food</Link>
                    <Link to="/medicallist">Medical supplies</Link>
                    <Link to="/schoollist">School supplies</Link>
                    <Link to="/bloodlist">Blood donations</Link>
                </div>
            )}
        </div>
    );
}

export default DropDown;
