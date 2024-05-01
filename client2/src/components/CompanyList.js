import React from 'react';

const CompanyList = ({ companies }) => {
  return (
    <ul>
      {companies.map((company) => (
        <li key={company._id}>{company.name} - {company.location}</li>
      ))}
    </ul>
  );
};

export default CompanyList;
