import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/Firebase";
import './header.css';
import { nav } from '../../data/dummydata';
import { Link } from 'react-router-dom';

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
  const [aboutData, setAboutData] = useState({});

  // Fetch data from Firestore
  useEffect(() => {
    const docRef = doc(db, "sites", "www.educator.in");
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        setAboutData(doc.data());
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, []);

  // Safely access the nested data
  const contactData = aboutData?.siteData?.contactUs || {};
  const schoolDetails = aboutData?.siteData?.home?.schoolDetails || {};

  // Toggle dropdown based on index to handle multiple submenus
  const handleToggleDropdown = (index, hasSubmenu) => {
    // Only toggle the dropdown if the menu item has a submenu
    if (hasSubmenu) {
      setActiveDropdown((prev) => (prev === index ? null : index));
    }
  };

  const handleLinkClick = (hasSubmenu) => {
    if (!hasSubmenu) {
      setNavList(false); // Close mobile nav when a link is clicked if it's not a dropdown
      setActiveDropdown(null); // Close any open dropdowns when a link is clicked
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <span><i className="fa fa-phone"></i> {contactData.phoneNumber || "N/A"}</span>
          <span><i className="fa fa-envelope"></i> {contactData.email || "N/A"}</span>
          <span><i className="fa fa-map-marker"></i> {contactData.location || "N/A"}</span>
        </div>
        <div className="top-bar-right">
          <a href={contactData.facebookLink} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
          <a href={contactData.twitterLink} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href={contactData.linkedinLink} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
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
                onClick={() => handleToggleDropdown(index, list.submenu)} // Toggle dropdown if it has submenu
              >
                <Link
                  to={list.path}
                  onClick={() => handleLinkClick(list.submenu)} // Pass the condition for submenu
                >
                  {list.text}
                  {list.submenu && <i className={`fa fa-caret-down ${activeDropdown === index ? "open" : ""}`}></i>}
                </Link>
                {activeDropdown === index && list.submenu && (
                  <ul className="dropdown">
                    {list.submenu.map((submenuItem, submenuIndex) => (
                      <li key={submenuIndex}>
                        <Link to={submenuItem.path} onClick={() => handleLinkClick(false)}>
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