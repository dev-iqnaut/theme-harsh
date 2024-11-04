import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase"; // Correct Firebase config path
import "./parentsCorner.css"; // Create a separate CSS file for styling
import Back from "../../common/Back"; // Common Back component
import img from "../../../images/up.jpg"; // Correct image path

const ParentsCorner = () => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in"); // Firestore path
    console.log("Fetching Parents Corner data from Firestore...");

    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()?.siteData?.parentsCorner;
          setContent(data?.content || "");
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

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  if (loading) {
    return <p>Loading Parents Corner...</p>;
  }

  return (
    <>
      <Back name="Pages" title="Parents Corner" cover={img} />
      <section className="parents-corner">
        <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      </section>
    </>
  );
};

export default ParentsCorner;
