import React, { useState, useEffect } from 'react';
import Modal from '../comp/modal';
import OrganizationDetails from './pendingDon';
import styles from '../css/PendingSignupReview.module.css'; // Import CSS module
import Navbar2 from "../comp/NavBar2"


const PendingSignupReview = () => {
    const [pendingRequests, setPendingRequests] = useState([]);
    const [selectedRequest, setSelectedRequest] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/data/PendingSignUp.json')
            .then(response => response.json())
            .then(data => setPendingRequests(data))
            .catch(err => console.error('Failed to load pending signups:', err));
    }, []);

    const handleAccept = (id) => {
        const updatedRequests = pendingRequests.filter(request => request.id !== id);
        setPendingRequests(updatedRequests);
        console.log('Signup request accepted.');
    };

    const handleReject = (id) => {
        setPendingRequests(prev => prev.filter(request => request.id !== id));
        console.log('Signup request rejected.');
    };

    const handleRowClick = (request) => {
        setSelectedRequest(request);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedRequest(null);
    };

    return (
        <>
            <Navbar2 />
            <div className={styles.container}>
                <h2 className={styles.heading}>Pending Signup Requests</h2>
                {pendingRequests.length > 0 ? (
                    <ul className={styles.requestList}>
                        {pendingRequests.map(request => (
                            <li key={request.id} className={styles.requestItem}>
                                <button onClick={() => handleRowClick(request)} className={styles.linkButton}>
                                    {request.name} - {request.email}
                                </button>
                                <div>
                                    <button onClick={() => handleAccept(request.id)} className={styles.requestButton}>Accept</button>
                                    <button onClick={() => handleReject(request.id)} className={`${styles.requestButton} ${styles.rejectButton}`}>Reject</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No pending requests.</p>
                )}
                {isModalOpen && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <h2>Request Details</h2>

                        <OrganizationDetails num={selectedRequest.id} />
                        {/* Display more details as needed */}
                    </Modal>
                )}
            </div>
        </>
    );
};

export default PendingSignupReview;