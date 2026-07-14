import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import "../styles3/FilterTeaching.css"

function FilterMedical() {
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
                        <p>Medical Equipment</p>
                        <Link to="/medicalequipment">Syringes</Link>
                        <Link to="/cotton">cotton</Link>
                    </div>
                    <div className="secondcol">
                        <p>Medical Devices</p>
                        <Link to="/assistivedev">assistive equipment</Link>
                        <Link to="/medicaldevices">imaging</Link>
                    </div>
                    <div className="thirdcol">
                        <p>Medication</p>
                        <Link to="/allmeds">All Medication</Link>
                        <Link to="/medications">Headache Medcines</Link>
                        <Link to="/stommed">Stomach Medcines</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FilterMedical;
