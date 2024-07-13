// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-opacity-75 p-4 flex items-center justify-between ">
            <button
                className="block md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <ul className={`md:flex space-x-12 justify-center md:justify-center w-full ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                    <Link
                        to="/"
                        className="text-white text-lg font-bold bg-orange-600 p-4 block rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-white text-lg font-bold bg-orange-600 p-4 block rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/programs"
                        className="text-white text-lg font-bold bg-orange-600 p-4 block rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Programs
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-white text-lg font-bold bg-orange-600 p-4 block rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Contact
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Announcement"
                        className="text-white text-lg font-bold bg-orange-600 p-4 block rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        Announcement
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;