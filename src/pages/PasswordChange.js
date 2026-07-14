import React, { useState } from 'react';
import '../css/AccountSettings.css'; // Import the CSS stylesheet
import Navbar2 from "../comp/NavBar2"


const AccountSettings = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleCurrentPasswordChange = (e) => {
        setCurrentPassword(e.target.value);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePasswordChangeSubmit = (e) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword) {
            setErrorMessage('Please fill in all fields');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match');
            return;
        }

        setSuccessMessage('Password changed successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setErrorMessage('');
    };

    return (< >
        <Navbar2 />
        <div className="container">
            <h2 className="form-heading">Password Management - Account Settings</h2>
            <form onSubmit={handlePasswordChangeSubmit}>
                <label className="form-label">
                    Current Password:
                    <input type="password" className="form-input" value={currentPassword} onChange={handleCurrentPasswordChange} required />
                </label>
                <label className="form-label">
                    New Password:
                    <input type="password" className="form-input" value={newPassword} onChange={handleNewPasswordChange} required />
                </label>
                <label className="form-label">
                    Confirm Password:
                    <input type="password" className="form-input" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
                </label>
                <button type="submit" className="form-button">Change Password</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    </>
    );
};

export default AccountSettings;
