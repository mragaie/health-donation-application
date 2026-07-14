import React from 'react';
import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles3/Navbar.css";
import DropDown from '../helpers3/DropDown';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <img src={Logo} alt="" />
            </div>
            <div className="rightSide">
                <Link to="/regulardonor"> Home </Link>
                <DropDown />
                <Link to="/DonationRequests"> DonationRequests </Link>
                <Link to="/ProfileDonor"> My Profile </Link>
                <Link to="/donor"> Switch Type </Link>
            </div>
        </div>
    );
}

export default Navbar;
