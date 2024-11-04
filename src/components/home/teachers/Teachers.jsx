import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; // Import Firestore
import { db } from "../../../config/Firebase"; // Import Firebase config
import "./teachers.css";
import Backfull from "../../common/backfull/Backfull";
import img from "../../../images/up.jpg";

// Hardcoded faculty data (except for the first picture)
const teachersData = [
  { name: "William Smith", image: "images/teachers/t1.jpg", role: "Science Professor" }, // Picture will be dynamic
  { name: "Jenny White", image: "images/teachers/t2.jpg", role: "Art Professor" },
  { name: "George Hobbs", image: "images/teachers/t3.jpg", role: "Economics Professor" },
  { name: "Alice Heard", image: "images/teachers/t4.jpg", role: "Statistics Professor" },
];

const Teachers = () => {
  const [dynamicPicture, setDynamicPicture] = useState("");

  // Fetch the faculty picture for William Smith (first teacher) from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const picture = doc.data()?.siteData?.facultyStaff?.facultyPicture || ""; // Get the dynamic picture from Firestore
        setDynamicPicture(picture); // Set the dynamic picture
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <section className="teachers">
      {/* Background with gradient overlay */}
      <Backfull cover={img} />

      <div className="container">
        {/* Section title with View All button */}
        <div className="section-header">
          <h2 className="section-title">Meet Our Best Teachers</h2>
          <a href="/teachers" className="view-all-button">View All Team Members</a>
        </div>

        {/* Teachers grid */}
        <div className="teachers-list">
          {teachersData.map((teacher, index) => (
            <div key={index} className="teacher-item">
              {/* Use dynamic picture for the first teacher, hardcoded for others */}
              <img
                src={index === 0 || index === 2 && dynamicPicture ? dynamicPicture : teacher.image}
                alt={teacher.name}
                className="teacher-img"
              />
              <h3>{teacher.name}</h3>
              <p>{teacher.role}</p>
              {/* Social media icons */}
              <div className="social-icons">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats container over the background image */}
      <div className="stats-container">
        <h2>Committed To The Best Results!</h2>
        <p>We are dedicated to offering outstanding education with a focus on achieving excellence.</p>

        {/* Stats section */}
        <div className="stats">
          <div className="stat-item">
            <h3>45K+</h3>
            <p>Active Students</p>
          </div>
          <div className="stat-item">
            <h3>72+</h3>
            <p>Faculty Courses</p>
          </div>
          <div className="stat-item">
            <h3>90+</h3>
            <p>Best Professors</p>
          </div>
          <div className="stat-item">
            <h3>35</h3>
            <p>Awards Achieved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
