import React from 'react';
import image3 from '../../assets/image3.jpg';

const ImageSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-8">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* Text on the right */}
            <div className="w-full md:w-1/2 p-8 text-center bg-opacity-75 text-black">
                <p className="text-center lg:text-lg italic">
                    <span className="text-2xl lg:text-3xl font-bold bg-white text-orange-600 p-4 block rounded-full">
                        Fun Fact!
                    </span>
                    <br /><br />
                    <span className="lg:text-2xl text-1xl">
                        Long-track speedskating, commonly referred to as "speedskating" focuses on straight-line speed and
                        endurance over long distances and has a faster pace than short-track speed-skating.
                        <br /><br />
                        Long track offers opportunities for personal growth and achievement, as skaters strive to improve their performance and their best times for different distances.
                        If you enjoy working on your personal growth as a skater endurance and stamina-wise and enjoy pushing yourself to skate faster and faster,
                        or you’re interested in the power and speed of skating a larger track, consider long track!
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ImageSection;
