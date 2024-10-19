import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./schoolDetails.css"; // Create a new CSS file for styling

const SchoolDetails = () => {
  const [schoolDetails, setSchoolDetails] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setSchoolDetails(doc.data()?.siteData?.Home?.schoolDetails || {}); // Fetch school details
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <section className="school-details">
      <div className="container">
        {schoolDetails.schoolLogo && (
          <img src={schoolDetails.schoolLogo} alt="School Logo" className="school-logo" />
        )}
        {schoolDetails.schoolName && <h1>{schoolDetails.schoolName}</h1>}
      </div>
    </section>
  );
};

export default SchoolDetails;
