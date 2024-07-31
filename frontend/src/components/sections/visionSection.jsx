// components/VisionSection.jsx

import React from 'react';
import image3 from '../../assets/images/moments/moments4.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';

const VisionSection = ({ image, text }) => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-4 lg:px-16 py-8">
            {/* image on the left on mobile, right on larger screens */}
            <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0 order-last lg:order-last">
                <img src={image3} alt="Encouragement" className="w-full h-auto rounded-lg border-8 border-white" />
            </div>

            {/* text on the right on mobile, left on larger screens */}
            <div className="w-full md:w-1/2 p-4 text-center bg-opacity-75 text-black order-first lg:order-first">
                {language === 'EN' ? (
                    <>
                        <p className="text-center ">
                            <span className="text-lg lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                Our Vision
                            </span>

                            <span className="text-sm lg:text-2xl font-bold p-4 block rounded-xl">

                                Legendary Winter Sports Club is dedicated to cultivating elite speed skaters.
                                We hope to establish a professional, and well-trained team.


                            </span>
                        </p>
                    </>
                ) : (
                    <>

                        <p className="text-center ">
                            <span className="text-lg lg:text-4xl font-bold bg-white text-orange-600 p-4 block rounded-full"  >
                                我们的愿景
                            </span>

                            <span className="text-sm lg:text-2xl font-bold p-4 block rounded-xl">

                                传奇冬季运动俱乐部致力于培养精英速滑选手。
                                我们希望建立一支专业且训练有素的团队。

                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>

    );
};

export default VisionSection;
