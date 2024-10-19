import React from "react";
import "./teachers.css";

const teachersData = [
  { name: "William Smith", image: "images/teachers/t1.jpg", role: "Math Teacher" },
  { name: "Jenny White", image: "images/teachers/t2.jpg", role: "Science Teacher" },
  { name: "George Holden", image: "images/teachers/t3.jpg", role: "History Teacher" },
  { name: "Alice Howard", image: "images/teachers/t1.jpg", role: "English Teacher" },
];

const Teachers = () => {
  return (
    <section className="teachers">
      <div className="container">
        <h2 className="section-title">Meet Our Best Teachers</h2>
        <div className="teachers-list">
          {teachersData.map((teacher, index) => (
            <div key={index} className="teacher-item">
              <img src={teacher.image} alt={teacher.name} className="teacher-img" />
              <h3>{teacher.name}</h3>
              <p>{teacher.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teachers;
