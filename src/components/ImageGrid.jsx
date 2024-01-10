// ImageGrid.jsx
import React from 'react';
import '../styles/ImageGrid.css';
import bowl from '../assets/bowl.png';
import dumplings from '../assets/dumplings.png';
import interior from '../assets/interior.png';
import egg from '../assets/egg.png';
import matcha from '../assets/matcha.png'

function ImageGrid() {
    return (
        <div className="image-grid">
            <div className="grid-item large"><img src={egg} alt="Description" /></div>
            <div className="grid-item large"><img src={matcha} alt="Description" /></div>
            <div className="grid-item large"><img src={interior} alt="Description" /></div>
            <div className="grid-item large"><img src={dumplings} alt="Description" /></div>
        </div>
    );
}

export default ImageGrid;
