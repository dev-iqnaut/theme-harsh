import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./facility.css";
import Back from "../../common/Back";
import Heading from "../../common/Heading";
import img from "../../../images/up.jpg"; // Your cover image

// Preload images from the images folder
const imageMap = {
  "icon1.png": require("../../../images/facility/skilledteachers.png"),
  "icon2.png": require("../../../images/facility/2.png"),
  "icon3.png": require("../../../images/facility/3.png"),
  "icon4.png": require("../../../images/facility/4.png"),
  "icon5.png": "https://www.intellistride.com/wp-content/uploads/2020/02/license.svg",
  "icon6.png": "https://www.bhubaneswarmetro.in/assets/images/faq.svg"
};

const Facility = () => {
  const [facilityData, setFacilityData] = useState({});

  // Fetch data from Firestore (optional)
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

  const facilityItems = facilityData?.siteData?.['Facilities'] || [
    { title: "Skilled Teachers", description: "Highly experienced and qualified.", icon: "icon1.png" },
    { title: "Affordable Courses", description: "Education at an affordable price.", icon: "icon2.png" },
    { title: "Efficient & Flexible", description: "Study on your own schedule.", icon: "icon3.png" },
    { title: "Friendly Place", description: "A welcoming environment.", icon: "icon4.png" },
    { title: "Global Certification", description: "Internationally recognized courses.", icon: "icon5.png" },
    { title: "Best Support", description: "24/7 student support.", icon: "icon6.png" },
  ];

  return (
    <>
      <section className="facility">
        {/* Background and Title */}
        <Back name="Facility" title="Our Facilities" cover={img} />

        <div className="container">
          <Heading title="What We Offer" subtitle="Explore the best facilities we provide to our students" />

          <div className="facility-grid">
            {facilityItems.map((item, index) => (
              <div className="facility-card" key={index}>
                <div className="facility-icon">
                  {/* External SVG for Skilled Teachers */}
                  <img src={imageMap[item.icon]} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Facility;
