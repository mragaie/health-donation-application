import React, { useState } from 'react';

function Hmm() {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="Hmm">
      <button onClick={openPopup}>Open Popup</button>
      {showPopup && (
        <div className="popup">
          <span className="close" onClick={closePopup}>&times;</span>
          <h2>Popup Content</h2>
          <p>This is a popup window.</p>
        </div>
      )}
    </div>
  );
}

export default Hmm;
