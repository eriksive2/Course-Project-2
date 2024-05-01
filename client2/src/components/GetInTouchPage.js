import React, { useState } from 'react';
import './GetInTouchPage.css'; // Make sure this file exists and is in the correct directory

function GetInTouchPage() {
  const [contactDetails, setContactDetails] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Clear status message on new submission
    try {
      const response = await fetch('http://localhost:3001/api/get-in-touch', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log(data.message); // "Contact info saved"
      
      // Show a success message and clear the form
      setStatusMessage('Your message has been sent successfully.');
      setContactDetails({
        fullName: '',
        email: '',
        message: ''
      });

    } catch (error) {
      // Handle errors here, such as showing a notification to the user
      console.error('Error submitting contact info:', error);
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="get-in-touch-container">
      <h1>Get In Touch</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={contactDetails.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactDetails.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          value={contactDetails.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default GetInTouchPage;
