// components/MissionSection.jsx

import React from 'react';
import Skating from '../../assets/images/Skating.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';


const MissionSection = ({ image, text }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 lg:px-16 py-8">
            {/* image on the left on mobile, right on larger screens */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 order-last lg:order-first">
                <img src={Skating} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* text on the right on mobile, left on larger screens */}
            <div className="w-full md:w-1/2 p-4 text-center bg-opacity-75 text-black order-first lg:order-last">
                {language === 'EN' ? (
                    <>
                        <p className="text-center ">
                            <span className="text-lg lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                Our Mission
                            </span>

                            <span className="text-sm lg:text-2xl font-bold p-4 block rounded-xl">
                                We are committed to providing students with the highest quality training
                                and fostering their passion for skating.


                            </span><br />
                        </p>
                    </>
                ) : (
                    <>

                        <p className="text-center  ">
                            <span className="text-lg lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                我们的使命
                            </span>

                            <span className="text-sm lg:text-2xl font-bold p-4 block rounded-xl">

                                我们致力于为我们学生提供最高质量的培训，培养他们对滑冰的热情。

                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>

    );
};

export default MissionSection;
