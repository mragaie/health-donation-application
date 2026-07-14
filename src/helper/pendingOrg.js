import React, { useState, useEffect } from 'react';
import styles from '../css/OrganizationDetails.module.css';

const OrganizationDetails = ({ num }) => {
    const [organization, setOrganization] = useState(null);

    useEffect(() => {
        if (!num) return;
        fetch(`/data/PendingSignUpOrg.json`)
            .then(response => response.json())
            .then(data => {
                const orgDetails = data.find(org => org.id === parseInt(num));
                setOrganization(orgDetails);
            })
            .catch(error => console.error('Failed to load organization details:', error));
    }, [num]);

    const handleDownload = (url) => {
        if (!url) return;
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    };

    if (!organization) return <p>Loading...</p>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{organization.name}</h1>

            <p className={styles.status}>Status: {organization.status}</p>
            <p className={`${styles.detail} ${organization.contact ? '' : styles.noDetail}`}>
                <span className={styles.contactIcon}></span>
                Contact: {organization.contact || 'No contact info available'}
            </p>
            <p className={`${styles.detail} ${organization.address ? '' : styles.noDetail}`}>
                <span className={styles.addressIcon}></span>
                Address: {organization.address || 'No address provided'}
            </p>
            <p className={`${styles.detail} ${organization.type ? '' : styles.noDetail}`}>
                <span className={styles.typeIcon}></span>
                Type: {organization.type || 'No type specified'}
            </p>
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

