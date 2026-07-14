import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/nav.css'; // Make sure the path is correct
import Navbar2 from "../comp/NavBar2"


function DashboardNavigation() {
    const navigate = useNavigate();

    return (
        <>
            <Navbar2 />
            <div className='nav-container'>
                <h1 className='dashboard-title'>Admin Dashboard</h1> {/* New heading */}
                <button className='nav-button' onClick={() => navigate('/donorg')}>Registered Donor</button>
                <button className='nav-button' onClick={() => navigate('/settings')}>Change Password</button>
                <button className='nav-button' onClick={() => navigate('/registeredOrg')}>Registered Organizations</button>
                <button className='nav-button' onClick={() => navigate('/SubmissionReviewDonor')}>Submission Review Donor</button>
                <button className='nav-button' onClick={() => navigate('/SubmissionReviewOrg')}>Submission Review Organization</button>
                <button className='nav-button' onClick={() => navigate('/Volunteer')}>Volunteer Submission</button>
            </div>
        </>
    );
}

export default DashboardNavigation;

