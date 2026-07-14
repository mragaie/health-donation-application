import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bloodlist from "../Pages3/Blood";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterClothes.css"

function FilterClothes() {
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
                        <Link to="/clothes1list">1-3 years</Link>
                        <Link to="/clothes3list">4-12 years</Link>
                        <Link to="/clothes13list">13+ years</Link>
                        <Link to="/clothes18list">18+ years</Link>
                    </div>
                    <div className="secondcol">
                        <p>Gender</p>
                        <Link to="/clothes13list">Male</Link>
                        <Link to="/clothes18list">Female</Link>
                    </div>
                    <div className="thirdcol">
                        <p>Season</p>
                        <Link to="/clothes13list">Winter</Link>
                        <Link to="/clothes18list">Summer</Link>
                        <Link to="/clothes3list">Autumn</Link>
                        <Link to="/clothes1list">Spring</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterClothes;
