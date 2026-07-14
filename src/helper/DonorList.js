// DonorList.js
import React, { useState, useEffect } from 'react';
import Modal from '../comp/modal'; // Ensure you import the Modal component
import styles from '../css/DonorList.module.css';

function DonorList() {
    const [donors, setDonors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDonor, setSelectedDonor] = useState(null); // State to hold the selected donor
    const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

    useEffect(() => {
        fetch('/data/donors.json')
            .then(response => response.json())
            .then(data => setDonors(data))
            .catch(error => console.error('Error loading the donors:', error));
    }, []);

    const handleReject = (id, event) => {
        event.stopPropagation();  // Prevents the modal from opening when clicking the delete button
        setDonors(donors.filter(donor => donor.id !== id));
    };

    const openModal = (donor) => {
        setSelectedDonor(donor);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const filteredDonors = searchTerm.length > 0
        ? donors.filter(donor => donor.name.toLowerCase().includes(searchTerm.toLowerCase()))
        : donors;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Donors</h2>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search Donors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className={styles.list}>
                {filteredDonors.map(donor => (
                    <li key={donor.id} className={styles.item} onClick={() => openModal(donor)}>
                        {donor.name} - ${donor.amount}
                        <button onClick={(e) => handleReject(donor.id, e)} className={styles.button}>Delete</button>
                    </li>
                ))}
            </ul>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedDonor && (
                    <div>
                        <h3>{selectedDonor.name}</h3>
                        <p>Donation Amount: ${selectedDonor.amount}</p>
                        <p>Email: {selectedDonor.email}</p> {/* Assuming you have an email field */}
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default DonorList;
