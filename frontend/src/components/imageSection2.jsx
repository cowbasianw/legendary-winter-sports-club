// components/imageSection2.jsx

import React from 'react';
import image3 from '../assets/moments/moments4.jpg';

const ImageSection2 = ({ image, text }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8">
            {/* text on the left */}
            <div className="w-full md:w-1/2 p-8 text-center bg-opacity-75 text-white">
                <p className="text-center text-lg italic">
                    <br />
                    <span className="text-1xl lg:text-2xl font-bold p-4 block rounded-xl" >

                        We invite you to experience skating with us and join us to envision a future of championships together!

                    </span><br />
                </p>
            </div>

            {/* image on the right */}

            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

        </div>
    );
};

export default ImageSection2;
