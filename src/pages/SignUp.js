import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../css/SignUp.module.css'; // Adjust the import path as necessary
import Signup from './signup2';

function LoginForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/data/users.json')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error loading the users data:', error));
    }, []);

    const handleCheckboxChange = () => setIsChecked(!isChecked);

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!validateEmail(email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }

        if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            isValid = false;
        }

        if (isChecked && password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleLogin2 = (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        navigate('/'); // Navigate to the home page
    };

    const handleLogin = (event) => {
        event.preventDefault();
        if (!validateForm()) return;

        const user = users.find(u => u.email === email);
        if (user && user.password === password) {
            switch (user.role) {
                case 'organization':
                    navigate('/organization');
                    break;
                case 'donor':
                    navigate('/donor');
                    break;
                case 'admin':
                    navigate('/AdminDashboard');
                    break;
                default:
                    navigate('/');
            }
        } else {
            if (user) {
                setErrors({ ...errors, credentials: 'Incorrect password.' });
            } else {
                setErrors({ ...errors, credentials: 'No matching user found with that email.' });
            }
        }
    };

    return (
        <div className={Styles.container}>

            {!isChecked ? (
                <div className={Styles.login + ' ' + Styles.form}>
                    <header className={Styles.header}>Login</header>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={Styles.input}
                        />
                        {errors.email && <div className={Styles.error}>{errors.email}</div>}
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className={Styles.input}
                        />
                        {errors.password && <div className={Styles.error}>{errors.password}</div>}
                        {errors.credentials && <div className={Styles.error}>{errors.credentials}</div>}
                        <input type="submit" className={Styles.button} value="Login" />
                    </form>
                    <div className={Styles.signup}>
                        <span>Don't have an account?
                            <label htmlFor="check" onClick={handleCheckboxChange} className={Styles.link}>Signup</label>
                        </span>
                    </div>
                </div>
            ) : (
                <div className={Styles.registration + ' ' + Styles.form}>
                    <Signup />
                </div>
            )}
        </div>
    );
}

export default LoginForm;