import React from 'react';
import Logo from "../assests/logo.png";
import { Link } from "react-router-dom";
import "../styles3/TeacherNavBar.css";

function TeacherNavBar() {
    return (
        <div className="teachernavbar">
            <div className="leftSide">
                <img src={Logo} alt="" />
            </div>
            <div className="rightSide">
                <Link to="/teachermain"> Home </Link>
                <Link to="/subjectForm"> Teaching Specifications </Link>
                <Link to="/teachingposts"> Teaching Posts </Link>
                <Link to="/docsteacher"> Verify Me </Link>
                <Link to="/donor"> Switch Type </Link>
            </div>
        </div>
    );
}

export default TeacherNavBar;
