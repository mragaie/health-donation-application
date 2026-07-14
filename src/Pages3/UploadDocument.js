import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles3/UploadDocument.css";
import DoctorNavBar from '../components3/DoctorNavBar';
import Footer from '../components3/Footer';

function UploadDocument() {
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to store the uploaded files
  const [errorMessage, setErrorMessage] = useState(''); // State to store the error message
  const [showPopup, setShowPopup] = useState(false); // State to control the visibility of the pop-up

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files); // Get the uploaded files
    console.log('Uploaded files:', files);
    setUploadedFiles([...uploadedFiles, ...files]); // Add the uploaded files to state
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (uploadedFiles.length === 0) {
      setErrorMessage('Please upload at least one document.'); // Set error message if no documents are uploaded
      setShowPopup(true); // Show the pop-up
    } else {
      setErrorMessage(''); // Clear error message if documents are uploaded
      setShowPopup(false); // Hide the pop-up
      // Perform submission logic here
    }
  }

  // Function to clear uploaded documents
  const clearUploadedDocuments = () => {
    setUploadedFiles([]); // Clear uploaded files array
  };

  return (
    <div className="hmm">
        <DoctorNavBar/>
    <div className="uploadContainer">
      <div className="uploaddocument">
        <h1>Upload Document</h1>
        {/* Input field for file upload */}
        <input type="file" onChange={handleFileUpload} multiple />

        {/* Display the uploaded files */}
        {uploadedFiles.length > 0 && (
          <div>
            <h2>Uploaded Documents:</h2>
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>Document {index + 1}: {file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Submit button with Link component */}
        <Link to={uploadedFiles.length > 0 ? "/doctorsubmitted" : "#"}>
          <button onClick={handleSubmit}>Submit</button>
        </Link>

        {/* Clear button */}
        <button onClick={clearUploadedDocuments}>Clear</button>

        {/* Error pop-up */}
        {showPopup && (
        <div className="popup">
            <p className="error">{errorMessage}</p> {/* Add error class */}
            <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
        )}

      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default UploadDocument;
