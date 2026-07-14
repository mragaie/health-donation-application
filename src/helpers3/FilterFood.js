import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterClothes.css"

function FilterFood() {
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
                        <p>Food Types</p>
                        <Link to="/foodfruits">Fruits</Link>
                        <Link to="/foodvegetables">Vegetables</Link>
                        <Link to="/foodcanned">Canned Food</Link>
                        <Link to="/foodfresh">Fresh Meals</Link>
                        <Link to="/foodbaked">Baked Goods</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterFood;
