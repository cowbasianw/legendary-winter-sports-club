// components/imageSection2.jsx

import React from 'react';
import image3 from '../assets/moments/moments4.jpg';

const ImageSection2 = ({ image, text }) => {
    return (
        <div className="flex items-center justify-center px-16 ">
            {/* text on the left */}
            <div className="w-1/2 p-8 text-center bg-opacity-75 text-white ">
                <p className="text-center text-lg italic">
                    <br />
                    <span className="text-3xl font-bold p-4 block rounded-xl" >

                        We invite you to experience skating with us and join in a vision of future championships together!

                    </span><br />
                </p>
            </div>

            {/* image on the right */}

            <div className="w-1/2 flex items-center justify-center">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

        </div>
    );
};

export default ImageSection2;
