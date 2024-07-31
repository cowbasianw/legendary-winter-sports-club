import React, { useEffect } from 'react';
import video from '../assets/videos/41.mov';
import Moments from './sections/moments.jsx';
import ImageSection1 from './sections/Longtrack.jsx';
import VisionSection from './sections/visionSection.jsx';
import MissionSection from './sections/missionSection.jsx';

import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext.jsx';




const HomePage = () => {

    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const { language, toggleLanguage } = useLanguage();
    const handleButtonClick = () => {
        navigate('/programs'); // Adjust the path if it's different
    };
    return (

        <div className="flex flex-col min-h-screen mt-20 md:mt-20 lg:mt-28">

            {/* Video Background */}
            <div className="relative h-128 overflow-hidden">
                <video
                    className="w-full h-full object-cover animation-fadeIn"
                    autoPlay
                    muted
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12 lg:space-y-24">
                    {language === 'EN' ? (
                        <h1 className="text-center text-white font-bold " style={{ textShadow: '2px 2px 8px rgba(230, 81, 0, 0.8)' }}>
                            <span className="text-3xl md:text-6xl lg:text-9xl">"Be Legendary"</span>
                        </h1>
                    ) : (
                        <h1 className="text-center text-white font-bold " style={{ textShadow: '2px 2px 8px rgba(230, 81, 0, 0.8)' }}>
                            <span className="text-3xl md:text-6xl lg:text-9xl">"成为传奇"</span>
                        </h1>
                    )}

                    <div className="mt-1 md:mt-6 lg:mt-24"></div> {/* Responsive spacing */}

                    <button
                        onClick={handleButtonClick}
                        className="bg-orange-400 text-white text-sm lg:text-3xl font-bold py-2 px-4 md:py-4 md:px-8 lg:py-8 lg:px-14 
                        rounded-full hover:bg-white hover:text-orange-600"
                    >
                        {language === 'EN' ? (
                            <>
                                Explore Programs
                            </>
                        ) : (
                            <>
                                探索我们的课程
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Intro Section */}
            <div className="relative bg-opacity-75 bg-orange-400 text-white  py-8 flex-grow">


                <div className="lg:max-w-6xl mx-auto px-4">
                    {language === 'EN' ? (
                        <>
                            <br />
                            <p className="text-center">

                                <span className="text-sm md:text-2xl lg:text-4xl font-bold mx-auto">
                                    “Legendary Winter Sports Club is committed to not only teach entertaining sport, but also cultivating elite skaters.”
                                </span>  <br /><br /><br />
                            </p>
                        </>
                    ) : (
                        <>
                            <br />
                            <p className="text-center">
                                <span className="text-sm md:text-2xl lg:text-4xl font-bold mx-auto">
                                    ”传琦冰雪俱乐部致力于培养精英滑冰运动员，而不仅仅是娱乐。
                                    欢迎大家关注井体验滑冰，让我们一起在孩子心中种下冠军的种子！“
                                </span>  <br /><br /><br />
                            </p>
                        </>
                    )}


                </div>
                <div className="lg:max-w-4xl mx-auto px-4">
                    {language === 'EN' ? (
                        <>
                            <p className="text-center">
                                <span className="text-sm md:text-2xl lg:text-3xl font-bold ">
                                    “Discover the thrill of winter sports with our world-class programs.”
                                </span>
                            </p>
                        </>
                    ) : (

                        <>
                            <p className="text-center">
                                <span className="text-sm md:text-2xl lg:text-4xl font-bold ">
                                    “体验我们世界级项目带来的冬季运动激情。”
                                </span>
                            </p>
                        </>
                    )}

                </div>
            </div>

            <br /><br />
            {/* mission section */}
            < MissionSection />
            <br /><br />
            {/* vision section */}
            < VisionSection />
            <br /><br />

            {/* Moments section */}
            <Moments />

        </div >
    );
};

export default HomePage;
