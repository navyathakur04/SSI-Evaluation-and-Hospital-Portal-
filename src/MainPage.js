import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import { FaUserNurse, FaUserMd, FaStethoscope } from 'react-icons/fa';
import logo from './logo.png';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Slides array with imported images
  const slides = [
    { image: image1, alt: 'Slide 1' },
    { image: image2, alt: 'Slide 2' },
    { image: image3, alt: 'Slide 3' },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleRoleClick = (role) => {
    navigate(`/${role}`);
  };

  // Slideshow effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="main-page">
      {/* Header */}
      <header className="taskbar">
        <div className="logo-container">
          <img src={logo} alt="Jaypee Hospital Logo" className="logo" />
          <h1 className="hospital-name">Jaypee Hospital Portal</h1>
        </div>
        <nav className="nav-bar">
          <ul className="nav-list">
            <li onClick={() => handleSectionClick('about')}>About Us</li>
            <li onClick={() => handleSectionClick('contact')}>Contact Us</li>
            <li onClick={() => handleSectionClick('locations')}>Locations</li>
          </ul>
        </nav>
      </header>

      {/* Dynamic Content - Only displays when a section is selected */}
      {activeSection && (
        <div className="dynamic-content">
          {activeSection === 'about' && (
            <div className="section-content">
              <h2>About Us</h2>
              <p>Welcome to Jaypee Hospital! We provide top-quality care with advanced medical technology and compassionate service.</p>
            </div>
          )}
          {activeSection === 'contact' && (
            <div className="section-content">
              <h2>Contact Us</h2>
              <p>Phone: 1800 102 9103<br />Email: contact@jaypeehospital.com</p>
            </div>
          )}
          {activeSection === 'locations' && (
            <div className="section-content">
              <h2>Locations</h2>
              <p>Find us in New Delhi, Mumbai, and Bengaluru.</p>
            </div>
          )}
        </div>
      )}

      {/* Slideshow */}
      <div className="slideshow">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].alt}
          className="slideshow-image"
        />
      </div>

      {/* Main Content */}
      <div className="role-selection-container">
        <h2 className="choose-role-heading">Choose Your Role</h2>
        <div className="role-cards-container">
          <div className="role-card" onClick={() => handleRoleClick('nurse')}>
            <FaUserNurse className="role-icon" />
            <h3>Nurse</h3>
          </div>
          <div className="role-card" onClick={() => handleRoleClick('junior-doctor')}>
            <FaStethoscope className="role-icon" />
            <h3>Junior Doctor</h3>
          </div>
          <div className="role-card" onClick={() => handleRoleClick('senior-doctor')}>
            <FaUserMd className="role-icon" />
            <h3>Senior Doctor</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
