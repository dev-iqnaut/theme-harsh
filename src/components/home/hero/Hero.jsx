import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  const [heroData, setHeroData] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setHeroData(doc.data()?.siteData?.home?.hero || {}); // Fetch hero data from Firestore
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <section className="hero" style={{ backgroundImage: `url(${heroData.heroImage})` }}> {/* Display heroImage as background */}
      <div className="container flex hero-content">
        <div className="hero-text">
          <Heading 
            title="Welcome to Our School"
            subtitle="Discover your path to success with our innovative learning experience."
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
