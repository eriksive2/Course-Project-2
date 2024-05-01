// ContractorsList.js
import React, { useEffect, useState } from 'react';
import './ContractorsList.css';

const ContractorsList = () => {
  const [contractors, setContractors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/companies')
      .then(response => response.json())
      .then(data => setContractors(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="contractors-list">
      {contractors.map(contractor => (
        <div key={contractor._id}>
          <h2>{contractor.name}</h2>
          {/* ... other contractor fields */}
        </div>
      ))}
    </div>
  );
};

export default ContractorsList;
