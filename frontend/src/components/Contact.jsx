// src/components/Contact.jsx
import React from 'react';
import contact from '../assets/images/contact1.jpg';
import JoinUs from './JoinUs.jsx'


const Contact = () => {
    return (
        <div className="lg:max-w-3xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - QR Code Image */}
                <div className="flex items-center justify-center">
                    <img src={contact} alt="QR Code" className="w-3/4 lg:max-w-xs rounded-lg" />
                </div>

                {/* Right Section - Contact Information */}
                <div>
                    <h1 className="text-4xl mb-4 font-bold bg-white italic text-center text-orange-600 p-4 block rounded-full">
                        Contact Us</h1>
                    <div className="bg-yellow-100 p-8 w-full italic rounded-lg shadow-md mt-8">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold"> Head Manager </h2>
                            <h3 className=" font-bold">Cindy Luo  </h3>
                            <br />
                            <p>Email: legendarywintersports@outlook.com</p>
                            <p>Phone: +1(825)-882-0688</p>

                        </div>
                        <p className="text-sm text-gray-600">Feel free to contact us for any inquiries!</p>
                    </div>
                </div>
            </div>
            {/* Join us section*/}
            <JoinUs />
        </div>
    );
};

export default Contact;