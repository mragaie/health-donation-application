import React, { useState } from 'react';
import "../styles3/profileOrg.css";
import Navbar from '../components3/navbar';
import Footer from '../components3/Footer';

function ProfileDonor() {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState("Youssef");
  const [lastName, setLastName] = useState("Oraby");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("Youssefeloraby@gmail.com");
  const [contactNumber, setContactNumber] = useState("+20 1015558800");
  const [address, setAddress] = useState("Street 3, Shoahadaa Mohandeseen");
  const [area, setArea] = useState("Mohandeseen");
  const [governorate, setGovernorate] = useState("Dokki");
  const [occupation, setOccupation] = useState("Student");
  const [userType, setUserType] = useState("Donor");
  const [documents, setDocuments] = useState([]);

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle input changes
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Function to handle document upload
  const handleDocumentUpload = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setDocuments([...documents, ...files]);
    }
  };

  // Function to add a new document
  const addNewDocument = () => {
    // Implement logic to add new document
    console.log("New document added:", documents);
    // Clear the documents state
    setDocuments([]);
  };

  // Function to handle "Done" button click
  const handleDone = () => {
    setIsEditing(false); // Exit edit mode
    // You can add logic here to update the backend with the new data if needed
  };

  return (
    <div className="profileDonor">
        <Navbar/>
    <div className="profile-org-container">
        
      <div className="header">
        <h1>Donor</h1>
        <div className="edit-button">
          {isEditing ? (
            <button onClick={handleDone}>Done</button>
          ) : (
            <button onClick={toggleEditMode}>Edit</button>
          )}
        </div>
      </div>
      <div>
        <h2>Your Information</h2>
        <form>
          <p><strong>First Name:</strong> {isEditing ? <input value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} /> : firstName}</p>
          <p><strong>Last Name:</strong> {isEditing ? <input value={lastName} onChange={(e) => handleInputChange(e, setLastName)} /> : lastName}</p>
          <p><strong>Gender:</strong> {isEditing ? <input value={gender} onChange={(e) => handleInputChange(e, setGender)} /> : gender}</p>
          <p><strong>Email:</strong> {isEditing ? <input value={email} onChange={(e) => handleInputChange(e, setEmail)} /> : email}</p>
          <p><strong>Contact Number:</strong> {isEditing ? <input value={contactNumber} onChange={(e) => handleInputChange(e, setContactNumber)} /> : contactNumber}</p>
          <p><strong>Address:</strong> {isEditing ? <input value={address} onChange={(e) => handleInputChange(e, setAddress)} /> : address}</p>
          <p><strong>Area:</strong> {isEditing ? <input value={area} onChange={(e) => handleInputChange(e, setArea)} /> : area}</p>
          <p><strong>Governorate:</strong> {isEditing ? <input value={governorate} onChange={(e) => handleInputChange(e, setGovernorate)} /> : governorate}</p>
          <p><strong>Occupation:</strong> {isEditing ? <input value={occupation} onChange={(e) => handleInputChange(e, setOccupation)} /> : occupation}</p>
          <p><strong>User Type:</strong> Donor </p>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default ProfileDonor;
