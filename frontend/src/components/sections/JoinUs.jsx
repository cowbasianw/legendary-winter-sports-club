import React, { useState } from 'react';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLanguage } from '../../context/LanguageContext.jsx';
import './styles.css';  // Import your custom CSS
import { FaSpinner } from 'react-icons/fa';  // Import a spinner icon

// Set base URL for Axios requests
axios.defaults.baseURL = 'https://legendary-winter-sport-club-backend.vercel.app/';

const JoinForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);  // Loading state for submission
    const { language } = useLanguage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading
        try {
            const response = await axios.post('/api/join', formData);
            console.log('Email sent:', response.data);
            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                message: '',
                phone: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
        } finally {
            setLoading(false);  // Stop loading after submission
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevState) => ({
            ...prevState,
            phone: value,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 md:px-12 lg:px-16">

            <form onSubmit={handleSubmit} className=" bg-blue-100 p-8 w-full rounded-lg shadow-md mt-8">
                {submitted && (
                    <div className="bg-green-200 text-green-700 p-4 mb-4 rounded">
                        Request submitted successfully!
                    </div>
                )}
                <div className="mb-4">
                    <span className=" w-full text-center text-2xl lg:text-4xl font-bold text-orange-400 p-4 block rounded-full">
                        {language === 'EN' ? 'Join Us!' : '加入我们吧！'}
                    </span>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        {language === 'EN' ? 'Your Name' : '姓名'}<span className="text-orange-600">*</span>
                    </label>
                    <input
                        className="shadow appearance-none md:w-2/3 lg:w-2/3 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        {language === 'EN' ? 'Your Email' : '电子邮箱'}<span className="text-orange-600">*</span>
                    </label>
                    <input
                        className="md:w-2/3 lg:w-2/3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        {language === 'EN' ? 'Your phone number' : '电话号码'}<span className="text-orange-600">*</span>
                    </label>
                    <PhoneInput
                        country={'ca'}
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputProps={{
                            name: 'phone',
                            required: true,

                        }}
                        containerClass="w-full"
                        inputClass="form-control border rounded p-2 w-full sm:w-240px md:w-1/2 lg:w-1/3"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        {language === 'EN' ? 'Message us! (optional)' : '给我们短信'}
                    </label>
                    <textarea
                        id="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                        name="message"
                        placeholder="Message us! (optional)"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Display loading spinner and button text */}
                <button
                    className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline flex items-center justify-center"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? (
                        <>
                            <FaSpinner className="animate-spin mr-2" />  {/* Spinner icon */}
                            Submitting...
                        </>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>

            {/* Show a status message while loading */}
            {loading && (
                <div className="text-blue-500 mt-4">
                    Submitting your request, please wait...
                </div>
            )}
        </div>
    );
};

export default JoinForm;
