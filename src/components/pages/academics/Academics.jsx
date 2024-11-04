import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./academics.css";
import Back from "../../common/Back";
import Heading from "../../common/Heading";
import img from "../../../images/up.jpg"; // Your cover image

const Academics = () => {
    const [academicsData, setAcademicsData] = useState({});

    // Fetch data from Firestore
    useEffect(() => {
        const docRef = doc(db, "sites", "www.educator.in");
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setAcademicsData(doc.data());
            } else {
                console.log("No such document!");
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    const academic = academicsData?.siteData?.academics || {};
    const admission = academicsData?.siteData?.admissions || {};
    const academicResources = academicsData?.siteData?.academicResources || {}; // Assume this structure is fetched

    // Define the desired order of grades
    const gradeOrder = [
        "Nursery", "KG1", "KG2",
        "1st", "2nd", "5th", "6th",
        "12th"
    ];

    // Sort academic resources based on the defined order
    const sortedAcademicResources = gradeOrder.map(grade => ({
        grade,
        resource: academicResources[grade]
    }));

    return (
        <section className="academics-section">
            <Back name="Academics" title="Academics - Academic Information" cover={img} />
            <div className="academics-container">
                {/* Academic Calendar */}
                <div className="academics-row card">
                    <Heading title="Academic Calendar" subtitle="View the annual academic schedule" />
                    <div className="academics-btn-group">
                        <a href={academic.academicCalendar || "#"} target="_blank" rel="noopener noreferrer" className="pink-btn">View Academic Calendar</a>
                    </div>
                </div>

                {/* Exam Schedule */}
                <div className="academics-row card">
                    <Heading title="Exam Schedule" subtitle="Check upcoming exams and schedules" />
                    <div className="academics-btn-group">
                        <a href={academic.examSchedule || "#"} target="_blank" rel="noopener noreferrer" className="pink-btn">View Exam Schedule</a>
                    </div>
                </div>

                {/* Fee Structure */}
                <div className="academics-row card">
                    <Heading title="Fee Structure" subtitle="Get detailed information on fees" />
                    <div className="academics-btn-group">
                        <a href={admission.feeStructure || "#"} download className="pink-btn">Download Fee Structure</a>
                    </div>
                </div>

                {/* Admissions Document List */}
                <div className="academics-row card">
                    <Heading title="Admissions Documents" subtitle="Important documents related to admissions" />
                    <ul className="admissions-document-list">
                        {admission.documentList && admission.documentList.map((docName, index) => (
                            <li key={index} className="admissions-document-item">
                                {docName}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Academic Resources Section */}
                <div className="academics-row card">
                    <Heading title="Academic Resources" subtitle="Resources for each grade level" />
                    <ul className="academic-resources-list">
                        {sortedAcademicResources.map(({ grade, resource }, index) => (
                            <li key={index} className="academic-resource-item">
                                <strong>{grade}:</strong> {resource}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Academics;
