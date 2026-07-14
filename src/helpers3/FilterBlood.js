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
                        <p>Hospital</p>
                        <Link to="/bloodhos1">AlShifa Hospital</Link>
                        <Link to="/bloodlist">Elsalam Hospital</Link>
                    </div>
                    <div className="secondcol">
                        <p>Governorate</p>
                        <Link to="/bloodlist">Giza</Link>
                        <Link to="/bloodhos1">Cairo</Link>
                    </div>
                    <div className="thirdcol">
                        <p>Area</p>
                        <Link to="/bloodhos1">Maadi</Link>
                        <Link to="/bloodlist">Zamalek</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterClothes;
