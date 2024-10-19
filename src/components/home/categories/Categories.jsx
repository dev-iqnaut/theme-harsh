import React from "react";
import "./categories.css";

// Import local images from the assets folder
import managementImg from "../../../images/categories/management.png";
import scienceImg from "../../../images/categories/chemistry.png";
import itSoftwareImg from "../../../images/categories/codingpng.png";

const Categories = () => {
  const categories = [
    {
      title: "Management",
      icon: "icon-class",
      description: "Lorem ipsum dolor sit amet.",
      image: managementImg, // Use the imported image
    },
    {
      title: "Science",
      icon: "icon-class",
      description: "Lorem ipsum dolor sit amet.",
      image: scienceImg, // Use the imported image
    },
    {
      title: "IT & Software",
      icon: "icon-class",
      description: "Lorem ipsum dolor sit amet.",
      image: itSoftwareImg, // Use the imported image
    },
  ];

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Our Best Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <img src={category.image} alt={category.title} className="category-image" /> {/* Local image */}
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
