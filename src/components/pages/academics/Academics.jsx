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
    
    console.log(academicsData);
    const academic = academicsData?.siteData?.Academics || {};
    const admission = academicsData?.siteData?.Admissions || {};

    return (
        <section className="academics-section">
            <Back name="Academics" title="Academics - Academic Information" cover={img} />
            <div className="academics-container">
                {/* Academic Calendar */}
                <div className="academics-row card">
                    <Heading title="Academic Calendar" subtitle="View the annual academic schedule" />
                    <div className="academics-btn-group">
                        <a href={academic.academic_calendar || "#"} target="_blank" rel="noopener noreferrer" className="pink-btn">View Academic Calendar</a>
                    </div>
                </div>

                {/* Exam Schedule */}
                <div className="academics-row card">
                    <Heading title="Exam Schedule" subtitle="Check upcoming exams and schedules" />
                    <div className="academics-btn-group">
                        <a href={academic.exam_schedule || "#"} target="_blank" rel="noopener noreferrer" className="pink-btn">View Exam Schedule</a>
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
            </div>
        </section>
    );
};

export default Academics;