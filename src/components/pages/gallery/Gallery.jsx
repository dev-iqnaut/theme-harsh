import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./gallery.css";
import Back from "../../common/Back";
import img from "../../../images/up.jpg";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    console.log("Fetching gallery data from Firestore...");

    const unsubscribe = onSnapshot(
      docRef,
      (doc) => {
        if (doc.exists()) {
          const data = doc.data()?.siteData?.gallery;
          const images = data?.images || [];
          const videos = data?.videos || [];
          setGalleryImages(images);
          setGalleryVideos(videos);
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

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading gallery...</p>;
  }

  if (galleryImages.length === 0 && galleryVideos.length === 0) {
    return <p>No content found!</p>;
  }

  const getEmbedURL = (url) => {
    if (typeof url === "string") {
      if (url.includes("youtu.be") || url.includes("youtube.com")) {
        const videoId = url.split("youtu.be/")[1]?.split("?")[0] || url.split("v=")[1]?.split("&")[0];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
      }
    }
    return ""; // Return empty string if it's not a valid YouTube link
  };


  return (
    <>
      <Back name="Pages" title="Gallery" cover={img} />
      <section className="gallery">
        <h2>Image Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div className="gallery-item" key={image.id}>
              <img src={image.url} alt={image.id} />
            </div>
          ))}
        </div>

        <h2>Video Gallery</h2>
        <div className="video-gallery">
          {galleryVideos.map((video, index) => (
            <div className="video-item" key={index}>
              {typeof video === "string" && getEmbedURL(video) ? (
                <iframe
                  width="100%"
                  height="315"
                  src={getEmbedURL(video)}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ) : (
                <video width="100%" height="315" controls>
                  <source src={video.url || video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Gallery;
