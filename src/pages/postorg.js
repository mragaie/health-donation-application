import React, { useState } from 'react';
import Modal from '../comp/modal'; // Ensure your Modal component is correctly imported
import '../css/Full.css'; // Import the CSS file
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const PendingSignupReview = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: "Books for Everyone", content: "Type: Books ----- Quantity: 100 ----- Condition: Average ----- TargetAgeGroup: 10-15", status: "Pending" },
        { id: 2, title: "Art Supplies", content: "Type: Drawing-Paper ----- Quantity: 50 ----- Condition: Good ----- TargetAgeGroup: 90-100", status: "Pending" },
        { id: 3, title: "Winter Clothes Drive", content: "Type:Winter-Clothes ----- Quantity: 20 ----- Condition: Poor ----- TargetAgeGroup: 50-60", status: "Pending" }
    ]);
    const [editPost, setEditPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDeletePost = postId => {
        setPosts(currentPosts => currentPosts.filter(p => p.id !== postId));
    };

    const handleEditPost = post => {
        setEditPost({
            ...post,
            type: post.content.split(" ----- ")[0].split(": ")[1],
            quantity: post.content.split(" ----- ")[1].split(": ")[1],
            condition: post.content.split(" ----- ")[2].split(": ")[1],
            ageGroup: post.content.split(" ----- ")[3].split(": ")[1]
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditPost(null);
    };

    const handleChange = (event, field) => {
        const value = event.target.value;
        setEditPost(prev => ({
            ...prev,
            [field]: value,
            content: `Type: ${field === 'type' ? value : prev.type} ----- Quantity: ${field === 'quantity' ? value : prev.quantity} ----- Condition: ${field === 'condition' ? value : prev.condition} ----- TargetAgeGroup: ${field === 'ageGroup' ? value : prev.ageGroup}`
        }));
    };

    const handleSubmitEdit = () => {
        setPosts(prevPosts => prevPosts.map(post => post.id === editPost.id ? { ...post, content: editPost.content } : post));
        handleCloseModal();
    };

    return (
        <div className='postorgg'>
            <Navbar />
            <div className="pending-signup-review">
                <h2>Pending Signup Posts</h2>
                {posts.map(post => (
                    <div key={post.id} className="post-container">
                        <h3>{post.title}</h3>
                        <div>
                            {post.content.split(" ----- ").map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                        <p>Status: {post.status}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button style={{ width: '49%', backgroundColor: 'red' }} onClick={() => handleDeletePost(post.id)}>
                                Delete Post
                            </button>
                            <button style={{ width: '49%', backgroundColor: 'green' }} onClick={() => handleEditPost(post)}>
                                Edit Post
                            </button>
                        </div>
                    </div>
                ))}
                {isModalOpen && editPost && (
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                        <h4>Edit Post Details</h4>
                        <div>
                            <label>Type:</label>
                            <input type="text" value={editPost.type} onChange={(e) => handleChange(e, 'type')} />
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input type="number" value={editPost.quantity} onChange={(e) => handleChange(e, 'quantity')} />
                        </div>
                        <div>
                            <label>Condition:</label>
                            <input type="text" value={editPost.condition} onChange={(e) => handleChange(e, 'condition')} />
                        </div>
                        <div>
                            <label>Age Group:</label>
                            <input type="text" value={editPost.ageGroup} onChange={(e) => handleChange(e, 'ageGroup')} />
                        </div>
                        <button onClick={handleSubmitEdit}>Save Changes</button>
                    </Modal>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default PendingSignupReview;
