import React from 'react';
import headerImage from '../assets/images/Header2.png';

const Header = () => {
    return (
        <header className="w-full h-auto">
            <img
                src={headerImage}
                alt="Header"
                className="w-1/2 mx-auto" // Adjust width as needed, e.g., w-1/3 for one-third width on small screens
            />
        </header>
    );
};

export default Header;