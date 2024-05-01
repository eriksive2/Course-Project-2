// In SelectedFilters.js

import React from 'react';

const SelectedFilters = ({ filters }) => {

  
  return (
    <div>
      {}
      {Object.entries(filters).map(([key, value]) => (
        <div key={key}>
          {key}: {value ? 'Yes' : 'No'}
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
