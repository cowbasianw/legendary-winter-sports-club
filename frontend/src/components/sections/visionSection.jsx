// components/VisionSection.jsx

import React from 'react';
import image3 from '../../assets/moments/moments4.jpg';

const VisionSection = ({ image, text }) => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 lg:px-16 py-8">
            {/* image on the left on mobile, right on larger screens */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 order-last lg:order-last">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* text on the right on mobile, left on larger screens */}
            <div className="w-full md:w-1/2 p-4 text-center bg-opacity-75 text-white order-first lg:order-first">
                <p className="text-center text-lg italic">
                    <span className="text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                        Our Vision
                    </span>
                    <br />
                    <span className="text-1xl lg:text-2xl font-bold p-4 block rounded-xl">
                        Legendary Winter Sports Club is dedicated to cultivating elite speed skaters.
                        We hope to establish a professional, and well-trained team.
                    </span><br />
                </p>
            </div>
        </div>

    );
};

export default VisionSection;
