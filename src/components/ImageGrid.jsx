// ImageGrid.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import '../styles/ImageGrid.css';
import bowl from '../assets/bowl.png';
import dumplings from '../assets/dumplings.png';
import interior from '../assets/interior.png';
import egg from '../assets/egg.png';
import matcha from '../assets/matcha.png'


function ImageGrid() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <Slider {...settings}>
            <div><img src={interior} alt="interior" /></div>
            <div><img src={dumplings} alt="dumplings" /></div>
            <div><img src={egg} alt="egg" /></div>
            <div><img src={matcha} alt="matcha" /></div>
        </Slider>
    );
}

export default ImageGrid;
