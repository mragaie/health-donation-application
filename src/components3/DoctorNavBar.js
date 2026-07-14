import React from 'react';
import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles3/DoctorNavBar.css";

function DoctorNavBar() {
    return (
        <div className="doctornavbar">
            <div className="leftSide">
                <img src={Logo} alt="" />
            </div>
            <div className="rightSide">
                <Link to="/doctormain"> Home </Link>
                <Link to="/uploaddocument"> Doctor Verification </Link>
                <Link to="/myclinic"> My Clinic </Link>
                <Link to="/medicalcases"> Medical Cases </Link>
                <Link to="/donor"> Switch Type </Link>
            </div>
        </div>
    );
}

export default DoctorNavBar;
