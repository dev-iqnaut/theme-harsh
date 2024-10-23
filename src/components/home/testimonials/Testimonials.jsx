import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./testimonials.css";

const testimonialsData = [
  {
    name: "Jane Wilson",
    feedback: "This platform provided me with the best learning experience. The teachers are wonderful!",
    image: "images/testimonials/t1.jpg",
  },
  {
    name: "William Taylor",
    feedback: "I love the interactive sessions and the structured courses. Highly recommended!",
    image: "images/testimonials/t2.jpg",
  },
  // Add more testimonials if needed
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Reviews From Students</h2>
        <div className="testimonials-list">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <h3>{testimonial.name}</h3>
            </div>
          ))}
        </div>
        {/* More Reviews Button */}
        <Link to="/testimonials" className="more-reviews-button">
          More Reviews
        </Link>
      </div>
    </section>
  );
}

export default Testimonials;
