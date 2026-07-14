import React, { useState, useEffect } from 'react';
import Modal from '../comp/modal'; // Assuming the modal component is in the same directory
import OrganizationDetails from '../helper/OrgDetails';
import styles from '../css/RegisteredOrganizations.module.css'; // Import the CSS module
import Navbar2 from "../comp/NavBar2"


const RegisteredOrganizations = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [organizations, setOrganizations] = useState([]);
    const [filteredOrganizations, setFilteredOrganizations] = useState([]);
    const [filterBy, setFilterBy] = useState('name');
    const [selectedOrg, setSelectedOrg] = useState(null);

    useEffect(() => {
        fetch('/data/organizations.json')
            .then(response => response.json())
            .then(data => {
                setOrganizations(data);
                setFilteredOrganizations(data);
            })
            .catch(error => console.error('Failed to load organizations:', error));
    }, []);

    const handleSearchTermChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterOrganizations(term, filterBy);
    };

    const handleFilterChange = (e) => {
        setFilterBy(e.target.value);
        filterOrganizations(searchTerm, e.target.value);
    };

    const filterOrganizations = (term, criteria) => {
        const filtered = organizations.filter(organization =>
            organization[criteria].toLowerCase().includes(term.toLowerCase())
        );
        setFilteredOrganizations(filtered);
    };

    const handleOrgClick = (organization) => {
        setSelectedOrg(organization);
    };

    const handleReject = (id, event) => {
        event.stopPropagation();
        const updatedOrganizations = organizations.filter(org => org.id !== id);
        setOrganizations(updatedOrganizations);
        setFilteredOrganizations(updatedOrganizations);
    };

    return (
        < >
            <Navbar2 />
            <div className={styles.container}>
                <h2 className={styles.header}>Registered Organizations</h2>
                <select className={styles.selectInput} value={filterBy} onChange={handleFilterChange}>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="address">Address</option>
                    <option value="contact">Contact</option>
                </select>
                <input
                    className={styles.textInput}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    placeholder={`Search by ${filterBy}`}
                />
                <ul className={styles.orgList}>
                    {filteredOrganizations.length > 0 ? (
                        filteredOrganizations.map((organization) => (
                            <li key={organization.id} className={styles.orgItem} onClick={() => handleOrgClick(organization)}>
                                {organization.name}
                                <>             </>
                                <button className={styles.deleteButton} onClick={(event) => handleReject(organization.id, event)}>Delete</button>
                            </li>
                        ))
                    ) : (
                        <li>No organizations found</li>
                    )}
                </ul>
                {selectedOrg && (
                    <Modal
                        isOpen={!!selectedOrg}
                        onClose={() => setSelectedOrg(null)}
                    >
                        <h1> {selectedOrg.name}</h1>
                        <OrganizationDetails id={selectedOrg.id} />
                    </Modal>
                )}
            </div>
        </>
    );
};

export default RegisteredOrganizations;
