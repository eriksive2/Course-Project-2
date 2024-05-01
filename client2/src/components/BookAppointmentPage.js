import React, { useState } from 'react';
import './BookAppointmentPage.css'; // Make sure you have the corresponding CSS file

function BookAppointmentPage() {
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: ''
  });

  const handleChange = (e) => {
    setAppointmentDetails({ ...appointmentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you would typically send the appointmentDetails to your backend server
    console.log('Submitting appointment details: ', appointmentDetails);
    alert('Appointment booked successfully!');
    // Reset form after submission for demonstration
    setAppointmentDetails({
      name: '',
      email: '',
      date: '',
      time: '',
      service: ''
    });
  };

  return (
    <div className="book-appointment-container">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={appointmentDetails.name} onChange={handleChange} required />
        
        <label>Email:</label>
        <input type="email" name="email" value={appointmentDetails.email} onChange={handleChange} required />

        <label>Date:</label>
        <input type="date" name="date" value={appointmentDetails.date} onChange={handleChange} required />

        <label>Time:</label>
        <input type="time" name="time" value={appointmentDetails.time} onChange={handleChange} required />

        <label>Service Required:</label>
        <select name="service" value={appointmentDetails.service} onChange={handleChange} required>
          <option value="">Select a service</option>
          <option value="consultation">Consultation</option>
          <option value="repair">Repair</option>
          <option value="installation">Installation</option>
        </select>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}

export default BookAppointmentPage;
