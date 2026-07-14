import React , {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles3/FilterBar.css";
import FilterToys from '../helpers3/FilterToys';

function FilterBar() {
    const [openLinks, setOpenLinks]  = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


  return (
    <div className="filterbar">
        <FilterToys/>
    </div>
  );
}

export default FilterBar;