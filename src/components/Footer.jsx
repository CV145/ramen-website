// Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // Ensure you create this CSS file

function Footer() {
    return (
        <footer className="footer">
            <h2>Only... the best!</h2>
            <p>123 Noodle Road, Flavor Town, TX - 123-456-7890 - bestnoodles@example.com</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
