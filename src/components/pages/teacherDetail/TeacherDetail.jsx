import React from "react";
import "./teacherDetail.css";
import Back from "../../common/Back";
import { useParams } from "react-router-dom";
import { team } from "../../data/dummydata";
import img from "../../../images/about-us.png";

const TeacherDetail = () => {
  const { id } = useParams(); // Extract id from the URL

  // Find the teacher by id
  const teacher = team.find((teacher) => teacher.id === parseInt(id));

  if (!teacher) {
    return <h2>Teacher not found!</h2>;
  }

  return (
    <>
      {/* Top section with title */}
      <Back name="Teacher Detail" title={teacher.name} cover={img} />

      {/* Teacher Details */}
      <section className="teacher-detail container">
        <div className="left">
          <img
            src={teacher.cover}
            alt={teacher.name}
            className="teacher-image"
          />
        </div>
        <div className="right">
          <h2>{teacher.name}</h2>
          <h4>{teacher.work}</h4>
          <p className="bio">{teacher.description}</p>

          <blockquote>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
          </blockquote>

          <h3>Qualifications:</h3>
          <ul>
            {teacher.qualifications.map((qual, index) => (
              <li key={index}>{qual}</li>
            ))}
          </ul>

          <h3>Experiences:</h3>
          <p>{teacher.experience}</p>
        </div>
      </section>

      {/* Skills or Stats section below the main details */}
      <section className="teacher-stats container">
        <div className="stats-box">
          <h4>Completed Projects</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="stats-box">
          <h4>Construction Skills</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}></div>
          </div>
        </div>
        <div className="stats-box">
          <h4>Reliable & Hardworking</h4>
          <div className="progress-bar">
            <div className="progress" style={{ width: "95%" }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeacherDetail;
