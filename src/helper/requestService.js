import React, { useState, useEffect } from 'react';
import styles from '../css/DisplayRequests.module.css';

function DisplayRequests({ num }) {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetch('/data/requestsbyOrg.json')
            .then(response => response.json())
            .then(data => setRequests(data.filter(request => request.id === num)))
            .catch(error => console.error('Failed to load requests:', error));
    }, [num]);

    const handleReject = (index) => {
        setRequests(currentRequests => currentRequests.filter((_, idx) => idx !== index));
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Requests</h1>
            {requests.length > 0 ? (
                <ul className={styles.requestList}>
                    {requests.map((request, index) => (
                        <li key={index} className={styles.requestItem}>
                            Request: {request.request}
                            <button onClick={() => handleReject(index)} className={styles.button}>Reject</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.noRequests}>No requests available.</p>
            )}
        </div>
    );
}

export default DisplayRequests;

