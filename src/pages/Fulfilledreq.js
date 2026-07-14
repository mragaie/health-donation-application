import React, { useState, useEffect } from 'react';
import Modal from '../comp/modal'; // Ensure your Modal component is correctly imported
import '../css/Full.css'; // Import the CSS file
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const PendingSignupReview = () => {
    const [ackVisibility, setAckVisibility] = useState({}); // Stores visibility state for each modal's Ack button
    const [posts, setPosts] = useState([
        { id: 1, title: "Books for Everyone", content: "Type: Books ----- Quantity: 100 ----- Condition: Average ----- TargetAgeGroup: 10-15", status: "Fulfilled" },
        { id: 2, title: "Doctor Appointment", content: "Type: Dentist Appointment ----- Location:Oraby Road,Co.998 ----- AvailableTimeSlots:Tuesday,Monday,Friday", status: "Fulfilled" },
        { id: 3, title: "Science Teaching Day", content: "Type:1st Grade Teacher----- LevelOfEducation:College Degree ----- PreferredTeachingMethod: None ----- DurationOfTeaching:4-15 Hours", status: "Fulfilled" }
    ]);
    const [donors, setDonors] = useState([]);
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/data/FulfilledDetails.json')
            .then(response => response.json())
            .then(data => {
                setDonors(data);
                setPosts(prevPosts => prevPosts.map(post => ({
                    ...post,
                    donors: data.filter(donor => parseInt(donor.id) === post.id)
                })));
            })
            .catch(error => console.error('Error loading donors:', error));
    }, []);

    const handleDonorClick = (donor) => {
        setSelectedDonor(donor);
        setIsModalOpen(true);
        setAckVisibility(prev => ({ ...prev, [donor.id]: true })); // Initialize visibility for this donor
    };

    const disappear = (donorId) => {
        setAckVisibility(prev => ({ ...prev, [donorId]: false })); // Hide the Ack button for this donor
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDonor(null);
    };

    return (
        <div className='fulfilledreqq'>
            <Navbar />
            <div className="pending-signup-review">
                <h2>Fulfilled Posted Requests </h2>
                {posts.map(post => (
                    <div key={post.id} className="post-container">
                        <h3>{post.title}</h3>
                        <div>
                            {post.content.split(" ----- ").map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                        <p>Status: {post.status}</p>
                        {post.donors && post.donors.length > 0 && (
                            <ul>
                                {post.donors.map(donor => (
                                    <li key={donor.email} onClick={() => handleDonorClick(donor)}>
                                        <button style={{ width: '100%' }}>{donor.name}</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <button style={{ width: '100%', backgroundColor: 'red' }} onClick={() => setPosts(currentPosts => currentPosts.filter(p => p.id !== post.id))}>
                            Delete Post
                        </button>
                    </div>
                ))}
                {isModalOpen && selectedDonor && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <h4>Donor Details</h4>
                        <p>Name: {selectedDonor.name}</p>
                        <p>Email: {selectedDonor.email}</p>
                        <p>Location: {selectedDonor.location}</p>
                        {ackVisibility[selectedDonor.id] && (
                            <button onClick={() => disappear(selectedDonor.id)}>Ack</button>
                        )}
                    </Modal>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default PendingSignupReview;