// SearchPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css'; // Make sure to create this CSS file

const SearchPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/next-page'); // Adjust the route as necessary
  };
  
  return (
    <div className="search-page">
      <h1>Search for Farmhouse Companies</h1>
      <form onSubmit={handleSubmit}>
        {/* Removed other input fields and buttons as per requirement */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default SearchPage;
