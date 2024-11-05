import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./carousel.css"; // Updated carousel CSS

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setCarouselData(doc.data()?.siteData?.home?.carousel || []); // Fetch carousel data
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Handle previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  // Handle next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (carouselData.length === 0) return <p>Loading carousel...</p>;

  return (
    <section className="carousel">
      <div className="carousel-container">
        {/* Circular button for previous slide */}
        <button className="left-arrow arrow-btn" onClick={goToPrevious}>
          &#10094;
        </button>

        {/* Carousel slide */}
        <div className="carousel-slides">
          {carouselData.map((item, index) => (
            <div
              className={`carousel-slide ${
                index === currentIndex ? "active" : "inactive"
              }`}
              key={index}
              style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
              }}
            >
              <img src={item.image} alt={`Slide ${index + 1}`} className="carousel-image" />
              {item.title && <h2 className="carousel-title">{item.title}</h2>}
              {item.buttonUrl && item.buttonText && (
                <a href={item.buttonUrl} className="btn-primary">
                  {item.buttonText} {item.title}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Circular button for next slide */}
        <button className="right-arrow arrow-btn" onClick={goToNext}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
