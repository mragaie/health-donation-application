import React from 'react';
//import OrganizationList from '../helper/OrganizationList';
import DonorList from '../helper/DonorList';
import styles from '../css/OrgandDon.module.css';
import Navbar2 from "../comp/NavBar2"

function OrgandDon() {
    return (<>
        <Navbar2 />
        <div className={styles.container}>
            <div className={styles.list}>
                <DonorList />
            </div>
        </div>
    </>
    );
}

export default OrgandDon;