// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import NextPage from './components/NextPage'; 
import FAQPage from './components/FAQPage';
import ContractorsList from './components/ContractorsList';
import ContractorsResultsPage from './components/ContractorsResultsPage';
import PortfolioGalleryPage from './components/PortfolioGalleryPage';
import BookAppointmentPage from './components/BookAppointmentPage';
import GetEstimatePage from './components/GetEstimatePage';
import GetInTouchPage from './components/GetInTouchPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contractors-list" element={<ContractorsList />} />
          <Route path="/next-page" element={<NextPage />} /> 
          <Route path="/contractors-results" element={<ContractorsResultsPage />} />
          <Route path="/portfolio-gallery" element={<PortfolioGalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/book-appointment/:companyId" element={<BookAppointmentPage />} />
          <Route path="/get-estimate/:companyId" element={<GetEstimatePage />} />
          <Route path="/get-in-touch/:companyId" element={<GetInTouchPage />} />


          {}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
