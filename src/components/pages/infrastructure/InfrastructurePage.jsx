import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./infrastructure.css";

const Infrastructure = () => {
  const [infrastructureData, setInfrastructureData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    console.log("Fetching infrastructure data from Firestore...");

    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()?.siteData?.infrastructure;
          setInfrastructureData(data || {});
        } else {
          console.log("No such document in Firestore!");
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching document:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading infrastructure...</p>;
  }

  if (!Object.keys(infrastructureData).length) {
    return <p>No infrastructure data found!</p>;
  }

  return (
    <section className="infrastructure">
      {Object.entries(infrastructureData).map(([section, items]) => (
        <div className="infrastructure-section" key={section}>
          <h2>{section.replace(/([A-Z])/g, " $1")}</h2>
          <div className="gallery-grid">
            {Array.isArray(items) && items.map((item, index) => (
              <div className="gallery-item" key={index}>
                <img src={typeof item === "string" ? item : item.url} alt={section} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Infrastructure;
