import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

const SearchPage = () => {
  const [zipcode, setZipcode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different routes

  const handleZipcodeChange = (event) => {
    // Update zipcode state and clear error
    setZipcode(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Regex pattern to match a standard U.S. zipcode (5 digits or 5 digits followed by a hyphen and 4 digits)
    const zipcodePattern = /^\d{5}(-\d{4})?$/;
    if (!zipcodePattern.test(zipcode)) {
      setError('Please enter a valid zipcode.');
      return;
    }
    // Navigate to the next page if the input is valid
    navigate('/next-page', { state: { zipcode } });
  };

  return (
    <div className="search-page">
      <h1>Search for Companies</h1>
      <form onSubmit={handleSubmit} className="location-search">
        <input 
          type="text"
          placeholder="Enter Zipcode here"
          value={zipcode}
          onChange={handleZipcodeChange}
          pattern="\d{5}(-\d{4})?" // This pattern attribute is used for native HTML validation
          title="Enter a 5 or 9 digit zipcode"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SearchPage;
