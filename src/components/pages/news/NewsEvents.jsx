import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import Back from "../../common/Back"; // Assuming the Back component is for the header section
import '../../blog/blog.css'; // Reuse the blog styling for consistency
import img from "../../../images/about-us.png"; // Import a cover image

const NewsEvents = () => {
  const [newsEvents, setNewsEvents] = useState({ announcements: [], news: [], headerAnnouncement: '' });

  // Fetch News and Events data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data()?.siteData?.["News-Events"] || {};
        setNewsEvents({
          announcements: data.announcement || [],
          news: data.news || [],
          headerAnnouncement: data.header_announcement[0]?.announcement || 'News & Events', // Default to "News & Events" if not available
        });
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Function to format dates to a readable string
  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toDateString(); // Formats as "Mon, Jan 1, 2023"
  };

  return (
    <>
      {/* Use the header announcement as the title in the Back component */}
      <Back name="News & Events" title={newsEvents.headerAnnouncement} cover={img} />

      <section className='blog'> {/* Reusing the blog section styling */}
        <div className='container grid'>
          {newsEvents.announcements.map((item, index) => (
            <div className='box' key={index}>
              <div className='img'>
                <img src={item.url} alt={item.title} />
              </div>
              <div className='text'>
                <span className='type'>Announcement</span>
                <span className='date'>{formatDate(item.date)}</span>
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}

          {newsEvents.news.map((item, index) => (
            <div className='box' key={index}>
              <div className='img'>
                <img src={item.image} alt={item.title} />
              </div>
              <div className='text'>
                <span className='type'>News</span>
                <span className='date'>{formatDate(item.date)}</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsEvents;
