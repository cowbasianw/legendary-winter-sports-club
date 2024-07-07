import React from 'react';
import video from '../assets/videos/41.mov';
import content1 from '../assets/content1.jpg';
import joinUs from '../assets/images/Join_Us.png';
import content2 from '../assets/content2.jpg';
import Moments from './moments.jsx';
import ImageSection1 from './imageSection1.jsx';



const HomePage = () => {
    return (

        <div className="flex flex-col min-h-screen">
            {/* Video Background */}
            <div className="relative h-128 overflow-hidden ">
                <video className="w-2/3 mx-auto object-cover border-8 border-black rounded-lg " autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Text Overlay */}
                <div className="absolute top-0 w-full flex items-start text-center justify-center mt-20">
                    <h1 className="text-center text-orange-700 font-bold italic shadow-md" style={{ textShadow: '2px 2px 8px rgba(255, 255, 255, 0.8)' }}>
                        <span className="text-4xl">Welcome to</span><br />
                        <span className="text-6xl">Legendary Winter Sports Club</span>
                    </h1>

                </div>
            </div>

            {/* Intro Section */}
            <div className="relative bg-opacity-75 text-white py-8 flex-grow">
                <div className="max-w-2xl mx-auto px-0">
                    <img src={joinUs} alt="join_us" className="w-full h-full object-cover" />
                </div>
                <div className="max-w-3xl mx-auto px-4">

                    <p className="text-center text-lg italic">
                        <br />
                        <span className="text-2xl">
                            Discover the thrill of winter sports with our world-class facilities and programs.
                        </span><br /><br />
                        <span className="text-4xl font-bold" >
                            Join Legendary, Become Legendary!
                        </span><br /><br />
                        <span className="text-2xl">
                            Legendary Winter Sports club Club is committed to not only entertainment, but also cultivating elite skaters.
                            <br /><br />
                            We welcome you to come experience skating with us and let us plant the seeds of of championship together!
                        </span><br />
                    </p>
                </div>
            </div>

            {/* Image section 1*/}
            <ImageSection1 />

            {/* Content Image Section */}
            <div className="relative py-8 flex justify-start bg-orange-500 bg-opacity-75">
                <div className=" mx-auto">
                    <img src={content2} alt="intro" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="relative py-8 flex justify-start bg-orange-500 bg-opacity-75">
                <div className=" mx-auto">
                    <img src={content1} alt="Content" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Moments section */}
            <Moments />

        </div>
    );
};

export default HomePage;
