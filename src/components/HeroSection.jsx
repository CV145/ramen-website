// HeroSection.jsx
import React from 'react';
import '../styles/HeroSection.css'; // Make sure to create this CSS file
import backgroundImg from '../assets/bowl.png';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="background-image" style={{ backgroundImage: `url(${backgroundImg})` }}></div>
            <div className="overlay-text">
                <h1>We Love Noodles.</h1>
            </div>
        </div>
    );
}

export default HeroSection;
