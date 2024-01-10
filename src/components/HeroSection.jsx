// HeroSection.jsx
import React, { useEffect } from 'react';
import '../styles/HeroSection.css'; // Make sure to create this CSS file
import backgroundImg from '../assets/bowl.png';

function HeroSection() {
    useEffect(() => {
        // Create an observer to track when the element enters the viewport
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the element is in the viewport, add the "fade-in" class
                    entry.target.classList.add('fade-in');
                } else {
                    // If the element is out of the viewport, remove the "fade-in" class
                    entry.target.classList.remove('fade-in');
                }
            });
        });

        // Observe the overlay-text element
        const overlayText = document.querySelector('.overlay-text');
        if (overlayText) {
            observer.observe(overlayText);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

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
