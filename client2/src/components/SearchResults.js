// components/SearchResults.js
import React from 'react';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  return (
    <div className="SearchResults">
      {results.map(result => (
        <div key={result.id} className="result-item">
          <h3>{result.name}</h3>
          {/* Add other details you want to display for each result */}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
