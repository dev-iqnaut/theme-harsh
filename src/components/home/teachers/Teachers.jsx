import React from "react";
import "./teachers.css";
import Backfull from "../../common/backfull/Backfull";
import img from "../../../images/up.jpg";

const teachersData = [
  { name: "William Smith", image: "images/teachers/t1.jpg", role: "Science Professor" },
  { name: "Jenny White", image: "images/teachers/t2.jpg", role: "Art Professor" },
  { name: "George Hobbs", image: "images/teachers/t3.jpg", role: "Economics Professor" },
  { name: "Alice Heard", image: "images/teachers/t4.jpg", role: "Statistics Professor" },
];

const Teachers = () => {
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
              <img src={teacher.image} alt={teacher.name} className="teacher-img" />
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
