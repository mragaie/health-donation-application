import React , {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles3/FilterBar.css";
import FilterBlood from '../helpers3/FilterBlood';

function FilterBarBlood() {
    const [openLinks, setOpenLinks]  = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


  return (
    <div className="filterbar">
        <FilterBlood/>
    </div>
  );
}

export default FilterBarBlood;