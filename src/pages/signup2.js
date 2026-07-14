import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Styles from '../css/SignUp.module.css';


function RegistrationForm() {
    const [currentStep, setCurrentStep] = useState(1); // State to track the current step
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        lastName: '', // Added lastName field
        gender: '',
        email: '',
        contactNumber: '',
        password: '',
        address: '',
        area: '',
        governorate: '',
        occupation: '',
        userType: '', // Added userType field
        resume: null,
        orgName: "",
        orgType: "",
        url: "",
    });

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        if (name === 'resume') {
            setFormData(prevState => ({
                ...prevState,
                [name]: files[0] // Store the file
            }));
        }
    };

    const handleNextClick = () => {
        // Validate all required fields are filled
        const requiredFields = ['fullName', 'lastName', 'gender', 'email', 'contactNumber', 'password', 'address', 'area', 'governorate', 'occupation'];
        const isValid = requiredFields.every(field => formData[field] !== '');
        if (!isValid) {
            alert('Please fill all required fields before proceeding.');
            return;
        }

        setCurrentStep(currentStep + 1);
    };

    const handleBackClick = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate all fields are filled
        if (formData.occupation === 'donor') {
            const requiredFields = ['fullName', 'lastName', 'gender', 'email', 'contactNumber', 'password', 'address', 'area', 'governorate'];
            const isValid = requiredFields.every(field => formData[field] !== '');
            if (!isValid) {
                alert('Please fill all required fields before submitting.');
                return;
            }
        } else if (formData.occupation === 'organization') {
            const requiredFields = ['fullName', 'lastName', 'gender', 'email', 'contactNumber', 'password', 'address', 'area', 'governorate', 'orgName', 'orgType'];
            const isValid = requiredFields.every(field => formData[field] !== '');
            if (!isValid) {
                alert('Please fill all required fields before submitting.');
                return;
            }
        }

        console.log('Form Data:', formData);
        // Logic to handle form submission goes here

        if (formData.occupation === 'donor') {
            navigate("/donor");
        } else if (formData.occupation === 'organization') {
            navigate("/organization");
        }
    };


    return (
        <div>
            <h1 className={Styles.header}>Registration</h1>
            <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                    <div className={Styles.form}>
                        <div className="details personal">
                            <span className={Styles.title}>Personal Details</span>
                            <div className={Styles.fields}>
                                <div className={Styles.fields}>
                                    <label>Occupation</label>
                                    <select name="occupation" value={formData.occupation} onChange={handleChange} required>
                                        <option value="">Select occupation</option>
                                        <option value="donor">Donor</option>
                                        <option value="organization">Organization</option>
                                    </select>
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Full Name</label>
                                    <input type="text" name="fullName" placeholder="Enter your name" value={formData.fullName} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Last Name</label>
                                    <input type="text" name="lastName" placeholder="Enter your last name" value={formData.lastName} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="">Select gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Email</label>
                                    <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Contact Number</label>
                                    <input type="tel" name="contactNumber" placeholder="Enter your contact number" value={formData.contactNumber} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Password</label>
                                    <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Address</label>
                                    <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Area</label>
                                    <input type="text" name="area" placeholder="Enter your area" value={formData.area} onChange={handleChange} required />
                                </div>
                                <div className={Styles.input_field}>
                                    <label>Governorate</label>
                                    <input type="text" name="governorate" placeholder="Enter your governorate" value={formData.governorate} onChange={handleChange} required />
                                </div>
                            </div>
                            {formData.occupation !== 'donor' && (<button type="button" onClick={handleNextClick} className={Styles.nextBtn}>
                                <span className={Styles.btnText}>Next</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>)}
                            {formData.occupation === 'donor' && (<button type="submit" className={Styles.nextBtn}>
                                <span className={Styles.btnText}>Submit</span>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>)}
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="details donor">
                        {/* {formData.occupation === 'donor' && (
                            <div>
                                <span className={Styles.title}>Donor Details</span>
                                <div className={Styles.fields}>
                                    <div className={Styles.input_field}>
                                        <label>User Type</label>
                                        <select name="userType" value={formData.userType} onChange={handleChange} required>
                                            <option value="">Select user type</option>
                                            <option value="regular">Regular</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="doctor">Doctor</option>
                                        </select>
                                    </div>
                                    {(formData.userType === 'teacher' || formData.userType === 'doctor') && (
                                        <div className={Styles.input_field}>
                                            <label>Upload Documents</label>
                                            <input type="file" name="resume" onChange={handleChange} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )} */}
                        {formData.occupation === 'organization' && (<>
                            <span className={Styles.title}>Organization Details</span>
                            <div className={Styles.input_field}>
                                <label>Organization Name</label>
                                <input type="text" name="orgName" placeholder="Enter your Organization Name" value={formData.orgName} onChange={handleChange} required />
                            </div>
                            <div className={Styles.input_field}>
                                <label>Organization Type</label>
                                <input type="text" name="orgType" placeholder="Enter your Organization Type" value={formData.orgType} onChange={handleChange} required />
                            </div>
                            <div className={Styles.input_field}>
                                <label>map url</label>
                                <input type="text" name="url" placeholder="Enter your map Location" value={formData.url} onChange={handleChange} required />
                            </div>
                        </>
                        )}
                        <button type="button" onClick={handleBackClick} className={Styles.backBtn}>
                            <span className={Styles.btnText}>Back</span>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button type="submit" className={Styles.nextBtn}>
                            <span className={Styles.btnText}>Submit</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
}

export default RegistrationForm;

