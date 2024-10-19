import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase"; // Correct Firebase config path
import "./gallery.css"; // Correct CSS path
import Back from "../../common/Back"; // Assuming this is your common Back component
import img from "../../../images/up.jpg"; // Correct image path

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in"); // Firestore path
    console.log("Fetching gallery data from Firestore...");

    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          // Accessing the Gallery from the nested siteData structure
          const galleryData = doc.data()?.siteData?.Gallery?.images || [];
          if (galleryData.length > 0) {
            setGalleryImages(galleryData); // Set images if available
          } else {
            console.log("No images found in Firestore.");
          }
        } else {
          console.log("No such document in Firestore!");
        }
        setLoading(false); // Ensure loading stops
      },
      (error) => {
        console.error("Error fetching document:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Display loading or empty state
  if (loading) {
    return <p>Loading gallery images...</p>;
  }

  if (galleryImages.length === 0) {
    return <p>No images found!</p>;
  }

  return (
    <>
      <Back name="Pages" title="Gallery" cover={img} />
      <section className="gallery">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.url} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
