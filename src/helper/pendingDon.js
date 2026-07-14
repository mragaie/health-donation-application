import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../css/OrganizationDetails.module.css';
const OrganizationDetails = ({ num }) => {
    const [organization, setOrganization] = useState(null);
    const handleDownload = (url) => {
        if (!url) return;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', ''); // This will suggest the browser to download the file
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };
    useEffect(() => {
        if (!num) return;
        fetch(`/data/PendingSignUp.json`)
            .then(response => response.json())
            .then(data => {
                const orgDetails = data.find(org => org.id === parseInt(num));
                setOrganization(orgDetails);
            })
            .catch(error => console.error('Failed to load organization details:', error));
    }, [num]);

    if (!organization) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{organization.name}</h1>

            <p className={styles.detail}>Status: {organization.status}</p>

            <p className={styles.detail}>Contact: {organization.email || 'No contact info available'}</p>
            <p className={styles.detail}>Address: {organization.address || 'No address provided'}</p>
            <p className={styles.detail}>Type: {organization.type || 'No type specified'}</p>
            {organization.documents && (
                <div className={styles.documents}>
                    <h3>Documents</h3>
                    <ul className={styles.documentList}>
                        {organization.documents.map((doc, index) => (
                            <li key={index} className={styles.documentItem}>
                                {doc.name} ({doc.filename})
                                <button onClick={() => handleDownload(doc.url)} className={styles.downloadButton}>Download</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default OrganizationDetails;
