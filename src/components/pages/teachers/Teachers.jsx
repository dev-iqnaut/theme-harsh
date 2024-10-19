import React from "react";
import Back from "../../common/Back"; // Assuming you have a Back component for the title
import Card from "./Card";
import "./teachers.css"; // Ensure the correct CSS file is imported
import img from "../../../images/up.jpg"

const Teachers = () => {
  return (
    <>
      <Back name="Pages" title="Teachers" cover={img} />
      <section className="team padding">
        <div className="container grid">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Teachers;
