import React from 'react';
import '../styles/MenuPage.css';

function MenuPage() {
    const menuItems = [
        {
            name: 'Miso',
            description: 'A creamy miso broth topped with sweet corn, nori and woodear mushrooms',
            price: '$12.99',
        },
        {
            name: 'Chicken Katsu',
            description: 'Breaded chicken lightly fried served over rice with curry and tonkatsu sauce',
            price: '$14.99',
        },
        {
            name: 'Pork Buns',
            description: 'Steamed buns filled with braised pork belly and house sauce (2 pcs)',
            price: '$6.99',
        },
        {
            name: 'Takoyaki',
            description: 'A traditional Japanese street food: Battered octopus, cooked until crispy and served with mayonnaise',
            price: '$6.99',
        },
    ];

    return (
        <div className="menu-page">
            <h1>Menu</h1>
            <div className="menu-items">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MenuPage;
