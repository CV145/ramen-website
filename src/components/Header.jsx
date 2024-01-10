// Header.jsx
import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';

function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                {/* Left navigation */}
                <ul className="nav-links left">
                    <li><a href="#home">HOME</a></li>
                </ul>

                {/* Centered logo */}
                <div className="logo">
                    <img src={logo} alt="Ramen Logo" />
                </div>

                {/* Right navigation */}
                <ul className="nav-links right">
                    <li><a href="#menu">MENU</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
