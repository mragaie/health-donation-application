import React, { useState, useEffect } from 'react';
import Modal from '../comp/modal'; // Make sure this is the correct path
import styles from '../css/Volunteer.module.css'; // Ensure correct path
import Navbar2 from "../comp/NavBar2"

function Volunteer() {
    const [volunteers, setVolunteers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedVolunteer, setSelectedVolunteer] = useState(null);

    useEffect(() => {
        fetch('/data/volunteer.json')  // Update this path if necessary
            .then(response => response.json())
            .then(data => setVolunteers(data))
            .catch(error => console.log('Error fetching volunteers:', error));
    }, []);

    const handleAccept = (id) => {
        const updatedVolunteers = volunteers.filter(volunteer => volunteer.id !== id);
        setVolunteers(updatedVolunteers);
        if (selectedVolunteer && selectedVolunteer.id === id) {
            setShowModal(false);
        }
    };

    const handleReject = (id) => {
        const updatedVolunteers = volunteers.filter(volunteer => volunteer.id !== id);
        setVolunteers(updatedVolunteers);
        if (selectedVolunteer && selectedVolunteer.id === id) {
            setShowModal(false);
        }
    };

    const openModal = (volunteer) => {
        setSelectedVolunteer(volunteer);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar2 />
            <div className={styles.container}>
                <h1 className={styles.header}>Manage Volunteer Requests</h1>
                <ul className={styles.list}>
                    {volunteers.map(volunteer => (
                        <li key={volunteer.id} className={styles.listItem}>
                            <div>
                                <span onClick={() => openModal(volunteer)} className={styles.volunteerInfo}>
                                    {volunteer.name} - {volunteer.role}
                                </span>
                                <button onClick={() => handleAccept(volunteer.id)} className={`${styles.button} ${styles.acceptButton}`}>Accept</button>
                                <button onClick={() => handleReject(volunteer.id)} className={`${styles.button} ${styles.rejectButton}`}>Reject</button>
                            </div>
                        </li>
                    ))}
                </ul>
                {showModal && selectedVolunteer && (
                    <Modal isOpen={showModal} onClose={closeModal}>
                        <h4 className={styles.modalHeader}>Volunteer Details</h4>
                        <p className={styles.p}>Name: {selectedVolunteer.name}</p>
                        <p className={styles.p}>Role: {selectedVolunteer.role}</p>
                        <p className={styles.p}>Email: {selectedVolunteer.email}</p>
                        <div className={styles.additionalDetails}>
                            <h5>Documents:</h5>
                            {selectedVolunteer.documents && selectedVolunteer.documents.map(doc => (
                                <p className={styles.p} style={{ borderLeft: '0px solid' }} key={doc.name}>
                                    <a href={doc.url} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>{doc.name}</a>
                                </p>
                            ))}
                        </div>
                    </Modal>
                )}
            </div>
        </>
    );
}

export default Volunteer;
