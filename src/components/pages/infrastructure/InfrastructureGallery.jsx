import React from "react";
import useInfrastructureData from "../../hooks/useInfrastructureData"; // Custom hook to fetch data
import './infrastructure.css';

const InfrastructureGallery = () => {
  const infrastructure = useInfrastructureData(); // Get infrastructure data from the custom hook

  // Safely render a gallery section for each infrastructure category
  const renderGallerySection = (title, images) => {
    if (!images || images.length === 0) return null; // Safely handle undefined or empty arrays

    return (
      <div className="infrastructure-section">
        <h2>{title}</h2>
        <div className="gallery-grid"> {/* Reusing gallery-grid class from gallery.css */}
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img
                src={image.url || image} // Support both direct strings or objects with URL
                alt={`${title} ${index + 1}`}
                className="infrastructure-image"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="infrastructure">
      {renderGallerySection("Art Rooms", infrastructure.art_rooms)}
      {renderGallerySection("Assembly Area", infrastructure.assembly_area)}
      {renderGallerySection("Auditorium", infrastructure.auditorium)}
      {renderGallerySection("Clinic", infrastructure.clinic)}
      {renderGallerySection("Hostels", infrastructure.hostels)}
      {renderGallerySection("Laboratories", infrastructure.laboratories)}
      {renderGallerySection("Libraries", infrastructure.libraries)}
      {renderGallerySection("Presentation Halls", infrastructure.presentation_halls)}
      {renderGallerySection("School Blocks", infrastructure.school_blocks)}
      {renderGallerySection("School Reception", infrastructure.school_reception)}
      {renderGallerySection("Sports Ground", infrastructure.sports_ground)}
    </section>
  );
};

export default InfrastructureGallery;
