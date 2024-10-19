import React from "react";
import InfrastructureGallery from "../infrastructure/InfrastructureGallery"; // Import the gallery
import Back from "../../common/Back"; // Assuming this is your common Back component
import img from "../../../images/up.jpg"; // Correct image path

const InfrastructurePage = () => {
  return (
    <>
      <Back name="Pages" title="Our School Infrastructure" cover={img} />
      <div className="infrastructure-page">
        <InfrastructureGallery />
      </div>
    </>
  );
};

export default InfrastructurePage;
