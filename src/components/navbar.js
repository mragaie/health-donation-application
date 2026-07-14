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
        <Link to="/organization"> Home </Link>
        <Link to="/Request"> Request </Link>
        <Link to="/profileOrg"> Profile</Link>
        <Link to="/organization/Fulfilledrequest"> Fulfilled_Requests </Link>
        <button onClick={toggleNotifications}>
          <NotificationsIcon />
        </button>
        {showNotifications && (
          <div className="notificationSidebar" onClick={(e) => e.stopPropagation()}>
            <Link to="/notify1" className="notificationItem">
              Request #2922 has been fullfilled!
              <div></div>
              <span className="pickupText">click to coordinate donation pickup</span>
            </Link>
            <Link to="/notify1" className="notificationItem">
              Request #2924 has been fullfilled!
              <div></div>
              <span className="pickupText">click to coordinate donation pickup</span>
            </Link>
            <Link to="/notify1" className="notificationItem">
              Request #2925 has been fullfilled!
              <div></div>
              <span className="pickupText">click to coordinate donation pickup</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
