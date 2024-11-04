import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import './schoolInfo.css'; // Your CSS file
import Back from "../../common/Back";
import Heading from "../../common/Heading";
import img from "../../../images/up.jpg"; // Your cover image

const SchoolInfo = () => {
    const [schoolData, setSchoolData] = useState({});

    // Fetch data from Firestore
    useEffect(() => {
        const docRef = doc(db, "sites", "www.educator.in");
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setSchoolData(doc.data());
            } else {
                console.log("No such document!");
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    const policies = schoolData?.siteData?.schoolPolicies || {};
    const studentCorner = schoolData?.siteData?.studentCorner || []; // Default to an empty array

    return (
        <section className="school-info-section">
            <Back name="School Information" title="School Policies and Student Corner" cover={img} />
            <div className="school-info-container">
                {/* School Policies Section */}
                <div className="school-info-row card">
                    <Heading title="School Policies" subtitle="Important policies governing our school" />
                    <div className="school-policies-content">
                        {policies.content || "Content not available"}
                    </div>
                </div>

                {/* Student Corner Section */}
                <div className="school-info-row card">
                    <Heading title="Student Corner" subtitle="Resources and information for students" />
                    <ul className="student-corner-list">
                        {Array.isArray(studentCorner) && studentCorner.length > 0 ? (
                            studentCorner.map((item, index) => (
                                <li key={index} className="student-corner-item">
                                    {item || "Item not available"}
                                </li>
                            ))
                        ) : (
                            <li>No resources available</li> // Fallback if not an array or empty
                        )}
                    </ul>
                </div>

                {/* Co-Curricular Activities Section */}
                <div className="school-info-row card">
                    <Heading title="Co-Curricular Activities" subtitle="Engaging activities outside the classroom" />
                    <div className="co-curricular-content">
                        {studentCorner.cocurricular || "Content not available"}
                    </div>
                </div>

                {/* Student Achievements Section */}
                <div className="school-info-row card">
                    <Heading title="Student Achievements" subtitle="Celebrating our students' successes" />
                    <div className="student-achievements-content">
                        {studentCorner.studentAchievement || "Content not available"}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolInfo;
