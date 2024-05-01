import React, { useEffect, useState } from 'react';
import './ContractorsResultsPage.css';
import { useNavigate } from 'react-router-dom';

const ContractorsResultsPage = () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://localhost:4002/api/companies');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);


    // Function definitions
    const handleBookAppointmentClick = (companyId) => {
      navigate(`/book-appointment/${companyId}`);
    };
  
    const handleGetEstimateClick = (companyId) => {
      // Replace this with the actual path you wish to navigate to
      navigate(`/get-estimate/${companyId}`);
    };
  
    const handleGetInTouchClick = (companyId) => {
      // Replace this with the actual path you wish to navigate to
      navigate(`/get-in-touch/${companyId}`);
    };

    const handleViewPortfolioGalleryClick = (companyId) => {
      navigate(`/portfolio-gallery/${companyId}`);
    };

  return (
    <div className="companies-results-page">
      <h1>Companies Results</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : companies.length > 0 ? (
        companies.map((company) => (
          <div key={company._id} className="company-card">
            <img
              src={company.seller_picture}
              alt={company.seller_name}
              className="company-card-img"
            />
            <div className="company-details">
              <h2>{company.seller_name}</h2>
              <p>Website: <a href={company.seller_website}>{company.seller_website}</a></p>
              <p>Email: {company.seller_email}</p>
              <p>Phone: {company.seller_phonenumber}</p>
              <p>Address: {company.seller_address}</p>
              <p>Pincode: {company.pincode}</p>
              <p>Summary: {company.seller_summary}</p>
              <p>Partners: {company.seller_partners.join(', ')}</p>
              <p>Type: {company.usertype}</p>
              <p>Rating: {company.rating}</p>
            </div>
            <div className="company-actions">
              <button className="btn" onClick={() => handleBookAppointmentClick(company._id)}>Book Appointment</button>
              <button className="btn" onClick={() => handleGetEstimateClick(company._id)}>Get Estimate</button>
              <button className="btn" onClick={() => handleGetInTouchClick(company._id)}>Get In touch</button>
              <button className="btn" onClick={() => navigate(`/portfolio/${company._id}`)}>View Portfolio Gallery</button>
            </div>
          </div>
        ))
      ) : (
        <p>No companies found.</p>
      )}
    </div>
  );
};

export default ContractorsResultsPage;
