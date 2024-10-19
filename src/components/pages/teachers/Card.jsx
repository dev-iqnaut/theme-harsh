import React from "react";
import { teamShort } from "../../data/dummydata"; // Import the short version of the team data
import "./teachers.css"; // Import your custom CSS for styling
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      {teamShort.map((val) => (
        <Link to={`/teachers/${val.id}`} key={val.id}>
          <div className="card-container" key={val.id}>
            <div className="card">
              <div className="image-container">
                <img src={val.cover} alt={val.name} className="profile-image" />
              </div>
              <div className="card-details">
                {/* Ensure the name is styled correctly */}
                <h2>{val.name}</h2>
                <p>{val.work}</p>
                <div className="social-icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
