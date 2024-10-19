import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/Firebase";
import "./about.css";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../images/up.jpg"; // Your cover image

const About = () => {
  const [aboutData, setAboutData] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setAboutData(doc.data());
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Safely access the nested data
  const aboutUsData = aboutData?.siteData?.['About-Us'] || {};
  const principalData = aboutUsData?.principal_message || {};  // Principal data (object containing image and message)

  return (
    <>
      <section className="about">
        {/* Background and Title */}
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />

        <div className="container flex mtop">
          {/* Left Side Content */}
          <div className="left row">
            <Heading
              title="Our Mission & Vision"
              subtitle={aboutUsData.mission || "Loading..."}
            />

            <p>{aboutUsData.focus || "Loading..."}</p>
            <p>{aboutUsData.school_history || "Loading..."}</p>
            <p>{aboutUsData.vision || "Loading..."}</p>
            <button className="btn2">More About Us</button>
          </div>

          {/* Right Side Content */}
          <div className="right row">
            {/* Principal's Message Section */}
            {principalData?.principal_image && principalData?.principal_message ? (
              <>
                {/* Fix the whitespace issue in the URL */}
                <img
                  src={principalData.principal_image} // Ensure no extra whitespace in URL
                  alt="Principal"
                />
                <p>{principalData.principal_message}</p>
              </>
            ) : (
              <p>Loading principal's message...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
