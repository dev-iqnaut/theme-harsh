import React from "react";
import "./backfull.css";

const Backfull = ({ cover }) => {
  return (
    <div className="backfull" style={{ backgroundImage: `url(${cover})` }}>
    </div>
  );
};

export default Backfull;
