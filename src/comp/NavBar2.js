import React, { useState, useEffect } from 'react';
import logo from "../assests/logo.jpg";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import logo2 from "../assests/charity.jpg";
import ReorderIcon from '@mui/icons-material/Reorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "../pages2/Request";
import notify1 from "../pages2/notificationOne"



function Navbar() {
    const [showNotifications, setShowNotifications] = useState(false);

    const toggleNotifications = (event) => {
        event.stopPropagation();
        setShowNotifications(!showNotifications);
    };

    // Close notifications when clicking anywhere on the page
    useEffect(() => {
        const closeNotifications = () => {
            if (showNotifications) {
                setShowNotifications(false);
            }
        };
        document.body.addEventListener('click', closeNotifications);
        return () => {
            document.body.removeEventListener('click', closeNotifications);
        };
    }, [showNotifications]);

    return (
        <div className={`navbar ${showNotifications ? 'showNotifications' : ''}`}>
            <div className="leftSide" >
                <img src={logo} alt="" />
            </div>
            <div className="rightSide">
                <Link to="/admin"> Home </Link>
                <Link to="/AdminDashboard"> DashBoard </Link>
                <Link to="/settings"> PasswordChange</Link>
                <Link to="/SubmissionReviewOrg"> Organization Request </Link>
                <Link to="/SubmissionReviewDonor"> Donor Request </Link>
            </div>
        </div>
    );
}

export default Navbar;
