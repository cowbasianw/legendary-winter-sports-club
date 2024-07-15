import React from 'react';
import video from '../assets/videos/41.mov';
import hottestProgramImage from '../assets/program_images/1v1Private.png';


import Moments from './sections/moments.jsx';
import ImageSection1 from './sections/Longtrack.jsx';
import VisionSection from './sections/visionSection.jsx';
import MissionSection from './sections/missionSection.jsx';

import ProfileSection1 from './sections/profileSection1.jsx';
import { useNavigate } from 'react-router-dom';



const HomePage = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/programs'); // Adjust the path if it's different
    };
    return (

        <div className="flex flex-col min-h-screen">
            {/* Video Background */}
            <div className="relative h-128 overflow-hidden ">
                <video className="w-full mx-auto object-cover  " autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Text Overlay */}
                <div className="absolute top-0 w-full flex items-start text-center justify-center mt-20">
                    <h1 className="text-center text-orange-600 font-bold italic shadow-md" style={{ textShadow: '2px 2px 8px rgba(230, 81, 0, 0.8)' }} >
                        <span className="text-1xl md:text-4xl lg:text-6xl">Welcome to</span><br />
                        <span className="text-3xl md:text-6xl lg:text-8xl">Legendary Winter Sports Club</span>
                    </h1>

                </div>
            </div>

            {/* Intro Section */}
            <div className="relative bg-opacity-75 text-orange-600 py-8 flex-grow">

                <div className="max-w-3xl mx-auto px-4">

                    <p className="text-center text-lg italic">
                        <br />
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-white p-4 block rounded-full">
                            Join Legendary, Become Legendary!
                        </span><br /><br />
                    </p>
                </div>
                <div className="lg:max-w-5xl mx-auto px-4">
                    <p className="text-center text-lg italic">
                        <span className="text-1xl lg:text-2xl font-bold bg-white p-4 block rounded-l-full rounded-r-full mx-auto">
                            Legendary Winter Sports Club is committed to not only teach entertaining sport, but also cultivating elite skaters.
                        </span>  <br /><br />
                    </p>

                </div>
                <div className="lg:max-w-4xl mx-auto px-4">
                    <p className="text-center text-lg italic">
                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-white p-4 block rounded-full">
                            Discover the thrill of winter sports with our world-class programs.
                        </span><br /><br />
                    </p>
                </div>
            </div>
            {/* mission section */}
            < MissionSection />
            <br /><br />
            {/* vision section */}
            < VisionSection />
            <br /><br />
            {/* main profile Section */}
            <ProfileSection1 />
            <br /><br />

            {/* Hottest Program Promotion Section */}
            <div className=" bg-opacity-75 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-center lg:text-lg italic text-orange-600">

                        <span className="text-2xl md:text-3xl lg:text-4xl font-bold bg-white  p-4 block rounded-full" >
                            Our most popular program for personalized training and rapid improvement.
                        </span><br /><br />
                    </p>
                </div>
                <div className="max-w-4xl mx-auto flex items-center justify-center mt-4">
                    <img src={hottestProgramImage} alt="1V1 Private Session" className="w-full lg:w-2/3 h-auto rounded-lg" />
                </div>
                <div className="text-center mt-6 ">
                    <button
                        onClick={handleButtonClick}
                        className="bg-orange-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
                    >
                        Explore Programs
                    </button>
                </div>

            </div>
            <br /><br />
            {/* Image section 1*/}
            <ImageSection1 />

            {/* Moments section */}
            <Moments />

        </div >
    );
};

export default HomePage;
