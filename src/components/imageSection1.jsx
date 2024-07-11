// components/ImageSection.jsx

import React from 'react';
import image3 from '../assets/image3.jpg';

const ImageSection = ({ image, text }) => {
    return (
        <div className="flex items-center justify-center px-16 ">
            {/* Image on the left */}
            <div className="w-1/2 flex items-center justify-center">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* Text on the right */}
            <div className="w-1/2 p-8 text-center bg-opacity-75 text-white ">
                <p className="text-center text-lg italic">
                    <br />
                    <span className="text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full" >
                        Fun Fact!
                    </span><br /><br />
                    <span className="text-2xl">
                        Long-track speedskating, commonly referred to as "speedskating" focuses on straight-line speed and
                        endurance over long distances and has a faster pace than short-track speed-skating.
                        <br /><br />
                    </span><br />
                </p>
            </div>
        </div>
    );
};

export default ImageSection;
