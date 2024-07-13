import React, { useState } from 'react';
import axios from 'axios';

// Set base URL for Axios requests
axios.defaults.baseURL = 'http://localhost:5001';

const JoinForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
            console.log(formData);
            // Handle error (show error message, etc.)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRefresh = () => {
        setSubmitted(false);
    };

    return (
        <div className="flex flex-col items-center justify-center py-8 lg:px-16">
            <span className=" w-full text-center text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full" >
                Join Us!
            </span>
            <form onSubmit={handleSubmit} className="bg-yellow-100 p-8 w-full rounded-lg shadow-md mt-8">
                {submitted && (
                    <div className="bg-green-200 text-green-700 p-4 mb-4 rounded">
                        Request submitted successfully!

                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Your Name<span className="text-orange-600">*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        Your Email<span className="text-orange-600">*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Your phone number<span className="text-orange-600">*</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="email"

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message us! (optional)
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

                <button
                    className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default JoinForm;
