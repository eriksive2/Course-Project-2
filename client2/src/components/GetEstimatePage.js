import React, { useState } from 'react';
import './GetEstimatePage.css'; // Make sure this CSS file is in the same directory

function GetEstimatePage() {
  const [estimateDetails, setEstimateDetails] = useState({
    serviceType: '',
    jobSize: '',
    contactMethod: ''
  });

  const handleChange = (e) => {
    setEstimateDetails({ ...estimateDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement what should happen on submit, e.g. send data to server
    console.log(estimateDetails);
    // You might want to add a confirmation message or redirect here
  };

  return (
    <div className="estimate-container">
      <h1>Get an Estimate</h1>
      <form onSubmit={handleSubmit} className="estimate-form">
        <label htmlFor="serviceType">Service Type:</label>
        <select id="serviceType" name="serviceType" value={estimateDetails.serviceType} onChange={handleChange} required>
          <option value="">Select a service type</option>
          <option value="consultation">Consultation</option>
          <option value="installation">Installation</option>
          <option value="maintenance">Maintenance</option>
        </select>

        <label htmlFor="jobSize">Job Size:</label>
        <select id="jobSize" name="jobSize" value={estimateDetails.jobSize} onChange={handleChange} required>
          <option value="">Select a job size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label htmlFor="contactMethod">Preferred Contact Method:</label>
        <select id="contactMethod" name="contactMethod" value={estimateDetails.contactMethod} onChange={handleChange} required>
          <option value="">Select a contact method</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="in-person">In Person</option>
        </select>

        <button type="submit" className="submit-btn">Request Estimate</button>
      </form>
    </div>
  );
}

export default GetEstimatePage;
