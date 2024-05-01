import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Make sure to import useNavigate
import './NextPage.css';

const NextPage = () => {
  const navigate = useNavigate(); // <-- Initialize useNavigate hook
  const [searchRadius, setSearchRadius] = useState(10);
  const [sortBy, setSortBy] = useState('distance');
  const [isAvailableNow, setIsAvailableNow] = useState(false);
  const [isCertified, setIsCertified] = useState(false);
  const [services, setServices] = useState({
    constructor: false,
    renovator: false,
  });
  
  const toggleService = (service) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: !prevServices[service],
    }));
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const serviceTypes = [];
    if (services.constructor) serviceTypes.push('Constructor');
    if (services.renovator) serviceTypes.push('Renovator');
  
    // Construct a string for the query parameter, like "Constructor,Renovator"
    const serviceTypeQueryParam = serviceTypes.join(',');
  
    const queryParams = new URLSearchParams({
      // ...other params
      serviceType: serviceTypeQueryParam
    });
  
    navigate(`/contractors-results?${queryParams}`);
  };
  

  return (
    <div className="next-page-container">
      <form onSubmit={handleSubmit} className="filter-form">
        <h1>Find Office Contractors</h1>
      

        <div className="service-options">
          <label>
            <input
              type="checkbox"
              name="serviceType"
              checked={services.constructor}
              onChange={() => toggleService('constructor')} // change to 'constructor' 
              />
            Constructor
          </label>
          <label>
            <input
              type="checkbox"
              name="serviceType"
              checked={services.renovator}
              onChange={() => toggleService('renovator')} // change to 'renovator'
            />
            Renovator
          </label>
        </div>
        
        <label className="search-radius">
          Search radius: {searchRadius} km
          <input
            type="range"
            min="1"
            max="50"
            value={searchRadius}
            onChange={(e) => setSearchRadius(e.target.value)}
          />
        </label>

        <div className="dropdown-group">
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="distance">Distance</option>
            <option value="reviews">Reviews</option>
            <option value="price">Price</option>
          </select>
        </div>

        <label>
          <input
            type="checkbox"
            checked={isAvailableNow}
            onChange={() => setIsAvailableNow(!isAvailableNow)}
          />
          Available Now
        </label>
        
        <label>
          <input
            type="checkbox"
            checked={isCertified}
            onChange={() => setIsCertified(!isCertified)}
          />
          Rating Above 4
        </label>

        <button type="submit" className="search-button">
          Search Contractors
        </button>
      
      </form>
      <button className="faq-button" onClick={() => navigate('/faq')}>
        Frequently Asked Questions
        </button>
    </div>
  );
};

export default NextPage;
