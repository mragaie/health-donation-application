import React, { useState, useEffect } from 'react';
// import './OrganizationDetails.css';
import DisplayRequests from './requestService';

function OrganizationDetails({ id }) {  // Accepts id as a prop
    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        if (!id) return;  // Check if id is null or undefined

        fetch('/data/organizations.json')
            .then(response => response.json())
            .then(data => {
                const foundOrg = data.find(org => org.id === parseInt(id));
                setOrganization(foundOrg);
            })
            .catch(error => console.error('Failed to load organization details:', error));
    }, [id]);  // Depend on id prop

    if (!organization) {
        return <div>Loading...</div>;
    }

    return (
        <div className="details-container">
            {<h2 className="details-header">Details:</h2>}
            <p className="details-info details-contact">Contact: {organization.contact}</p>
            <p className="details-info details-address">Address: {organization.address}</p>
            <p className="details-info details-type">Type: {organization.type}</p>
            <DisplayRequests num={parseInt(id)}></DisplayRequests>
        </div>
    );
}

export default OrganizationDetails;
