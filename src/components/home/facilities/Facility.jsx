import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import Backfull from "../../common/backfull/Backfull";
import img from "../../../images/up.jpg";
import "./facility.css"; // Importing CSS for Facility component

const imageMap = {
  "icon1.png": require("../../../images/facility/skilledteachers.png"),
  "icon2.png": require("../../../images/facility/2.png"),
  "icon3.png": require("../../../images/facility/3.png"),
};

const Facility = () => {
  const [facilityData, setFacilityData] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setFacilityData(doc.data());
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const facilityItems = facilityData?.siteData?.["Facilities"] || [
    { title: "Skilled Teachers", description: "Highly experienced and qualified.", icon: "icon1.png" },
    { title: "Affordable Courses", description: "Education at an affordable price.", icon: "icon2.png" },
    { title: "Efficient & Flexible", description: "Study on your own schedule.", icon: "icon3.png" },
  ];

  return (
    <section className="facility-section">
      {/* Background with gradient overlay */}
      <Backfull cover={img} />

      <div className="facility-container">
        {/* Section header */}
        <div className="facility-header">
          <h2 className="facility-title">Our Best Features</h2>
          <a href="/facility" className="facility-view-all-button">
            View All Facilities
          </a>
        </div>

        {/* Facilities grid */}
        <div className="facility-grid">
          {facilityItems.map((item, index) => (
            <div key={index} className="facility-card">
              <img src={imageMap[item.icon]} alt={item.title} className="facility-icon" />
              <h3 className="facility-card-title">{item.title}</h3>
              <p className="facility-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats container over the background image */}
      <div className="fstats-container">
        <h2>Limitless Learning, Limitless Possibilities!</h2>
        <p>We are dedicated to offering outstanding education with a focus on achieving excellence.</p>
      </div>
    </section>
  );
};

export default Facility;
