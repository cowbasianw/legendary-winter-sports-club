// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/images/Logo1.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage } = useLanguage();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-opacity-75 flex bg-orange-400 text-white items-center justify-between lg:px-4 py-2 z-50">


            <div className="flex items-center">
                <img src={logo1} alt="Encouragement" className="w-16 md:h-16 lg:w-24 lg:h-24 object-cover" />

                <div className="flex flex-col ml-2">
                    {language === 'EN' ? (
                        <>
                            <p className="text-sm md:text-sm lg:text-3xl font-bold">Legendary Winter Sports Club</p>
                            <p className="text-sm md:text-sm lg:text-1xl font-bold">传琦冰雪俱乐部</p>
                        </>
                    ) : (
                        <>
                            <p className="text-sm md:text-1xl lg:text-4xl font-bold">传琦冰雪俱乐部</p>
                            <p className="text-sm font-bold">Legendary Winter Sports Club</p>
                        </>
                    )}
                </div>
            </div>

            <ul className={`md:flex lg:flex space-x-1 md:space-x-2 lg:space-x-4 justify-center w-1/2 md:w-auto lg:w-auto  ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                <li>
                    <Link
                        to="/"
                        className="text-xs md:text-sm lg:text-xl font-bold p-2 lg:p-4 block rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    >
                        {language === 'EN' ? 'Home' : '主页'}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="text-xs md:text-sm lg:text-xl font-bold p-2 lg:p-4 block rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    >
                        {language === 'EN' ? 'About' : '关于我们'}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/programs"
                        className="text-xs md:text-sm lg:text-xl font-bold p-2 lg:p-4 block rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    >
                        {language === 'EN' ? 'Programs' : '项目'}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Announcement"
                        className="text-xs md:text-sm lg:text-xl font-bold p-2 lg:p-4 block rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    >
                        {language === 'EN' ? 'Announcement' : '公告'}
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="text-xs md:text-sm lg:text-xl font-bold p-2 lg:p-4 block rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    >
                        {language === 'EN' ? 'Contact Us!' : '联系我们'}
                    </Link>
                </li>
            </ul>
            <div className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
                <button
                    className="text-xs md:text-sm lg:text-xl font-bold p-2 rounded-lg hover:bg-white hover:text-orange-600 transition duration-300"
                    onClick={toggleLanguage}
                >
                    {language === 'EN' ? 'CN' : 'EN'}
                </button>
                <button
                    className="block md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;