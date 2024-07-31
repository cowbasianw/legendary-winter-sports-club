// src/components/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import qrCode from '../../assets/images/QRcode.png';
import { useLanguage } from '../../context/LanguageContext.jsx';


const Footer = () => {

    const { language, toggleLanguage } = useLanguage();

    return (
        <footer className="text-orange-600 p-4 text-center text-sm lg:text-2xl relative bottom-0 w-full">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
                    {/* Left Section: Bottom Links */}
                    <div className="flex flex-col items-center mt-8">
                        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-base text-left lg:text-lg">
                            <li>
                                <Link
                                    to="/"
                                    className="text-xs md:text-sm lg:text-base px-8 hover:bg-white hover:text-orange-600 transition duration-300"
                                >
                                    {language === 'EN' ? 'Home' : '主页'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-xs md:text-sm lg:text-base px-8 hover:bg-white hover:text-orange-600 transition duration-300"
                                >
                                    {language === 'EN' ? 'About' : '关于我们'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/programs"
                                    className="text-xs md:text-sm lg:text-base px-8 hover:bg-white hover:text-orange-600 transition duration-300"
                                >
                                    {language === 'EN' ? 'Programs' : '项目'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Announcement"
                                    className="text-xs md:text-sm lg:text-base px-8 hover:bg-white hover:text-orange-600 transition duration-300"
                                >
                                    {language === 'EN' ? 'Announcement' : '公告'}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-xs md:text-sm lg:text-base px-8 hover:bg-white hover:text-orange-600 transition duration-300"
                                >
                                    {language === 'EN' ? 'Contact Us!' : '联系我们'}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Center Section: QR Code */}
                    <div className="flex flex-col items-center mt-8">
                        <h2 className="text-2xl font-bold mb-4">
                            {language === 'EN' ? 'Join our Wechat group!' : '加入我们微信群'}</h2>
                        <br />
                        <img src={qrCode} alt="WeChat QR Code" className="w-36 h-36 object-cover rounded-lg" />
                    </div>

                    {/* Right Section: Follow Us */}
                    <div className="flex flex-col items-center mt-8">
                        <h2 className="text-2xl font-bold mb-4">
                            {language === 'EN' ? 'Follow Us！' : '关注我们'}</h2>
                        <a
                            href="https://www.instagram.com/legendary_yyc/?igsh=MWRxMTBhNG55eGxtNg%3D%3D&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-orange-400 transition duration-300"
                        >
                            <i className="fab fa-instagram fa-3x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <br /><br />
            <p className='text-sm '>&copy; 2024 Legendary Winter Sports Club. All rights reserved.</p>
        </footer>

    );
};

export default Footer;