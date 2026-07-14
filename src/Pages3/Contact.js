import React from 'react'
import ContactImg from "../assests/contact.jpeg";
import "../styles3/Contact.css"
import Navbar from "../components3/navbar";
import Footer from "../components3/Footer";

function Contact() {
  return (
    <div className="contact">
      <Navbar />
      <div 
        className="leftSide" 
        style={{backgroundImage : `url(${ContactImg})`}}>
      </div> 
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contactform" method="POST">
            <label htmlFor = "name">Full Name</label>
            <input name="name" placeholder="enter full name..." type="text"/>
            <label htmlFor = "email">Email</label>
            <input name="email" placeholder="enter email..." type="email"/>
            <label htmlFor = "message">Message</label>
            <textarea rows="6" placeholder="Enter Message" name="message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
