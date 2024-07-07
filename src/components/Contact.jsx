// src/components/Contact.jsx
import React from 'react';
import contact from '../assets/contact1.jpg';


const Contact = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - QR Code Image */}
                <div className="flex items-center justify-center">
                    <img src={contact} alt="QR Code" className="max-w-xs" />
                </div>

                {/* Right Section - Contact Information */}
                <div>
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                        <div className="mb-4">
                            <h2 className="text-lg font-bold">Example Person</h2>
                            <p>Email: example@example.com</p>
                            <p>Phone: +123456789</p>
                            <p>Address: 123 Example St, Example City</p>
                        </div>
                        <p className="text-sm text-gray-600">Feel free to contact us for any inquiries!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;