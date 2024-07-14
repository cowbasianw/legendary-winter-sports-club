// components/MissionSection.jsx

import React from 'react';
import Skating from '../../assets/images/Skating.jpg';

const MissionSection = ({ image, text }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 lg:px-16 py-8">
            {/* image on the left on mobile, right on larger screens */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 order-last lg:order-first">
                <img src={Skating} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* text on the right on mobile, left on larger screens */}
            <div className="w-full md:w-1/2 p-4 text-center bg-opacity-75 text-white order-first lg:order-last">
                <p className="text-center text-lg italic">
                    <span className="text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                        Our Mission
                    </span>
                    <br />
                    <span className="text-1xl lg:text-2xl font-bold p-4 block rounded-xl">
                        We are committed to providing students with the highest quality training
                        and fostering their passion for skating.


                    </span><br />
                </p>
            </div>
        </div>

    );
};

export default MissionSection;
