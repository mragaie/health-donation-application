import React , {useState} from 'react';
import {Link} from "react-router-dom";
import "../styles3/FilterBar.css";
import FilterTeaching from '../helpers3/FilterTeaching';

function FilterBarTeaching() {
    const [openLinks, setOpenLinks]  = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }


  return (
    <div className="filterbar">
        <FilterTeaching/>
    </div>
  );
}

export default FilterBarTeaching;