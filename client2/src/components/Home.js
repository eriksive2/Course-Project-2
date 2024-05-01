

import React from 'react';
import SearchBar from './SearchBar';


const Home = () => {


  const handleSearch = (companyName, location) => {
   
    console.log(`Searching for ${companyName} in ${location}`);
    
  };

  return (
    <div className="Home">
      <SearchBar onSearch={handleSearch} />
      {}
    </div>
  );
};

export default Home;
