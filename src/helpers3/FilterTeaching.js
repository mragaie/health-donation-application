import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bloodlist from "../Pages3/Blood";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterTeaching.css"

function FilterTeaching() {
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
                        <p>Subject</p>
                        <Link to="/teachingenglish">English</Link>
                        <Link to="/teachingmath">Math</Link>
                    </div>
                    <div className="secondcol">
                        <p>Area</p>
                        <Link to="/teachingenglish">Maadi</Link>
                        <Link to="/teachingmath">Zamalek</Link>
                    </div>
                    <div className="thirdcol">
                        <p>Governorate</p>
                        <Link to="/teachingmath">Cairo</Link>
                        <Link to="/teachingenglish">Giza</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterTeaching;
