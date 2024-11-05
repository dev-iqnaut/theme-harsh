import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import "./footer.css";

const Footer = () => {
  const [footerData, setFooterData] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setFooterData(doc.data());
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const footData = footerData?.siteData?.contactUs || {};
  const schoolDetails = footerData?.siteData?.home?.schoolDetails || {};
  const aboutData = footerData?.siteData?.aboutUs || {};
  const cbseCompliance = footerData?.siteData?.cbseCompliance || {};
  const policy = footerData?.siteData?.policies || {};

  return (
    <footer>
      <div className='container padding'>
        {/* Logo and description */}
        <div className='box logo'>
          <img src={schoolDetails.schoolLogo} alt="School Logo" className="school-logo" />
          <h1>{schoolDetails.schoolName}</h1>
          <span>{aboutData.focus}</span>
          <p>{aboutData.mission}</p>

          {/* Social Media Icons */}
          <div className='social-icons'>
            <a href={footData.facebookLink}><i className='fab fa-facebook-f icon'></i></a>
            <a href={footData.twitterLink}><i className='fab fa-twitter icon'></i></a>
            <a href="https://instagram.com"><i className='fab fa-instagram icon'></i></a>
            <a href="https://youtube.com"><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className='box link'>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/news">News & Articles</a></li>
            <li><a href="/">Legal Notice</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className='box link'>
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/parents">Parent Community</a></li>
            {/* Use safe access to CBSECompliance properties */}
            <li><a href={cbseCompliance.annualReport} target="_blank" rel="noopener noreferrer">Annual Report</a></li>
            <li><a href={cbseCompliance.cbseAffiliation} target="_blank" rel="noopener noreferrer">CBSE Affiliation</a></li>
            <li><a href={cbseCompliance.mandatoryPublicDisclosure} target="_blank" rel="noopener noreferrer">Mandatory Public Disclosure</a></li>
          </ul>
        </div>

        {/* School Hours Section */}
        <div className='box last'>
          <h3>School Hours</h3>
          <ul>
            <li><i className="fa fa-clock"></i>{footData.openingHours}</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ul>
          <button className="join-us">Join Us Now</button>
        </div>
      </div>

      {/* Legal Section */}
      <div className='legal'>
        <div className='container'>
          <span className='left'>
            Copyright ©2024 Educator. All rights reserved. Made By <a href="https://www.linkedin.com/in/harshsindhwal007/">Harsh Sindhwal</a>.
          </span>
          <span className='right'>
            {policy.privacyPolicy} | SUPPORT | {policy.termsandConditions} | {policy.faq}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
