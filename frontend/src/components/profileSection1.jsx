// components/profileSection.jsx

import React from 'react';
import profile1 from '../assets/images/profile1.png';

const profileSection = ({ image, text }) => {

    const redirectToWikipedia = () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Yin_Qi_(speed_skater)';
    };

    const linkStyle = {
        cursor: 'pointer',

        color: 'white',
    };

    const hoverStyle = {
        textDecoration: 'underline',
        color: 'darkblue',
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8">

            {/* Image on the left */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
                <img src={profile1} alt="profile main" className="w-3/4 h-auto rounded-lg mx-auto border-8 border-white" /> {/* Added mx-auto to center the image */}
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-1/2 p-8 text-center bg-opacity-75 text-white">
                <p className="text-center text-lg italic">
                    <span className="text-2xl lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                        Meet our head Coach!
                    </span><br /><br />
                    <span
                        className="text-2xl lg:text-4xl font-bold bg-orange-600 font-bold py-2 px-8 rounded-full hover:bg-blue-700"
                        style={linkStyle}
                        onClick={redirectToWikipedia}
                        onMouseEnter={(e) => e.target.style.color = hoverStyle.color}
                        onMouseLeave={(e) => e.target.style.color = linkStyle.color}
                    >
                        Yin Qi
                    </span><br />
                    <br />
                    <span className="text-1xl lg:text-2xl lg:font-bold" >
                        A Regular competitor in various international competitions, including ISU Speed Skating World Cups.

                    </span><br /><br />
                    <span className="text-1xl lg:text-2xl">
                        Twice national champion as of 2020.
                        <br /><br />
                        Competed in the 2019 World Single Distance Speed Skating.
                        <br /><br />

                    </span>
                </p>
            </div>
        </div>
    );
};

export default profileSection;
