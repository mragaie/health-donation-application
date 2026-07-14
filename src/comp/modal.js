import React, { useEffect, useRef } from 'react';
import './modal.css'; // Ensure this CSS file handles the below transitions and layout

const Modal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    const lastFocusedElementRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            lastFocusedElementRef.current = document.activeElement;
            // Focus the modal's close button initially
            modalRef.current?.querySelector('.modal-close').focus();

            const handleKeyDown = (event) => {
                if (event.key === 'Escape') {
                    onClose();
                }
            };

            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        } else {
            // When modal closes, return focus to the element that was focused before it opened
            lastFocusedElementRef.current?.focus();
        }
    }, [isOpen, onClose]);

    // Click outside to close modal
    const handleOverlayClick = (event) => {
        if (event.target === modalRef.current) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" ref={modalRef} onClick={handleOverlayClick} aria-modal="true" role="dialog">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">X</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
