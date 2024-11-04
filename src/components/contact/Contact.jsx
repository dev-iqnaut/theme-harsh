import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore"; 
import { db } from "../../config/Firebase";
import img from "../../images/about-us.png";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  const [contactInfo, setContactInfo] = useState({});

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp";

      // Fetch data from Firestore
      useEffect(() => {
        const docRef = doc(db, "sites", "www.educator.in");
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
              setContactInfo(doc.data());
            } else {
                console.log("No such document!");
            }
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

    const contact = contactInfo?.siteData?.contactUs || {};

  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help & Friendly Support" cover={img} />
        <div className="container contact-container">
          {/* Map Section */}
          <div className="map-container">
            <iframe
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="content">
            {/* Contact Details */}
            <div className="contact-info shadow">
              <h4>Contact Information</h4>
              <div className="info-item">
                <i className="fa fa-map-marker"></i>
                <p>{contact.location}</p>
              </div>
              <div className="info-item">
                <i className="fa fa-envelope"></i>
                <p>{contact.email}</p>
              </div>
              <div className="info-item">
                <i className="fa fa-phone"></i>
                <p>{contact.phoneNumber}</p>
              </div>
              <div className="info-item">
                <i className="fa fa-clock"></i>
                <p>Opening Hours: {contact.openingHours} AM - 5 PM</p>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form shadow">
              <h4>Fill up the form</h4>
              <div className="form-group">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Your Subject" />
              </div>
              <textarea
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
              ></textarea>
              <button className="primary-btn">Submit Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
