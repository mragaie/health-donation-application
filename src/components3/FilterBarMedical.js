import React , {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles3/FilterBar.css";
import FilterMedical from '../helpers3/FilterMedical';

function FilterBarMedical() {
    const [openLinks, setOpenLinks]  = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


  return (
    <div className="filterbar">
        <FilterMedical/>
    </div>
  );
}

export default FilterBarMedical;