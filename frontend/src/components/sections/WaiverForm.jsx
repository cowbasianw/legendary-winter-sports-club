import { useState } from "react";
import axios from 'axios';
import './styles.css';  // Import your custom CSS
import { FaSpinner } from 'react-icons/fa';  // Spinner icon

// Set base URL for Axios requests
axios.defaults.baseURL = 'https://legendary-winter-sport-club-backend.vercel.app/';

export default function WaiverForm() {
    const [formData, setFormData] = useState({
        memberName: "",
        parentName: "",
        signature: "",
        date: "",
        agree: false
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);  // Loading state

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        });
    };

    // ✅ Make handleSubmit async
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation before sending
        if (!formData.agree) {
            alert("You must agree to the waiver before submitting.");
            return;
        }


        setLoading(true);

        try {
            // ✅ Send to your backend API
            const response = await axios.post('/api/waiver', formData);

            console.log('Email sent:', response.data);
            setSubmitted(true);

            // Reset form after submit
            setFormData({
                memberName: "",
                parentName: "",
                signature: "",
                date: "",
                agree: false
            });
        } catch (error) {
            console.error('Error sending email:', error);
            alert("There was an error submitting the form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Trial Session Waiver</h2>

            {/* Waiver text */}
            <div className="border p-4 rounded h-64 overflow-y-auto mb-4">
                <p> I, the undersigned, hereby acknowledge that I have voluntarily applied to participate, or have elected to have my child, or a minor for whom I am responsible (hereinafter “my child”), to participate in the programs/sessions directed and taught by Legendary Winter Sports Club. By enrolling myself or my child, I represent that I, or my child, is physically fit and able to participate in such activities. </p>
                <p className="mt-2"> I am aware that participation in the trail session will involve my/my child’s participation in physical activities, and I hereby acknowledge that such activities can be dangerous. I hereby accept any risks of injury or death associated with such participation. </p>
                <p className="mt-2"> In consideration of the participation in the Legendary Winter Sports Club trail session, I hereby agree that neither I nor my child,
                    nor our respective heirs, guardians, legal representatives, or assigns, will make any claims against, sue, or take legal action against Legendary Winter Sports Club or any of its officers, directors, agents, employees, or contractors for injury or damage resulting from negligence or any other actions, whether caused by an employee, agent, or contractor of Legendary Winter Sports Club, arising from my participation, or my child’s participation, in the programs/sessions. </p>
                <p className="mt-2"> I have carefully read this agreement and fully understand and acknowledge its contents. I am aware that this is the release of liability and a contract between myself and Legendary Winter Sports Club. </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold">Member’s Name:</label>
                    <input
                        type="text"
                        name="memberName"
                        value={formData.memberName}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold">Parent/Guardian’s Name:</label>
                    <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold">Parent/Guardian’s Signature:</label>
                    <input
                        type="text"
                        name="signature"
                        value={formData.signature}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        placeholder="Type your full name as signature"
                        required
                    />
                </div>

                <div>
                    <label className="block font-semibold">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border w-full p-2 rounded"
                        required
                    />
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mr-2"
                        required
                    />
                    <label>I have read and agree to the waiver above.</label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 flex items-center justify-center"
                >
                    {loading ? <FaSpinner className="animate-spin mr-2" /> : "Submit"}
                </button>
            </form>

            {submitted && (
                <p className="mt-4 text-green-600 font-semibold">
                    ✅ Waiver submitted successfully!
                </p>
            )}
        </div>
    );
}
