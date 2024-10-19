import React from "react";

const Back = ({ name, title, cover }) => {
  return (
    <div className="back">
      <img src={cover} alt={name} className="back-image" />
      <div className="back-content container">
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Back;
