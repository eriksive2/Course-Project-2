// src/components/FilterResultsPage.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useQuery = () => {
  // ...same as before...
};

const FilterResultsPage = () => {
  const [filteredResults, setFilteredResults] = useState([]); // Make sure it's initialized as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = useQuery();

  useEffect(() => {
    // ...same as before...
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Ensure that filteredResults is an array before trying to map over it
  return (
    <div>
      <h2>Filtered Results</h2>
      {Array.isArray(filteredResults) && filteredResults.map(result => (
        // Make sure each result has a unique key, like an ID
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
};

export default FilterResultsPage;
