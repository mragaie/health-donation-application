import React from 'react';
import "../styles3/Registration.css";
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Registration() {
  return (
    <div className="registration">
      <Navbar />
        <h1>Registration : </h1>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required/>

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required/>

        <label htmlFor="contactNumber">Contact Number:</label>
        <input type="text" id="contactNumber" name="contactNumber" required/>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required/>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required/>

        <label htmlFor="area">Area:</label>
        <input type="text" id="area" name="area" required/>

        <label htmlFor="governorate">Governorate:</label>
        <select id="governorate" name="governorate">
          <option value="governorate1">Cairo</option>
          <option value="governorate2">Alexandria</option>
          <option value="governorate3">Luxor</option>
        </select>

        <label htmlFor="photo">Upload ID Photo:</label>
        <input type="file" id="photo" name="photo" accept="image/*" />

        <button type="submit">Submit</button>
      </form>
      <Footer/>
    </div>
  );
}

export default Registration;
