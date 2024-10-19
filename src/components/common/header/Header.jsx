import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import './header.css';
import { nav } from '../../data/Data';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [aboutData, setAboutData] = useState({}); // State to hold all data

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setAboutData(doc.data()); // Set all data from Firestore
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  // Safely access the nested data
  const contactData = aboutData?.siteData?.ContactUs || {};
  const schoolDetails = aboutData?.siteData?.Home?.schoolDetails || {};

  const handleToggleDropdown = (hasSubmenu) => {
    if (hasSubmenu) {
      setDropdown((prev) => !prev);
    } else {
      setDropdown(false);
    }
  };

  const handleLinkClick = () => {
    setDropdown(false); // Close dropdown when a link is clicked
    setNavList(false); // Close mobile nav when a link is clicked (optional)
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span><i className="fa fa-phone"></i> {contactData.phone_number || "N/A"}</span>
          <span><i className="fa fa-envelope"></i> {contactData.email || "N/A"}</span>
          <span><i className="fa fa-map-marker"></i> {contactData.location || "N/A"}</span>
        </div>
        <div className="top-bar-right">
          <a href={contactData.facebook_link} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          <a href={contactData.twitter_link} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href={contactData.linkedin_link} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://google.com" target="_blank" rel="noreferrer"><i className="fa fa-search icon"></i></a>
        </div>
      </div>

      <header className="flex">
        <div className="logo">
          <img src={schoolDetails.schoolLogo} alt="School Logo" className="school-logo" />
          <span className="logo-text">{schoolDetails.schoolName}</span>
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((list, index) => (
              <li
                key={index}
                className="nav-item"
                onMouseEnter={() => handleToggleDropdown(list.submenu)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link
                  to={list.path}
                  onClick={() => {
                    handleLinkClick();
                    if (list.submenu) {
                      handleToggleDropdown(list.submenu);
                    }
                  }}
                >
                  {list.text}
                  {list.submenu && <i className="fa fa-caret-down"></i>}
                </Link>
                {dropdown && list.submenu && (
                  <ul className="dropdown">
                    {list.submenu.map((submenuItem, submenuIndex) => (
                      <li key={submenuIndex}>
                        <Link to={submenuItem.path} onClick={handleLinkClick}>
                          {submenuItem.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="button flex">
          <button className="btn1">
            <i className="fa fa-sign-out"></i> Sign In
          </button>
        </div>
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
