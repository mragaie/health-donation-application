import React , {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles3/FilterBar.css";
import FilterFood from '../helpers3/FilterFood';

function FilterBarFood() {
    const [openLinks, setOpenLinks]  = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


  return (
    <div className="filterbar">
        <FilterFood/>
    </div>
  );
}

export default FilterBarFood;