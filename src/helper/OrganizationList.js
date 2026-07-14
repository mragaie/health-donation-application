import React, { useState, useEffect } from 'react';
//import './DonorList.css';
import Modal from '../comp/modal'; // Make sure the Modal component is imported
import OrganizationDetails from './OrgDetails'; // Import the details component

function OrganizationList() {
  const [organizations, setOrganizations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  useEffect(() => {
    fetch('/data/organizations.json')
      .then(response => response.json())
      .then(data => setOrganizations(data))
      .catch(error => console.error('Error loading the organizations:', error));
  }, []);

  const handleOrganizationClick = (org) => {
    setSelectedOrg(org);
    setIsModalOpen(true);
  };

  const handleReject = (id) => {
    const updatedOrganizations = organizations.filter(org => org.id !== id);
    setOrganizations(updatedOrganizations);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredOrganizations = organizations.filter(org =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='donor-container'>
      <h2>Organizations</h2>
      <input
        type="text"
        className='search-input'
        placeholder="Search organizations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <ul className='donor-list'>
        {filteredOrganizations.map(org => (
          <li key={org.id} className='donor-item'>
            <button className="org-link" onClick={() => handleOrganizationClick(org)}>{org.name}</button>
            <button onClick={() => handleReject(org.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedOrg && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <h2>{selectedOrg.name}</h2>
          <p>Description: {selectedOrg.description}</p>
          {/* Render OrganizationDetails passing the selected organization ID */}
          <OrganizationDetails id={selectedOrg.id} />
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default OrganizationList;
