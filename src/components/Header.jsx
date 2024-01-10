// Header.jsx
import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/menu'); // Navigate to the '/menu' route when 'MENU' is clicked
    };

    const handleHomeClick = () => {
        navigate('/ramen-website');
    }

    return (
        <header className="header">
            <nav className="navbar">
                {/* Left navigation */}
                <ul className="nav-links left">
                    <li><a href="#home" onClick={handleHomeClick}>HOME</a></li>
                </ul>

                {/* Centered logo */}
                <div className="logo">
                    <img src={logo} alt="Ramen Logo" />
                </div>

                {/* Right navigation */}
                <ul className="nav-links right">
                    <li><a href="#menu" onClick={handleMenuClick}>MENU</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
