
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllCompaniesPage = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/companies');
        setCompanies(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>All Companies</h1>
      {companies.map((company) => (
        <div key={company._id}>
          <h2>{company.name}</h2>
          {/* Display other company details here */}
        </div>
      ))}
    </div>
  );
};

export default AllCompaniesPage;
