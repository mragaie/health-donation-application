import React, { useState } from 'react';
import "../Styles/profileOrg.css";
import Doc from "../assests/IMPORTANT.docx"
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
function ProfileOrg() {
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState("126, Misr Helwan Agricultural Road, Maadi, Cairo, Egypt.");
  const [location, setLocation] = useState("https://www.google.com/maps/place/MAADI+NARMER+SCHOOL/@29.9450557,31.2745829,16.22z/data=!4m6!3m5!1s0x145847eddc652ea9:0x9c8ca4cba6bdd91f!8m2!3d29.9414897!4d31.2769356!16s%2Fg%2F11b5pj0b1t?entry=ttu");
  const [contact, setContact] = useState("+20 1015558800");
  const [documents, setDocuments] = useState([]);

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle address change
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // Function to handle location change
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Function to handle contact change
  const handleContactChange = (e) => {
    setContact(e.target.value);
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

  return (
    <div className="profileorg">
      <Navbar />
      <div className="profile-org-container">

        <div className="header">
          <h1>Narmer School</h1>
          <div className="edit-button">
            <button onClick={toggleEditMode}>{isEditing ? "Done" : "Edit"}</button>
          </div>
        </div>
        <div>
          <h2>Organization Information</h2>
          {isEditing ? (
            <>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Location:</strong> {location}</p>
              <p><strong>Contact:</strong> {contact}</p>
            </>
          ) : (
            <>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Location:</strong> <a href={location}>Click here</a> to view on Google Maps</p>
              <p><strong>Contact:</strong> {contact}</p>
            </>
          )}
          <p><strong>Type:</strong> Type of your organization</p>
        </div>
        <div className="documents-section">
          <h2>Documents</h2>
          {isEditing ? (
            <div>
              <label className="custom-file-upload">
                <input type="file" onChange={handleDocumentUpload} multiple />
                Upload Document
              </label>
              <button onClick={addNewDocument}>Add Document</button>
            </div>
          ) : null}
          <p>Click below to download the School's Document</p>
          {/* Replace the anchor tag with a button if you want to download a document */}
          {/* <button onClick={() => window.open(Doc)}>Download IMPORTANT Document</button> */}
          <a href={Doc} download>Download IMPORTANT Document</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfileOrg;
