// HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css'; // Make sure to create this CSS file
import backgroundImg from '../assets/bowl.png'; // Path to your background image

function HeroSection() {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <h1 className="hero-text">We Love Noodles</h1>
        </div>
    );
}

export default HeroSection;
