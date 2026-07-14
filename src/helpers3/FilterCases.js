import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterCases.css"

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
                        <p>Specialty</p>
                        <Link to="/neurology">Neurology</Link>
                        <Link to="/surgery">Surgery</Link>
                    </div>
                    <div className="secondcol">
                        <p>organization name</p>
                        <Link to="/neurology">ABC Hospital</Link>
                        <Link to="/surgery">Al Waha Hospital</Link>
                    </div>
                    <div className="thirdcol">
                        <p>area</p>
                        <Link to="/neurology">Maadi</Link>
                        <Link to="/surgery">Dokki</Link>
                    </div>
                    <div className="fourthcol">
                        <p>governorate</p>
                        <Link to="/neurology">Giza</Link>
                        <Link to="/surgery">Cairo</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterFood;
