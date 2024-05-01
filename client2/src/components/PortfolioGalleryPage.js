import React from 'react';
import './PortfolioGalleryPage.css'; // Ensure you have this CSS file created

// Use the correct paths for the gallery images relative to the public folder
const galleryImages = [
  { url: './public/L&T.jpg', description: 'Project 1 Description' }, // Example image 1
  { url: '/PP.jpg', description: 'Project 2 Description' }, // Example image 2
  { url: '/SC2.jpg', description: 'Project 3 Description' }, // Example image 3
  // ...more images
];

const PortfolioGalleryPage = () => {
  return (
    <div className="portfolio-gallery-page">
      <h1>Portfolio Gallery</h1>
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.url} alt={image.description} />
            <p>{image.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioGalleryPage;
