// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="  bg-opacity-75 p-4 items-center justify-between">
            <ul className="flex space-x-12 justify-center">
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