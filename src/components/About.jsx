// src/components/About.jsx
import React from 'react';
import intro1 from '../assets/intro1.jpg';
import backgroundImage from '../assets/intro1.jpg';



const About = () => {
    return (
        <div className="text-center p-10 bg-orange-500">


            {/* introduction Image Section */}
            <div className="relative flex justify-start bg-orange-500">
                <div className=" mx-auto">
                    <img src={intro1} alt="head_coach" className="w-full h-full object-cover" />
                </div>
            </div>

        </div>

    );
};

export default About;